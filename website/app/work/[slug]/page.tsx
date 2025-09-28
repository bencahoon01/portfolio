"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import Background from "@/components/background"
import Header from "@/components/header"
import DecorativeElements from "@/components/decorative-elements"

const projects = {
  "ai-browser-extension": {
    title: "AI-POWERED BROWSER EXTENSION",
    subtitle: "PERSONAL PROJECT",
    heroImage: "placeholder",
    description:
      "Developed a Chrome extension using React, TypeScript, and Tailwind CSS for AI-assisted responses. Integrated OpenAI API to generate contextual responses, migrating to AWS services for versatility and authentication.",
    overview:
      "This project is a Chrome extension that provides AI-assisted responses to user queries. It uses the OpenAI API to generate contextual responses and is built with a modern tech stack.",
    problem:
      "The goal was to create a browser extension that could provide quick, AI-powered answers to user questions without leaving the current page.",
    solution:
      "I developed a Chrome extension using React, TypeScript, and Tailwind CSS. I integrated the OpenAI API to generate contextual responses and later migrated to AWS services for better scalability and authentication.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "AWS", "OpenAI"],
    features: [
      "AI-assisted responses",
      "Context-aware suggestions",
      "Seamless browser integration",
      "Scalable backend infrastructure",
    ],
    process: [
      {
        stepTitle: "01. Prototyping",
        description: "The initial phase involved creating a basic prototype to test the feasibility of the project and experiment with the OpenAI API.",
        image: "placeholder",
      },
      {
        stepTitle: "02. Frontend Development",
        description: "I built the user interface with React and TypeScript, focusing on creating a clean and intuitive user experience.",
        image: "placeholder",
      },
      {
        stepTitle: "03. Backend & Deployment",
        description: "I migrated the backend to AWS for better scalability and authentication, and deployed the extension to the Chrome Web Store.",
        image: "placeholder",
      },
    ],
    results: [
      "Successfully launched a functional Chrome extension",
      "Gained experience with the OpenAI API and AWS",
      "Learned about the process of developing and publishing a browser extension",
      "Key takeaway: The importance of a scalable backend for AI-powered applications"
    ],
    liveUrl: "https://chrome.google.com/webstore",
    githubUrl: "https://github.com/bencahoon01",
  },
  "checkers-game": {
    title: "CHECKERS GAME",
    subtitle: "GROUP PROJECT",
    heroImage: "placeholder",
    description:
      "Collaborated with a team to develop a playable Checkers game in Java, following test-driven development practices using JUnit.",
    overview:
      "This project is a fully functional Checkers game built in Java. It was developed as a group project and follows test-driven development practices.",
    problem:
      "The goal was to create a playable Checkers game that was well-structured and easy to maintain. We also wanted to gain experience with test-driven development and object-oriented design principles.",
    solution:
      "We developed the game in Java and used JUnit for testing. We applied object-oriented design principles and design patterns like Factory and Observer to create a modular and maintainable codebase.",
    tech: ["Java", "JUnit"],
    features: [
      "Fully playable Checkers game",
      "Test-driven development",
      "Object-oriented design",
      "Modular and maintainable code",
    ],
    process: [
      {
        stepTitle: "01. Planning & Design",
        description: "We started by planning the project and designing the overall architecture of the game. We decided on the design patterns we would use and created a basic class diagram.",
        image: "placeholder",
      },
      {
        stepTitle: "02. Game Logic",
        description: "We implemented the core game logic, including the rules of Checkers and the game board. We used test-driven development to ensure that the game logic was correct.",
        image: "placeholder",
      },
      {
        stepTitle: "03. User Interface",
        description: "We created a simple user interface for the game. We separated the user interface from the game logic to make the code more modular.",
        image: "placeholder",
      },
    ],
    results: [
      "Successfully developed a playable Checkers game",
      "Gained experience with test-driven development and JUnit",
      "Learned about object-oriented design principles and design patterns",
      "Key takeaway: The importance of planning and design in software development"
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/bencahoon01",
  },
  "portfolio-website": {
    title: "PORTFOLIO WEBSITE",
    subtitle: "PERSONAL PROJECT",
    heroImage: "placeholder",
    description:
      "Designed and developed this personal portfolio website to showcase my skills and projects.",
    overview:
      "This is my personal portfolio website. I designed and developed it myself to showcase my skills and projects. It is built with a modern tech stack and features a clean and minimalist design.",
    problem:
      "The goal was to create a personal portfolio website that was both visually appealing and easy to navigate. I also wanted to use a modern tech stack to showcase my skills.",
    solution:
      "I built the website with Next.js, TypeScript, and Tailwind CSS. I used Framer Motion to add some subtle animations and create a more engaging user experience.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Clean and minimalist design",
      "Responsive layout",
      "Subtle animations",
      "Modern tech stack",
    ],
    process: [
      {
        stepTitle: "01. Design",
        description: "I started by designing the website in Figma. I wanted to create a clean and minimalist design that was easy to navigate.",
        image: "placeholder",
      },
      {
        stepTitle: "02. Development",
        description: "I developed the website with Next.js, TypeScript, and Tailwind CSS. I used Framer Motion to add some subtle animations.",
        image: "placeholder",
      },
      {
        stepTitle: "03. Deployment",
        description: "I deployed the website to Vercel. Vercel is a great platform for deploying Next.js applications.",
        image: "placeholder",
      },
    ],
    results: [
      "Successfully launched a personal portfolio website",
      "Gained experience with Next.js, TypeScript, and Tailwind CSS",
      "Learned about the importance of design and user experience",
      "Key takeaway: The power of a modern tech stack for building beautiful and performant websites"
    ],
    liveUrl: "https://bencahoon.com",
    githubUrl: "https://github.com/bencahoon01/portfolio",
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
      
      {/* Custom decorative elements with sticky dates for work pages */}
      <div className="sticky top-30 right-[8.33%] z-30 text-foreground font-mono text-lg font-bold float-right mr-[8.33%]">
        {new Date().getFullYear()}
      </div>
      <div className="sticky top-30 left-[8.33%] z-30 text-foreground font-mono text-lg font-bold float-left ml-[8.33%]">
        EST. 2023
      </div>
      
      {/* Other decorative elements (non-sticky) */}
      <div className="fixed top-1/4 right-35 z-30 flex flex-col gap-2 text-foreground font-mono text-lg">
        <span>✕</span>
        <span>✕</span>
        <span>✕</span>
      </div>
      <div className="fixed bottom-1/4 left-35 z-30 flex flex-col gap-2 text-foreground font-mono text-lg">
        <span>✕</span>
        <span>✕</span>
        <span>✕</span>
      </div>
      <div className="fixed bottom-8 left-35 z-30 text-foreground font-mono text-sm">
        <div>BEN CAHOON</div>
        <div>CENTRAL, SC</div>
        <div className="text-accent">AVAILABLE</div>
      </div>
      <div className="fixed bottom-8 right-35 z-30 text-foreground font-mono text-sm text-right">
        <a href="https://github.com/bencahoon01" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition-colors duration-300 cursor-pointer">GITHUB</a>
        <a href="https://linkedin.com/in/bcahoon" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition-colors duration-300 cursor-pointer">LINKEDIN</a>
        <div className="text-secondary">UPDATED {new Date().getFullYear()}</div>
      </div>

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
                        <div className="rounded-lg shadow-lg w-full h-64 bg-muted/40 border border-border/30 flex items-center justify-center">
                          <span className="text-foreground/50 font-mono text-sm">Image Placeholder</span>
                        </div>
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