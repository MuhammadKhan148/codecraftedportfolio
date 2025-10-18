"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Upload, Star, Eye } from "lucide-react"
import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

interface Project {
  id: string
  title: string
  description: string
  image?: string
  videos?: string[]
  rating?: number
  views?: number
  author?: string
  tags?: string[]
  category?: string
}

const allProjects: Project[] = [
  // React Projects
  {
    id: "react-1",
    title: "Modern React Dashboard",
    description: "Built a comprehensive admin dashboard with React, TypeScript, and Tailwind CSS. Features include real-time data visualization, user management, and responsive design.",
    image: "/videos/react.png",
    videos: [],
    rating: 5,
    views: 0,
    author: "Team CodeCrafted",
    tags: ["react", "typescript", "tailwind", "dashboard"],
    category: "react"
  },
  {
    id: "react-2",
    title: "E-commerce React Store",
    description: "Developed a full-featured online store with React and Next.js. Includes shopping cart, payment integration, user authentication, and product management.",
    image: "/videos/react2.png",
    videos: [],
    rating: 5,
    views: 0,
    author: "Team CodeCrafted",
    tags: ["react", "nextjs", "ecommerce", "stripe"],
    category: "react"
  },
  
  // MERN Projects
  {
    id: "mern-1",
    title: "Social Media Platform",
    description: "Created a full-stack social media application with MERN stack. Features include user profiles, posts, comments, likes, real-time notifications, and file uploads.",
    image: "/videos/mern.png",
    videos: [],
    rating: 5,
    views: 0,
    author: "Team CodeCrafted",
    tags: ["mongodb", "express", "react", "nodejs"],
    category: "mern"
  },
  {
    id: "mern-2",
    title: "Task Management System",
    description: "Built a collaborative task management platform with real-time updates, team collaboration, project tracking, and advanced filtering capabilities.",
    image: "/videos/mern2.png",
    videos: [],
    rating: 5,
    views: 0,
    author: "Team CodeCrafted",
    tags: ["mern", "socketio", "jwt", "mongodb"],
    category: "mern"
  },
  
  // AI & Chatbots Projects
  {
    id: "ai-1",
    title: "AI Customer Support Bot",
    description: "Developed an intelligent chatbot using OpenAI GPT-4 for customer support. Features natural language processing, context awareness, and seamless human handoff.",
    image: "/videos/aiagent.png",
    videos: [],
    rating: 5,
    views: 0,
    author: "Team CodeCrafted",
    tags: ["openai", "gpt-4", "nlp", "chatbot"],
    category: "ai"
  },
  {
    id: "ai-2",
    title: "AI Content Generator",
    description: "Created an AI-powered content generation platform that produces blog posts, social media content, and marketing copy using advanced language models.",
    image: "/videos/aiagent2.png",
    videos: [],
    rating: 5,
    views: 0,
    author: "Team CodeCrafted",
    tags: ["ai", "content-generation", "openai", "automation"],
    category: "ai"
  },
  
  // Firebase & Flutter Projects
  {
    id: "flutter-1",
    title: "Rider App Dispatch Platform",
    description: "Built a cross-platform dispatch app with role-based flows for Passenger, Driver, and Coordinator. Implemented authentication, ride creation, driver availability, and auto-assignment logic backed by Firebase Cloud Functions.",
    image: "/videos/rider-app.png",
    videos: [],
    rating: 5,
    views: 0,
    author: "Team CodeCrafted",
    tags: ["firebase", "flutter", "fullstack", "dispatch"],
    category: "firebase-flutter"
  },
  {
    id: "flutter-2",
    title: "Flutter E-commerce App",
    description: "Developed a cross-platform mobile shopping app with Flutter and Firebase. Features include product catalog, shopping cart, payment processing, and push notifications.",
    image: "/videos/flutter.png",
    videos: [],
    rating: 5,
    views: 0,
    author: "Team CodeCrafted",
    tags: ["flutter", "firebase", "mobile", "ecommerce"],
    category: "firebase-flutter"
  },
  
  // Database Projects
  {
    id: "db-1",
    title: "Database Optimization System",
    description: "Designed and implemented a high-performance database system with advanced indexing, query optimization, and real-time analytics for large-scale applications.",
    image: "/videos/db.png",
    videos: [],
    rating: 5,
    views: 0,
    author: "Team CodeCrafted",
    tags: ["postgresql", "optimization", "analytics", "performance"],
    category: "databases"
  },
  {
    id: "db-2",
    title: "Chess Engine + AI",
    description: "Designed a complete chess engine with legal move generation, alpha-beta pruning, and iterative deepening search. Delivered a polished UI, smooth animations, and an AI opponent that scales strength with available time.",
    image: "/videos/chess.png",
    videos: [],
    rating: 5,
    views: 0,
    author: "Team CodeCrafted",
    tags: ["python", "algorithms", "game ai", "minimax"],
    category: "databases"
  },
  
  // Media & Demos
  {
    id: "media-1",
    title: "Deepfake Face-Swap Pipeline",
    description: "Built an end-to-end deepfake system with face detection, high-fidelity swaps, and Wav2Lip-based lip sync. Includes reproducible scripts, GPU-ready configs, and modular components for computer-vision research.",
    image: "/videos/deepfake.png",
    videos: [],
    rating: 5,
    views: 0,
    author: "Team CodeCrafted",
    tags: ["computer vision", "generative ai", "pytorch", "wav2lip"],
    category: "media"
  }
]

