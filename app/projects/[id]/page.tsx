import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { headers } from "next/headers"

type Project = {
  id: string
  title: string
  description: string
  image?: string
  videos?: string[]
  rating?: number
  views?: number
  author?: string
  tags?: string[]
}

async function getProject(id: string): Promise<Project | null> {
  const hdrs = await headers()
  const host = hdrs.get("host") || "localhost:3000"
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http"
  const base = process.env.NEXT_PUBLIC_BASE_URL || `${protocol}://${host}`
  const res = await fetch(`${base}/api/projects`, { next: { revalidate: 0 } })
  if (!res.ok) return null
  const projects = (await res.json()) as Project[]
  return projects.find((p) => p.id === id) || null
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = await getProject(id)
  const primaryMedia = project?.videos && project.videos.length > 0 ? project.videos[0] : null
  const secondaryVideos = project?.videos && project.videos.length > 1 ? project.videos.slice(1) : []

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {project ? (
            <>
              <h1 className="text-4xl font-bold text-foreground mb-2">{project.title}</h1>
              <p className="text-muted-foreground mb-6">By {project.author || "Team CodeCrafted"}</p>

              <div className="grid gap-6 md:grid-cols-2 mb-10">
                <Card className="p-0 overflow-hidden border-border/60 bg-card/60">
                  <div className="relative aspect-video bg-background">
                    {primaryMedia ? (
                      <video
                        controls
                        muted
                        loop
                        autoPlay
                        playsInline
                        className="absolute inset-0 h-full w-full object-cover"
                        preload="auto"
                      >
                        <source src={primaryMedia} />
                      </video>
                    ) : (
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    )}
                  </div>
                </Card>
                <div className="space-y-4">
                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Description</h3>
                    <p className="text-foreground">{project.description}</p>
                  </Card>
                  {project.tags && project.tags.length > 0 && (
                    <Card className="p-6">
                      <h3 className="text-xl font-semibold mb-2">Tech</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((t) => (
                          <span key={t} className="text-xs px-2 py-1 rounded border border-border">
                            {t}
                          </span>
                        ))}
                      </div>
                    </Card>
                  )}
                </div>
              </div>

              {secondaryVideos.length > 0 && (
                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Videos</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    {secondaryVideos.map((v) => (
                      <Card key={v} className="overflow-hidden border-border/60 bg-card/60">
                        <div className="relative aspect-video bg-background">
                          <video
                            controls
                            poster={project.image || "/placeholder.svg"}
                            className="absolute inset-0 h-full w-full object-cover"
                            preload="metadata"
                          >
                            <source src={v} />
                          </video>
                        </div>
                      </Card>
                    ))}
                  </div>
                </section>
              )}

              <section>
                <h2 className="text-2xl font-bold mb-4">Reviews</h2>
                <p className="text-muted-foreground">Reviews integration coming next.</p>
              </section>
            </>
          ) : (
            <p className="text-muted-foreground">Project not found.</p>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}


