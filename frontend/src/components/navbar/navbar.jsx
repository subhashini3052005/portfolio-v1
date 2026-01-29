import React, { useState } from 'react'
import Name from "../../assets/name.png"
import {Menu,X} from "lucide-react"

const Navbar = () => {
  const [open,setopen]=useState(false);
  
  return (
    <nav className='border fixed w-full top-0 z-50 border-white/10 shadow-md backdrop-blur-sm'>
        <div className='flex justify-between px-20 py-5 mx-auto text-white'>
            <img src= {Name} alt="Stranger" className='h-15 drop-shadow-[0_10px_10px_rgba(220,38,38,1)]' />

            <ul className='hidden md:flex gap-8 pt-5 uppercase font-bold tracking-[0.05em]'>
                <li><a href="" className='hover:text-red-800 transition'>Home</a></li>
                <li><a href=""  className='hover:text-red-800 transition'>About</a></li>
                <li><a href=""  className='hover:text-red-800 transition'>Skills</a></li>
                <li><a href="" className='hover:text-red-800 transition'>Resume</a></li>
                <li><a href="" className='hover:text-red-800 transition'>Projects</a></li>
                <li><a href="" className='hover:text-red-800 transition'>Contacts</a></li>
            </ul>

            <button onClick={()=>setopen(!open)}className='md:hidden'>
              {open ? <X/>:<Menu/>}
            </button>
            </div>

            {open &&(
              <ul className='md:hidden space-y-3 px-5 pb-4 uppercase font-bold tracking-[0.05em] text-white'>
                <li><a href=""onClick={()=>setopen(false)}>Home</a></li>
                <li><a href=""  onClick={()=>setopen(false)}>About</a></li>
                <li><a href=""  onClick={()=>setopen(false)}>Skills</a></li>
                <li><a href="" onClick={()=>setopen(false)}>Resume</a></li>
                <li><a href="" onClick={()=>setopen(false)}>Projects</a></li>
                <li><a href="" onClick={()=>setopen(false)}>Contacts</a></li>
            </ul>
            )}      
    </nav>
  )
}
export default Navbar;