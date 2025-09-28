"use client"

export default function DecorativeElements() {
  return (
    <>
      {/* Top row decorative elements */}
      <div className="fixed top-32 left-1/4 z-30 text-foreground text-2xl">♦</div>
      <div className="fixed top-40 right-1/3 z-30 text-foreground text-xl">✕</div>
      <div className="fixed top-28 right-1/4 z-30 text-foreground text-2xl">♦</div>

      {/* Middle row decorative elements */}
      <div className="fixed top-1/2 left-16 z-30 text-foreground text-xl">✕</div>
      <div className="fixed top-1/2 right-16 z-30 text-foreground text-xl">✕</div>

      {/* Bottom row decorative elements */}
      <div className="fixed bottom-32 left-1/3 z-30 text-foreground text-2xl">♦</div>
      <div className="fixed bottom-40 right-1/4 z-30 text-foreground text-xl">✕</div>
      <div className="fixed bottom-28 left-1/4 z-30 text-foreground text-2xl">♦</div>

      {/* Date elements in corners */}
      <div className="fixed top-32 left-8 z-30 text-foreground font-mono text-lg font-bold">2025</div>
      <div className="fixed top-32 right-8 z-30 text-foreground font-mono text-lg font-bold">20XX</div>

      {/* Stacked x x x on right side */}
      <div className="fixed top-1/2 right-8 z-30 flex flex-col gap-2 text-foreground font-mono text-lg">
        <span>✕</span>
        <span>✕</span>
        <span>✕</span>
      </div>

      {/* Bottom corner elements */}
      <div className="fixed bottom-8 left-8 z-30 text-foreground font-mono text-sm">
        <div>BEN CAHOON</div>
        <div>CENTRAL, SC</div>
        <div className="text-accent">AVAILABLE</div>
      </div>

      <div className="fixed bottom-8 right-8 z-30 text-foreground font-mono text-sm">
        <div>GITHUB</div>
        <div>LINKEDIN</div>
        <div className="text-secondary">UPDATED 2025</div>
      </div>
    </>
  )
}
