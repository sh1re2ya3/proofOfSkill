'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { fadeVariants, DURATION_FADE, EASING_OUT } from '@/lib/motion'

export default function PageTransition({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={fadeVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: DURATION_FADE,
          ease: EASING_OUT,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
