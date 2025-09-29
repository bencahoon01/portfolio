"use client"

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const SCROLL_POSITION_KEY = 'scroll-position'

export default function ScrollRestorer() {
  const pathname = usePathname()

  useEffect(() => {
    const scrollContainer = document.querySelector('.snap-y')
    if (!scrollContainer) return

    const handleScroll = () => {
      if (pathname === '/') {
        sessionStorage.setItem(SCROLL_POSITION_KEY, scrollContainer.scrollTop.toString())
      }
    }

    // Restore scroll position on navigating back to home
    if (pathname === '/') {
      const savedPosition = window.location.hash ? null : sessionStorage.getItem(SCROLL_POSITION_KEY)
      if (savedPosition) {
        // Use a timeout to ensure the layout is stable before scrolling
        setTimeout(() => {
          scrollContainer.scrollTop = parseInt(savedPosition, 10)
        }, 0)
      }
    }

    scrollContainer.addEventListener('scroll', handleScroll)
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll)
    }
  }, [pathname])

  return null
}