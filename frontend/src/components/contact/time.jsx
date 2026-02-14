import React from 'react'
import Tm from '../../../public/clock/Clock'
import { Environment, OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float } from '@react-three/drei'

 const Time = () => {
  return (
    <Canvas camera={{position:[100,40,20],fov:45}}>
        <ambientLight />
        <OrbitControls enableZoom={false}/>
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Tm position={[8,-32,0]} scale={0.27}/>
            </Float>
        </Suspense>
        <Environment preset='forest'/>
    </Canvas>
  )
}
export default Time;