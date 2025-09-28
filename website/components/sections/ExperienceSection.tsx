"use client"

import { useState } from "react"

const experiences = [
  {
    role: "Full-Stack Developer - Capstone Program",
    company: "Naval Information Warfare Center Atlantic, Clemson University",
    period: "Feb 2025 - Present",
    description:
      "Collaborated with a student team and NIWC employees to design and develop an AI-assisted training platform using Agile processes. Developing a scalable, serverless backend using AWS Lambda, API Gateway, and TypeScript to create REST APIs for a DynamoDB database. Created Figma mockup designs and built the user interface with React, TypeScript, and Tailwind CSS. Implementing a Retrieval-Augmented Generation (RAG) system utilizing AWS Bedrock to provide AI-driven training support.",
    tech: ["React", "TypeScript", "Tailwind CSS", "AWS", "Figma"],
  },
  {
    role: "Student",
    company: "Clemson University",
    period: "Aug 2023 - May 2027",
    description:
      "Bachelor of Science in Computer Science with a 3.47 GPA. Relevant Coursework: Algorithms/Data Structures, C/C++, Software Development, Network Programming.",
    tech: ["C", "C++", "Java", "Python", "JavaScript"],
  },
]

export default function ExperienceSection() {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null)

  return (
    <section id="experience" className="snap-start min-h-screen flex items-center justify-center relative z-20 py-20">
      <div className="max-w-4xl mx-auto px-8 w-full">
        <h2 className="text-6xl md:text-8xl font-archivo text-foreground mb-16 text-center grainy-texture">
          EXPERIENCE
        </h2>

        <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-4">
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

              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandedExperience === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="pb-4 space-y-4 pt-2">
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
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-16">
          <h3 className="text-2xl font-archivo text-foreground mb-6">CERTIFICATIONS</h3>
          <ul className="space-y-2 text-foreground/80">
            <li>• AWS Certified Solutions Architect</li>
            <li>• Google Cloud Professional Developer</li>
            <li>• Meta React Developer Certificate</li>
          </ul>
        </div>*/}
      </div>
    </section>
  )
}