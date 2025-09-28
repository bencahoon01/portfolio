"use client"

import { useEffect, useState } from "react"
import ShinyText from './ShinyText';

export default function Header() {
  const [activeSection, setActiveSection] = useState("hero")

  const navItems = [
    { number: "01", label: "home", href: "#hero", id: "hero" },
    { number: "02", label: "about", href: "#about", id: "about" },
    { number: "03", label: "work", href: "#work", id: "work" },
    { number: "04", label: "experience", href: "#experience", id: "experience" },
    { number: "05", label: "contact", href: "#contact", id: "contact" },
  ]

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -90% 0px', // Trigger when section is 10% from top
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    navItems.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-6">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent pointer-events-none" />
      <nav className="flex justify-center relative z-10">
        <ul className="flex space-x-8 font-inter">
          {navItems.map((item, index) => (
            <li key={item.number} className="flex items-center space-x-2">
              <span className="text-secondary text-sm">{item.number}</span>
              <button
                onClick={() => scrollToSection(item.href)}
                className={`transition-all duration-300 hover:rotate-y-12 ${
                  activeSection === item.id ? "text-accent" : "text-foreground hover:text-accent"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {activeSection === item.id ? (
                  <ShinyText 
                    text={`// ${item.label}`}
                    disabled={false}
                    speed={5}
                    className="text-accent"
                  />
                ) : (
                  `// ${item.label}`
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
