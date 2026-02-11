import React from 'react'
import Ck from './time'
import { FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { FaLinkedin } from 'react-icons/fa'
import { useState } from 'react'

 const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "79b5da49-32c5-45a6-8c85-b4b63eeab639");


    try {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (data.success) {
    setResult("Form Submitted Successfully ✓");
    event.target.reset();
  } else {
    setResult(`Error: ${data.message}`);
    console.error("Form Error:", data);
  }
} catch (error) {
  console.error("Network Error:", error);
  setResult("Network error. Please try again later.");
}

  };

  return (

    <div className='bg-[#7A0F1A] flex items-center flex-col font-mono gap-4 min-h-screen py-20'>
       <h1 className='uppercase text-4xl md:text-6xl tracking-widest text-red-400 drop-shadow-[0_0px_10px_rgba(220,38,38,1)]'>
        contact me
       </h1>

       <h1 className='border border-red-500/40 rounded-full px-10 uppercase text-red-300 text-lg mt-4 font-semibold backdrop-blur drop-shadow-[0_0px_10px_rgba(220,38,38,1)]
        flex flex-row items-center gap-3 tracking-[0.2em] bg-black/20  py-3 '>
        Get in Touch
        <div className='w-3 h-3 rounded-full bg-red-500 animate-pulse'/>
       </h1>

        <div className='flex md:flex-row flex-col gap-12 w-full justify-center items-center px-4 mt-10'>

       <div className='screen-full md:w-2/4 cursor-grab h-[360px] md:screen-[480px]'>Model</div>

       <form action="" onSubmit={onSubmit} className='relative group hover:scale-105 transistion duration-300 text-red-200 w-full gap-5
        items-center px-6 py-10 max-w-lg  border border-red-500/25 shadow-lg bg-red-900 backdrop-blur rounded-md flex flex-col'>

        <input type="text" name="name" placeholder='Your Name' required className='bg-transparent border bg-red-500/50 text-red-300 
        rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400  placeholder-red-300/50 px-4 py-3 w-full'/>

        <input type="email" name="email" placeholder='Your Email' required className='bg-transparent border bg-red-500/50 text-red-300 
        rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400  placeholder-red-300/50 px-4 py-3 w-full'/>

        <textarea name="message" rows="4" placeholder='Your Message' className='bg-transparent border bg-red-500/50 text-red-300 
        rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400  placeholder-red-300/50 px-4 py-3 w-full resize-none' />

        <div className='flex items-center justify-between w-full mt-8'>

            <div className='flex  gap-5'>
            <a href="https://www.linkedin.com/in/subhashini-s-b5406b279/"><FaLinkedin className='w-7 h-7 text-red-400 hover:scale-110 transistion duration-300 hover:text-red-300  '/></a>
            <a href="https://github.com/subhashini3052005"><FaGithub className='w-7 h-7 text-red-400 hover:scale-110 transistion duration-300 hover:text-red-300  '/></a>
            <a href="mailto:ssubhashini575@gmail.com"><HiOutlineMail className='w-7 h-7 text-red-400 hover:scale-110 transistion duration-300 hover:text-red-300  '/></a>
            </div>

            <button type='submit' className='border border-red-300/20 bg-black/20 px-10 uppercase tracking-[0.2em] text-semibold text-md cursor-pointer py-2 group-hover:scale-110 transistion duration-300 rounded-full'>
              Send
            </button>

        </div>

        {result && (
              <p className='text-sm mt-4 text-red-300'>{result}</p>
            )}

       </form>
       </div>
    </div>
  )
}
export default Contact;