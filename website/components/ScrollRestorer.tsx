"use client"

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

const SCROLL_POSITION_KEY = 'scroll-position'

export default function ScrollRestorer() {
  const pathname = usePathname()
  // useSearchParams is used to re-trigger the effect on hash changes
  const searchParams = useSearchParams()

  useEffect(() => {
    // This component is only for restoring scroll on the home page.
    if (pathname !== '/') {
      return
    }

    const hash = window.location.hash

    // 1. Handle navigation from header clicks (e.g., from a /work page to /#about)
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        // Use a timeout to ensure the element is rendered, especially with animations.
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100) // A small delay is often sufficient.
        return // Exit early, we've handled the scroll
      }
    }

    // 2. Handle browser 'back' button from a work page to the home page
    // We check document.referrer to see where the user came from.
    if (document.referrer.includes('/work/')) {
      const workSection = document.getElementById('work')
      workSection?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return // Exit early
    }

    // 3. Fallback to your original session storage logic for general navigation
    const savedPosition = sessionStorage.getItem(SCROLL_POSITION_KEY)
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition, 10))
    }
  }, [pathname, searchParams]) // Re-run when path or search params (including hash) change

  // This component does not render anything.
  return null;
}