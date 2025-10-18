"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function AdminPage() {
  if (process.env.NEXT_PUBLIC_DEPLOY_TARGET === "netlify") {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Admin temporarily disabled</h1>
            <p className="text-muted-foreground">
              For public Netlify deployments, the admin editor is hidden. Use local dev or set
              <code className="mx-1 px-1 rounded bg-card border border-border">NEXT_PUBLIC_DEPLOY_TARGET=local</code>
              to enable.
            </p>
          </div>
        </section>
        <Footer />
      </main>
    )
  }
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    videos: "",
    author: "",
    tags: "",
  })

  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setMessage(null)
    try {
      const payload = {
        title: formData.title,
        description: formData.description,
        image: formData.image || "/placeholder.svg",
        videos: formData.videos
          .split(",")
          .map((v) => v.trim())
          .filter(Boolean),
        author: formData.author,
        tags: formData.tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
      }
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error("Failed to create project")
      setMessage("Project created successfully")
      setFormData({ title: "", description: "", image: "", videos: "", author: "", tags: "" })
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong"
      setMessage(msg)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-foreground mb-6">Admin: Create Project</h1>
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <input
                type="text"
                placeholder="Image URL (optional)"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                placeholder="Videos (comma-separated URLs)"
                value={formData.videos}
                onChange={(e) => setFormData({ ...formData, videos: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Author"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder="Tags (comma-separated, e.g. react,mern,ai)"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  className="rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="flex items-center gap-4">
                <Button type="submit" disabled={submitting}>
                  {submitting ? "Creating..." : "Create Project"}
                </Button>
                {message && <span className="text-sm text-muted-foreground">{message}</span>}
              </div>
            </form>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}


