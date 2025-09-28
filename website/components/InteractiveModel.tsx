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
      
      // Torus has additional rotation on different axes for visual interest
      torusRef.current.rotation.z += delta * 0.15
      torusRef.current.rotation.x += delta * 0.1
    } catch (error) {
      // Handle animation errors gracefully
      console.error('Animation error:', error)
    }
  })

  return (
    <group ref={groupRef}>
      <mesh ref={torusRef}>
        <torusKnotGeometry args={[2.5, 0.4, 100, 16]} />
        <meshBasicMaterial color="white" wireframe />
      </mesh>

    </group>
  )
}