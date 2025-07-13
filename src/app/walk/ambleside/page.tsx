import React from 'react'
import WalkPage from '@/components/WalkPage'
import { walks } from '@/data/walks'

export default function AmblesideWalk() {
  const walk = walks.find(w => w.id === 'ambleside')!
  return (
    <WalkPage walk={walk}>
      
    </WalkPage>
  )
}