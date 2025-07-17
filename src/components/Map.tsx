'use client'

import React from "react";

interface MapProps {
  src: string
  title?: string
  className?: string
}

export default function Map({
  src,
  title = "Interactive Map",
  className = ""
}: MapProps) {
  return (
    <div className={`w-full mb-8 ${className}`}> 
      <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
        <div className="relative w-full h-0 pb-[80%] md:pb-[75%] lg:pb-[70%]">
          <iframe
            src={src}
            title={title}
            className="absolute top-0 left-0 w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            allow="geolocation"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}