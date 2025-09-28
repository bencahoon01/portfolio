"use client"

import useEmblaCarousel from "embla-carousel-react"
import { useCallback } from "react"

type ProjectGalleryProps = {
  images: string[]
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div className="flex-shrink-0 flex-grow-0 basis-full min-w-0" key={index}>
              <img 
                src={src} 
                alt={`Project gallery image ${index + 1}`} 
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-background/50 text-foreground p-2 rounded-full hover:bg-accent hover:text-background transition-colors duration-300 backdrop-blur-sm"
        onClick={scrollPrev}
        aria-label="Previous image"
      >
        ←
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-background/50 text-foreground p-2 rounded-full hover:bg-accent hover:text-background transition-colors duration-300 backdrop-blur-sm"
        onClick={scrollNext}
        aria-label="Next image"
      >
        →
      </button>
    </div>
  )
}