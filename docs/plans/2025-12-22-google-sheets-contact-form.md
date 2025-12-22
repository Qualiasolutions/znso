# Google Sheets Contact Form Integration Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Connect the ZNSO contact form to Google Sheets so form submissions are automatically logged.

**Architecture:** Create a Google Apps Script web app that receives POST requests and appends data to the spreadsheet. Modify the contact form to submit via fetch API to both FormSubmit (email) and Google Sheets (logging).

**Tech Stack:** Google Apps Script, Next.js API route (optional proxy), React form handling

---

## Task 1: Create Google Apps Script Web App

**Files:**
- Create: Google Apps Script in Google Sheets (external)

**Step 1: Open Google Sheets and access Apps Script**

1. Open: https://docs.google.com/spreadsheets/d/1EzsrIJiOuRoFUZV8J5NN-Xjx1KaZKzpzqMhsp3XJ5tg/edit
2. Go to Extensions > Apps Script

**Step 2: Create the Apps Script code**

Replace the default `Code.gs` content with:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Department',
        'First Name',
        'Family Name',
        'Contact Number',
        'Area',
        'Project Type',
        'Project Status',
        'Work Type',
        'Plot Size',
        'Has Technical Design'
      ]);
    }

    // Append the form data
    sheet.appendRow([
      new Date().toISOString(),
      data.department || '',
      data.firstName || '',
      data.familyName || '',
      data.contactNumber || '',
      data.area || '',
      data.projectType || '',
      data.projectStatus || '',
      data.workType || '',
      data.plotSize || '',
      data.hasTechnicalDesign || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'OK', message: 'ZNSO Contact Form API' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

**Step 3: Deploy as Web App**

1. Click "Deploy" > "New deployment"
2. Click the gear icon next to "Select type" > choose "Web app"
3. Set:
   - Description: "ZNSO Contact Form"
   - Execute as: "Me"
   - Who has access: "Anyone"
4. Click "Deploy"
5. Authorize when prompted
6. Copy the Web App URL (looks like: `https://script.google.com/macros/s/xxx/exec`)

**Step 4: Test the deployment**

Run in terminal or browser console:
```bash
curl -X POST "YOUR_WEB_APP_URL" \
  -H "Content-Type: application/json" \
  -d '{"department":"test","firstName":"Test","familyName":"User"}'
```

Expected: `{"success":true}` and new row in spreadsheet

---

## Task 2: Create Next.js API Route for Proxy

**Files:**
- Create: `src/app/api/contact/route.ts`

**Step 1: Create the API route file**

```typescript
import { NextRequest, NextResponse } from 'next/server';

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Send to Google Sheets
    if (GOOGLE_SCRIPT_URL) {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
```

**Step 2: Add environment variable**

Add to `.env.local` (create if doesn't exist):
```
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

**Step 3: Verify the file was created**

Run: `ls -la src/app/api/contact/`
Expected: `route.ts` file exists

---

## Task 3: Update ContactForm to Submit to Google Sheets

**Files:**
- Modify: `src/components/contact/ContactForm.tsx`

**Step 1: Add form submission handler**

Add after the existing state declarations (around line 31):

```typescript
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitError, setSubmitError] = useState<string | null>(null);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const formData = {
        department,
        firstName: (e.currentTarget.elements.namedItem('First Name') as HTMLInputElement)?.value,
        familyName: (e.currentTarget.elements.namedItem('Family Name') as HTMLInputElement)?.value,
        contactNumber: (e.currentTarget.elements.namedItem('Contact Number') as HTMLInputElement)?.value,
        area: (e.currentTarget.elements.namedItem('Area') as HTMLInputElement)?.value,
        projectType,
        projectStatus: residentialStatus,
        workType: existingType,
        plotSize,
        hasTechnicalDesign,
    };

    try {
        // Submit to Google Sheets via API route
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Failed to submit');
        }

        // Submit to FormSubmit for email (the form will handle this)
        e.currentTarget.submit();
    } catch (error) {
        setSubmitError('Failed to submit form. Please try again.');
        setIsSubmitting(false);
    }
};
```

**Step 2: Update form element**

Replace the `<form>` opening tag (around line 111-115):

From:
```tsx
<form
    action="https://formsubmit.co/info@znsoarchitects.com"
    method="POST"
    encType="multipart/form-data"
    className="space-y-8"
>
```

To:
```tsx
<form
    action="https://formsubmit.co/info@znsoarchitects.com"
    method="POST"
    encType="multipart/form-data"
    className="space-y-8"
    onSubmit={handleSubmit}
>
```

**Step 3: Update submit buttons to show loading state**

Replace both submit buttons (around lines 378 and 566):

From:
```tsx
<Button type="submit" className="w-full md:w-auto mt-4">Submit Request</Button>
```

To:
```tsx
<Button type="submit" disabled={isSubmitting} className="w-full md:w-auto mt-4">
    {isSubmitting ? 'Submitting...' : 'Submit Request'}
</Button>
```

**Step 4: Add error display after the form close tag**

Add before the closing `</motion.div>` of the form section:

```tsx
{submitError && (
    <p className="text-red-400 text-sm mt-4">{submitError}</p>
)}
```

**Step 5: Run the dev server to verify changes**

Run: `cd Desktop/projects/znso && npm run dev`
Expected: Server starts without errors

---

## Task 4: Test the Integration

**Step 1: Open the contact page**

Navigate to: http://localhost:3000/contact

**Step 2: Fill out a test submission**

1. Select "Architectural" department
2. Fill in: First Name, Family Name, Contact Number, Area
3. Select "Commercial" project type
4. Select a plot size
5. Click "Submit Request"

**Step 3: Verify data in Google Sheets**

Open: https://docs.google.com/spreadsheets/d/1EzsrIJiOuRoFUZV8J5NN-Xjx1KaZKzpzqMhsp3XJ5tg/edit
Expected: New row with submitted data

**Step 4: Commit the changes**

```bash
cd Desktop/projects/znso
git add src/app/api/contact/route.ts src/components/contact/ContactForm.tsx .env.local
git commit -m "feat: add Google Sheets integration for contact form submissions"
```

---

## Summary of Files Changed

| File | Action | Purpose |
|------|--------|---------|
| Google Apps Script | Create (external) | Receives POST, writes to spreadsheet |
| `src/app/api/contact/route.ts` | Create | Proxy to avoid CORS, keeps script URL private |
| `src/components/contact/ContactForm.tsx` | Modify | Add fetch to API before FormSubmit |
| `.env.local` | Create/Modify | Store Google Script URL |

## Environment Variables Needed

```
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

## Vercel Deployment Note

After local testing works, add `GOOGLE_SCRIPT_URL` to Vercel environment variables:
1. Go to Vercel dashboard > ZNSO project > Settings > Environment Variables
2. Add `GOOGLE_SCRIPT_URL` with the Apps Script web app URL
