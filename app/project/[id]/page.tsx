import Link from 'next/link'
// This would typically come from a database or API
const getProjectDetails = (id: string) => ({
  id,
  title: `Project ${id}`,
  description: 'This is a detailed description of the project.',
  videoUrl: `/videos/project${id}-thumb.mp4`,
  projectUrl: 'https://example.com/project',
})

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProjectDetails(params.id)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <div className="aspect-video mb-6">
          <video
            src={project.videoUrl}
            className="w-full h-full object-cover rounded-lg"
            controls
            autoPlay
            muted
            loop
          />
        </div>
        <div className="prose dark:prose-invert max-w-none mb-6">
          <p>{project.description}</p>
        </div>
        <Link
          href={project.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
        >
          Visit Project
        </Link>
      </main>
    </div>
  )
}