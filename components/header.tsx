"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
              C
            </div>
            <span className="text-xl font-bold text-foreground">CodeCrafted</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/platform"
              className={`text-sm transition-colors ${isActive("/platform") ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}
            >
              Platform
            </Link>
            <Link
              href="/solutions"
              className={`text-sm transition-colors ${isActive("/solutions") ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}
            >
              Solutions
            </Link>
            <Link
              href="/projects"
              className={`text-sm transition-colors ${isActive("/projects") ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}
            >
              Projects
            </Link>
            <Link
              href="/reviews"
              className={`text-sm transition-colors ${isActive("/reviews") ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}
            >
              Reviews
            </Link>
            <Link
              href="/resources"
              className={`text-sm transition-colors ${isActive("/resources") ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}
            >
              Resources
            </Link>
            <Link
              href="/work-with-us"
              className={`text-sm transition-colors ${isActive("/work-with-us") ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}
            >
              Work With Us
            </Link>
            <Link
              href="/team"
              className={`text-sm transition-colors ${isActive("/team") ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}
            >
              Team
            </Link>
            <Link
              href="/company"
              className={`text-sm transition-colors ${isActive("/company") ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}
            >
              About
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/projects">
              <Button className="hidden sm:inline-flex">Get Started</Button>
            </Link>
            <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="/platform" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground">
              Platform
            </Link>
            <Link href="/solutions" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground">
              Solutions
            </Link>
            <Link href="/projects" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground">
              Projects
            </Link>
            <Link href="/reviews" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground">
              Reviews
            </Link>
            <Link href="/resources" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground">
              Resources
            </Link>
            <Link href="/work-with-us" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground">
              Work With Us
            </Link>
            <Link href="/team" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground">
              Team
            </Link>
            <Link href="/company" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground">
              About
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
