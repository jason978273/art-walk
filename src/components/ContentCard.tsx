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
  introText?: string
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
      return "bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-white shadow-lg hover:shadow-xl"
    case 'info':
      return "bg-gradient-to-r from-blue-500 to-blue-300 hover:from-blue-400 hover:to-blue-300 text-white shadow-lg hover:shadow-xl"
    case 'attraction':
      return "bg-gradient-to-r from-purple-500 to-purple-400 hover:from-purple-400 hover:to-purple-300 text-white shadow-lg hover:shadow-xl"
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
  introText = "",
  clickableHighlights = [],
}: ContentCardProps) {
  return (
    <div className="rounded-lg sm:p-2">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#00A1BA]">Walk Details</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="flex items-center text-white font-semibold p-2.5 rounded-lg bg-[#00A1BA]/80 min-w-[120px]">
          <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
          <div className="min-w-0 flex-1">
            <p className="text-xs sm:text-sm opacity-90 leading-tight">Walking</p>
            <p className="font-semibold text-sm sm:text-base text-white leading-tight">{walkingTime}</p>
          </div>
        </div>
        
        <div className="flex items-center text-white font-semibold p-2.5 rounded-lg bg-[#00A1BA]/80 min-w-[120px]">
          <Route className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
          <div className="min-w-0 flex-1">
            <p className="text-xs sm:text-sm opacity-90 leading-tight">Total</p>
            <p className="font-semibold text-sm sm:text-base text-white leading-tight">{recommendedTime}</p>
          </div>
        </div>
        
        <div className="flex items-center text-white font-semibold p-2.5 rounded-lg bg-[#00A1BA]/80 min-w-[120px]">
          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
          <div className="min-w-0 flex-1">
            <p className="text-xs sm:text-sm opacity-90 leading-tight">Distance</p>
            <p className="font-semibold text-sm sm:text-base text-white leading-tight">{distance}</p>
          </div>
        </div>
        
        <div className="flex items-center text-white font-semibold p-2.5 rounded-lg bg-[#00A1BA]/80 min-w-[120px]">
          <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
          <div className="min-w-0 flex-1">
            <p className="text-xs sm:text-sm opacity-90 leading-tight">Difficulty</p>
            <p className="font-semibold text-sm sm:text-base text-white leading-tight">{difficulty}</p>
          </div>
        </div>
      </div>

      <section className="mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-[#00A1BA]">About This Walk</h3>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          {introText || `Discover a curated art walk designed for a ${walkingTime} walking distance. This route features local art installations and points of interest along the way. Plan for about ${recommendedTime} to complete the entire experience, allowing time to enjoy each stop and take in the surroundings.`}
        </p>
      </section>

      {highlights && highlights.length > 0 && (
        <section className="mb-4 sm:mb-6">
          <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-[#00A1BA]">Features</h3>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {highlights.map((highlight, index) => (
              <span 
                key={index}
                className="px-2 sm:px-3 py-1 bg-gray-300/50 text-gray-600 font-semibold rounded-full text-xs sm:text-sm hover:scale-105 transition-transform duration-200 shadow-sm hover:shadow-md cursor-default"
              >
                {highlight}
              </span>
            ))}
          </div>
        </section>
      )}

      {clickableHighlights && clickableHighlights.length > 0 && (
        <section>
          <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[#00A1BA]">Explore More</h3>
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
