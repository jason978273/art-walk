import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-white text-white border-t border-gray-300 mt-auto py-6'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
          <div className='sponsors'>
            <h4 className='font-semibold mb-2 text-center text-gray-700 md:text-left'>Our Partners and Sponsors</h4>
            <div className='flex gap-4 justify-center md:justify-start'>
              <Image 
                src="/images/westvan.jpg" 
                alt="West Vancouver" 
                width={80} 
                height={30} 
                className='opacity-80 hover:opacity-100 transition-opacity' 
              />
            </div>
          </div>
          
          <div className='text-center md:text-right'>
            <p className='text-sm text-gray-600'>
              © {new Date().getFullYear()} West Vancouver Art Walk. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}