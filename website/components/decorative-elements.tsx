"use client"

import { useEffect, useState } from "react"

export default function DecorativeElements() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <>
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

      <div className="absolute top-30 right-[8.33%] z-30 text-foreground font-mono text-lg font-bold">{currentYear}</div>
      <div className="absolute top-30 left-[8.33%] z-30 text-foreground font-mono text-lg font-bold">EST. 2025</div>

      {/* Bottom corner elements */}
      <div className="fixed bottom-8 left-35 z-30 text-foreground font-mono text-sm">
        <div>BEN CAHOON</div>
        <div>CENTRAL, SC</div>
        <div className="text-accent">AVAILABLE</div>
      </div>

      <div className="fixed bottom-8 right-35 z-30 text-foreground font-mono text-sm text-right">
        <a 
          href="https://github.com/bencahoon01" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block hover:text-accent transition-colors duration-300 cursor-pointer"
        >
          GITHUB
        </a>
        <a 
          href="https://linkedin.com/in/bcahoon" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block hover:text-accent transition-colors duration-300 cursor-pointer"
        >
          LINKEDIN
        </a>
        <div className="text-secondary">UPDATED {currentYear}</div>
      </div>
    </>
  )
}