import { notFound } from "next/navigation"
// Import the new client component
import ProjectDetailClient from './ProjectDetailClient'

const projects = {
  "ai-browser-extension": {
    title: "AI-POWERED BROWSER EXTENSION",
    subtitle: "PERSONAL PROJECT",
    heroImage: "placeholder",
    description:
      "Developed a Chrome extension using React, TypeScript, and Vite for AI-assisted responses. Implemented OpenAI API integration with AWS Cognito authentication and experimenting with AWS Bedrock agents for enhanced AI functionality.",
    overview:
      "This project started as a quick prototype with vanilla JavaScript and later evolved to use modern technologies like React, TypeScript, and Vite. Its primary purpose was to explore AI integrations and modern frontend development tools, while beginning to experiment with AWS services for authentication and AI capabilities.",
    problem:
      "The goal was to create a quick, AI-powered browser extension for contextual answers, while also using the project to gain practical experience with new tools and services like AWS Cognito and Bedrock agents.",
    solution:
      "The extension was initially built with basic HTML/CSS/JavaScript and the OpenAI API. I then refactored and rebuilt the extension using React, TypeScript, and Vite for a modern frontend experience. Currently implementing AWS Cognito for user authentication and testing AWS Bedrock agents to explore tailored AI capabilities.",
    tech: ["React", "TypeScript", "Vite", "OpenAI API", "AWS Cognito", "AWS Bedrock"],
    features: [
      "AI-assisted contextual responses using OpenAI API",
      "Modern React/TypeScript/Vite frontend architecture",
      "User authentication with AWS Cognito sign-in",
      "Testing AWS Bedrock agent integration",
    ],
    process: [
      {
        stepTitle: "01. Initial Prototype",
        description: "Created an initial prototype using basic HTML, CSS, and vanilla JavaScript to test feasibility and configure API calls with the OpenAI API for core functionality.",
        image: "placeholder",
      },
      {
        stepTitle: "02. Frontend Refactor",
        description: "Rebuilt the extension with React, TypeScript, and Vite, focusing on a more robust and maintainable user interface with modern development tooling and best practices.",
        image: "placeholder",
      },
      {
        stepTitle: "03. AWS Integration",
        description: "Implemented AWS Cognito for user authentication and sign-in functionality. Currently testing AWS Bedrock agents to explore possibilities for more tailored AI responses and enhanced capabilities.",
        image: "placeholder",
      },
    ],
    results: [
      "Successfully refactored from vanilla JavaScript to modern React/TypeScript/Vite stack",
      "Implemented functional OpenAI API integration for AI-assisted responses",
      "Added AWS Cognito authentication for secure user sign-in",
      "Key takeaway: Gained hands-on experience with modern frontend tooling and beginning AWS service integration"
    ],
    liveUrl: "https://chrome.google.com/webstore",
    githubUrl: "https://github.com/bencahoon01",
  },
  "niwc-adaptive-platform": {
    title: "ADAPTIVE TRAINING PLATFORM",
    subtitle: "CAPSTONE PROGRAM (IN PROGRESS)",
    heroImage: "placeholder",
    description:
      "A full-stack project in collaboration with NIWC Atlantic to design and develop an AI-assisted, modular, and scalable training platform. Currently implementing AWS Bedrock AI and knowledge base features.",
    overview:
      "Developing a next-generation training platform for the Naval Information Warfare Center Atlantic (NIWC). The platform is being built to be modular, scalable, and intuitive, accounting for various user roles and accessibility requirements. Currently in active development with AI features being implemented.",
    problem:
      "The challenge is to design a comprehensive training platform from scratch that can securely manage user data, provide a highly scalable backend, and incorporate cutting-edge AI to provide targeted, effective training support.",
    solution:
      "Collaborating with a student team and NIWC employees using Agile processes to architect a full-stack solution. The solution features a serverless backend using AWS Lambda and API Gateway with a DynamoDB database. The frontend is built with React, TypeScript, and Tailwind CSS. Currently implementing the AI component using AWS Bedrock and knowledge base for a Retrieval-Augmented Generation (RAG) system to provide AI-driven training assistance.",
    tech: ["AWS (Lambda, Bedrock, DynamoDB, API Gateway)", "TypeScript", "React", "Tailwind CSS", "Figma", "RAG"],
    features: [
      "AI-assisted training support via AWS Bedrock (currently implementing)",
      "Scalable, serverless architecture for REST APIs",
      "Intuitive user interface built from Figma mockups",
      "Design accounting for accessibility and different user roles",
    ],
    process: [
      {
        stepTitle: "01. Research & Stakeholder Planning",
        description: "The first portion of the semester was dedicated to researching project feasibility, meeting with NIWC stakeholders to determine goals and scope, and creating initial Figma mockup designs. Key goals were modularity, scalability, and intuitiveness.",
        image: "placeholder",
      },
      {
        stepTitle: "02. AI Architecture Planning",
        description: "Proposed and planned an AI assistant using AWS Bedrock's knowledge base, specifically tailored to code training and setting strict guidelines to effectively assist users without providing direct answers. Designed the architecture for a RAG system to enhance training effectiveness.",
        image: "placeholder",
      },
      {
        stepTitle: "03. Development Sprints (Current)",
        description: "Continuing work in Agile sprints, developing the scalable backend API routes and DynamoDB database tables with TypeScript, and implementing the user interface using React, TypeScript, and Tailwind CSS. Currently working on implementing AWS Bedrock AI and knowledge base integration.",
        image: "placeholder",
      },
    ],
    results: [
      "Successfully designed a scalable, serverless backend architecture",
      "Created comprehensive Figma mockups and user flow designs",
      "Gained experience with full-stack development in a professional, Agile Capstone environment",
      "Key takeaway: Learning to architect and implement complex AWS serverless systems and collaborate on a large-scale project"
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

// This function runs on the server at build time
export async function generateStaticParams() {
  const projectSlugs = Object.keys(projects)
  return projectSlugs.map((slug) => ({
    slug: slug,
  }))
}

// This is now a Server Component
export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  // Pass the fetched project data as a prop to the client component
  return <ProjectDetailClient project={project} />
}