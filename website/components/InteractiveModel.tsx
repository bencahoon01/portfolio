"use client"

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh, Group } from 'three'

export default function InteractiveModel() {
  const groupRef = useRef<Group>(null)
  const torusRef = useRef<Mesh>(null)

  useFrame((state, delta) => {
    if (!groupRef.current || !torusRef.current) return

    try {
      // Mouse cursor following effect with parallax
      const { x, y } = state.mouse
      
      // Add some debugging (remove after testing)
      console.log('Mouse position:', { x, y })
      
      // Main group follows mouse with rotation
      groupRef.current.rotation.y = x * 0.3
      groupRef.current.rotation.x = y * 0.2
      
      // Torus has additional subtle rotation based on mouse position
      torusRef.current.rotation.z = x * 0.15
      torusRef.current.rotation.y = y * 0.1
      
      // Subtle position offset for parallax effect
      groupRef.current.position.x = x * 0.5
      groupRef.current.position.y = y * 0.3
    } catch (error) {
      // Handle animation errors gracefully
      console.error('Animation error:', error)
    }
  })

  return (
    <group ref={groupRef}>
      <mesh ref={torusRef}>
        <torusKnotGeometry args={[2.5, 0.6, 100, 16]} />
        <meshBasicMaterial color="white" wireframe />
      </mesh>
      
      <mesh position={[3, 0, 0]}>
        <sphereGeometry args={[0.6, 20, 20]} />
        <meshBasicMaterial color="white" wireframe />
      </mesh>
      
      <mesh position={[-3, 1, 0]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshBasicMaterial color="white" wireframe />
      </mesh>
    </group>
  )
}