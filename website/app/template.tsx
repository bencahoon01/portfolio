"use client"

import { motion, AnimatePresence, LazyMotion, domAnimation } from "framer-motion"
import { usePathname } from "next/navigation"

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </LazyMotion>
  )
}

