import React from 'react'
import { Clock, MapPin, Route, Users, ExternalLink, Info, MapIcon, Star } from 'lucide-react'
import { ClickableHighlight } from '../data/walks'

interface ContentCardProps {
  walkingTime?: string
  recommendedTime?: string
  distance?: string
  difficulty?: string
  highlights?: string[]
  clickableHighlights?: ClickableHighlight[]
  walkTitle?: string
}

const getHighlightIcon = (type?: string) => {
  switch (type) {
    case 'sponsor':
      return <Star className="w-4 h-4" />
    case 'info':
      return <Info className="w-4 h-4" />
    case 'attraction':
      return <MapIcon className="w-4 h-4" />
    default:
      return <ExternalLink className="w-4 h-4" />
  }
}

const getHighlightStyle = (type?: string) => {
  switch (type) {
    case 'sponsor':
      return "bg-gradient-to-r from-yellow-700 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-white shadow-lg hover:shadow-xl"
    case 'info':
      return "bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg hover:shadow-xl"
    case 'attraction':
      return "bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white shadow-lg hover:shadow-xl"
    default:
      return "bg-gradient-to-r from-gray-700 to-gray-500 hover:from-gray-700 hover:to-gray-600 text-white shadow-lg hover:shadow-xl"
  }
}

export default function ContentCard({ 
  walkingTime = "10 min",
  recommendedTime = "10 min", 
  distance = "1 km",
  difficulty = "Easy",
  highlights = ["Public Art"],
  clickableHighlights = [],
}: ContentCardProps) {
  return (
    <div className="bg-gray-900 dark:bg-white rounded-lg p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 theme-text-primary dark:theme-text-primary">Walk Details</h2>
      
      {/* Responsive Stats Grid - stack on mobile, 2x2 on small screens, 4 columns on larger */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="flex items-center text-white dark:theme-text-thirdary p-2 rounded-lg theme-bg-primary">
          <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
          <div className="min-w-0">
            <p className="text-xs sm:text-sm opacity-75 truncate">Walking Time</p>
            <p className="font-semibold text-sm sm:text-base text-white dark:text-white truncate">{walkingTime}</p>
          </div>
        </div>
        
        <div className="flex items-center text-gray-300 dark:text-white p-2 rounded-lg theme-bg-primary dark:theme-bg-primary">
          <Route className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
          <div className="min-w-0">
            <p className="text-xs sm:text-sm opacity-75 truncate">Recommended</p>
            <p className="font-semibold text-sm sm:text-base text-white dark:text-white truncate">{recommendedTime}</p>
          </div>
        </div>
        
        <div className="flex items-center text-gray-300 dark:text-gray-700 p-2 rounded-lg bg-gray-800/50 dark:bg-gray-200/50">
          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
          <div className="min-w-0">
            <p className="text-xs sm:text-sm opacity-75 truncate">Distance</p>
            <p className="font-semibold text-sm sm:text-base text-white dark:text-gray-900 truncate">{distance}</p>
          </div>
        </div>
        
        <div className="flex items-center text-gray-300 dark:text-gray-700 p-2 rounded-lg bg-gray-800/50 dark:bg-gray-200/50">
          <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
          <div className="min-w-0">
            <p className="text-xs sm:text-sm opacity-75 truncate">Difficulty</p>
            <p className="font-semibold text-sm sm:text-base text-white dark:text-gray-900 truncate">{difficulty}</p>
          </div>
        </div>
      </div>

      {/* Responsive Description */}
      <section className="mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-white dark:text-gray-900">About This Walk</h3>
        <p className="text-sm sm:text-base text-gray-300 dark:text-gray-700 leading-relaxed">
          Discover a curated art walk designed for a {walkingTime} walking distance. This route features local art installations and points of interest along the way. Plan for about {recommendedTime} to complete the entire experience, allowing time to enjoy each stop and take in the surroundings.
        </p>
      </section>

      {/* Responsive Highlights */}
      {highlights && highlights.length > 0 && (
        <section className="mb-4 sm:mb-6">
          <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-white dark:text-gray-900">Features</h3>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {highlights.map((highlight, index) => (
              <span 
                key={index}
                className="px-2 sm:px-3 py-1 bg-gray-800/50 dark:bg-gray-300/50 text-gray-300 dark:text-black rounded-full text-xs sm:text-sm hover:scale-105 transition-transform duration-200 shadow-sm hover:shadow-md cursor-default"
              >
                {highlight}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Responsive Clickable Highlights */}
      {clickableHighlights && clickableHighlights.length > 0 && (
        <section>
          <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white dark:text-gray-900">Explore More</h3>
          <div className="grid gap-2 sm:gap-3 grid-cols-1 md:grid-cols-2">
            {clickableHighlights.map((highlight, index) => (
              <a
                key={index}
                href={highlight.url}
                target={highlight.url.startsWith('http') ? "_blank" : "_self"}
                rel={highlight.url.startsWith('http') ? "noopener noreferrer" : undefined}
                className={`block p-2.5 sm:p-3 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 ${getHighlightStyle(highlight.type)}`}
              >
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    {getHighlightIcon(highlight.type)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-xs sm:text-sm mb-1 leading-tight">{highlight.name}</h4>
                    {highlight.description && (
                      <p className="text-xs opacity-90 leading-tight line-clamp-2">{highlight.description}</p>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
