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
        <div className="min-h-screen">
          <div className="max-w-7xl mx-auto px-4 py-8">
              <h1 className="text-3xl font-bold mb-4 theme-text-primary">
                {walk.title}
              </h1>
              <p className="mb-6 theme-text-secondary">
                {walk.description}
              </p>
              <div className="w-4/5 mx-auto mb-6">
                  <Image src={walk.map} alt='Walk Static Map' width={800} height={600} className="w-full h-auto rounded-lg"/>
              </div>
                {walk.interactiveMap && (
                    <Map src={walk.interactiveMap} 
                    title={`${walk.title} Interactive Map`}
                    className="mb-8"/>
                )}
              <div className="space-y-4">
                <ContentCard 
                  walkingTime={walk.walkingTime}
                  recommendedTime={walk.recommendedTime}
                  distance={walk.distance}
                  difficulty={walk.difficulty}
                  highlights={walk.highlights}
                  walkTitle={walk.title}
                />
                {children}
              </div>
          </div>
        </div>
    )
}