"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
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
    problem:
      "The goal was to create a non-invasive BCI that could translate raw neural signals into digital commands in real-time, overcoming high signal-to-noise ratios and the complexity of interpreting brainwave patterns with millisecond precision.",
    solution:
      "I developed a machine learning pipeline using TensorFlow to process and classify brainwave patterns with 94% accuracy. The front-end, built in React with WebGL for visualization, provided users with immediate visual feedback of their neural activity and control, while Node.js handled real-time data streaming.",
    tech: ["React", "TensorFlow", "WebGL", "Node.js", "Python", "Neural Networks"],
    features: [
      "Real-time neural signal processing",
      "Machine learning pattern recognition",
      "3D visualization of brain activity",
      "Adaptive learning algorithms",
    ],
    process: [
      {
        stepTitle: "01. Research & Prototyping",
        description: "The initial phase involved researching existing BCI technologies and prototyping a basic data pipeline with TensorFlow to validate the core concept of real-time signal classification.",
        image: "/futuristic-neural-interface-brain-computer-connect.jpg",
      },
      {
        stepTitle: "02. Visualization & UI",
        description: "Using React and WebGL, I developed an interactive interface that provided users with immediate visual feedback of their classified neural signals, turning abstract data into actionable control.",
        image: "/quantum-computing-dashboard-holographic-interface-.jpg",
      },
      {
        stepTitle: "03. Backend & Deployment",
        description: "A robust Node.js backend was built to handle real-time data streaming and processing. The entire application was containerized with Docker for scalable deployment.",
        image: "/cybersecurity-fortress-digital-protection-shield-b.jpg",
      },
    ],
    results: [
      "Achieved 94% classification accuracy in real-time neural signal processing",
      "Reduced signal processing latency to under 10ms for responsive control",
      "Successfully integrated WebGL visualization with TensorFlow pipeline",
      "Key takeaway: Learned advanced real-time data streaming and ML model optimization"
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
    problem:
      "Quantum computing research lacked accessible visualization tools for complex quantum states and circuit designs. Researchers needed an intuitive interface to design, simulate, and analyze quantum algorithms without deep technical knowledge of quantum mechanics.",
    solution:
      "I created an interactive dashboard using Next.js and Three.js for 3D quantum state visualization. The platform integrates with Quantum SDK for real-time simulations, while D3.js provides detailed performance analytics. WebGL ensures smooth rendering of complex quantum circuit diagrams.",
    tech: ["Next.js", "Three.js", "Python", "Quantum SDK", "WebGL", "D3.js"],
    features: [
      "Quantum circuit visualization",
      "Real-time quantum state monitoring",
      "Interactive algorithm design",
      "Performance analytics",
    ],
    process: [
      {
        stepTitle: "01. Algorithm Development",
        description: "Started by implementing core quantum algorithms and circuit designs using Python and Quantum SDK, focusing on creating efficient quantum state representations and computations.",
        image: "/quantum-computing-dashboard-holographic-interface-.jpg",
      },
      {
        stepTitle: "02. 3D Visualization",
        description: "Built interactive 3D visualizations with Three.js and WebGL to represent complex quantum states and circuit diagrams, making quantum mechanics accessible through intuitive visual interfaces.",
        image: "/futuristic-neural-interface-brain-computer-connect.jpg",
      },
      {
        stepTitle: "03. Dashboard Integration",
        description: "Integrated everything into a cohesive Next.js dashboard with D3.js analytics, enabling researchers to design, simulate, and analyze quantum algorithms in real-time.",
        image: "/cybersecurity-fortress-digital-protection-shield-b.jpg",
      },
    ],
    results: [
      "Enabled 3D visualization of 64-qubit quantum states in real-time",
      "Reduced quantum algorithm design time by 60% through intuitive interface",
      "Successfully integrated multiple quantum computing frameworks",
      "Key takeaway: Mastered complex 3D mathematics and quantum computing concepts"
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
    problem:
      "Traditional cybersecurity systems suffer from centralized vulnerabilities and lack transparent threat intelligence sharing. Organizations needed a decentralized solution that could provide immutable audit trails and automated incident response.",
    solution:
      "I built a blockchain-based security platform using Solidity smart contracts for immutable threat logs. The React dashboard provides real-time monitoring, while Web3 integration ensures decentralized threat intelligence sharing. Node.js handles automated response triggers with MongoDB for scalable data storage.",
    tech: ["TypeScript", "Solidity", "React", "Web3", "Node.js", "MongoDB"],
    features: [
      "Blockchain-based threat intelligence",
      "Automated incident response",
      "Real-time network monitoring",
      "Predictive threat analysis",
    ],
    process: [
      {
        stepTitle: "01. Blockchain Foundation",
        description: "Developed smart contracts using Solidity to create immutable threat logs and decentralized threat intelligence sharing, establishing the core blockchain infrastructure.",
        image: "/cybersecurity-fortress-digital-protection-shield-b.jpg",
      },
      {
        stepTitle: "02. Real-time Dashboard",
        description: "Built a comprehensive React dashboard with Web3 integration for monitoring threats in real-time, providing intuitive visualizations of security events and automated response triggers.",
        image: "/futuristic-neural-interface-brain-computer-connect.jpg",
      },
      {
        stepTitle: "03. Scalable Backend",
        description: "Implemented a Node.js backend with MongoDB for scalable data storage and automated incident response, ensuring the platform could handle enterprise-level security monitoring.",
        image: "/quantum-computing-dashboard-holographic-interface-.jpg",
      },
    ],
    results: [
      "Implemented immutable threat logging with 99.9% uptime reliability",
      "Reduced incident response time by 75% through automated triggers",
      "Successfully deployed to handle 10,000+ security events per second",
      "Key takeaway: Gained expertise in blockchain architecture and enterprise security"
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

      {/* Main content container with more horizontal space */}
      <div className="relative z-20 max-w-screen-xl mx-auto px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* --- Left Column (Scrollable Content) --- */}
          <div className="lg:col-span-2 space-y-24"> {/* Increased spacing for a better flow */}
            
            {/* The initial overview, problem, and solution are still valuable context */}
            <div>
              <h2 className="text-3xl font-archivo text-foreground mb-6 grainy-texture">PROJECT OVERVIEW</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">{project.overview}</p>
            </div>
            <div>
              <h2 className="text-3xl font-archivo text-foreground mb-6 grainy-texture">THE PROBLEM</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <h2 className="text-3xl font-archivo text-foreground mb-6 grainy-texture">THE SOLUTION</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">{project.solution}</p>
            </div>

            {/* --- NEW DYNAMIC PROCESS SECTION --- */}
            {project.process && (
              <div>
                <h2 className="text-3xl font-archivo text-foreground mb-12 grainy-texture">PROCESS & GALLERY</h2>
                <div className="space-y-16">
                  {project.process.map((step, index) => (
                    <motion.div
                      key={index}
                      className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {/* Logic to alternate image and text position */}
                      <div className={` ${index % 2 === 1 ? "md:order-2" : ""}`}>
                        <img src={step.image} alt={step.stepTitle} className="rounded-lg shadow-lg w-full h-auto object-cover" />
                      </div>
                      <div className={`space-y-4 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                        <h3 className="text-2xl font-archivo text-foreground">{step.stepTitle}</h3>
                        <p className="text-foreground/80 leading-relaxed">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* --- RESULTS SECTION --- */}
            {project.results && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-archivo text-foreground mb-8 grainy-texture">RESULTS & KEY TAKEAWAYS</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.results.map((result, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-muted/20 rounded-lg border border-border/50"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                      <p className="text-foreground/90 leading-relaxed">{result}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* --- Right Column (Sticky Sidebar) --- */}
          <div className="relative">
            <div className="sticky top-32 space-y-12">
              {/* Sticky Project Title */}
              <h1
                className="text-6xl font-archivo text-transparent"
                style={{
                  WebkitTextStroke: "1px white",
                  color: "transparent",
                }}
              >
                {project.title}
              </h1>

              {/* Tech Stack */}
              <div>
                <h3 className="text-xl font-archivo text-foreground mb-4">TECH STACK</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-muted text-foreground text-sm font-mono border border-border hover:bg-accent hover:text-background transition-all duration-300 cursor-default"
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
                  href="/#work"
                  className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors duration-300 font-mono"
                >
                  ← Back to Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
