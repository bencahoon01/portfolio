"use client"


const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''


export default function HeroDecorativeElements() {
  return (
    <>
      {/* Top row - evenly spaced across full width */}
      
      <div className="hidden lg:block absolute top-35 left-[25%] z-30">
        <img src={`${basePath}/diamond.svg`} alt="Diamond" width={24} height={24} className="brightness-0 invert" />
      </div>
      <div className="hidden lg:block absolute top-35 left-1/2 z-30 text-foreground text-xl">✕</div>
      <div className="hidden lg:block absolute top-35 right-[25%] z-30">
        <img src={`${basePath}/diamond.svg`} alt="Diamond" width={24} height={24} className="brightness-0 invert" />
      </div>

      {/* Bottom row - mirroring top spacing */}
      <div className="hidden lg:block absolute bottom-33 left-[25%] z-30">
        <img src={`${basePath}/diamond.svg`} alt="Diamond" width={24} height={24} className="brightness-0 invert" />
      </div>
      <div className="hidden lg:block absolute bottom-33 right-[25%] z-30">
        <img src={`${basePath}/diamond.svg`} alt="Diamond" width={24} height={24} className="brightness-0 invert" />
      </div>
    </>
  )
}