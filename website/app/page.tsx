"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Background from "@/components/background"
import PreLoader from "@/components/preloader"
import Header from "@/components/header"
import NameFrame from "@/components/name-frame"
import HeroContent from "@/components/hero-content"
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

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "University Research Lab",
    period: "2023 - Present",
    description:
      "Led development of neural interface prototypes using React and TensorFlow. Architected scalable backend systems handling real-time data processing.",
    tech: ["React", "Node.js", "TensorFlow", "PostgreSQL"],
  },
  {
    role: "Frontend Developer",
    company: "Tech Innovation Project",
    period: "2022 - 2023",
    description:
      "Built responsive web applications with modern JavaScript frameworks. Collaborated with design teams to implement pixel-perfect UI components.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],
  },
  {
    role: "Software Engineering Intern",
    company: "Startup Accelerator",
    period: "2022",
    description:
      "Developed MVP features for early-stage startups. Gained experience in rapid prototyping and agile development methodologies.",
    tech: ["Vue.js", "Python", "Docker", "AWS"],
  },
]

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0)
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null)

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
      <PreLoader />
      <Header />
      <NameFrame />
      <DecorativeElements />

      <div className="snap-y snap-proximity h-screen overflow-y-scroll scroll-smooth">
        {/* Section 1: Hero */}
        <section id="hero" className="snap-start h-screen flex items-center justify-center relative z-20">
          <HeroContent />
        </section>

        {/* Section 2: Work */}
        <section id="work" className="snap-start min-h-screen flex items-center justify-center relative z-20 py-20">
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

        {/* Section 3: About & Expertise */}
        <section id="about" className="snap-start h-screen flex items-center justify-center relative z-20 py-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
              <div>
                <h2 className="text-6xl md:text-8xl font-archivo text-foreground mb-8 grainy-texture">ABOUT ME</h2>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  Over the last decade, my expertise has centered around JavaScript, encompassing code writing,
                  refactoring, and seamless integration of RESTful APIs with frameworks like Angular, React, and Vue.js.
                  My experience extends beyond, having worked with diverse tech stacks.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  I stand ready to provide invaluable assistance and guidance to your developers, ensuring they adhere
                  to best practices. Explore my projects below to witness firsthand the impact of my skills.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <h3 className="text-4xl font-serif italic text-secondary transform -rotate-12">
                  {"Code is poetry in motion"}
                </h3>
              </div>
            </div>

            <div>
              <h2 className="text-6xl md:text-8xl font-archivo text-foreground mb-12 grainy-texture">MY EXPERTISE</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-4">
                  <div className="text-4xl font-mono text-secondary">01</div>
                  <h3 className="text-2xl font-archivo text-foreground">Software Development</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Full-stack web applications</li>
                    <li>• Modern JavaScript frameworks</li>
                    <li>• RESTful API integration</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <div className="text-4xl font-mono text-secondary">02</div>
                  <h3 className="text-2xl font-archivo text-foreground">AI & Machine Learning</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Neural network implementation</li>
                    <li>• Data visualization platforms</li>
                    <li>• Real-time processing systems</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <div className="text-4xl font-mono text-secondary">03</div>
                  <h3 className="text-2xl font-archivo text-foreground">System Architecture</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Scalable backend systems</li>
                    <li>• Cloud infrastructure</li>
                    <li>• Performance optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Experience */}
        <section id="experience" className="snap-start h-screen flex items-center justify-center relative z-20 py-20">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-6xl md:text-8xl font-archivo text-foreground mb-16 text-center grainy-texture">
              EXPERIENCE
            </h2>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="border-b border-foreground/20 pb-6">
                  <button
                    onClick={() => setExpandedExperience(expandedExperience === index ? null : index)}
                    className="w-full text-left group"
                  >
                    <div className="flex justify-between items-center py-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-archivo text-foreground group-hover:text-accent transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-secondary font-mono">
                          {exp.company} • {exp.period}
                        </p>
                      </div>
                      <div className="text-2xl text-foreground group-hover:text-accent transition-all duration-300">
                        {expandedExperience === index ? "−" : "+"}
                      </div>
                    </div>
                  </button>

                  {expandedExperience === index && (
                    <div className="pb-4 space-y-4 animate-in slide-in-from-top-2 duration-300">
                      <p className="text-foreground/80 leading-relaxed">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 border border-foreground/30 text-sm font-mono text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-archivo text-foreground mb-6">CERTIFICATIONS</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>• AWS Certified Solutions Architect</li>
                <li>• Google Cloud Professional Developer</li>
                <li>• Meta React Developer Certificate</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Contact */}
        <section id="contact" className="snap-start h-screen flex items-center justify-center relative z-20">
          <div className="text-center space-y-8">
            <h2 className="text-6xl md:text-8xl font-archivo text-foreground mb-8 grainy-texture">LET'S CONNECT</h2>
            <p className="text-xl text-foreground/80 mb-12 max-w-2xl mx-auto">
              Ready to bring your next project to life? Let's discuss how we can work together to create something
              extraordinary.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:ben.cahoon@example.com"
                className="inline-block text-3xl font-archivo text-foreground hover:text-accent transition-colors duration-300 grainy-texture"
              >
                ben.cahoon@example.com
              </a>

              <div className="flex justify-center space-x-8 pt-8">
                <a
                  href="https://github.com/bencahoon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors duration-300"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/bencahoon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors duration-300"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
