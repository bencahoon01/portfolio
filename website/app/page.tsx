"use client"

import { useState, useEffect } from "react"
import Background from "@/components/background"
import PreLoader from "@/components/preloader"
import Header from "@/components/header"
import NameFrame from "@/components/name-frame"
import DecorativeElements from "@/components/decorative-elements"
import ScrollTracker from "@/components/ScrollTracker" // New import

// Import section components
import HeroSection from "@/components/sections/HeroSection"
import WorkSection from "@/components/sections/WorkSection"
import AboutSection from "@/components/sections/AboutSection"
import ExperienceSection from "@/components/sections/ExperienceSection"
import ContactSection from "@/components/sections/ContactSection"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("Initializing...")

  useEffect(() => {
    let progressTimer: NodeJS.Timeout | undefined
    let loadedResources = 0
    let totalResources = 0

    const loadingStages = [
      { text: "Initializing...", progress: 0 },
      { text: "Loading assets...", progress: 20 },
      { text: "Preparing components...", progress: 40 },
      { text: "Loading fonts...", progress: 60 },
      { text: "Finalizing...", progress: 80 },
      { text: "Ready!", progress: 100 }
    ]

    let currentStage = 0

    const updateLoadingStage = () => {
      if (currentStage < loadingStages.length) {
        const stage = loadingStages[currentStage]
        setLoadingText(stage.text)
        setProgress(stage.progress)
        currentStage++
      }
    }

    const checkResourcesLoaded = () => {
      // Count total resources to load
      const images = document.querySelectorAll('img')
      const scripts = document.querySelectorAll('script[src]')
      const stylesheets = document.querySelectorAll('link[rel="stylesheet"]')
      
      totalResources = images.length + scripts.length + stylesheets.length

      // If no external resources, simulate loading stages
      if (totalResources === 0) {
        const stageTimer = setInterval(() => {
          updateLoadingStage()
          if (currentStage >= loadingStages.length) {
            clearInterval(stageTimer)
            setTimeout(() => setLoading(false), 300)
          }
        }, 500)
        
        return () => clearInterval(stageTimer)
      }

      // Monitor resource loading
      const handleResourceLoad = () => {
        loadedResources++
        const resourceProgress = Math.min((loadedResources / totalResources) * 80, 80)
        setProgress(resourceProgress)
        
        if (loadedResources >= totalResources) {
          setLoadingText("Finalizing...")
          setProgress(90)
          
          setTimeout(() => {
            setProgress(100)
            setLoadingText("Ready!")
            setTimeout(() => setLoading(false), 500)
          }, 300)
        }
      }

      // Add load event listeners
      images.forEach(img => {
        if (img.complete) {
          handleResourceLoad()
        } else {
          img.addEventListener('load', handleResourceLoad)
          img.addEventListener('error', handleResourceLoad) // Count errors as "loaded" to prevent hanging
        }
      })

      scripts.forEach(script => {
        script.addEventListener('load', handleResourceLoad)
        script.addEventListener('error', handleResourceLoad)
      })

      stylesheets.forEach(link => {
        link.addEventListener('load', handleResourceLoad)
        link.addEventListener('error', handleResourceLoad)
      })
    }

    // Start with document ready check
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        setLoadingText("Loading assets...")
        setProgress(20)
        setTimeout(checkResourcesLoaded, 100)
      })
    } else {
      setLoadingText("Loading assets...")
      setProgress(20)
      setTimeout(checkResourcesLoaded, 100)
    }

    // Fallback timeout to prevent infinite loading
    const fallbackTimer = setTimeout(() => {
      setProgress(100)
      setLoadingText("Ready!")
      setTimeout(() => setLoading(false), 500)
    }, 8000) // 8 second maximum

    return () => {
      if (progressTimer) clearTimeout(progressTimer)
      clearTimeout(fallbackTimer)
    }
  }, [])

  return (
    <main className="text-foreground">
      {loading ? (
        <PreLoader progress={progress} loadingText={loadingText} />
      ) : (
        <>
          <Background />
          <Header />
          <NameFrame />
          <DecorativeElements />
          <ScrollTracker />

          <div className="snap-y snap-proximity h-screen overflow-y-scroll scroll-smooth">
            <HeroSection />
            <AboutSection />
            <WorkSection />
            <ExperienceSection />
            <ContactSection />
          </div>
        </>
      )}
    </main>
  )
}