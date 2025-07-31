'use client'

import React from 'react'
import WalkPage from '@/components/WalkPage'
import WalkHeader from '@/components/WalkHeader'
import { walks } from '@/data/walks'

export default function DundaraveWalk() {
  const walk = walks.find(w => w.id === 'dundarave')!
  
  return (
    <div className='min-h-screen'>
      <div className='max-w-full md:max-w-6xl lg:max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-4 sm:py-8'>
        <WalkHeader />
        <WalkPage walk={walk}>
          {/* Add specific Dundarave content here */}
        </WalkPage>
      </div>
    </div>
  )
}