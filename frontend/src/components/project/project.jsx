import React from 'react'
import net from '../../assets/project/net.png'
import vb from '../../assets/project/VB.png'

 const Project = () => {
  return (
    <section className='min-h-screen bg-[#020B16] py-28 px-4 text-cyan-200 font-mono'>
        <h1 className='text-center md:text-6xl text-4xl tracking-widest uppercase drop-shadow-[0_0_18px_rgba(34,211,238,0.35)] mb-6'>
        dimension breachers
        </h1>

        <p className='text-center text-cyan-400/60 text-semibold mb-20'>
        Recorded anomalies caused by experimental engineering systems
        </p>

        <div className='max-w-6xl mx-auto'>
            <div className='grid md:grid-cols-2 gap-10 items-center border border-cyan-500/30
             md:px-10 px-6 py-10 rounded-xl bg-[#02040f]/80 backdrop-blur shadow-[0_0_30px_rgba(15,23,42,0.9),0_0_60px_rgba(34,211,238,0.12)]
             group hover:scale-104 transistion duration-300'>
                <div className='relative overflow-hidden rounded-lg'>
                    <img src={net} alt="" className='w-full h-64 object-cover rounded-lg ' />
                    <div className='absolute inset-0 bg-gradient-to-t from-[#02040Tf] via-transparent to-transparent'/>
                </div>
                <div>
                    <p className='uppercase text-cyan-400/60 text-xs mb-2'>breach id: br-01</p>
                    <h3 className='text-2xl text-cyan-300 mb-1'>Netflix Login Page Clone</h3>
                    <p className='text-sm text-cyan-400 mb-4'>DIMENSION → Front End</p>
                    <p className='text-sm text-cyan-300/70 mb-6 leading-relaxed'>A responsive clone of Netflix’s login interface built to replicate layout, styling, and user interaction behavior.</p>
                    <div className='flex flex-wrap gap-2'>
                        <span className='px-3 py-1 border border-cyan-500/30 rounded-full text-xs'>React</span>
                        <span className='px-3 py-1 border border-cyan-500/30 rounded-full text-xs'>CSS</span>
                        <span className='px-3 py-1 border border-cyan-500/30 rounded-full text-xs'>JavaScript</span>
                    </div>
                    <a href="https://github.com/subhashini3052005/netflix"><div className='mt-4 text-center border border-cyan-300/20 rounded-lg py-3 group-hover:bg-cyan-400/20 
                    group-hover:scale-104 transistion duration-300'>View Details</div></a>
                </div>

            </div>

        </div>

        <div className='max-w-6xl mx-auto mt-10'>
            <div className='grid md:grid-cols-2 gap-10 items-center border border-cyan-500/30
             md:px-10 px-6 py-10 rounded-xl bg-[#02040f]/80 backdrop-blur shadow-[0_0_30px_rgba(15,23,42,0.9),0_0_60px_rgba(34,211,238,0.12)]
             group hover:scale-104 transistion duration-300'>
                <div className='relative overflow-hidden rounded-lg'>
                    <img src={vb} alt="" className='w-full h-64 object-cover rounded-lg ' />
                    <div className='absolute inset-0 bg-gradient-to-t from-[#02040Tf] via-transparent to-transparent'/>
                </div>
                <div>
                    <p className='uppercase text-cyan-400/60 text-xs mb-2'>breach id: br-02</p>
                    <h3 className='text-2xl text-cyan-300 mb-1'>Virtual Browser System</h3>
                    <p className='text-sm text-cyan-400 mb-4'>DIMENSION → Secure Sandboxing</p>
                    <p className='text-sm text-cyan-300/70 mb-6 leading-relaxed'>An isolated browser environment designed to safely analyze
              phishing and malicious websites without risking the host system.</p>
                    <div className='flex flex-wrap gap-2'>
                        <span className='px-3 py-1 border border-cyan-500/30 rounded-full text-xs'>Docker</span>
                        <span className='px-3 py-1 border border-cyan-500/30 rounded-full text-xs'>Selinium</span>
                        <span className='px-3 py-1 border border-cyan-500/30 rounded-full text-xs'>Python</span>
                        <span className='px-3 py-1 border border-cyan-500/30 rounded-full text-xs'>Machine Learning</span>
                    </div>
                    <a href="https://github.com/riyazahmed2144/VB-AI-ML"><div className='mt-4 text-center border border-cyan-300/20 rounded-lg py-3 group-hover:bg-cyan-400/20 
                    group-hover:scale-104 transistion duration-300'>View Details</div></a>
                </div>

            </div>

        </div>

    </section>
  )
}
export default Project;