"use client"

import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh, Group } from 'three'

export default function InteractiveModel() {
  const groupRef = useRef<Group>(null)
  const torusRef = useRef<Mesh>(null)
  
  // Mouse interaction state
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  
  // Global mouse event handlers for better interaction area
  const handleGlobalPointerMove = (event: PointerEvent) => {
    if (!isDragging) return
    
    const deltaX = event.clientX - dragStart.x
    const deltaY = event.clientY - dragStart.y
    
    // Reduced sensitivity for smoother control
    setRotation({
      x: rotation.x + deltaY * 0.003, // Much less sensitive
      y: rotation.y + deltaX * 0.003  // Much less sensitive
    })
    
    setDragStart({ x: event.clientX, y: event.clientY })
  }
  
  const handleGlobalPointerUp = () => {
    setIsDragging(false)
  }
  
  // Handle pointer down on the torus or nearby area
  const handlePointerDown = (event: any) => {
    setIsDragging(true)
    setDragStart({ x: event.clientX, y: event.clientY })
    event.stopPropagation()
  }
  
  // Set up global event listeners for better interaction
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('pointermove', handleGlobalPointerMove)
      window.addEventListener('pointerup', handleGlobalPointerUp)
      
      return () => {
        window.removeEventListener('pointermove', handleGlobalPointerMove)
        window.removeEventListener('pointerup', handleGlobalPointerUp)
      }
    }
  }, [isDragging, dragStart, rotation])

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
      // Handle animation errors gracefully
      console.error('Animation error:', error)
    }
  })

  return (
    <group ref={groupRef} position={[2, 0, 0]}>
      {/* Larger invisible interaction area */}
      <mesh 
        position={[0, 0, 0]}
        onPointerDown={handlePointerDown}
        visible={false}
      >
        <sphereGeometry args={[4]} /> {/* Larger sphere for easier interaction */}
      </mesh>
      
      {/* Actual torus */}
      <mesh 
        ref={torusRef} 
        position={[0, 0, 0]}
        onPointerDown={handlePointerDown}
      >
        <torusKnotGeometry args={[2.5, 0.4, 100, 16]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  )
}