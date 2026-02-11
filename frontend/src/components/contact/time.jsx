import React from 'react'
import Tm from '../../../public/clock/Scene'
import { Environment, OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

 const Time = () => {
  return (
    <Canvas camera={{position:[80,20,70],fov:15}}>
        <ambientLight />
        <OrbitControls enableZoom={false}/>
        <Suspense fallback={null}>
            <Tm position={[8,-10,0]}/>
        </Suspense>
        <Environment preset='forest'/>
    </Canvas>
  )
}
export default Time;