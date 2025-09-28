"use client"

import { useEffect, useState } from "react"

export default function Header() {
  const [currentSection, setCurrentSection] = useState(0)

  const navItems = [
    { number: "01", label: "home", href: "#hero" },
    { number: "02", label: "about", href: "#about" },
    { number: "03", label: "work", href: "#work" },
    { number: "04", label: "experience", href: "#experience" },
    { number: "05", label: "contact", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const section = Math.floor(scrollPosition / windowHeight)
      setCurrentSection(section)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
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
                  currentSection === index ? "text-accent" : "text-foreground hover:text-accent"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                // {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
