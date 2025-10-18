import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Team CodeCrafted builds intelligent digital products.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-muted-foreground">
            We craft production-grade experiences powered by AI, Flutter + Firebase, and modern full-stack engineering,
            then document every milestone so partners see the thinking behind our delivery.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/projects">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started
              </Button>
            </Link>
            <Link href="/projects">
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 bg-transparent">
                <Play className="h-4 w-4" />
                Watch Demo
              </Button>
            </Link>
          </div>

          <div className="mt-12 rounded-lg border border-border bg-card/50 p-4 text-sm text-muted-foreground">
            Voted best in class for operations management.{" "}
            <Link href="/projects" className="text-primary hover:underline">
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
