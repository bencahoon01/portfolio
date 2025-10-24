"use client"

import { useRef, useState, useEffect, useCallback } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh, Group } from 'three'

export default function InteractiveModel() {
  const groupRef = useRef<Group>(null)
  const torusRef = useRef<Mesh>(null)
  
  // Mouse interaction state
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  
  // Handle pointer down on the torus or nearby area
  const handlePointerDown = (event: any) => {
    setIsDragging(true)
    setDragStart({ x: event.clientX, y: event.clientY })
    event.stopPropagation()
  }
  
  // Global mouse event handlers for better interaction area
  const handleGlobalPointerMove = useCallback((event: PointerEvent) => {
    setDragStart(prev => {
      const deltaX = event.clientX - prev.x
      const deltaY = event.clientY - prev.y
      
      setRotation(currentRotation => ({
        x: currentRotation.x + deltaY * 0.003,
        y: currentRotation.y + deltaX * 0.003  
      }))

      return { x: event.clientX, y: event.clientY }
    })
  }, [])
  
  const handleGlobalPointerUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Handle hover states for cursor styling
  const handlePointerEnter = () => {
    setIsHovering(true)
    document.body.style.cursor = 'grab'
  }

  const handlePointerLeave = () => {
    setIsHovering(false)
    if (!isDragging) {
      document.body.style.cursor = 'auto'
    }
  }
  
  // Set up global event listeners for better interaction
  useEffect(() => {
    // Set cursor based on hover and drag state
    if (isDragging) {
      document.body.style.cursor = 'grabbing'
    } else {
      document.body.style.cursor = isHovering ? 'grab' : 'auto'
    }

    if (isDragging) {
      window.addEventListener('pointermove', handleGlobalPointerMove)
      window.addEventListener('pointerup', handleGlobalPointerUp)
      return () => {
        window.removeEventListener('pointermove', handleGlobalPointerMove)
        window.removeEventListener('pointerup', handleGlobalPointerUp)
      }
    }
  }, [isDragging, isHovering, handleGlobalPointerMove, handleGlobalPointerUp])

  // Cleanup cursor on component unmount
  useEffect(() => {
    return () => {
      document.body.style.cursor = 'auto'
    }
  }, [])

  useFrame((state: any, delta: number) => {
    if (!groupRef.current || !torusRef.current) return

    try {
      // Continue automatic group rotation
      groupRef.current.rotation.y += delta * 0.2
      
      // Combine automatic rotation with user input
      const autoRotationY = state.clock.elapsedTime * 0.15
      const autoRotationX = state.clock.elapsedTime * 0.03
      
      torusRef.current.rotation.y = autoRotationY + rotation.y
      torusRef.current.rotation.x = autoRotationX + rotation.x
    } catch (error) {
      console.error('Animation error:', error)
    }
  })

  return (
    <group ref={groupRef} position={[2, 0, 0]}>
      {/* invisible interaction area */}
      <mesh 
        position={[0, 0, 0]}
        onPointerDown={handlePointerDown}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        visible={false}
      >
        <sphereGeometry args={[4, 8, 8]} />
      </mesh>
      
      {/* Actual torus */}
      <mesh 
        ref={torusRef} 
        position={[0, 0, 0]}
        onPointerDown={handlePointerDown}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      >
        <torusKnotGeometry args={[2.5, 0.4, 80, 12]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  )
}