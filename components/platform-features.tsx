"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Layers, Cpu, Bot, Database, Code2, Video } from "lucide-react"
import Link from "next/link"

const features = [
  {
    id: "react",
    icon: Layers,
    title: "React",
    description: "Frontend projects using React and Next.js.",
    details: "Build modern UIs with React, Next.js, and component kits.",
    learnMoreLink: "/projects?category=react",
  },
  {
    id: "mern",
    icon: Code2,
    title: "MERN",
    description: "MongoDB, Express, React, Node fullstack builds.",
    details: "Ship end-to-end apps with CRUD, auth, and deployments.",
    learnMoreLink: "/projects?category=mern",
  },
  {
    id: "ai",
    icon: Bot,
    title: "AI & Chatbots",
    description: "LLMs, RAG, and conversational interfaces.",
    details: "Integrate AI for assistants, automation, and smart features.",
    learnMoreLink: "/projects?category=ai",
  },
  {
    id: "firebase-flutter",
    icon: Cpu,
    title: "Firebase / Flutter",
    description: "Mobile and web apps with Firebase and Flutter.",
    details: "Auth, Firestore, Functions, and cross-platform UIs.",
    learnMoreLink: "/projects?category=firebase-flutter",
  },
  {
    id: "databases",
    icon: Database,
    title: "Databases",
    description: "Schema design, ORMs, performance, and migrations.",
    details: "Postgres, MongoDB, Prisma, Drizzle, and tuning.",
    learnMoreLink: "/projects?category=databases",
  },
  {
    id: "media",
    icon: Video,
    title: "Demos & Media",
    description: "Showcase screenshots and demo videos.",
    details: "Tell the story of your build with images and clips.",
    learnMoreLink: "/projects?category=media",
  },
]

export function PlatformFeatures() {
  const [selectedFeature, setSelectedFeature] = useState(features[0])

  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-4 inline-block text-xs font-semibold text-primary uppercase tracking-widest">
            Explore Project Categories
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A fully integrated suite of products, powered by industry leading AI.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1 space-y-3">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <button
                  key={feature.id}
                  onClick={() => setSelectedFeature(feature)}
                  className={`w-full text-left p-4 rounded-lg border transition-all ${
                    selectedFeature.id === feature.id
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <Icon className="h-5 w-5 mt-1 flex-shrink-0 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground whitespace-pre-line">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="lg:col-span-2">
            <Card className="p-8 border-primary/20 bg-card/50">
              <div className="flex items-start gap-4 mb-6">
                {selectedFeature && (
                  <>
                    {(() => {
                      const Icon = selectedFeature.icon
                      return <Icon className="h-8 w-8 text-primary flex-shrink-0" />
                    })()}
                    <div>
                      <h3 className="text-2xl font-bold text-foreground whitespace-pre-line">
                        {selectedFeature.title}
                      </h3>
                    </div>
                  </>
                )}
              </div>
              <p className="text-lg text-muted-foreground mb-8">{selectedFeature.details}</p>
              <Link href={selectedFeature.learnMoreLink}>
                <Button>View Projects</Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
