import React from "react";
import { Walk } from "../data/walks";

interface WalkPageProps {
    walk: Walk;
    children? : React.ReactNode;
}

export default function WalkPage( { walk, children }: WalkPageProps ) {
    return (
        <div className="min-h-screen">
          <div className="max-w-4-xl mx-auto px-4 py-8">
              <h1 className="text-3xl font-bold mb-4">{walk.title}</h1>
              <p className="text-gray-700 mb-6">{walk.description}</p>
              <div className="space-y-4">
                  {children}
              </div>
          </div>
        </div>
    )
}