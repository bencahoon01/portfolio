"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const projects = [
  {
    id: "ai-browser-extension",
    title: "AI-POWERED BROWSER EXTENSION",
    subtitle: "PERSONAL PROJECT",
    image: "/placeholder.svg",
    description: "Developed a Chrome extension using React, TypeScript, and Tailwind CSS for AI-assisted responses.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "AWS", "OpenAI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "checkers-game",
    title: "CHECKERS GAME",
    subtitle: "GROUP PROJECT",
    image: "/placeholder.svg",
    description: "Collaborated with a team to develop a playable Checkers game in Java, following test-driven development practices using JUnit.",
    tech: ["Java", "JUnit"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "portfolio-website",
    title: "PORTFOLIO WEBSITE",
    subtitle: "PERSONAL PROJECT",
    image: "/placeholder.svg",
    description: "Designed and developed this personal portfolio website to showcase my skills and projects.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function WorkSection() {
  return (
    <section id="work" className="snap-start min-h-screen flex items-center justify-center relative z-20 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-8 flex items-center justify-center text-accent">
              <svg viewBox="0 0 24 24" className="w-6 h-6">
                <path
                  fill="currentColor"
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-archivo text-foreground">SELECTED CASES</h2>
          </div>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <Link href={`/work/${project.id}`} className="block group cursor-pointer">
                  <h3 className="text-4xl md:text-6xl font-archivo text-foreground mb-2 grainy-texture group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm font-mono text-secondary mb-4 tracking-wider">{project.subtitle}</p>
                  <p className="text-foreground/80 leading-relaxed">{project.description}</p>
                </Link>
              </div>

              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <Link href={`/work/${project.id}`} className="block group">
                  <div className="rounded-lg shadow-lg w-full h-80 bg-muted/40 border border-border/30 flex items-center justify-center group-hover:bg-muted/60 transition-all duration-500">
                    <span className="text-foreground/50 font-mono text-sm">Image Placeholder</span>
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}