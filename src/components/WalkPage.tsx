import React from "react";
import { Walk } from "../data/walks";
import Image from "next/image";
import Map from "./Map";
import ContentCard from "./ContentCard";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface WalkPageProps {
    walk: Walk;
    children?: React.ReactNode;
}

export default function WalkPage({ walk, children }: WalkPageProps) {
    return (
        <div className="min-h-screen">
          <div className="max-w-7xl mx-auto px-4 py-8">
              <h1 className="text-3xl font-bold mb-4 theme-text-primary">
                {walk.title}
              </h1>          
              <div className="w-4/5 mx-auto mb-8">
                  <Image src={walk.map} alt='Walk Static Map' width={800} height={600} className="w-full h-auto rounded-lg"/>
              </div>
              
              {walk.interactiveMap && (
                  <div className="space-y-4 mb-8">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                          <h2 className="text-xl md:text-2xl font-semibold theme-text-primary">Interactive Map</h2>
                          <Link 
                              href={walk.interactiveMap}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-blue-600 text-white font-semibold text-sm sm:text-base rounded-lg hover:bg-blue-700/80 transition-colors w-full sm:w-auto justify-center sm:justify-start"
                          >
                              <ExternalLink className="w-4 h-4" />
                              Open Full Screen
                          </Link>
                      </div>
                      <Map 
                          src={walk.interactiveMap} 
                          title={`${walk.title} Interactive Map`}
                          className=""
                      />
                  </div>
              )}

              <div className="space-y-8">
                <ContentCard 
                  walkingTime={walk.walkingTime}
                  recommendedTime={walk.recommendedTime}
                  distance={walk.distance}
                  difficulty={walk.difficulty}
                  highlights={walk.highlights}
                  clickableHighlights={walk.clickableHighlights}
                  walkTitle={walk.title}
                />
                
                {children}
              </div>
          </div>
        </div>
    )
}