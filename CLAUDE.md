# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Tech Stack

- **Framework**: Next.js 16 with App Router and React Compiler enabled
- **React**: 19.2 with React 19 features
- **Styling**: Tailwind CSS v4 (uses `@import "tailwindcss"` syntax, `@theme inline` for config)
- **Animations**: Framer Motion for scroll-based parallax and component animations
- **UI**: Radix UI primitives, Lucide icons, custom glassmorphism components

## Architecture

### Key Patterns

**Client/Server Split**: Pages that need interactivity use a client wrapper pattern:
- `page.tsx` (server component) renders `<SectionClient />` (client component)
- Example: `app/page.tsx` → `components/home/HomeClient.tsx`

**Parallax Sections**: Use `ParallaxSection` wrapper with `velocity` prop for scroll effects:
```tsx
<ParallaxSection velocity={30} className="z-10 bg-[#fdfdfd]">
  <ComponentContent />
</ParallaxSection>
```

**Modal System**: `HomeClient` manages modal state via `activeModal` string ID, passes `onOpenModal` callbacks to child components. `Modal` uses React Portal (`createPortal`) to render outside the component tree.

**Animation Pattern**: Components use `motion.div` with `whileInView` for scroll-triggered animations:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
/>
```

**Static Data**: Project data, modal content, and filter options are embedded directly in components (e.g., `PortfolioGrid.tsx` contains project array, `HomeClient.tsx` contains modal content).

**Filter Pattern**: Used in `PortfolioGrid` - button-based filters with `activeFilter` state, `AnimatePresence` for smooth item transitions.

**Form Submission**: Contact form uses FormSubmit.co service (`action="https://formsubmit.co/..."`) with hidden fields for configuration (`_subject`, `_next`, `_captcha`, `_template`). Button selections stored in hidden inputs.

### Styling Conventions

- Dark theme with glassmorphism: `bg-white/5 backdrop-blur-md border border-white/10`
- Rounded corners: `rounded-[28px]` or `rounded-[32px]` for cards
- Typography: Uppercase tracking for labels (`text-xs uppercase tracking-[0.2em]`)
- Image assets: CSS variables in `globals.css` (e.g., `--znso-hero-facade`)
- Path alias: `@/*` maps to `./src/*`

### Button Variants

The `Button` component supports: `primary` (glassmorphism), `outline`, `ghost`
- Uses `asChild` prop with Radix Slot for Link composition
