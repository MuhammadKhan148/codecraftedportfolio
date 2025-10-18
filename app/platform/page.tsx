import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function PlatformPage() {
  const features = [
    {
      title: "Case studies with depth",
      description:
        "Highlight production builds with architecture notes, embedded walkthroughs, and the exact stacks that powered delivery.",
    },
    {
      title: "AI-infused delivery",
      description: "Surface how we weave automation, analytics, and ML models into each engagement.",
    },
    {
      title: "Operational visibility",
      description: "Track launch milestones, releases, and outcomes across web, mobile, and platform initiatives.",
    },
  ]

  const enterprise = [
    {
      title: "Secure foundations",
      description: "Single-tenant or hardened multi-tenant deployments, audited auth flows, and careful data boundaries.",
    },
    {
      title: "Delivery discipline",
      description: "Design reviews, automated testing, CI/CD, and runbooks that keep scale-ups comfortable.",
    },
    {
      title: "Co-created roadmaps",
      description: "We partner with product owners to evolve backlogs, integrations, and analytics over time.",
    },
  ]

  const data = [
    {
      title: "Media embeds",
      description: "Ship with recorded demos, prototype reels, and launch-day walkthroughs in one place.",
    },
    {
      title: "Tech tags",
      description: "Tag engagements by stacks like Flutter, Firebase, React, Node, and bespoke AI pipelines.",
    },
    {
      title: "Data export",
      description: "Export structured highlights for investor updates, partner portals, or RFP follow-ups.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">The CodeCrafted delivery hub.</h1>
          <p className="text-xl text-muted-foreground mb-8">
            We document, demo, and refine the software we build for our clients—AI platforms, Flutter + Firebase apps,
            and full-stack systems engineered for growth.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg">Get started</Button>
            <Button size="lg" variant="outline">
              Watch demo
            </Button>
          </div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Share the craft behind each launch</h3>
              <p className="text-muted-foreground">Structured narratives pair product vision with architecture decisions.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Scale alongside your partners</h3>
              <p className="text-muted-foreground">Modular releases keep startups nimble while enterprise teams stay compliant.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Measure impact with actionable data</h3>
              <p className="text-muted-foreground">Success metrics, usage signals, and roadmap plans remain visible across teams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Power of Platform */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12">The power of CodeCrafted.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12">Built for enterprise.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {enterprise.map((item, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12">Data that drives business.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {data.map((item, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12">Small studio. Meaningful outcomes.</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">18+</div>
              <p className="text-muted-foreground">Client partners</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">42</div>
              <p className="text-muted-foreground">Products launched</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">9</div>
              <p className="text-muted-foreground">Active AI initiatives</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">12</div>
              <p className="text-muted-foreground">Team members</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
