"use client"

import { useState, useEffect } from "react"
import Background from "@/components/background"
import PreLoader from "@/components/preloader"
import Header from "@/components/header"
import NameFrame from "@/components/name-frame"
import DecorativeElements from "@/components/decorative-elements"

// Import section components
import HeroSection from "@/components/sections/HeroSection"
import WorkSection from "@/components/sections/WorkSection"
import AboutSection from "@/components/sections/AboutSection"
import ExperienceSection from "@/components/sections/ExperienceSection"
import ContactSection from "@/components/sections/ContactSection"

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const section = Math.floor(scrollPosition / windowHeight)
      setCurrentSection(section)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="text-foreground">
      <Background /> {/* This component will sit at z-0 */}
      <PreLoader /> {/* This has a high z-index (z-50) */}
      <Header /> {/* This has a high z-index (z-40) */}
      <NameFrame />
      <DecorativeElements /> {/* This has a high z-index (z-30) */}

      {/* This container holds your scrollable content */}
      <div className="snap-y snap-proximity h-screen overflow-y-scroll scroll-smooth">
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </main>
  )
}
