import React from "react";
import { Walk } from "../data/walks";
import Image from "next/image";

interface WalkPageProps {
    walk: Walk;
    children? : React.ReactNode;
}

export default function WalkPage( { walk, children }: WalkPageProps ) {
    return (
        <div className="min-h-screen">
          <div className="max-w-4xl mx-auto px-4 py-8">
              <h1 className="text-3xl font-bold mb-4">{walk.title}</h1>
              <p className="mb-6">{walk.description}</p>
              <div className="w-4/5 mx-auto mb-6">
                  <Image src={walk.map} alt='Walk Static Map' width={800} height={600} className="w-full h-auto rounded-lg"/>
              </div>
              <div className="space-y-4">
                  {children}
              </div>
          </div>
        </div>
    )
}