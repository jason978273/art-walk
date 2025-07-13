import Image from 'next/image'
import React from 'react'


export default function Footer() {
  return (
    <footer className='bg-white text-gray-800 bottom-0 left-0 right-0 w-full py-6 z-50'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          <div className='sponsors'>
            <h4 className='font-semibold mb-2'>Our Partners and Sponsors</h4>
            <div className='flex gap-4'>
              <Image src="/images/westvan.png" alt="Sponsor 1" width={80} height={30} className='opacity-80 hover:opacity-100 transition-opacity' />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}