"use client"

import HeroContent from "@/components/hero-content"

export default function HeroSection() {
  return (
    <section id="hero" className="snap-start h-screen flex items-center justify-center relative z-20">
      <HeroContent />
    </section>
  )
}