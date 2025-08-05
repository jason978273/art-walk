'use client'

import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface MapProps {
  src: string
  title?: string
  className?: string
  walkTitle?: string
}

export default function Map({
  src,
  title = "Interactive Map",
}: MapProps) {
  
  return (
    <div className={`w-full`}> 
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
      
      <div className="mt-6 flex justify-center">
        <Link 
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 theme-bg-primary hover:theme-bg-secondary text-white rounded-lg transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Open Full Map
        </Link>
      </div>
    </div>
  )
}