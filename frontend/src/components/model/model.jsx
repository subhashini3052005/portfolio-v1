import React from 'react'
import Demo from '../../../public/Scene';
import { Environment,OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

const Model = () => {
  return (
    <Canvas camera={{position:[80,20,70],fov:15}}>
      <ambientLight/>
        <OrbitControls enableZoom={false}/>
        <Suspense fallback={null}>
            <Demo position={[8,-10,0]}/>
        </Suspense>
        <Environment preset='forest'/>
    </Canvas>
    

  )
}
export default Model;
