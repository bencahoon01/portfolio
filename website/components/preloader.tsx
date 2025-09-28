"use client"

import { useState, useEffect } from "react"

export default function PreLoader() {
  // We'll start by assuming the preloader should be hidden
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if we've already shown the preloader in this session
    const hasLoaded = sessionStorage.getItem("preloader-shown")

    if (!hasLoaded) {
      // If not, show it
      setIsVisible(true)

      const timer = setTimeout(() => {
        setIsVisible(false)
        // Once it's done, set the flag in session storage
        sessionStorage.setItem("preloader-shown", "true")
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, []) // This effect runs only once when the component mounts

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center transition-opacity duration-1000">
      <div className="relative">
        <div className="circular-text w-32 h-32 flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <defs>
              <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
            </defs>
            <text className="text-xs fill-secondary font-mono">
              <textPath href="#circle">LOADING...INITIALIZING...SYSTEMS...ONLINE...</textPath>
            </text>
          </svg>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  )
}
