"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Star, MessageSquare, ThumbsUp } from "lucide-react"
import { useEffect, useState } from "react"

interface Review {
  id: string
  author: string
  rating: number
  title: string
  content: string
  projectTitle: string
  date: string
  helpful: number
}

const sampleReviews: Review[] = [
  {
    id: "1",
    author: "Alex Johnson",
    rating: 5,
    title: "Amazing E-Commerce Platform!",
    content:
      "This project is incredibly well-built. The UI is clean, the functionality is smooth, and the code is well-organized. Great work on the Stripe integration!",
    projectTitle: "E-Commerce Platform",
    date: "2 days ago",
    helpful: 24,
  },
  {
    id: "2",
    author: "Sarah Chen",
    rating: 5,
    title: "Best AI Chat App I've Seen",
    content:
      "The real-time chat functionality is seamless. The AI responses are intelligent and the user experience is top-notch. Highly recommend!",
    projectTitle: "AI Chat Application",
    date: "1 week ago",
    helpful: 18,
  },
  {
    id: "3",
    author: "Mike Rodriguez",
    rating: 4,
    title: "Solid Task Management Tool",
    content:
      "Great project with excellent collaboration features. The real-time updates work perfectly. Would love to see more customization options.",
    projectTitle: "Task Management System",
    date: "2 weeks ago",
    helpful: 12,
  },
  {
    id: "4",
    author: "Emma Wilson",
    rating: 5,
    title: "Professional Analytics Dashboard",
    content:
      "The data visualization is stunning. All the metrics are clearly presented and the performance is excellent. This is production-ready code!",
    projectTitle: "Social Media Analytics",
    date: "3 weeks ago",
    helpful: 31,
  },
  {
    id: "5",
    author: "David Park",
    rating: 5,
    title: "Beautiful Weather App",
    content:
      "The design is gorgeous and the functionality is perfect. Real-time weather data works flawlessly. This developer has serious skills!",
    projectTitle: "Weather Forecast App",
    date: "1 month ago",
    helpful: 27,
  },
  {
    id: "6",
    author: "Lisa Thompson",
    rating: 4,
    title: "Great Fitness Tracking App",
    content:
      "Very intuitive interface and great tracking features. The app is responsive and fast. Minor UI improvements could make it even better.",
    projectTitle: "Fitness Tracking App",
    date: "1 month ago",
    helpful: 15,
  },
]

const blankReview = {
  author: "",
  projectTitle: "",
  title: "",
  content: "",
  rating: 5,
}

