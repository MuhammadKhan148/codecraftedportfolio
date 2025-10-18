import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Link from "next/link"

export function Customers() {
  return (
    <section className="py-20 sm:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-4 inline-block text-xs font-semibold text-primary uppercase tracking-widest">
            Our Customers
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Developers and teams build in public with CodeCrafted
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/reviews">
              <Button variant="outline" className="bg-transparent">
                Explore Success Stories
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="ghost" className="gap-2">
                <Play className="h-4 w-4" />
                Hear from our customers (1:08)
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex items-center justify-center p-8 rounded-lg border border-border/50 bg-card/30 h-24"
            >
              <div className="text-center text-muted-foreground text-sm">Customer Logo</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
