"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

// Typewriter animation component
const TypewriterText = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  useEffect(() => {
    if (!isInView) return

    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      } else if (!isTypingComplete) {
        // Typing is complete, wait a moment then hide cursor
        setTimeout(() => setIsTypingComplete(true), 1000)
      }
    }, 80 + Math.random() * 40) // Slight randomness for natural typing feel

    return () => clearTimeout(timer)
  }, [currentIndex, text, isInView, isTypingComplete])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ 
        opacity: 1,
        transition: { duration: 0.5, delay }
      }}
      onViewportEnter={() => setIsInView(true)}
      viewport={{ once: true }}
      className={className}
    >
      {displayText}
      <motion.span
        animate={{ 
          opacity: isTypingComplete ? [1, 0] : [0, 1, 0] 
        }}
        transition={{
          duration: isTypingComplete ? 0.5 : 0.8,
          repeat: currentIndex < text.length && !isTypingComplete ? Infinity : 0,
          ease: "linear"
        }}
        className="ml-1"
      >
        |
      </motion.span>
    </motion.div>
  )
}

const skillsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
}

const skillItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.5 } },
}

export default function AboutSection() {
  return (
    <section id="about" className="snap-start h-screen flex items-center justify-center relative z-20 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30, willChange: 'transform' }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-6xl md:text-8xl font-archivo text-foreground mb-8 grainy-texture"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              ABOUT ME
            </motion.h2>
            <motion.p 
              className="text-lg text-foreground/80 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              I am a Computer Science student at Clemson University with a passion for full-stack development and AI. My experience includes developing AI-assisted training platforms with a focus on scalable, serverless backends using AWS technologies.
            </motion.p>
            <motion.p 
              className="text-lg text-foreground/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              I am proficient in a variety of languages and frameworks, and I am always eager to learn new technologies. Explore my projects below to see my skills in action.
            </motion.p>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -12 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <TypewriterText 
              text="Code is poetry in motion"
              className="text-4xl font-serif italic text-secondary"
              delay={0.5}
            />
          </motion.div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={skillsContainerVariants}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-archivo text-foreground mb-12 grainy-texture"
            variants={skillItemVariants}
            viewport={{ once: true }}
          >
            MY SKILLS
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Frontend",
                skills: [
                  "• React & Next.js",
                  "• TypeScript", 
                  "• Tailwind CSS",
                  "• Framer Motion"
                ]
              },
              {
                number: "02", 
                title: "Backend",
                skills: [
                  "• Node.js & Express",
                  "• Python & FastAPI",
                  "• RESTful APIs",
                  "• Database Design"
                ]
              },
              {
                number: "03",
                title: "Cloud & DevOps", 
                skills: [
                  "• AWS Services",
                  "• Serverless Architecture",
                  "• CI/CD Pipelines",
                  "• Docker"
                ]
              },
              {
                number: "04",
                title: "AI & ML", 
                skills: [
                  "• OpenAI Integration",
                  "• RAG Systems",
                  "• Machine Learning",
                  "• Data Processing"
                ]
              }
            ].map((expertise, index) => (
              <motion.div 
                key={expertise.number}
                className="space-y-4"
                variants={skillItemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="text-4xl font-mono text-accent">
                  {expertise.number}
                </div>
                <h3 className="text-2xl font-archivo text-foreground">
                  {expertise.title}
                </h3>
                <ul className="space-y-2 text-foreground/80">
                  {expertise.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}