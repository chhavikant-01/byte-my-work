import Link from 'next/link'
import ProjectPreview from '@/components/project-preview'

const projects = [
  { id: 1, title: 'Project 1', thumbnail: '/videos/project1-thumb.mp4' },
  { id: 2, title: 'Project 2', thumbnail: '/videos/project2-thumb.mp4' },
  { id: 3, title: 'Project 3', thumbnail: '/videos/project3-thumb.mp4' },
  // Add more projects as needed
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link key={project.id} href={`/project/${project.id}`}>
              <ProjectPreview title={project.title} thumbnail={project.thumbnail} />
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}