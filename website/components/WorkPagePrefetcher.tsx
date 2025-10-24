'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'


// Would typically generate this list dynamically
// seems to load slowly sometimes so prefetching helps
const workSlugs = ['project-one', 'project-two', 'project-three']

// This flag will persist across component re-mounts for the entire session
let hasPrefetched = false

export default function WorkPagePrefetcher() {
  const router = useRouter()

  useEffect(() => {
    // Only run the pre-compilation logic if it hasn't been done this session
    if (hasPrefetched) {
      return
    }

    workSlugs.forEach((slug) => {
      const path = `/work/${slug}`
      // 1. Prefetch the page for fast client-side navigation
      router.prefetch(path)

      // 2. In development, also trigger a fetch to force server-side compilation.
      // This avoids the "Compiling..." delay on first navigation.
      if (process.env.NODE_ENV === 'development') {
        // The unique query param (`?_precompile=true`) and `cache: 'no-store'`
        // are crucial to prevent this from breaking the Next.js router cache.
        fetch(`${path}?_precompile=true`, { cache: 'no-store' }).catch(console.error)
      }
    })

    hasPrefetched = true
  }, [router])

  return null
}