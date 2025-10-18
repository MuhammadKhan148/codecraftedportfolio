import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Cross-Platform Apps",
      description: "Flutter + Firebase experiences deployed across Android, iOS, web, and desktop.",
      details:
        "Role-based flows, realtime data layers, and hardened auth give mobility and services teams the tools they need without juggling multiple codebases.",
      link: "/products/driver-safety",
    },
    {
      title: "Operations Intelligence",
      description: "Consolidate telemetry, KPIs, and automation triggers into a single command center.",
      details:
        "We wire data pipelines, dashboards, and alerting loops so operations leaders can see what is happening now and what happens next.",
      link: "/products/fleet-management",
    },
    {
      title: "Automation & Monitoring",
      description: "Streaming analytics and smart notifications that keep assets and workflows healthy.",
      details:
        "Our systems watch critical signals, notify the right humans, and trigger playbooks that reduce downtime across logistics, mobility, and field teams.",
      link: "/products/equipment-monitoring",
    },
    {
      title: "Product Feedback Workflows",
      description: "Close the loop between users, stakeholders, and the product squad.",
      details:
        "Collect qualitative insights, highlight success metrics, and keep clients aligned on the roadmap so every iteration lands with purpose.",
      link: "/reviews",
    },
    {
      title: "Team Enablement",
      description: "Give internal teams the tools they need to execute with clarity.",
      details:
        "Scheduling, credential tracking, coaching dashboards, and knowledge bases—crafted to keep distributed crews informed and compliant.",
      link: "/products/workforce-management",
    },
    {
      title: "AI Product Engineering",
      description: "Applied machine learning that ships to production and stays maintainable.",
      details:
        "From recommendation engines to computer vision, we pair research with pragmatic engineering to deliver measurable, data-driven outcomes.",
      link: "/products/ai-vision",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Solutions crafted around your product.</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Each engagement blends intelligent software, thoughtful UX, and measurable outcomes.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, idx) => (
              <Card key={idx} className="p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground mb-4">{solution.description}</p>
                <p className="text-foreground mb-6">{solution.details}</p>
                <Link href={solution.link}>
                  <Button variant="outline">Learn more</Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
