"use client"

import Background from "@/components/background"
import Header from "@/components/header"
import DecorativeElements from "@/components/decorative-elements"

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Background />
      <Header />
      <DecorativeElements />

      <section className="min-h-screen flex items-center justify-center relative z-20">
        <div className="text-center">
          <h1 className="text-8xl md:text-9xl font-archivo text-foreground mb-4 grainy-texture">EXPERIENCE</h1>
          <p className="text-secondary font-inter text-lg">Professional journey coming soon...</p>
        </div>
      </section>
    </main>
  )
}
