import React from "react";
import { Walk } from "../data/walks";
import Image from "next/image";
import Map from "./Map";
import ContentCard from "./ContentCard";

interface WalkPageProps {
    walk: Walk;
    children?: React.ReactNode;
}

export default function WalkPage({ walk, children }: WalkPageProps) {
    return (
        <div className="min-h-screen bg-white">
          <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
              <h1 className="text-3xl font-bold theme-text-secondary">
                {walk.title}
              </h1>          
              
              <div className="w-full mx-auto">
                  <Image src={walk.map} alt='Walk Static Map' width={1200} height={600} className="w-full h-auto object-cover rounded-lg"/>
              </div>
              
              {walk.interactiveMap && (
                  <Map 
                      src={walk.interactiveMap} 
                      walkTitle={walk.title}
                  />
              )}

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
    )
}