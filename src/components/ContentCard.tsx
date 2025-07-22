import React from 'react'
import { Clock, MapPin, Route, Users } from 'lucide-react'

interface ContentCardProps {
  walkingTime?: string
  recommendedTime?: string
  distance?: string
  difficulty?: string
  highlights?: string[]
  walkTitle?: string
}

export default function ContentCard({ 
  walkingTime = "10 min",
  recommendedTime = "10 min", 
  distance = "1 km",
  difficulty = "Easy",
  highlights = ["Public Art"],
  
}: ContentCardProps) {
  return (
    <div className="bg-gray-900 dark:bg-gray-100 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 text-white dark:text-gray-900">Walk Details</h2>
      
      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="flex items-center text-gray-300 dark:text-gray-700">
          <Clock className="w-5 h-5 mr-2" />
          <div>
            <p className="text-sm opacity-75">Walking Time</p>
            <p className="font-semibold text-white dark:text-gray-900">{walkingTime}</p>
          </div>
        </div>
        
        <div className="flex items-center text-gray-300 dark:text-gray-700">
          <Route className="w-5 h-5 mr-2" />
          <div>
            <p className="text-sm opacity-75">Recommended</p>
            <p className="font-semibold text-white dark:text-gray-900">{recommendedTime}</p>
          </div>
        </div>
        
        <div className="flex items-center text-gray-300 dark:text-gray-700">
          <MapPin className="w-5 h-5 mr-2" />
          <div>
            <p className="text-sm opacity-75">Distance</p>
            <p className="font-semibold text-white dark:text-gray-900">{distance}</p>
          </div>
        </div>
        
        <div className="flex items-center text-gray-300 dark:text-gray-700">
          <Users className="w-5 h-5 mr-2" />
          <div>
            <p className="text-sm opacity-75">Difficulty</p>
            <p className="font-semibold text-white dark:text-gray-900">{difficulty}</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-3 text-white dark:text-gray-900">About This Walk</h3>
        <p className="text-gray-300 dark:text-gray-700 leading-relaxed">
          Discover a curated art walk designed for a {walkingTime} walking distance. This route features local art installations and points of interest along the way. Plan for about {recommendedTime} to complete the entire experience, allowing time to enjoy each stop and take in the surroundings.
        </p>
      </section>

      {/* Highlights */}
      <section>
        <h3 className="text-lg font-semibold mb-3 text-white dark:text-gray-900">Highlights</h3>
        <div className="flex flex-wrap gap-2">
          {highlights.map((highlight, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-800 dark:bg-gray-300 text-gray-300 dark:text-gray-700 rounded-full text-sm font-semibold hover:bg-gray-500 dark:hover:bg-gray-400 transition-colors"
            >
              {highlight}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}
