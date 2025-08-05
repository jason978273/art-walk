import Image from 'next/image'
import React from 'react'

export default function Footer() {
  const sponsors = [
    { src: "/images/wvcac_logo.jpg", alt: "West Vancouver Community Arts Council" },
    { src: "/images/westvan.jpg", alt: "West Vancouver" },
  ];
  
  return (
    <footer className='bg-white text-white border-t border-gray-300 mt-auto py-6'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
          <div className='sponsors'>
            <h4 className='font-semibold mb-4 text-center text-gray-700 md:text-left'>Our Partners and Sponsors</h4>
            <div className='flex gap-6 sm:gap-8 md:gap-10 justify-center md:justify-start items-center'>
              {sponsors.map((sponsor, index) => (
                <div key={index} className='flex items-center justify-center w-[180px] h-[90px] bg-white rounded-md p-2'>
                  <Image 
                    src={sponsor.src}
                    alt={sponsor.alt}
                    width={140}
                    height={60}
                    className='opacity-80 hover:opacity-100 transition-opacity max-w-full max-h-full object-contain' 
                  />
                </div>
              ))}
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