"use client"

import { useState } from "react"

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

export default function ExperienceSection() {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null)

  return (
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
  )
}