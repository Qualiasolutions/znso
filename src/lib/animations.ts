// Shared animation constants for consistent motion across the site
export const ANIMATION = {
  // Durations
  duration: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.6,
    page: 0.8,
  },

  // Easing curves
  ease: {
    out: [0.16, 1, 0.3, 1] as const, // smooth deceleration
    inOut: [0.4, 0, 0.2, 1] as const, // standard
    spring: { type: 'spring', stiffness: 300, damping: 30 } as const,
  },

  // Stagger delays for lists
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
  },

  // Common initial states
  initial: {
    fadeUp: { opacity: 0, y: 20 },
    fadeDown: { opacity: 0, y: -20 },
    fadeLeft: { opacity: 0, x: -20 },
    fadeRight: { opacity: 0, x: 20 },
    scale: { opacity: 0, scale: 0.95 },
    blur: { opacity: 0, filter: 'blur(8px)' },
  },

  // Common animate states
  animate: {
    visible: { opacity: 1, y: 0, x: 0, scale: 1, filter: 'blur(0px)' },
  },
} as const;

// Viewport trigger options
export const VIEWPORT = {
  once: true,
  margin: '-100px',
  amount: 0.1,
} as const;

// Check for reduced motion preference
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
