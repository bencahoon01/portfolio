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

const containerVariants = {
  hidden: { opacity: 0, y: 30, willChange: 'transform' },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 + i * 0.1, ease: "easeOut" },
  }),
}

const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

export default function WorkSection() {
  return (
    <section id="work" className="snap-start min-h-screen flex items-center justify-center relative z-20 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-8">
            <motion.div 
              className="w-8 h-8 flex items-center justify-center text-accent"
              initial={{ opacity: 0, rotate: -180, scale: 0 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6">
                <path
                  fill="currentColor"
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                />
              </svg>
            </motion.div>
            <motion.h2 
              className="text-2xl font-archivo text-foreground"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              SELECTED PROJECTS
            </motion.h2>
          </div>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true }}
            >
              <motion.div 
                className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              >
                <Link href={`/work/${project.id}`} className="block group cursor-pointer grainy-texture-hover">
                  <motion.h3 variants={itemVariants} className="text-4xl md:text-6xl font-archivo text-foreground mb-2 grainy-texture transition-colors duration-300">
                    {project.title}
                  </motion.h3>
                  <motion.p variants={itemVariants} className="text-sm font-mono text-secondary mb-4 tracking-wider">
                    {project.subtitle}
                  </motion.p>
                  <motion.p variants={itemVariants} className="text-foreground/80 leading-relaxed mb-6">
                    {project.description}
                  </motion.p>
                </Link>
                
                {/* Tech Stack */}
                <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 border border-foreground/30 text-sm font-mono text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      variants={itemVariants}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div 
                className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                initial={{ opacity: 0, x: index % 2 === 1 ? -30 : 30, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                viewport={{ once: true }}
              >
                <Link href={`/work/${project.id}`} className="block group">
                  <motion.div 
                    className="rounded-lg shadow-lg w-full h-80 bg-muted/40 border border-border/30 flex items-center justify-center group-hover:bg-muted/60 transition-all duration-500"
                    whileHover={{ 
                      scale: 1.02,
                      rotateX: 5,
                      rotateY: index % 2 === 1 ? -5 : 5,
                      transition: { duration: 0.3 }
                    }}
                    style={{ perspective: 1000 }}
                  >
                    <motion.span 
                      className="text-foreground/50 font-mono text-sm"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                      viewport={{ once: true }}
                    >
                      Image Placeholder
                    </motion.span>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}