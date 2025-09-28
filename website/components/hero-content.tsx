"use client"

export default function HeroContent() {
  return (
    <div className="flex items-center justify-center min-h-screen relative z-20">
      <div className="relative w-full max-w-6xl h-96 flex items-center justify-center">
        <div className="absolute top-0 left-0">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-foreground leading-none tracking-tight grainy-texture">
            BEN
          </h1>
        </div>

        <div className="absolute bottom-0 right-0">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-foreground leading-none tracking-tight grainy-texture">
            CAHOON
          </h1>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-24 h-24 md:w-32 md:h-32 border-2 border-foreground rounded-full flex items-center justify-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-foreground rounded-full flex items-center justify-center">
              <span className="text-background font-black text-xl md:text-2xl">BC</span>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
          <p className="text-secondary font-mono text-sm md:text-base typewriter">FULL-STACK DEVELOPER</p>
        </div>
      </div>
    </div>
  )
}
