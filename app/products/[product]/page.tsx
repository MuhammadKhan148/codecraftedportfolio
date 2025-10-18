import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

type ProductInfo = {
  title: string
  subtitle: string
  description: string
  features: string[]
}

const productDetails: Record<string, ProductInfo> = {
  "driver-safety": {
    title: "Cross-Platform Apps",
    subtitle: "Flutter + Firebase experiences that deploy once and run everywhere.",
    description:
      "Role-based flows, realtime data sync, and secure auth patterns tailored for mobility, logistics, and services teams.",
    features: [
      "Single codebase across Android, iOS, web, and desktop",
      "Provider- or Bloc-driven state with Firestore/RTDB syncing",
      "Offline-first patterns and granular caching",
      "Localization and multi-tenant branding support",
      "CI/CD pipelines for rapid release trains",
    ],
  },
  "fleet-management": {
    title: "Operations Intelligence",
    subtitle: "Give operators a living command center fed by your data exhaust.",
    description:
      "We connect telemetry, business KPIs, and user signals into dashboards that answer what is happening now and what happens next.",
    features: [
      "Unified data model with real-time updates",
      "Alerting and escalation workflows",
      "Predictive analytics and anomaly detection",
      "Role-specific views for leadership and field teams",
      "Integrations with existing CRMs and ERPs",
    ],
  },
  "equipment-monitoring": {
    title: "Automation & Monitoring",
    subtitle: "Watch critical assets, trigger playbooks, and reduce downtime.",
    description:
      "Streaming analytics, notification routing, and workflow automation keep your operations humming without adding headcount.",
    features: [
      "High-frequency ingestion pipelines",
      "Custom thresholds and anomaly rules",
      "SMS, email, and in-app notification layers",
      "Workflow integrations with Zapier, Slack, or webhooks",
      "Audit trails and reporting for compliance",
    ],
  },
  reviews: {
    title: "Product Feedback Workflows",
    subtitle: "Make every stakeholder feel heard—and every iteration intentional.",
    description:
      "Collect qualitative insights, highlight impact metrics, and sync roadmaps with the people depending on your product.",
    features: [
      "Review queues with moderation controls",
      "Sentiment tagging and thematic insights",
      "Roadmap linkage and changelog publishing",
      "Stakeholder update digests",
      "APIs for downstream analytics",
    ],
  },
  "workforce-management": {
    title: "Team Enablement",
    subtitle: "Equip distributed teams with the context and tools to excel.",
    description:
      "Scheduling, credential management, and performance coaching built for organizations that move fast but refuse to break trust.",
    features: [
      "Role-based scheduling and shift swaps",
      "Certification and compliance tracking",
      "Embedded training modules and checklists",
      "Performance dashboards with actionable coaching cues",
      "Integration with HRIS and payroll systems",
    ],
  },
  "ai-vision": {
    title: "AI Product Engineering",
    subtitle: "Pair research-grade models with production-ready code.",
    description:
      "We design, train, and ship applied AI—computer vision, predictive models, and assistants—anchored in measurable business outcomes.",
    features: [
      "Model prototyping with rapid experimentation loops",
      "MLOps pipelines for training, evaluation, and deployment",
      "Explainability and observability tooling",
      "Edge, mobile, and cloud inference support",
      "Continuous improvement backed by human-in-the-loop review",
    ],
  },
}

export default async function ProductPage({ params }: { params: Promise<{ product: string }> }) {
  const { product: productKey } = await params
  const product = productDetails[productKey]

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">{product.title}</h1>
          <p className="text-xl text-muted-foreground mb-8">{product.subtitle}</p>
          <p className="text-lg text-foreground mb-8">{product.description}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg">Start a project</Button>
            <Button size="lg" variant="outline">
              View case studies
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">What we deliver</h2>
          <ul className="space-y-4">
            {product.features.map((feature: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-lg text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Let’s build the next release together.</h2>
          <p className="text-lg text-muted-foreground mb-8">
            CodeCrafted plugs into your roadmap with engineers, designers, and AI specialists ready to ship.
          </p>
          <Button size="lg">Schedule a call</Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
