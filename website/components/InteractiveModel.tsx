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
      // Simple rotation animation - more subtle and less distracting
      groupRef.current.rotation.y += delta * 0.2
      
      // Torus rotates with subtle tilting motion
      torusRef.current.rotation.y += delta * 0.15
      torusRef.current.rotation.x += delta * 0.03  // Very subtle tilt - won't fully flip
    } catch (error) {
      // Handle animation errors gracefully
      console.error('Animation error:', error)
    }
  })

  return (
    <group ref={groupRef} position={[2, 0, 0]}>
      <mesh ref={torusRef} position={[0, 0, 0]}>
        <torusKnotGeometry args={[2.5, 0.4, 100, 16]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  )
}