'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MoveLeft } from 'lucide-react'
import { walks } from '@/data/walks'

export default function WalkHeader() {
  const path = usePathname()
  
  return (
    <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-gray-100">
      <Link 
        href="/" 
        className='inline-flex items-center hover:text-gray-800 hover:-translate-x-1 transition-all duration-200 group min-w-fit'
      >
        <MoveLeft className='mr-2 w-4 h-4 transition-transform duration-200'/>
        <span className="font-medium hidden sm:inline">Back to Home</span>
      </Link>
      
      <nav className="flex bg-black rounded-lg p-1 overflow-x-auto scrollbar-hide w-full sm:w-auto">
        <div className="flex gap-1 min-w-max">
          {walks.map((walkItem) => (
            <Link
              key={walkItem.id}
              href={walkItem.href}
              className={`px-2 sm:px-4 py-2 rounded-md font-medium transition-all duration-200 whitespace-nowrap text-sm sm:text-base ${
                path.replace(/\/$/, '') === walkItem.href.replace(/\/$/, '')
                ? 'bg-gray-700 shadow-sm hover:bg-gray-600'
                : 'text-gray-300 hover:bg-gray-600'
              }`}
            >
              {walkItem.title}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}