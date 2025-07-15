'use client'

import WalkCard from "./WalkCard"
import { useState, useEffect } from "react"
import { walks } from "../data/walks"
import { ChevronLeft, ChevronRight } from "lucide-react"



export default function Carousel() {
  const [currentSlide, setCurrentslide] = useState(0)
  const nextSlide = () => {
    setCurrentslide((prev) => (prev+1) % walks.length)
  }
  const prevSlide = () => {
    setCurrentslide((prev) => (prev-1 + walks.length) % walks.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center my-8 text-white">
          Featured Walks
        </h2>
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop shows all 3 cards*/}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {walks.map((walk) => (
              <WalkCard key={walk.id} walk={walk} />
            ))}
            </div>
          {/* Mobile shows one card at a time */}
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)`}}>
                  {walks.map((walk) => (
                    <div key={walk.id} className="w-full flex-shrink-0 px-4">
                      <WalkCard walk={walk} />
                    </div>
                  ))}
                </div>
            </div>
              <ChevronLeft size={36} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white cursor-pointer z-10"
                onClick={prevSlide} />
              <ChevronRight size={36} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white cursor-pointer z-10"
                onClick={nextSlide} />
        </div>
      </div>
    </div>
    </div>
  )
}