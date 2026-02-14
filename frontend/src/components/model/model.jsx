import React from 'react'
import Demo from '../../../public/Scene';
import { Environment,OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { Canvas, useThree } from '@react-three/fiber';

const Responsive = () =>{
  const { size } = useThree()
  const ismobile = size.width < 768
  
  return(
    <Demo position={[ismobile ? -5 : 8,-10,0]}
    scale = {ismobile ? 1.1 : 1}
    />
  )

}

const Model = () => {
  
  return (
    <Canvas className='w-full h-[80vh] md:h-screen' camera={{position : window.innerWidth < 768
      ? [30,10,40]
      : [80,20,70],
      fov: window.innerWidth < 768 ? 35 : 15 }}>
      <ambientLight intensity={1.2}/>
        <OrbitControls enableZoom={false}/>
        <Suspense fallback={null}>
        <Responsive/>    
        </Suspense>
        <Environment preset='forest'/>
    </Canvas>
  )
}
export default Model;
