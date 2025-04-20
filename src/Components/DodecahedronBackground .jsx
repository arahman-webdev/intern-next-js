
'use client'

// components/DodecahedronBackground.js
import { Canvas, useFrame } from '@react-three/fiber'
import { Edges } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

const WireframeDodecahedron = () => {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
    }
  })

  return (
    <mesh ref={meshRef}>
      <dodecahedronGeometry args={[2, 0]} />
      <meshBasicMaterial transparent opacity={0.05} color="#ffffff" />
      <Edges threshold={15} color="#ffffff" scale={1.02} />
    </mesh>
  )
}

const DodecahedronBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} />

        {/* Multiple Dodecahedrons */}
        <group>
          <WireframeDodecahedron />
          <mesh position={[5, 3, -5]}>
            <dodecahedronGeometry args={[1.2, 0]} />
            <meshBasicMaterial transparent opacity={0.05} color="#ffffff" />
            <Edges threshold={15} color="#ffffff" scale={1.02} />
          </mesh>
          <mesh position={[-6, -4, -4]}>
            <dodecahedronGeometry args={[1.5, 0]} />
            <meshBasicMaterial transparent opacity={0.05} color="#ffffff" />
            <Edges threshold={15} color="#ffffff" scale={1.02} />
          </mesh>
        </group>
      </Canvas>
    </div>
  )
}

export default DodecahedronBackground
