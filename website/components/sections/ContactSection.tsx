'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Download, Copy, Check, X, BellRing, CheckCircle } from 'lucide-react'
import { useIsMobile } from '@/hooks/use-mobile'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function ContactSection() {
  const [emailCopied, setEmailCopied] = useState(false)
  const email = 'bencahoon.contact@gmail.com'
  const isMobile = useIsMobile();
  const contactClasses = `text-5xl sm:text-6xl md:text-8xl font-archivo mb-4 ${
    isMobile ? 'text-white' : 'text-foreground grainy-texture'
  }`;
  
  // State for the form submission status and notification
  const [formStatus, setFormStatus] = useState('idle') // 'idle', 'submitting', 'success', 'error'

  // Controlled form state for input values and color logic
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  // Controlled input handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  // handleSubmit function
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents the page from redirecting
    setFormStatus('submitting');
    
    const formData = new FormData(event.currentTarget);
    
    try {
      const response = await fetch(event.currentTarget.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setFormStatus('success');
        setForm({ name: '', email: '', message: '' }); // Clear the form fields
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="snap-start min-h-screen w-full flex items-center justify-center relative z-20 py-20 px-4">
      {/* Notification Overlay */}
      <AnimatePresence>
        {formStatus === 'success' && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-background/80 border border-foreground/20 text-foreground p-8 text-center space-y-4 max-w-sm w-full rounded-2xl shadow-xl"
            >
              <div className="flex items-center justify-center gap-3">
                <CheckCircle size={32} className="text-accent flex-shrink-0" />
                <h3 className="text-2xl font-archivo text-accent">Message Sent!</h3>
              </div>
              <p className="text-foreground/80">
                Thank you for your interest. I'll get back to you shortly.
              </p>
              <button
                onClick={() => setFormStatus('idle')}
                className="mt-4 px-6 py-2 border-2 border-foreground/30 text-foreground/80 hover:bg-foreground/10 hover:border-foreground/50 hover:text-foreground font-mono text-sm transition-colors"
              >
                CLOSE
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full max-w-6xl mx-auto text-center">
        <motion.h2 
          className={contactClasses}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Let's Connect
        </motion.h2>

        <motion.p 
          className="text-lg md:text-xl text-foreground/80 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          Have a project in mind or just want to say hello? Fill out the form or reach out through my socials. Let's create something extraordinary together.
        </motion.p>
        
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left Column: Info & Links */}
          <motion.div 
            className="w-full md:w-1/3 text-center md:text-left space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="font-archivo text-2xl text-foreground mb-3">Email Me</h3>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <a href={`mailto:${email}`} className="text-lg text-foreground/80 hover:text-accent transition-colors">{email}</a>
                <button onClick={handleCopyEmail} className="relative text-foreground/60 hover:text-accent transition-colors">
                  {emailCopied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-archivo text-2xl text-foreground mb-4">Download Resume</h3>
              <motion.a href={`${basePath}/ben_resume.pdf`} download="Ben_Cahoon_Resume.pdf" className="inline-flex items-center gap-3 px-6 py-3 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 font-mono text-sm tracking-wider" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} >
                <Download size={18} />
                <span>RESUME</span>
              </motion.a>
            </div>
            <div>
              <h3 className="font-archivo text-2xl text-foreground mb-4">Links</h3>
              <motion.div className="flex justify-center md:justify-start space-x-8" initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ staggerChildren: 0.1 }} >
                <motion.a href="https://github.com/bencahoon01" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors duration-300" whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg></motion.a>
                <motion.a href="https://linkedin.com/in/bcahoon" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors duration-300" whileHover={{ scale: 1.2, rotate: -5 }} whileTap={{ scale: 0.9 }}><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg></motion.a>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Start of Right Column Code */}
          <div className="w-full md:w-2/3">
            {/* The Form Itself */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <form 
                onSubmit={handleSubmit}
                action="https://formspree.io/f/movkeoqw" 
                method="POST" 
                className="space-y-6 text-left"
              >
                <div className="space-y-2">
                  <label htmlFor="name" className="font-mono text-sm text-foreground/80">NAME</label>
                  <input type="text" id="name" name="name" required className={`w-full border-b-2 border-foreground/30 focus:border-accent p-3 outline-none transition-colors duration-300 ${form.name ? 'bg-white text-black' : 'bg-transparent text-foreground'}`} value={form.name} onChange={handleInputChange} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="font-mono text-sm text-foreground/80">EMAIL</label>
                  <input type="email" id="email" name="email" required className={`w-full border-b-2 border-foreground/30 focus:border-accent p-3 outline-none transition-colors duration-300 ${form.email ? 'bg-white text-black' : 'bg-transparent text-foreground'}`} value={form.email} onChange={handleInputChange} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="font-mono text-sm text-foreground/80">MESSAGE</label>
                  <textarea id="message" name="message" required rows={4} className={`w-full border-b-2 border-foreground/30 focus:border-accent p-3 outline-none transition-colors duration-300 resize-none ${form.message ? 'bg-white text-black' : 'bg-transparent text-foreground'}`} value={form.message} onChange={handleInputChange} />
                </div>
                <div className="text-right">
                  <motion.button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background hover:bg-accent transition-all duration-300 font-mono text-sm tracking-wider disabled:opacity-50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send size={18} />
                    <span>
                      {formStatus === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'}
                    </span>
                  </motion.button>
                  {formStatus === 'error' && <p className="text-red-500 mt-4">Something went wrong. Please try again.</p>}
                </div>
              </form>
            </motion.div>
          </div>
          {/* --- End of Right Column Code --- */}
        </div>
      </div>
    </section>
  )
}
