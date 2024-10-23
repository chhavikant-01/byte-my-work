'use client'

import { useState, useRef } from 'react'

export default function ProjectPreview({ title, thumbnail }: { title: string; thumbnail: string }) {
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    setIsHovered(true)
    videoRef.current?.play()
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    videoRef.current?.pause()
    if (videoRef.current) videoRef.current.currentTime = 0
  }

  return (
    <div
      className="relative aspect-video rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={thumbnail}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
      />
      <div className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${isHovered ? 'bg-opacity-0' : 'bg-opacity-50'} flex items-center justify-center`}>
        <h2 className={`text-white text-xl font-bold transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
          {title}
        </h2>
      </div>
    </div>
  )
}
