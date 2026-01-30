import React from 'react'
import ic from "../../assets/icon.png"

 const About = () => {
  return (
    <section className='relative flex flex-col items-center bg-black min-h-screen overflow-hidden '>
      <hr className='w-full h-[5px] relative rounded-full border-0 bg-[radial-gradient(circle_at_center,rgb(240,21,21),rgba(8,8,126,0.623))] mb-25'/>
    <h1 className='text-white border rounded-full flex flex-row items-center gap-4 border-red-800 px-10 py-3 uppercase tracking-[0.2em] backdrop-blur bg-black/20 drop-shadow-[0_0_10px_rgba(220,38,38,1)] font-semibold '>About Me
      <div className='w-3 h-3 bg-red-700 rounded-full animate-slowpulse'/>
    </h1> 
    <h1 className='font-nosifer text-red-800 text-2xl'>know more</h1>
    <div className='flex flex-row gap-30 mt-20'>
    <div className='w-100 h-90 border border-red-700 shadow-[0_0_8px_#ef4444,0_0_16px_#ef4444] rounded-md'>
    <img src={ic} alt="" />
    </div>
    <div className='w-100 h-90 border border-red-700 shadow-[0_0_8px_#ef4444,0_0_16px_#ef4444] rounded-md'>
    
    </div>
    </div>

     
            
    </section>
  )
}
export default About;
