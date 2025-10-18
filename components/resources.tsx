import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const resources = [
  {
    category: "Product Updates",
    title: "Announced at Vision 25",
    description:
      "New CodeCrafted features to help you publish projects, embed media, and collect reviews.",
  },
  {
    category: "On-Demand Webinar",
    title: "Expert Advice: How to Maximize Fleet Safety",
    description:
      "Learn best practices from industry experts on maximizing fleet safety and reducing operational risks.",
  },
  {
    category: "Industry News",
    title: "Motive named #1 in Fleet Management across every segment.",
    description: "Motive tops G2 Fleet Management rankings across every segment, recognized as the industry leader.",
  },
]

export function Resources() {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Discover what&rsquo;s new with CodeCrafted.
          </h2>
          <div className="mt-8">
            <Link href="/resources">
              <Button variant="outline" className="bg-transparent">
                View All Resources
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {resources.map((resource, idx) => (
            <Card key={idx} className="p-6 border-border/50 hover:border-primary/50 transition-colors cursor-pointer">
              <div className="text-xs font-semibold text-primary mb-3 uppercase tracking-wide">{resource.category}</div>
              <h3 className="text-lg font-bold text-foreground mb-3">{resource.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
              <Link href="/resources" className="inline-flex">
                <Button variant="ghost" className="gap-2 p-0 h-auto text-primary hover:text-primary">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
