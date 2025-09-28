"use client"

import Image from 'next/image'

export default function HeroDecorativeElements() {
  return (
    <>
      {/* Top row - evenly spaced across full width */}
      
      <div className="absolute top-35 left-[25%] z-30">
        <Image src="/diamond.svg" alt="Diamond" width={24} height={24} className="brightness-0 invert" />
      </div>
      <div className="absolute top-35 left-1/2 z-30 text-foreground text-xl">✕</div>
      <div className="absolute top-35 right-[25%] z-30">
        <Image src="/diamond.svg" alt="Diamond" width={24} height={24} className="brightness-0 invert" />
      </div>

      {/* Bottom row - mirroring top spacing */}
      <div className="absolute bottom-33 left-[25%] z-30">
        <Image src="/diamond.svg" alt="Diamond" width={24} height={24} className="brightness-0 invert" />
      </div>
      <div className="absolute bottom-33 right-[25%] z-30">
        <Image src="/diamond.svg" alt="Diamond" width={24} height={24} className="brightness-0 invert" />
      </div>
    </>
  )
}