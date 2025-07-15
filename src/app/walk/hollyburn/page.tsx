'use client'

import React from 'react'
import WalkPage from '@/components/WalkPage'
import WalkHeader from '@/components/WalkHeader'
import { walks } from '@/data/walks'

export default function HollyburnWalk() {
  const walk = walks.find(w => w.id === 'hollyburn')!
  
  return (
    <div className='min-h-screen'>
      <div className='max-w-4xl mx-auto px-4 py-8'>
        <WalkHeader />
        <WalkPage walk={walk}>
          {/* Add specific Hollyburn content here */}
        </WalkPage>
      </div>
    </div>
  )
}
