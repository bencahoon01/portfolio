"use client"

export default function DecorativeElements() {
  return (
    <>
      {/* Top row - evenly spaced across full width */}
      <div className="fixed top-30 left-[8.33%] z-30 text-foreground font-mono text-lg font-bold">2025</div>
      <div className="fixed top-35 left-[25%] z-30 text-foreground text-3xl">♦</div>
      <div className="fixed top-35 left-1/2 z-30 text-foreground text-xl">✕</div>
      <div className="fixed top-35 right-[25%] z-30 text-foreground text-3xl">♦</div>
      <div className="fixed top-30 right-[8.33%] z-30 text-foreground font-mono text-lg font-bold">20XX</div>

      {/* Bottom row - mirroring top spacing */}
      <div className="fixed bottom-33 left-[25%] z-30 text-foreground text-3xl">♦</div>
      <div className="fixed bottom-33 right-[25%] z-30 text-foreground text-3xl">♦</div>

      {/* Stacked x x x on right side */}
      <div className="fixed top-1/4 right-35 z-30 flex flex-col gap-2 text-foreground font-mono text-lg">
        <span>✕</span>
        <span>✕</span>
        <span>✕</span>
      </div>

      {/* Stacked x x x on left side */}
      <div className="fixed bottom-1/4 left-35 z-30 flex flex-col gap-2 text-foreground font-mono text-lg">
        <span>✕</span>
        <span>✕</span>
        <span>✕</span>
      </div>


      {/* Bottom corner elements */}
      <div className="fixed bottom-8 left-35 z-30 text-foreground font-mono text-sm">
        <div>BEN CAHOON</div>
        <div>CENTRAL, SC</div>
        <div className="text-accent">AVAILABLE</div>
      </div>

      <div className="fixed bottom-8 right-35 z-30 text-foreground font-mono text-sm text-right">
        <div>GITHUB</div>
        <div>LINKEDIN</div>
        <div className="text-secondary">UPDATED 2025</div>
      </div>
    </>
  )
}
