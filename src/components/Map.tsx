'use client'

import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface MapProps {
  src: string
  title?: string
  className?: string
  showHeader?: boolean
  walkTitle?: string
}

export default function Map({
  src,
  title = "Interactive Map",
  className = "",
  walkTitle
}: MapProps) {
  
  return (
    <div className={`w-full ${className}`}> 
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
          <h2 className="text-xl md:text-2xl font-semibold text-[#00A1BA]">
            Interactive Map
          </h2>
          <Link 
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 theme-bg-secondary text-white font-semibold text-sm sm:text-base rounded-lg hover:bg-blue-700/80 transition-colors w-full sm:w-auto justify-center sm:justify-start"
          >
            <ExternalLink className="w-4 h-4" />
            Open Full Map
          </Link>
      </div>
      
      <div className="relative w-full rounded-lg overflow-hidden">
        <div className="relative w-full h-0 pb-[125%] md:pb-[75%] lg:pb-[70%]">
          <iframe
            src={src}
            title={title}
            className="absolute inset-0 w-full h-full"
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