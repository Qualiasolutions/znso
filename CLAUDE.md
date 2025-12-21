# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
npm start        # Start production server
```

## Architecture

This is a Next.js 16 marketing website for ZNSO Architects, an architectural firm in Kuwait. Uses React 19 with the React Compiler enabled, Tailwind CSS v4, and Framer Motion for animations.

### Project Structure

- `src/app/` - Next.js App Router pages (home, about, services, portfolio, contact, case-studies)
- `src/components/` - React components organized by page/feature
  - `home/` - Homepage sections (Hero, Services, FeaturedProjects, etc.)
  - `layout/` - Navbar, Footer
  - `portfolio/` - PortfolioGrid, ProjectModal
  - `ui/` - Reusable components (Modal, Button, ParallaxSection)
  - `about/`, `services/`, `contact/` - Page-specific components
- `src/lib/` - Utilities and data
  - `projects.ts` - Project data with images and metadata
  - `utils.ts` - `cn()` helper for Tailwind class merging

### Key Patterns

- **Client Components**: Most interactive components use `'use client'` directive for Framer Motion animations
- **HomeClient Pattern**: The homepage uses a client wrapper (`HomeClient.tsx`) to manage modal state while page.tsx remains a server component
- **Project Data**: Projects are typed with the `Project` interface and stored in `src/lib/projects.ts`. Helper functions: `getFeaturedProjects()`, `getProjectsByCategory()`, `getProjectById()`
- **Path Alias**: Use `@/` for imports from `src/` directory

### Navbar (`src/components/layout/Navbar.tsx`)

- Fixed position header with smooth fade-in animation
- Text-only "ZNSO" logo (no image)
- Desktop: Nav links with animated underline indicator using Framer Motion `layoutId`
- Mobile: Animated hamburger icon (transforms to X), full-screen overlay menu with staggered link animations
- Uses `AnimatePresence` for smooth mobile menu open/close transitions

### Hero Section (`src/components/home/Hero.tsx`)

- Fits exactly within 100vh (`h-screen`) - no scrolling required to see full hero
- Rotating background images with crossfade transitions
- Left side: Text content with headline, tagline, and CTA buttons
- Right side (desktop): Featured project showcase with floating accent cards
- Progress indicators for background image rotation

## Deployment

- **Hosting**: Vercel (auto-deploys on push to main)
- **Repository**: https://github.com/Qualiasolutions/znso.git
- **Live URL**: https://znso-website.vercel.app

### Styling

- Dark theme with black background (`bg-black`) and white text
- Tailwind CSS v4 with `@tailwindcss/postcss`
- Class merging via `cn()` utility (clsx + tailwind-merge)
- Animations use Framer Motion with `motion` components and `AnimatePresence` for exit animations
