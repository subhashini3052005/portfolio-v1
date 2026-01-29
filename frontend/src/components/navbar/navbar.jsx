import React from 'react'
import Name from "../../assets/name.png"

const Navbar = () => {
  return (
    <nav className='border fixed w-full top-0 z-50 border-white/10'>
        <div className='flex justify-between px-20 py-5 mx-auto text-white'>
            <img src= {Name} alt="Stranger" className='h-15' />

            <ul className='flex gap-8 pt-5 uppercase font-bold tracking-[0.05em]'>
                <li><a href="" className='hover:text-red-800 transition'>Home</a></li>
                <li><a href=""  className='hover:text-red-800 transition'>About</a></li>
                <li><a href=""  className='hover:text-red-800 transition'>Skills</a></li>
                <li><a href="" className='hover:text-red-800 transition'>Resume</a></li>
                <li><a href="" className='hover:text-red-800 transition'>Projects</a></li>
                <li><a href="" className='hover:text-red-800 transition'>Contacts</a></li>
            </ul>
        </div>
    </nav>
  )
}
export default Navbar;