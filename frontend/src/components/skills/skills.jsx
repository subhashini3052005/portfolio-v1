import React from 'react'
import {FaReact, FaNodeJs, FaGitAlt, FaDocker, FaPython} from 'react-icons/fa';
import {SiTailwindcss, SiMongodb, SiThreedotjs} from 'react-icons/si';
import Floatingc from './floating';

const Skillbar=({icon:Icon,name,level})=>{
  const Filled= Math.round(level/10);
  const Empty= 10-Filled;
  return(
    <p className='ml-4 flex items-center gap-2'>
      <Icon className='text-cyan-400 text-sm opacity-80' />
      <span className='inline-block w-24'>
        {name}
      </span>
      <span className='text-cyan-400 animate-pulse'>
        [
          <span className='text-cyan-300'> 
            {"█".repeat(Filled)}
          </span>
          <span className='text-cyan-800'>
            {"░".repeat(Empty)}
          </span>
        ]
      </span>
      <span className='text-cyan-400/60 ml-2'>
        {level}%
      </span>
    </p>
  )
};

const SkillbarRed=({icon:Icon,name,level})=>{
  const Filled= Math.round(level/10);
  const Empty= 10-Filled;
  return(
    <p className='ml-4 flex items-center gap-2'>
      <Icon className='text-red-400 text-sm opacity-80' />
      <span className='inline-block w-24 text-red-200'>
        {name}
      </span>
      <span className='text-red-400 animate-pulse'>
        [
          <span className='text-red-600'> 
            {"█".repeat(Filled)}
          </span>
          <span className='text-red-800'>
            {"░".repeat(Empty)}
          </span>
        ]
      </span>
      <span className='text-red-400/60 ml-2'>
        {level}%
      </span>
    </p>
  )
};


const Skills = () => {
  return (
    <section className='min-h-screen bg-gradient-to-b from-[#020B16] via-[#2A0B14] to-[#7A0F1A]
     flex flex-col items-center justify-center relative py-5 px-6 '>
      <Floatingc/>
      <h1 className='text-4xl md:text-6xl font-extralight tracking-widest text-center text-cyan-200 font-mono drop-shadow-[0_0_18px_rgba(34,211,238,0.35)] uppercase'>
        skills matrices
      </h1>

      <p className='text-sm text-cyan-400/60 text-center mt-4 mb-16 font-semibold font-mono'>
        Capabilities exercised across parallel technical domains.
      </p>

      <div className='w-full max-w-4xl bg-gradient-to-b from-slate-950 via-rose-950/10 to-red-900 rounded-lg shadow-lg font-mono text-sm text-cyan-200 z-50 '>

        <div className='flex gap-2 py-2 px-4 items-center border-b border-cyan-500/20'> 
          <div className='w-3 h-3 rounded-full bg-red-500' />
          <div className='w-3 h-3 rounded-full bg-yellow-500'/>
          <div className='w-3 h-3 rounded-full bg-green-500'/>
          <p className='ml-4 text-cyan-400'>skills — terminal</p>
        </div>

        <div className='p-6 space-y-8'>

          <div>
            <p className='text-cyan-400'>$ ls frontend</p>
            <div className='mt-2 space-y-1'>
              <Skillbar icon={FaReact} name="React" level={80}/>
              <Skillbar icon={SiTailwindcss} name="Tailwindcss" level={75}/>
              <Skillbar icon={SiThreedotjs} name="Three.js" level={60} />
            </div>
          </div>

          <div>
            <p className='text-red-400'>$ ls backend</p>
            <div className='mt-2 space-y-1'>
              <SkillbarRed icon={FaNodeJs} name="Node.js" level={70}/>
              <SkillbarRed icon={SiMongodb} name="Mongodb" level={65}/>
              <SkillbarRed icon={FaPython} name="Python" level={80}/>
            </div>
          </div>

          <div>
            <p className='text-red-400'> $ ls tools</p>
            <div className='mt-2 space-y-1'>
              <SkillbarRed icon={FaDocker} name="Docker" level={50}/>
              <SkillbarRed icon={FaGitAlt} name="Git" level={85}/>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}
export default Skills;