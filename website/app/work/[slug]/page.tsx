"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import Background from "@/components/background"
import Header from "@/components/header"
import DecorativeElements from "@/components/decorative-elements"

export async function generateStaticParams() {
  const projects = ["ai-browser-extension", "niwc-adaptive-platform", "checkers-game"];
  return projects.map((slug) => ({
    slug: slug,
  }));
}

const projects = {
  "ai-browser-extension": {
    title: "AI-POWERED BROWSER EXTENSION",
    subtitle: "PERSONAL PROJECT",
    heroImage: "placeholder",
    description:
      "Developed a Chrome extension using React, TypeScript, and Tailwind CSS for AI-assisted responses. Integrated OpenAI API and later migrated to AWS services, including Bedrock's knowledge base, for enhanced scalability and tailored AI functionality.",
    overview:
      "This project started as a quick prototype with vanilla JavaScript and later evolved into a full-stack application built with a modern, scalable architecture. Its primary purpose was to explore advanced AI integrations and modern frontend/backend development patterns, directly preparing me for the Capstone project.",
    problem:
      "The goal was to create a quick, AI-powered browser extension for contextual answers, while also using the project to gain practical experience with new tools and services like AWS and Bedrock's knowledge base.",
    solution:
      "The extension was initially built with basic HTML/CSS/JavaScript and the OpenAI API. I then refactored and remade the extension using React and Vite, integrating AWS services for a scalable, secure backend with user authentication and potential premium features. I also implemented Bedrock's knowledge base to tailor the AI's information for specific topics.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "AWS", "OpenAI"],
    features: [
      "AI-assisted contextual responses",
      "User authentication (AWS Cognito for sign-in)",
      "Tailored AI knowledge using Bedrock's Knowledge Base",
      "Scalable, serverless architecture (AWS)",
    ],
    process: [
      {
        stepTitle: "01. Initial Prototype",
        description: "Created an initial prototype using basic HTML, CSS, and vanilla JavaScript to test feasibility and configure API calls with the OpenAI API for core functionality.",
        image: "placeholder",
      },
      {
        stepTitle: "02. Refactor and Migration",
        description: "Remade the extension with React and Vite, focusing on a more robust user interface. Migrated the backend to AWS services for better scalability and versatility, allowing for user sign-in and premium features.",
        image: "placeholder",
      },
      {
        stepTitle: "03. Advanced AI Integration",
        description: "Integrated AWS Bedrock's knowledge base to tailor the AI's responses, ensuring the project served as a valuable learning ground for the Capstone's AI requirements.",
        image: "placeholder",
      },
    ],
    results: [
      "Successfully launched a functional, refactored Chrome extension",
      "Gained extensive hands-on experience with modern tools (React/Vite) and cloud services (AWS)",
      "Achieved a scalable architecture with secure user authentication",
      "Key takeaway: The project was instrumental in mastering the technologies later used in the Capstone project"
    ],
    liveUrl: "https://chrome.google.com/webstore",
    githubUrl: "https://github.com/bencahoon01",
  },
  "niwc-adaptive-platform": {
    title: "ADAPTIVE TRAINING PLATFORM",
    subtitle: "CAPSTONE PROGRAM",
    heroImage: "placeholder",
    description:
      "A full-stack project in collaboration with NIWC Atlantic to design and develop an AI-assisted, modular, and scalable training platform.",
    overview:
      "Developing a next-generation, AI-assisted training platform for the Naval Information Warfare Center Atlantic (NIWC). The platform is being built to be modular, scalable, and intuitive, accounting for various user roles and accessibility requirements.",
    problem:
      "The challenge was to design a comprehensive training platform from scratch that could securely manage user data, provide a highly scalable backend, and incorporate cutting-edge AI to provide targeted, effective training support.",
    solution:
      "I collaborated with a student team and NIWC employees using Agile processes to architect a full-stack solution. The solution features a serverless backend using **AWS Lambda** and **API Gateway** with a **DynamoDB** database. The frontend is built with **React, TypeScript, and Tailwind CSS**. A key component is the **Retrieval-Augmented Generation (RAG)** system using **AWS Bedrock** for AI-driven training assistance.",
    tech: ["AWS (Lambda, Bedrock, DynamoDB, API Gateway)", "TypeScript", "React", "Tailwind CSS", "Figma", "RAG"],
    features: [
      "AI-assisted training support via AWS Bedrock (RAG)",
      "Scalable, serverless architecture for REST APIs",
      "Intuitive user interface built from Figma mockups",
      "Design accounting for accessibility and different user roles",
    ],
    process: [
      {
        stepTitle: "01. Research & Stakeholder Planning",
        description: "The first half of the semester was dedicated to researching project feasibility, meeting with NIWC stakeholders to determine goals and scope, and creating initial Figma mockup designs. Key goals were modularity, scalability, and intuitiveness.",
        image: "placeholder",
      },
      {
        stepTitle: "02. AI Architecture Design",
        description: "We integrated an AI assistant using AWS Bedrock's knowledge base, specifically tailored to code training and setting strict guidelines to effectively assist users without providing direct answers. This formed the RAG system.",
        image: "placeholder",
      },
      {
        stepTitle: "03. Development Sprints (Current)",
        description: "Continuing work in Agile sprints, I am developing the scalable backend API routes and DynamoDB database tables with TypeScript, and implementing the user interface using React, TypeScript, and Tailwind CSS.",
        image: "placeholder",
      },
    ],
    results: [
      "Successfully designed and developed a scalable, serverless backend",
      "Implemented a complex RAG system for tailored AI support",
      "Gained experience with full-stack development in a professional, Agile Capstone environment",
      "Key takeaway: Mastery of the AWS serverless ecosystem and collaboration on a large-scale project"
    ],
    liveUrl: "#", // Placeholder for Capstone - use project name if a deployment exists
    githubUrl: "https://github.com/bencahoon01", // Placeholder
  },
  "checkers-game": {
    title: "CHECKERS GAME",
    subtitle: "GROUP PROJECT",
    heroImage: "placeholder",
    description:
      "Collaborated with a team to develop a playable Checkers game in Java, following test-driven development practices using JUnit.",
    overview:
      "A fully functional Checkers game built in Java as a group project, emphasizing a rigorous approach using test-driven development (TDD) and strong object-oriented design (OOD) principles.",
    problem:
      "The goal was to create a playable Checkers game that was well-structured, easy to maintain, and to gain practical experience with both test-driven development and applying complex object-oriented design patterns.",
    solution:
      "The game was developed in Java and utilized JUnit for TDD. We designed modular code to separate game logic, UI, and rule enforcement, applying OOD principles and patterns like the **Factory** and **Observer** pattern to enhance code flexibility and maintainability.",
    tech: ["Java", "JUnit"],
    features: [
      "Fully playable Checkers game",
      "Test-driven development (TDD) approach",
      "Utilized Factory and Observer design patterns",
      "Modular code separating game logic and UI",
    ],
    process: [
      {
        stepTitle: "01. Planning & Design",
        description: "We started by planning the project, designing the overall architecture, and creating a basic class diagram. We focused on which design patterns (Factory, Observer) would best serve a modular structure.",
        image: "placeholder",
      },
      {
        stepTitle: "02. Game Logic Implementation (TDD)",
        description: "We implemented the core game logic, including the rules of Checkers and the game board, using a test-driven development approach with JUnit to ensure correctness and stability.",
        image: "placeholder",
      },
      {
        stepTitle: "03. Modular Separation",
        description: "We designed modular code to strictly separate the game's logic from the user interface and rule enforcement, a key goal achieved through interfaces and design patterns.",
        image: "placeholder",
      },
    ],
    results: [
      "Successfully developed a fully playable Checkers game in Java",
      "Gained experience with test-driven development and JUnit",
      "Successfully applied advanced OOD principles (Factory, Observer patterns)",
      "Key takeaway: The importance of planning and design for creating modular and maintainable code"
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/bencahoon01",
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