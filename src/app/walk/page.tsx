'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Home } from 'lucide-react'

export default function WalkPage() {
  const router = useRouter()
  
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/')
    }, 5000) // Redirect after 5 seconds

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center theme-bg-primary">
      <div className="max-w-md mx-auto text-center p-8">
        <h1 className="text-2xl font-bold mb-4 theme-text-primary">
          Choose a Walk
        </h1>
        <p className="theme-text-secondary mb-6">
          Please select a specific walk route. Redirecting to home page...
        </p>
        
        <div className="space-y-3">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Home className="w-4 h-4" />
            Go to Home
          </Link>
          
          <div className="text-sm theme-text-muted">
            Or choose a walk:
          </div>
          
          <div className="space-y-2">
            <Link 
              href="/walk/ambleside"
              className="block p-2 bg-gray-900 text-white rounded hover:opacity-80 transition-opacity"
            >
              Ambleside Walk
            </Link>
            <Link 
              href="/walk/hollyburn"
              className="block p-2 bg-gray-900 text-white rounded hover:opacity-80 transition-opacity"
            >
              Hollyburn Walk
            </Link>
            <Link 
              href="/walk/dundarave"
              className="block p-2 bg-gray-900 text-white rounded hover:opacity-80 transition-opacity"
            >
              Dundarave Walk
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}