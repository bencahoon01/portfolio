"use client"

import { useEffect, useRef } from 'react'
import { useFrame, useThree, extend } from '@react-three/fiber'
import { AsciiEffect } from 'three-stdlib'

extend({ AsciiEffect })

export default function AsciiRenderer() {
  const { size, gl, scene, camera } = useThree()
  const effectRef = useRef<any>()

  useEffect(() => {
    if (!gl || !scene || !camera) return

    try {
      // Initialize the AsciiEffect with proper error handling
      const effect = new AsciiEffect(gl, ' .:-+*=%@#', { invert: false })
      effectRef.current = effect
      
      // Style the DOM element that the effect will create
      if (effect.domElement) {
        effect.domElement.style.position = 'absolute'
        effect.domElement.style.top = '0px'
        effect.domElement.style.left = '0px'
        effect.domElement.style.pointerEvents = 'none'
        effect.domElement.style.color = '#EAEAEA'
        effect.domElement.style.backgroundColor = '#0A0A0A'
        effect.domElement.style.fontFamily = 'monospace'
        effect.domElement.style.fontSize = '10px'
        effect.domElement.style.lineHeight = '1'
        effect.domElement.style.zIndex = '1'
        effect.domElement.style.width = '100%'
        effect.domElement.style.height = '100%'
        
        // Add to DOM
        const container = gl.domElement.parentElement
        if (container) {
          container.appendChild(effect.domElement)
        }
      }
    } catch (error) {
      console.warn('ASCII Effect could not be initialized:', error)
    }

    return () => {
      if (effectRef.current?.domElement) {
        const container = gl.domElement.parentElement
        if (container && container.contains(effectRef.current.domElement)) {
          container.removeChild(effectRef.current.domElement)
        }
      }
    }
  }, [gl, scene, camera])

  useEffect(() => {
    if (effectRef.current) {
      effectRef.current.setSize(size.width, size.height)
    }
  }, [size])

  let frameCount = 0
  useFrame(() => {
    frameCount++
    if (frameCount % 2 === 0 && effectRef.current && scene && camera) {
      try {
        effectRef.current.render(scene, camera)
      } catch (error) {
        // Silently handle render errors
      }
    }
  }, 1)

  return null
}