"use client"

export default function HeroDecorativeElements() {
  return (
    <>
      {/* Top row - evenly spaced across full width */}
      
      <div className="absolute top-35 left-[25%] z-30 text-foreground text-3xl">♦</div>
      <div className="absolute top-35 left-1/2 z-30 text-foreground text-xl">✕</div>
      <div className="absolute top-35 right-[25%] z-30 text-foreground text-3xl">♦</div>

      {/* Bottom row - mirroring top spacing */}
      <div className="absolute bottom-33 left-[25%] z-30 text-foreground text-3xl">♦</div>
      <div className="absolute bottom-33 right-[25%] z-30 text-foreground text-3xl">♦</div>
    </>
  )
}