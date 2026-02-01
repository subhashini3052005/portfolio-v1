import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { FaLinkedin } from 'react-icons/fa'
import Floating from './floating'

 const About = () => {
  return (
    <section className='relative flex flex-col items-center bg-[#02040f] min-h-screen pb-20 overflow-hidden '>
      <hr className='w-full h-[5px] relative rounded-full border-0 bg-[radial-gradient(circle_at_center,rgb(240,21,21),rgba(8,8,126,0.623))] mb-25'/>
      
    <Floating/>

    <h1 className='text-cyan-100/80 border-cyan-500/20 bg-[#02040f]/60 drop-shadow-[0_0px_12px_rgba(34,211,238,0.6)] border rounded-full flex flex-row items-center gap-4 px-10 py-3 uppercase tracking-[0.2em] backdrop-blur  font-semibold '>About Me
      <div className='w-3 h-3 bg-cyan-400/70 rounded-full animate-slowpulse'/>
    </h1> 

    <div className='flex w-full md:px-14 px-6 items-stretch flex-col max-w-7xl md:flex-row gap-30 mt-20'>

    <div className='relative group hover:scale-105 transistion duration-300 text-cyan-200 w-full items-center px-10 py-12 max-w-3xl  border border-cyan-500/25 shadow-[0_0_40px_rgba(15,23,42,0.9),0_0_70px_rgba(34,211,238,0.15)] bg-[#02040f]/80 backdrop-blur rounded-md flex flex-col'>
    <p className='uppercase tracking-[0.35em] text-xs text-cyan-400/40'>Subject Monitoring — Online</p>

    <div className='w-36 h-36 flex items-center justify-center relative mt-5'>

      <div className='w-30 h-30 flex items-center justify-center rounded-full bg-cyan-500/20 group-hover:scale-115 transistion duration-300'>
        <svg className='w-20 h-20 text-cyan-300/80' viewBox='0 0 24 24' fill='currentcolor'>
          <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z"/>
        </svg>
      </div>

    </div>

    <h1 className='uppercase tracking-wide font-bold text-3xl text-cyan-300 mt-5 '>subhashini</h1>
      <p className='uppercase tracking-widest text-xs text-cyan-400/60 mt-3'>full stack developer</p>

      <div className='mt-7 text-sm text-cyan-300/40 text-center font-mono space-y-1 '>
        <p>&gt; initializing subject profile...</p>
        <p>&gt; system integrity: stable</p>
        <p>&gt; cognitive state: focused</p>
      </div>

      <div className='flex mt-8 gap-6 '>
        <a href="https://www.linkedin.com/in/subhashini-s-b5406b279/"><FaLinkedin className='w-7 h-7 text-cyan-400/70 hover:text-cyan-200 hover:scale-110 transistion duration-300'/></a>
        <a href="https://github.com/subhashini3052005"><FaGithub className='w-7 h-7 text-cyan-400/70 hover:text-cyan-200 hover:scale-110 transistion duration-300'/></a>
        <a href="mailto:ssubhashini575@gmail.com"><HiOutlineMail className='w-7 h-7  text-cyan-400/70 hover:text-cyan-200 hover:scale-110 transistion duration-300'/></a>
      </div>

    </div>

    <div className='relative font-mono hover:rotate-4 hover:translate-y-1 transistion duration-300
     text-cyan-200 w-full max-w-3xl px-10 py-12
     border border-cyan-500/25
     shadow-[0_0_40px_rgba(15,23,42,0.9),0_0_70px_rgba(34,211,238,0.15)]
     bg-[#02040f]/80 backdrop-blur rounded-md flex flex-col'>
        <p className='text-center uppercase text-cyan-400/50 tracking-[0.35em] text-xs '>
        hawkins national laboratory
        </p>

        <div className='w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent   mt-6'/>

        <div className='text-sm md:text-base space-y-4 mt-9  '>
          <div className='flex justify-between'>
            <span className='text-cyan-400/60 uppercase'>subject</span>
            <span className='text-cyan-200 tracking-widest'>011</span>
          </div>

          <div className='flex justify-between'>
            <span className='text-cyan-400/60 uppercase'>alias</span>
            <span className='text-cyan-200 tracking-widest uppercase'>subhashini</span>
          </div>

          <div className='flex justify-between'>
            <span className='text-cyan-400/60 uppercase'>clearance</span>
            <span className='text-cyan-200 tracking-widest uppercase'>level 3</span>
          </div>
          
          <div className='flex justify-between'>
            <span  className='text-cyan-400/60 uppercase'>certificate</span>
            <span className='text-cyan-300 tracking-widest'>006</span>
          </div>

          <div className='flex justify-between'>
            <span  className='text-cyan-400/60 uppercase'>project</span>
            <span className='text-cyan-300 tracking-widest'>004</span>
          </div>

          <div className='flex justify-between'>
            <span  className='text-cyan-400/60 uppercase'>lines</span>
            <span className='text-cyan-300 tracking-widest'>100K</span>
          </div>

          <div className='flex justify-between'>
            <span  className='text-cyan-400/60 uppercase'>status</span>
            <span className='text-cyan-200 tracking-widest uppercase animate-pulse'>active</span>
          </div>

        </div>

        <div className='text-center mt-8  uppercase tracking-[0.4em] text-xs text-cyan-500/30'>
          <p>
        authorized personnel only
          </p>
        </div>
    
    </div>
    </div>
         
    </section>
  )
}
export default About;
