"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Background from "@/components/background"
import Header from "@/components/header"
import DecorativeElements from "@/components/decorative-elements"

const projects = [
  {
    id: "neural-interface",
    title: "NEURAL INTERFACE",
    subtitle: "AI/ML, BRAIN-COMPUTER INTERFACE",
    image: "/futuristic-neural-interface-brain-computer-connect.jpg",
    description: "Revolutionary brain-computer interface enabling direct neural control of digital systems.",
    tech: ["React", "TensorFlow", "WebGL", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "quantum-dashboard",
    title: "QUANTUM DASHBOARD",
    subtitle: "QUANTUM COMPUTING, DATA VISUALIZATION",
    image: "/quantum-computing-dashboard-holographic-interface.jpg",
    description: "Advanced quantum computing visualization platform for complex data analysis.",
    tech: ["Next.js", "Three.js", "Python", "Quantum SDK"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "cyber-security",
    title: "CYBER FORTRESS",
    subtitle: "CYBERSECURITY, BLOCKCHAIN",
    image: "/cybersecurity-fortress-digital-protection-shield.jpg",
    description: "Next-generation cybersecurity platform with blockchain-based threat detection.",
    tech: ["TypeScript", "Solidity", "React", "Web3"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function WorkPage() {
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
    <main className="bg-background text-foreground">
      <Background />
      <Header />
      <DecorativeElements />

      {/* Scroll container with snap behavior */}
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        {/* Section 1: Page Header */}
        <section className="snap-start h-screen flex items-center justify-center relative z-20">
          <div className="text-center">
            <h1 className="text-8xl md:text-9xl font-archivo text-foreground mb-4 grainy-texture">PROJECTS</h1>
            <h2 className="text-4xl font-serif italic text-secondary">selection</h2>
          </div>
        </section>

        {/* Section 2: Project Grid */}
        <section className="snap-start min-h-screen flex items-center justify-center relative z-20 py-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-foreground">
                    <path
                      fill="currentColor"
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-archivo text-foreground">SELECTED CASES</h2>
              </div>
            </div>

            <div className="space-y-20">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Project Title Block */}
                  <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <Link href={`/work/${project.id}`} className="block group cursor-pointer">
                      <h3 className="text-4xl md:text-6xl font-archivo text-foreground mb-2 grainy-texture group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm font-mono text-secondary mb-4 tracking-wider">{project.subtitle}</p>
                      <p className="text-foreground/80 leading-relaxed">{project.description}</p>
                    </Link>
                  </div>

                  {/* Project Image */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <Link href={`/work/${project.id}`} className="block group">
                      <div className="relative overflow-hidden bg-muted">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-80 object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
