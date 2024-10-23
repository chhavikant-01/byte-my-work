// components/ProjectCard.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Project {
  id: number
  title: string
  thumbnail: string
}

interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/project/${project.id}`} className="group relative aspect-video rounded-lg overflow-hidden shadow-lg">
      <video
        src={project.thumbnail}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        loop
        muted
        playsInline
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        autoPlay={isHovered}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
        <h2 className="text-white text-xl font-bold">{project.title}</h2>
      </div>
    </Link>
  )
}

export default ProjectCard
