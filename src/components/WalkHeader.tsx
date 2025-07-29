'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MoveLeft, House } from 'lucide-react'
import { walks } from '@/data/walks'

export default function WalkHeader() {
  const path = usePathname()
  
  return (
    <header className="flex flex-col theme-bg-primary lg:flex-row items-start lg:items-center justify-between gap-3 lg:gap-4 mb-6 lg:mb-8 p-4 border-b theme-border w-full rounded-lg">
      <Link 
        href="/" 
        className='inline-flex items-center text-white hover:opacity-80 hover:underline hover:translate-x-1 transition-all duration-200 group min-w-fit'
      >
        <MoveLeft className='ml-2 mr-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 hidden sm:block'/>
        <House className='ml-2 mr-2 w-4 h-4 transition-transform duration-200 block sm:hidden'/>
        <span className="font-medium hidden sm:inline text-sm sm:text-base lg:text-lg">Back to Home</span>
      </Link>

      <nav className="w-full lg:w-auto overflow-x-auto">
        <div className="flex gap-1 theme-border rounded-lg p-1">
          <div className="flex gap-1 min-w-max">
            {walks.map((walkItem) => (
                <Link
                key={walkItem.id}
                href={walkItem.href}
                className={`px-2 py-2.5 sm:px-3 sm:py-2.5 lg:px-4 lg:py-3 rounded-md font-medium transition-all duration-200 text-sm lg:text-base whitespace-nowrap min-h-[44px] flex items-center justify-center text-center ${
                  path.replace(/\/$/, '') === walkItem.href.replace(/\/$/, '')
                  ? 'theme-bg-secondary text-white font-semibold shadow-sm hover:underline'
                  : 'text-white hover:opacity-80 hover:theme-bg-secondary hover:underline transition-colors'
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