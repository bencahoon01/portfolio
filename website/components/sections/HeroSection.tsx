"use client"

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion' // Import motion
import AsciiRenderer from '@/components/AsciiRenderer'
import InteractiveModel from '@/components/InteractiveModel'
import ThreeErrorBoundary from '@/components/ThreeErrorBoundary'
import ScrollIndicator from '@/components/ScrollIndicator'
import HeroDecorativeElements from '@/components/HeroDecorativeElements'

// Fallback component for when 3D fails to load
const ASCIIFallback = () => (
  <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-background/80 to-muted/20">
    <div className="absolute inset-0 opacity-20">
      <pre className="text-xs font-mono text-foreground/40 leading-none select-none whitespace-pre overflow-hidden">
        {Array.from({ length: 50 }, (_, i) =>
          Array.from({ length: 100 }, () =>
            Math.random() > 0.7 ? ['*', '.', '-', '+', '='][Math.floor(Math.random() * 5)] : ' '
          ).join('') + '\n'
        ).join('')}
      </pre>
    </div>
  </div>
)

export default function HeroSection() {
  return (
    
    <section id="hero" className="snap-start h-screen relative z-20 bg-background overflow-hidden fade-out-bottom" style={{ pointerEvents: 'auto' }}>
      {/* ASCII Canvas Background */}
      <ThreeErrorBoundary fallback={<ASCIIFallback />}>
        <div className="absolute inset-0 z-0" style={{ pointerEvents: 'auto' }}>
          <Suspense fallback={<ASCIIFallback />}>
            <Canvas
              camera={{ position: [0, 0, 10], fov: 60 }}
              dpr={[1, 2]}
              performance={{ min: 0.5 }}
              style={{ pointerEvents: 'auto', width: '100%', height: '100%' }}
              onPointerMove={() => {}}
            >
              <ambientLight intensity={0.3} />
              <directionalLight position={[5, 5, 5]} intensity={0.5} />
              <InteractiveModel />
              <AsciiRenderer />
            </Canvas>
          </Suspense>
        </div>
      </ThreeErrorBoundary>

      {/* Hero Content Overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-screen -mt-16" style={{ pointerEvents: 'none' }}>
        <div className="flex flex-col items-center w-full max-w-4xl">
          {/* Symmetrical Name Container */}
          <div className="relative w-full h-96 md:h-[28rem]">
            {/* BEN - positioned symmetrically left of center */}
            <motion.div 
              className="absolute right-[75%] top-25" 
              style={{ pointerEvents: 'auto' }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-foreground leading-none tracking-tight grainy-texture bg-background/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                BEN
              </h1>
            </motion.div>

            {/* CAHOON - positioned symmetrically right of center */}
            <motion.div 
              className="absolute left-[73%] bottom-0" 
              style={{ pointerEvents: 'auto' }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-foreground leading-none tracking-tight grainy-texture bg-background/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                CAHOON
              </h1>
            </motion.div>
          </div>

          {/* Title - positioned with a margin below the names */}
          <motion.div 
            className="mt-16" 
            style={{ pointerEvents: 'auto' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <p className="text-secondary font-mono text-sm md:text-base typewriter bg-background/20 backdrop-blur-sm px-3 py-1 rounded">
              STUDENT & FULL-STACK DEVELOPER
            </p>
          </motion.div>
        </div>
      </div>

      {/* Hero Decorative Elements */}
      <HeroDecorativeElements />

      {/* Scroll Down Indicator */}
      <ScrollIndicator />
    </section>
  )
}