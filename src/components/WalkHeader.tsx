'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MoveLeft } from 'lucide-react'
import { walks } from '@/data/walks'

export default function WalkHeader() {
  const path = usePathname()
  
  return (
    <header className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
      <Link 
        href="/" 
        className='inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors group'
      >
        <MoveLeft className='mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform'/>
        <span className="font-medium">Back to Home</span>
      </Link>
      
      {/* Walk tabs */}
      <nav className="flex bg-gray-50 rounded-lg p-1">
        {walks.map((walkItem) => (
          <Link
            key={walkItem.id}
            href={walkItem.href}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              path === walkItem.href
                ? 'text-gray-900 shadow-sm hover:bg-gray-600/50'
                : 'text-gray-600 hover:text-white hover:bg-gray-600/50'
            }`}
          >
            {walkItem.title}
          </Link>
        ))}
      </nav>
    </header>
  )
}