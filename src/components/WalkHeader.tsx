'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MoveLeft } from 'lucide-react'
import { walks } from '@/data/walks'

export default function WalkHeader() {
  const path = usePathname()
  
  return (
    <header className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 lg:gap-4 mb-6 lg:mb-8 pb-4 lg:pb-6 border-b border-gray-100 w-full">
      <Link 
        href="/" 
        className='inline-flex items-center hover:text-gray-800 hover:-translate-x-1 transition-all duration-200 group min-w-fit'
      >
        <MoveLeft className='mr-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200'/>
        <span className="font-medium hidden sm:inline text-sm sm:text-base lg:text-lg">Back to Home</span>
      </Link>

      <nav className="w-full lg:w-auto overflow-x-auto">
        <div className="flex gap-1 bg-black rounded-lg p-1">
          <div className="flex gap-1 min-w-max">
            {walks.map((walkItem) => (
              <Link
                key={walkItem.id}
                href={walkItem.href}
                className={`px-2 py-2.5 sm:px-3 sm:py-2.5 lg:px-4 lg:py-3 rounded-md font-medium transition-all duration-200 text-sm lg:text-base whitespace-nowrap min-h-[44px] flex items-center ${
                  path.replace(/\/$/, '') === walkItem.href.replace(/\/$/, '')
                    ? 'text-white bg-gray-700 shadow-sm hover:bg-gray-600'
                    : 'text-gray-300 hover:bg-gray-600'
                }`}
              >
                {walkItem.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}