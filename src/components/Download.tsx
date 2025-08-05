import React from 'react'
import { Download as DownloadIcon, MapIcon } from 'lucide-react'

type Props = {
  mapUrl: string
  walkTitle: string
}

const Download = ({ mapUrl, walkTitle }: Props) => {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = mapUrl
    link.download = `${walkTitle.replace(/\s+/g, '_')}_map.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="rounded-lg">
      <div className="flex flex-col items-start gap-4 w-fit">
        <div className="flex items-center gap-3 theme-text-primary font-title">
          <MapIcon className="w-5 h-5"/>
          <div>
            <span className="font-title font-semibold block text-lg">
              Offline Map Available
            </span>
          </div>
        </div>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-4 py-2 theme-bg-primary hover:theme-bg-secondary text-white rounded-lg transition-colors cursor-pointer"
        >
          <DownloadIcon className="w-4 h-4" />
          <span className="hidden sm:inline">Download Map</span>
          <span className="sm:hidden">Download</span>
        </button>
      </div>
    </div>
  )
}

export default Download