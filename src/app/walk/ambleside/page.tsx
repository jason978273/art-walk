'use client'

import React from 'react'
import WalkPage from '@/components/WalkPage'
import WalkHeader from '@/components/WalkHeader'
import { walks } from '@/data/walks'

export default function AmblesideWalk() {
  const walk = walks.find(w => w.id === 'ambleside')!
  
  return (
    <div className='min-h-screen'>
      <div className='max-w-4xl mx-auto px-4 py-8'>
        <WalkHeader />
        <WalkPage walk={walk}>
          {/* Add specific Ambleside content here */}
        </WalkPage>
      </div>
    </div>
  )
}