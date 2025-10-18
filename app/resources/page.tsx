"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import Link from "next/link"

export default function ResourcesPage() {
  const allResources = [
    {
      type: "Product notes",
      title: "Inside the Rider Dispatch build",
      description:
        "Architecture highlights, security rules, and Firebase tips from our cross-platform rider app delivery.",
      link: "#",
    },
    {
      type: "ON-DEMAND SESSION",
      title: "AI chess engine: from rules to search",
      description: "Muhammad walks through designing legal move engines and AI heuristics that stay fast and correct.",
      link: "#",
    },
    {
      type: "ON-DEMAND SESSION",
      title: "Deepfake pipeline lessons learned",
      description: "How we productionized face-tracking, blending, and Wav2Lip syncing with reproducible tooling.",
      link: "#",
    },
    {
      type: "Journal",
      title: "Shipping intelligently with small squads",
      description: "Why CodeCrafted favors lean, senior teams over bloated delivery pods.",
      link: "#",
    },
    {
      type: "Case Study",
      title: "From prototype to global launch in 12 weeks",
      description: "How a startup co-built with us to hit an aggressive timeline without sacrificing quality.",
      link: "#",
    },
    {
      type: "Guide",
      title: "Flutter + Firebase patterns we reuse everywhere",
      description: "Auth, state management, and deployment practices that keep apps fast to ship and easy to evolve.",
      link: "#",
    },
    {
      type: "Blog",
      title: "Treating AI features like products, not demos",
      description: "Frameworks for scoping, validating, and maintaining machine learning inside shipped software.",
      link: "#",
    },
    {
      type: "Blog",
      title: "Designing ops dashboards stakeholders actually use",
      description: "Best practices for combining metrics, alerts, and human workflows in one view.",
      link: "#",
    },
    {
      type: "Webinar",
      title: "Handing off automation with confidence",
      description: "Playbooks for documentation, runbooks, and observability when we transition products to internal teams.",
      link: "#",
    },
    {
      type: "Report",
      title: "State of intelligent product engineering 2025",
      description: "Where AI, automation, and platform thinking are converging for startups and enterprises.",
      link: "#",
    },
    {
      type: "Guide",
      title: "Partnering with CodeCrafted",
      description: "How we kick off, collaborate, and measure success with new clients.",
      link: "#",
    },
    {
      type: "Video",
      title: "Tour the CodeCrafted delivery hub",
      description: "A walkthrough of how we document and share work-in-progress with stakeholders.",
      link: "#",
    },
  ]

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const totalPages = Math.ceil(allResources.length / itemsPerPage)

  const startIdx = (currentPage - 1) * itemsPerPage
  const paginatedResources = allResources.slice(startIdx, startIdx + itemsPerPage)

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Discover how Team CodeCrafted builds.
          </h1>
          <p className="text-xl text-muted-foreground">
            Playbooks, case notes, and behind-the-scenes breakdowns from the products we ship.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {paginatedResources.map((resource, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <p className="text-sm font-semibold text-primary mb-2">{resource.type}</p>
                <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
                <p className="text-muted-foreground mb-4">{resource.description}</p>
                <Link href={resource.link}>
                  <Button variant="outline" size="sm">
                    Learn more
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2">
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
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

      <Footer />
    </main>
  )
}
