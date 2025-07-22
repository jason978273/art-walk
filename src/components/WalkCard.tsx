import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Walk } from '../data/walks'

export default function WalkCard({ walk }: { walk: Walk }) {
  return (
    <Link href={walk.href} className='group block shadow-lg transition-transform transform hover:scale-105'>
      <div className='bg-gray-900 dark:bg-gray-100 rounded-2xl overflow-hidden carousel-shadow transition-all duration-300 group-hover:-translate-y-3'>
        <div className='relative h-64'>
        <Image src={walk.image} alt={walk.title} fill className='object-cover'/>
        </div>
        <div className='p-6'>
          <h3 className='text-2xl font-bold mb-2 text-white dark:text-gray-900'>
            {walk.title}
          </h3>
          <p className='text-gray-300 dark:text-gray-600'>
            {walk.description}
          </p>
          </div>
      </div>
    </Link>
  )
}