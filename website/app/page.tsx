"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import dynamic from 'next/dynamic'
import Background from "@/components/background"
import PreLoader from "@/components/preloader"
import Header from "@/components/header"
import NameFrame from "@/components/name-frame"
import DecorativeElements from "@/components/decorative-elements"
import ScrollTracker from "@/components/ScrollTracker" 
import ScrollRestorer from "@/components/ScrollRestorer" 

const HeroSection = dynamic(() => import('@/components/sections/HeroSection'), {
  ssr: false,
  loading: () => <div className="snap-start h-screen w-full bg-background" />,
})

import WorkSection from "@/components/sections/WorkSection"
import AboutSection from "@/components/sections/AboutSection"
import ExperienceSection from "@/components/sections/ExperienceSection"
import ContactSection from "@/components/sections/ContactSection"

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("Loading...")

  useEffect(() => {
    // Skip preloader if we've already loaded the page in this session
    if (sessionStorage.getItem('preloader-done')) {
      setLoading(false);
    }
    // If preloader is skipped, do nothing.
    if (!loading) return;

    // This effect now manages a staged loading animation.
    const stages = [
      { progress: 0, text: "Booting systems...", delay: 0 },
      { progress: 20, text: "Loading assets...", delay: 500 },
      { progress: 50, text: "Loading 3D scene...", delay: 1500 },
      { progress: 90, text: "Finalizing...", delay: 1000 },
      { progress: 100, text: "Ready", delay: 500 },
    ]

    let timeoutId: NodeJS.Timeout

    const runStage = (stageIndex: number) => {
      if (stageIndex >= stages.length) {
        sessionStorage.setItem('preloader-done', 'true');
        setLoading(false)
        return
      }

      const stage = stages[stageIndex]
      timeoutId = setTimeout(() => {
        setProgress(stage.progress)
        setLoadingText(stage.text)
        runStage(stageIndex + 1)
      }, stage.delay)
    }

    runStage(0)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [loading]);

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
          <ScrollRestorer />
          <div className="lg:snap-y lg:snap-proximity lg:h-screen overflow-y-scroll scroll-smooth">
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