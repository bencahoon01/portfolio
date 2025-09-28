"use client"

import CircularText from './CircularText'
import { ArrowDown } from 'lucide-react'

export default function ScrollIndicator() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
      <div 
        className="relative flex items-center justify-center cursor-pointer group"
        onClick={scrollToAbout}
      >
        {/* Custom CircularText with hover effect */}
        <div className="relative w-32 h-32 flex items-center justify-center animate-spin-slow">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <defs>
              <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
            </defs>
            <text className="text-xs fill-secondary font-mono transition-colors duration-200 group-hover:fill-gray-100">
              <textPath href="#circle">SCROLL-DOWN-SCROLL-DOWN-</textPath>
            </text>
          </svg>
        </div>
        
        <div className="absolute w-12 h-12 border-2 border-secondary rounded-full flex items-center justify-center transition-colors duration-200 group-hover:border-gray-100">
          <ArrowDown className="w-6 h-6 text-secondary animate-bounce transition-colors duration-200 group-hover:text-gray-100" />
        </div>
      </div>
    </div>
  )
}