export default function ProjectsPage() {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  
  const [projects, setProjects] = useState<Project[]>(allProjects)
  const [isAdmin, setIsAdmin] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editData, setEditData] = useState<{
    title: string
    description: string
    image: string
    videos: string
    author: string
    tags: string
  }>({
    title: "",
    description: "",
    image: "",
    videos: "",
    author: "",
    tags: "",
  })

  // Filter projects based on category
  const filteredProjects = useMemo(() => {
    if (!category) return allProjects
    return allProjects.filter(project => project.category === category)
  }, [category])

  // Fetch from API on mount (fallback)
  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch("/api/projects", { cache: "no-store" })
        if (res.ok) {
          const data = (await res.json()) as Project[]
          if (Array.isArray(data) && data.length > 0) {
            setProjects(data)
          }
        }
      } catch {
        // ignore and keep sample data
      }
    })()
  }, [])
  useEffect(() => {
    const checkAdmin = () => {
      const has = typeof document !== "undefined" && document.cookie.includes("cc_admin=1")
      setIsAdmin(!!has)
    }
    checkAdmin()
    const interval = setInterval(checkAdmin, 1000)
    return () => clearInterval(interval)
  }, [])
  const [showUploadForm, setShowUploadForm] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    author: "",
    image: "",
    videos: "",
    tags: "",
  })
  const pageSize = 12
  const [currentPage, setCurrentPage] = useState(1)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.title || !formData.description) return
    const payload = {
      title: formData.title,
      description: formData.description,
      author: formData.author,
      image: formData.image || "/window.svg",
      videos: formData.videos
        ? formData.videos.split(",").map((v) => v.trim()).filter(Boolean)
        : [],
      tags: formData.tags
        ? formData.tags.split(",").map((tag) => tag.trim()).filter(Boolean)
        : [],
      rating: 5,
      views: 0,
    }
    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (res.ok) {
        const created = (await res.json()) as Project
        setProjects((prev) => [created, ...prev])
        setFormData({ title: "", description: "", author: "", image: "", videos: "", tags: "" })
        setShowUploadForm(false)
        setCurrentPage(1)
      }
    } catch {}
  }
  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / pageSize))

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages)
    }
  }, [currentPage, totalPages])

  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * pageSize
    return filteredProjects.slice(start, start + pageSize)
  }, [filteredProjects, currentPage])

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Projects` : 'Team CodeCrafted Project Library'}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {category 
                  ? `Explore our ${category} projects and solutions built with cutting-edge technology.`
                  : 'Explore the intelligent products our studio ships—from AI solutions to cross-platform apps—documented with build notes, videos, and stack highlights for our clients and partners.'
                }
              </p>
            </div>
            {isAdmin && (
              <Button size="lg" onClick={() => setShowUploadForm(!showUploadForm)} className="gap-2 w-full sm:w-auto">
                <Upload className="h-5 w-5" />
                Add Case Study
              </Button>
            )}
          </div>

          <div className="mt-10 flex justify-center items-center gap-2">
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => setCurrentPage(page)}
                className="w-10"
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      </section>

      {/* Upload Form */}
      {isAdmin && showUploadForm && (
        <section className="py-12 bg-background border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto bg-card/50 rounded-lg border border-border p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Upload Your Project</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Project Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Enter project title"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe your project, technologies used, and key features"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Image URL</label>
                  <input
                    type="text"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="https://.../image.png"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Video URLs (comma-separated)</label>
                  <input
                    type="text"
                    value={formData.videos}
                    onChange={(e) => setFormData({ ...formData, videos: e.target.value })}
                    placeholder="https://.../a.mp4, https://.../b.mp4"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Tags (comma-separated)</label>
                  <input
                    type="text"
                    value={formData.tags}
                    onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                    placeholder="ai, flutter, firebase"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Upload Images/Videos</label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Drag and drop your images or videos here, or click to select
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="flex-1">
                    Publish Project
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 bg-transparent"
                    onClick={() => setShowUploadForm(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Projects Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedProjects.map((project) => (
              <div key={project.id}>
                <Link href={`/projects/${project.id}`}>
                  <div className="group cursor-pointer rounded-lg border border-border overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="relative overflow-hidden bg-card/50 h-48">
                    {project.videos && project.videos.length > 0 ? (
                      <video
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        muted
                        loop
                        playsInline
                        autoPlay
                        preload="auto"
                      >
                        <source src={project.videos[0]} />
                      </video>
                    ) : (
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="text-sm font-medium text-foreground">
                          {(project.rating ?? 5).toFixed(1)}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Eye className="h-4 w-4" />
                        <span className="text-sm">{project.views ?? 0}</span>
                      </div>
                    </div>
                    {project.tags && project.tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 rounded-full border border-border text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <p className="mt-4 text-xs text-muted-foreground">By {project.author || "Team CodeCrafted"}</p>
                  </div>
                  </div>
                </Link>

                {isAdmin && (
                  <div className="mt-2 p-4 border border-border rounded-lg">
                    {editingId === project.id ? (
                      <div className="space-y-2">
                        <input
                          type="text"
                          value={editData.title}
                          onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                          placeholder="Title"
                          className="w-full px-3 py-2 rounded border border-border bg-background text-foreground"
                        />
                        <textarea
                          value={editData.description}
                          onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                          placeholder="Description"
                          rows={3}
                          className="w-full px-3 py-2 rounded border border-border bg-background text-foreground"
                        />
                        <input
                          type="text"
                          value={editData.image}
                          onChange={(e) => setEditData({ ...editData, image: e.target.value })}
                          placeholder="Image URL"
                          className="w-full px-3 py-2 rounded border border-border bg-background text-foreground"
                        />
                        <input
                          type="text"
                          value={editData.videos}
                          onChange={(e) => setEditData({ ...editData, videos: e.target.value })}
                          placeholder="Video URLs (comma-separated)"
                          className="w-full px-3 py-2 rounded border border-border bg-background text-foreground"
                        />
                        <input
                          type="text"
                          value={editData.tags}
                          onChange={(e) => setEditData({ ...editData, tags: e.target.value })}
                          placeholder="Tags (comma-separated)"
                          className="w-full px-3 py-2 rounded border border-border bg-background text-foreground"
                        />
                        <div className="flex gap-2">
                          <Button
                            onClick={async () => {
                              const payload = {
                                id: project.id,
                                title: editData.title,
                                description: editData.description,
                                image: editData.image,
                                videos: editData.videos
                                  ? editData.videos.split(",").map((v) => v.trim()).filter(Boolean)
                                  : [],
                                author: project.author,
                                tags: editData.tags
                                  ? editData.tags.split(",").map((tag) => tag.trim()).filter(Boolean)
                                  : [],
                              }
                              const res = await fetch("/api/projects", {
                                method: "PATCH",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(payload),
                              })
                              if (res.ok) {
                                const updated = (await res.json()) as Project
                                setProjects((prev) => prev.map((p) => (p.id === updated.id ? updated : p)))
                                setEditingId(null)
                              }
                            }}
                          >
                            Save
                          </Button>
                          <Button variant="outline" className="bg-transparent" onClick={() => setEditingId(null)}>
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          className="bg-transparent"
                            onClick={() => {
                              setEditingId(project.id)
                              setEditData({
                                title: project.title,
                                description: project.description,
                                image: project.image,
                                videos: (project.videos || []).join(", "),
                                author: project.author || "",
                                tags: (project.tags || []).join(", "),
                              })
                            }}
                        >
                          Edit
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
