"use client"

import CircularText from './CircularText'
import { ArrowDown } from 'lucide-react'

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
      <div className="relative flex items-center justify-center">
        <CircularText text="SCROLL-DOWN-SCROLL-DOWN-" />
        <div className="absolute w-12 h-12 border-2 border-secondary rounded-full flex items-center justify-center">
          <ArrowDown className="w-6 h-6 text-secondary animate-bounce" />
        </div>
      </div>
    </div>
  )
}