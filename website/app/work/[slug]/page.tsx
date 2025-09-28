"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import Background from "@/components/background"
import Header from "@/components/header"
import DecorativeElements from "@/components/decorative-elements"

const projects = {
  "neural-interface": {
    title: "NEURAL INTERFACE",
    subtitle: "AI/ML, BRAIN-COMPUTER INTERFACE",
    heroImage: "/futuristic-neural-interface-brain-computer-connect.jpg",
    description:
      "Revolutionary brain-computer interface enabling direct neural control of digital systems through advanced machine learning algorithms and real-time neural signal processing.",
    overview:
      "This project represents a breakthrough in human-computer interaction, developing a non-invasive brain-computer interface that translates neural signals into digital commands. The system uses advanced machine learning models to interpret brainwave patterns and execute corresponding actions in real-time.",
    tech: ["React", "TensorFlow", "WebGL", "Node.js", "Python", "Neural Networks"],
    features: [
      "Real-time neural signal processing",
      "Machine learning pattern recognition",
      "3D visualization of brain activity",
      "Adaptive learning algorithms",
    ],
    liveUrl: "https://neural-interface-demo.com",
    githubUrl: "https://github.com/bencahoon/neural-interface",
  },
  "quantum-dashboard": {
    title: "QUANTUM DASHBOARD",
    subtitle: "QUANTUM COMPUTING, DATA VISUALIZATION",
    heroImage: "/quantum-computing-dashboard-holographic-interface-.jpg",
    description:
      "Advanced quantum computing visualization platform for complex data analysis and quantum algorithm development.",
    overview:
      "A comprehensive dashboard for quantum computing research, providing intuitive visualization of quantum states, circuit designs, and computational results. Built to bridge the gap between quantum theory and practical application.",
    tech: ["Next.js", "Three.js", "Python", "Quantum SDK", "WebGL", "D3.js"],
    features: [
      "Quantum circuit visualization",
      "Real-time quantum state monitoring",
      "Interactive algorithm design",
      "Performance analytics",
    ],
    liveUrl: "https://quantum-dashboard-demo.com",
    githubUrl: "https://github.com/bencahoon/quantum-dashboard",
  },
  "cyber-security": {
    title: "CYBER FORTRESS",
    subtitle: "CYBERSECURITY, BLOCKCHAIN",
    heroImage: "/cybersecurity-fortress-digital-protection-shield-b.jpg",
    description:
      "Next-generation cybersecurity platform with blockchain-based threat detection and automated response systems.",
    overview:
      "An innovative cybersecurity solution that leverages blockchain technology for immutable threat intelligence and automated incident response. The platform provides real-time monitoring and predictive threat analysis.",
    tech: ["TypeScript", "Solidity", "React", "Web3", "Node.js", "MongoDB"],
    features: [
      "Blockchain-based threat intelligence",
      "Automated incident response",
      "Real-time network monitoring",
      "Predictive threat analysis",
    ],
    liveUrl: "https://cyber-fortress-demo.com",
    githubUrl: "https://github.com/bencahoon/cyber-fortress",
  },
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Background />
      <Header />
      <DecorativeElements />

      <div className="relative z-20 pt-24">
        {/* Project Title - Top Right with Outline */}
        <div className="fixed top-32 right-8 z-30">
          <h1
            className="text-6xl font-archivo text-transparent"
            style={{
              WebkitTextStroke: "1px white",
              color: "transparent",
            }}
          >
            {project.title}
          </h1>
        </div>

        {/* Hero Section with Diagonal Cut */}
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={project.heroImage || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover filter grayscale"
            />
          </div>

          {/* Diagonal cut overlay */}
          <div
            className="absolute inset-0 bg-background"
            style={{
              clipPath: "polygon(0 85%, 100% 70%, 100% 100%, 0% 100%)",
            }}
          ></div>
        </section>

        {/* Content Section */}
        <section className="relative bg-background py-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Project Overview */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-3xl font-archivo text-foreground mb-6 grainy-texture">PROJECT OVERVIEW</h2>
                  <p className="text-lg text-foreground/80 leading-relaxed mb-6">{project.overview}</p>
                  <p className="text-foreground/70 leading-relaxed">{project.description}</p>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-2xl font-archivo text-foreground mb-4">KEY FEATURES</h3>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-accent"></span>
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Project Details Sidebar */}
              <div className="space-y-12">
                {/* Tech Stack */}
                <div>
                  <h3 className="text-xl font-archivo text-foreground mb-4">TECH STACK</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-muted text-foreground text-sm font-mono border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="space-y-4">
                  <h3 className="text-xl font-archivo text-foreground mb-4">LINKS</h3>
                  <div className="space-y-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-accent hover:text-foreground transition-colors duration-300 font-mono"
                    >
                      → Live Site
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-accent hover:text-foreground transition-colors duration-300 font-mono"
                    >
                      → GitHub
                    </a>
                  </div>
                </div>

                {/* Back to Work */}
                <div className="pt-8">
                  <Link
                    href="/work"
                    className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors duration-300 font-mono"
                  >
                    ← Back to Work
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
