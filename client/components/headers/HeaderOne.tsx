import React from 'react'

export function HeaderOne() {
  return (
    <div className='lg:w-[1440px] bg-blue-900 mx-auto mt-6 flex justify-between items-center px-10 py-4 shadow-lg rounded-2xl'>
      <div>
        <p className='text-2xl font-bold text-white cursor-pointer font-mono italic'>MERN BLOG</p>
      </div>
      <div className='flex space-x-10'>
        <p className='text-white cursor-pointer'>Home</p>
        <p className='text-white cursor-pointer'>About</p>
        <p className='text-white cursor-pointer'>Services</p>
      </div>
    </div>
  )
}
