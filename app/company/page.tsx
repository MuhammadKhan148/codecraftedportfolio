import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Engineering intelligence for real products.</h1>
          <p className="text-xl text-muted-foreground">
            Team CodeCrafted architects AI-powered platforms, cross-platform apps, and automation systems that move startups and enterprises forward.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 mb-16">
            <Card className="p-8 bg-card/60 border-border/60">
              <h2 className="text-3xl font-bold mb-2">Muhammad Khan</h2>
              <p className="text-primary font-semibold mb-6">Captain | CodeCrafted</p>
              <p className="text-muted-foreground mb-4">
                Muhammad leads a dedicated team of engineers, designers, and innovators focused on delivering intelligent, scalable, and human-centered software. With deep roots in AI-driven development, Flutter and Firebase ecosystems, and modern full-stack execution, he converts complex ideas into production-grade products that perform and scale.
              </p>
              <p className="text-muted-foreground mb-4">
                Under his leadership we ship global projects that span web, mobile, and automationâ€”each crafted in close partnership with clients to align with their vision, business goals, and long-term roadmaps.
              </p>
              <div className="space-y-3 text-muted-foreground">
                <p>What guides our work:</p>
                <ul className="space-y-2 text-left text-sm leading-relaxed">
                  <li>- Innovation at the core: forward-thinking technology paired with purposeful design.</li>
                  <li>- Client-centered collaboration: transparent, trust-driven partnerships that co-create value.</li>
                  <li>- Agile execution: adaptive, quality-driven delivery designed for speed and scale.</li>
                  <li>- Enduring impact: solutions architected for growth, evolution, and measurable outcomes.</li>
                </ul>
              </div>
            </Card>

            <div className="space-y-8">
              <Card className="p-8 bg-card/40 border-border/60">
                <h3 className="text-2xl font-semibold mb-4">Expertise</h3>
                <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <ul className="space-y-2">
                    <li>- Intelligent product engineering</li>
                    <li>- AI and automation pipelines</li>
                    <li>- Full-stack web platforms</li>
                    <li>- Flutter and Firebase delivery</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>- Data and cloud infrastructure</li>
                    <li>- Testing and CI/CD automation</li>
                    <li>- Product design and UX systems</li>
                    <li>- ERP and business process tooling</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-8 bg-card/40 border-border/60">
                <h3 className="text-2xl font-semibold mb-4">Our mission</h3>
                <p className="text-muted-foreground">
                  We engineer technology that delivers intelligence, scalability, and measurable value. Whether launching a new product, modernizing infrastructure, or weaving AI into existing workflows, Team CodeCrafted helps partners turn vision into practical reality.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

