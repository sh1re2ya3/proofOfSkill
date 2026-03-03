import { Variants } from 'framer-motion'

// Duration constants (in seconds)
export const DURATION_FADE = 0.25
export const DURATION_SLIDE = 0.4

// Easing function: cubic-bezier ease-out
export const EASING_OUT = [0.16, 1, 0.3, 1] as const

// Helper: compute transform for slide direction
const getTransform = (
  direction: 'left' | 'right' | 'down' | 'up',
  phase: 'in' | 'out'
): Record<string, number> => {
  const transforms = {
    left: { in: { x: -100 }, out: { x: 100 } },
    right: { in: { x: 100 }, out: { x: -100 } },
    down: { in: { y: -100 }, out: { y: 100 } },
    up: { in: { y: 100 }, out: { y: -100 } },
  }
  return transforms[direction][phase]
}

// Slide variants: direction-based entry/exit
export const slideVariants = (
  direction: 'left' | 'right' | 'down' | 'up'
): Variants => ({
  initial: {
    opacity: 0,
    ...getTransform(direction, 'in'),
  },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
  },
  exit: {
    opacity: 0,
    ...getTransform(direction, 'out'),
  },
})

// Fade variants: simple opacity transition
export const fadeVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}
