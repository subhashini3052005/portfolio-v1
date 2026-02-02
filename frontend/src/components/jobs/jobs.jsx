import React from 'react'

 const Jobs = () => {
  return (

    <div className='bg-gradient-to-b from-[#02040f] via-[#0A1A2F] to-[#020B16]
     text-cyan-200 py-24 flex relative flex-col overflow-hidden items-center font-mono '>

        <div className='relative flex flex-col items-center w-full'>

            <h1 className='uppercase md:text-6xl text-4xl tracking-widest
             font-extralight drop-shadow-[0_0_18px_rgba(34,211,238,0.35)] text-cyan-200'>dimension shift</h1>

            <p className='text-cyan-400/60 mt-4 text-sm font-semibold'>Logged dimensional breaches caused by applied engineering skills</p>

            <div className='flex items-start mt-20 gap-12 '>
                <div className='flex-col flex items-center '>
                    <div className='w-5 h-5 rounded-full bg-[#2F8FE3] shadow-[0_0_20px_rgba(63,169,245,0.9)] animate-pulse'/>
                    <div className='h-[380px] w-[2px] bg-gradient-to-b from-transparent via-[#3FA9F5] to-transparent
                     shadow-[0_0_20px_rgba(63,169,245,0.9)]'/>
                </div>

                <div className='w-full max-w-3xl bg-[#02040F]/80 border border-cyan-500/30 text-cyan-200 group
                 shadow-[0_0_30px_rgba(15,23,42,0.9),0_0_60px_rgba(34,211,238,0.15)] backdrop-blur rounded-xl md:px-10 px-6 py-10
                 hover:rotate-[1.5deg] hover:translate-y-1 hover:scale-94 transition duration-300 hover:shadow-none hover:rounded-none'>

                    <div className='absolute border-t-8 border-b-8 border-r-8 
                    border-t-transparent border-b-transparent border-r-cyan-400n opacity-0 group-hover:opacity-100 transistion 
                    duration-300 -left-6 top-1/2 -translate-y-1/2' />

                    <h2 className='text-2xl text-center text-cyan-300 tracking-wide'>Full Stack Developer Intern</h2>
                    <h3 className='text-center text-cyan-400 text-lg mt-4'>Adventure Tech Solution</h3>
                    <p className='text-sm mt-4 text-cyan-300/70 text-center leading-relaxed'>Entered the Full-Stack Dimension to build responsive interfaces, integrate backend APIs, and optimize application performance.</p>
                    <p className='uppercase mt-6 text-xs text-cyan-400/40 tracking-wide text-center'>jun 2024 - jul 2024 • remote</p>
                </div>

            </div>

        </div>
    </div>
  )
}
export default Jobs;