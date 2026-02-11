import React from 'react'

 const Footers = () => {
  return (
    <div className='bg-[#7A0F1A] items-center justify-center flex flex-col gap-8 '>
        <hr className='w-1/2 bg-gradient-to-r from-transparent via-red-500/25 to-transparent border-none h-1
                    shadow-[0_0_20px_rgba(122,15,26,0.35)]  '/>
        <p className='text-bold font-mono text-md text-red-200/50 pb-6'>
        © 2026 SUBHASHINI.All Rights Reserved.
        </p>
    </div>
  )
}
export default Footers;