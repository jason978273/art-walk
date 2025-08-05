import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Walk } from '../data/walks'

export default function WalkCard({ walk }: { walk: Walk }) {
  return (
    <Link href={walk.href} className='group block shadow-lg transition-transform transform hover:scale-105'>
      <div className='bg-white rounded-2xl overflow-hidden carousel-shadow transition-all duration-300 group-hover:-translate-y-3'>
        <div className='relative h-64'>
        <Image src={walk.image} alt={walk.title} fill className='object-cover'/>
        </div>
        <div className='p-6'>
          <h3 className='text-2xl font-bold mb-2 theme-text-secondary'>
            {walk.title}
          </h3>
          <p className='text-gray-700'>
            {walk.description}
          </p>
        </div>
        <p className='p-2 text-xs text-gray-500 italic'>
            {walk.photoCredit}
        </p>
      </div>
    </Link>
  )
}