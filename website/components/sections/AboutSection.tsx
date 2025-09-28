"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section id="about" className="snap-start h-screen flex items-center justify-center relative z-20 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
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
            whileHover={{ 
              scale: 1.1, 
              rotate: -8,
              transition: { duration: 0.3 }
            }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-4xl font-serif italic text-secondary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {"Code is poetry in motion"}
            </motion.h3>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-6xl md:text-8xl font-archivo text-foreground mb-12 grainy-texture"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            MY EXPERTISE
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                number: "01",
                title: "Software Development",
                skills: [
                  "• Full-stack web applications",
                  "• Modern JavaScript frameworks", 
                  "• RESTful API integration"
                ]
              },
              {
                number: "02", 
                title: "AI & Machine Learning",
                skills: [
                  "• Retrieval-Augmented Generation",
                  "• AI-Powered Browser Extension",
                  "• OpenAI API Integration"
                ]
              },
              {
                number: "03",
                title: "System Architecture", 
                skills: [
                  "• Scalable serverless backends",
                  "• Cloud infrastructure (AWS)",
                  "• Performance optimization"
                ]
              }
            ].map((expertise, index) => (
              <motion.div 
                key={expertise.number}
                className="space-y-4"
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4 + (index * 0.2),
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="text-4xl font-mono text-accent"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.6 + (index * 0.2),
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                >
                  {expertise.number}
                </motion.div>
                <motion.h3 
                  className="text-2xl font-archivo text-foreground"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + (index * 0.2) }}
                  viewport={{ once: true }}
                >
                  {expertise.title}
                </motion.h3>
                <motion.ul 
                  className="space-y-2 text-foreground/80"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + (index * 0.2) }}
                  viewport={{ once: true }}
                >
                  {expertise.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skillIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.9 + (index * 0.2) + (skillIndex * 0.1) 
                      }}
                      viewport={{ once: true }}
                    >
                      {skill}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}