type ReviewFormState = typeof blankReview

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>(sampleReviews)
  const [showReviewForm, setShowReviewForm] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.author && formData.title && formData.content && formData.projectTitle) {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        const created = (await res.json()) as Review
        setReviews([created, ...reviews])
        setFormData({ ...blankReview })
        setShowReviewForm(false)
      }
    }
  }

  useEffect(() => {
    ;(async () => {
      const res = await fetch("/api/reviews", { cache: "no-store" })
      if (res.ok) {
        const data = (await res.json()) as Review[]
        if (Array.isArray(data) && data.length > 0) setReviews(data)
      }
    })()
  }, [])

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? "fill-primary text-primary" : "text-muted-foreground"}`}
          />
        ))}
      </div>
    )
  }

  const resetEditState = () => {
    setEditingId(null)
    setEditData({ ...blankReview })
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-16 sm:py-24 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Community Reviews</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Share your feedback and help developers improve their projects.
              </p>
            </div>
            <Button size="lg" onClick={() => setShowReviewForm(!showReviewForm)} className="gap-2 w-full sm:w-auto">
              <MessageSquare className="h-5 w-5" />
              {showReviewForm ? "Close Form" : "Write Review"}
            </Button>
          </div>
        </div>
      </section>

      {showReviewForm && (
        <section className="py-12 bg-background border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto bg-card/50 rounded-lg border border-border p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Write a Review</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
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
                  <label className="block text-sm font-medium text-foreground mb-2">Project Title</label>
                  <input
                    type="text"
                    value={formData.projectTitle}
                    onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
                    placeholder="Which project are you reviewing?"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating: star })}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`h-8 w-8 transition-colors ${
                            star <= formData.rating
                              ? "fill-primary text-primary"
                              : "text-muted-foreground hover:text-primary"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Review Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Summarize your review"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Your Review</label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    placeholder="Share your detailed feedback..."
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="flex-1">
                    Post Review
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 bg-transparent"
                    onClick={() => setShowReviewForm(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {reviews.map((review) => {
              const isEditing = editingId === review.id
              const ratingForDisplay = isEditing ? editData.rating : review.rating
              const ratingLabel = Number.isInteger(ratingForDisplay)
                ? `${ratingForDisplay}.0`
                : ratingForDisplay.toFixed(1)
              const authorLabel = isEditing ? editData.author : review.author
              const titleLabel = isEditing ? editData.title : review.title
              const projectLabel = isEditing ? editData.projectTitle : review.projectTitle
              const contentLabel = isEditing ? editData.content : review.content

              return (
                <div
                  key={review.id}
                  className="rounded-lg border border-border bg-card/30 p-6 hover:border-primary transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        {renderStars(ratingForDisplay)}
                        <span className="text-sm font-medium text-foreground">{ratingLabel}</span>
                      </div>
                      {!isEditing && (
                        <h3 className="text-lg font-semibold text-foreground">{titleLabel}</h3>
                      )}
                      <p className="text-sm text-muted-foreground mt-1">
                        By {authorLabel} {"\u2022"} {review.date}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 italic">
                    Project: <span className="text-foreground font-medium">{projectLabel}</span>
                  </p>

                  <p className="text-foreground mb-4">{contentLabel}</p>

                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <MessageSquare className="h-4 w-4" />
                      Reply
                    </button>
                    <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <ThumbsUp className="h-4 w-4" />
                      Helpful ({review.helpful})
                    </button>
                  </div>
                        <input
                          type="text"
                          value={editData.author}
                          onChange={(e) => setEditData({ ...editData, author: e.target.value })}
                          placeholder="Author"
                          className="w-full px-3 py-2 rounded border border-border bg-background text-foreground"
                        />
                        <input
                          type="text"
                          value={editData.projectTitle}
                          onChange={(e) => setEditData({ ...editData, projectTitle: e.target.value })}
                          placeholder="Project"
                          className="w-full px-3 py-2 rounded border border-border bg-background text-foreground"
                        />
                      </div>
                      <input
                        type="text"
                        value={editData.title}
                        onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                        placeholder="Title"
                        className="w-full px-3 py-2 rounded border border-border bg-background text-foreground"
                      />
                      <textarea
                        value={editData.content}
                        onChange={(e) => setEditData({ ...editData, content: e.target.value })}
                        placeholder="Content"
                        rows={3}
                        className="w-full px-3 py-2 rounded border border-border bg-background text-foreground"
                      />
                      <div className="flex gap-2 items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setEditData({ ...editData, rating: star })}
                            className="focus:outline-none"
                          >
                            <Star
                              className={`h-5 w-5 ${
                                star <= editData.rating ? "fill-primary text-primary" : "text-muted-foreground"
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          onClick={async () => {
                            const payload = {
                              id: review.id,
                              author: editData.author,
                              projectTitle: editData.projectTitle,
                              title: editData.title,
                              content: editData.content,
                              rating: editData.rating,
                            }
                            try {
                              const res = await fetch("/api/reviews", {
                                method: "PATCH",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(payload),
                              })
                              if (res.ok) {
                                const updated = (await res.json()) as Review
                                setReviews((prev) => prev.map((r) => (r.id === updated.id ? updated : r)))
                                resetEditState()
                              }
                            } catch {
                              // ignore failures for now
                            }
                          }}
                        >
                          Save
                        </Button>
                        <Button
                          variant="outline"
                          className="bg-transparent"
                          onClick={resetEditState}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="text-sm text-muted-foreground mb-4 italic">
                        Project: <span className="text-foreground font-medium">{projectLabel}</span>
                      </p>

                      <p className="text-foreground mb-4">{contentLabel}</p>
                    </>
                  )}

                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <MessageSquare className="h-4 w-4" />
                      Reply
                    </button>
                    <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <ThumbsUp className="h-4 w-4" />
                      Helpful ({review.helpful})
                    </button>
                    {isEditing && <span className="text-xs text-muted-foreground">Editing</span>}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
