"use client"

import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const [activeSection, setActiveSection] = useState("hero")
  const isWorkPage = pathname?.startsWith('/work/')

  const navItems = [
    { number: "01", label: "home", href: "#hero", id: "hero" },
    { number: "02", label: "about", href: "#about", id: "about" },
    { number: "03", label: "work", href: "#work", id: "work" },
    { number: "04", label: "experience", href: "#experience", id: "experience" },
    { number: "05", label: "contact", href: "#contact", id: "contact" },
  ]

  useEffect(() => {
    // If we're on a work page, set work as active
    if (isWorkPage) {
      setActiveSection("work")
      return
    }

    const scrollContainer = document.querySelector('.snap-y');
    if (!scrollContainer) return;

    // Handle scroll to top separately to ensure "home" is always active at the top
    const handleScroll = () => {
      if (scrollContainer.scrollTop < window.innerHeight / 2) {
        setActiveSection("hero");
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);

    const observerOptions = {
      root: scrollContainer,
      rootMargin: "-40% 0px -60% 0px", // Trigger when a section is 40% from the top of the viewport
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // If we're near the top, let the scroll handler manage the active state.
      if (scrollContainer.scrollTop < window.innerHeight / 2) {
        return;
      }
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    navItems.slice(1).forEach((item) => { // Observe all sections *except* the hero section
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
      scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [isWorkPage])

  const scrollToSection = (href: string) => {
    // If we're on a work page, navigate to home page with the section
    if (isWorkPage) {
      router.push(`/${href}`)
      return
    }

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
                className={`text-lg font-semibold transition-all duration-300 hover:rotate-y-12 ${
                  activeSection === item.id ? "text-accent" : "text-foreground hover:text-accent"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {`// ${item.label}`}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
