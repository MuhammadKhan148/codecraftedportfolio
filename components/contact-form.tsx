"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    company: "",
    fleetSize: "",
    subscribe: true,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-20 sm:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Let’s scope your next release
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Team CodeCrafted plugs into your roadmap with senior engineers, designers, and AI specialists.
            </p>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold">*</span>
                <span>Ship Flutter + Firebase products with vetted patterns for auth, realtime data, and scale.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">*</span>
                <span>Design and deploy AI-powered experiences that tie back to measurable KPIs.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">*</span>
                <span>Automate operations with dashboards, workflows, and integrations your team can own.</span>
              </li>
            </ul>
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
              <h3 className="text-lg font-semibold text-foreground mb-3">🚀 Quick Start Options</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Prefer marketplaces? Book us instantly via our verified profiles:
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.fiverr.com/codecraftedmk/develop-a-custom-chrome-firefox-or-edge-extension-for-automation-and-web-tools?context_referrer=tailored_homepage_perseus&source=recently_viewed_gigs&ref_ctx_id=1c97c055e63a4cc4b2714a43c4597509&context=recommendation&pckg_id=1&pos=4&context_alg=recently_viewed&seller_online=true&imp_id=2f25c024-a682-4c59-80ab-1cb3ba504984"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium"
                >
                  <span>🌟 Fiverr</span>
                  <span className="text-xs">(Recommended)</span>
                </a>
                <a
                  href="https://www.freelancer.com/u/CodeCraftedMK"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
                >
                  <span>💼 Freelancer</span>
                </a>
              </div>
            </div>
          </div>

          <Card className="p-8 border-border/50">
            <h3 className="text-xl font-bold text-foreground mb-6">Schedule a Tour</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <input
                type="email"
                name="email"
                placeholder="Company email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <input
                type="text"
                name="company"
                placeholder="Company name"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <select
                name="fleetSize"
                value={formData.fleetSize}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Primary tech focus</option>
                <option value="react">React</option>
                <option value="mern">MERN</option>
                <option value="ai">AI / Chatbots</option>
                <option value="firebase">Firebase / Flutter</option>
                <option value="databases">Databases</option>
                <option value="fullstack">Fullstack</option>
              </select>

              <label className="flex items-start gap-3 text-sm text-muted-foreground">
                <input
                  type="checkbox"
                  name="subscribe"
                  checked={formData.subscribe}
                  onChange={handleChange}
                  className="mt-1"
                />
                <span>
                  Yes, I would like to receive communications about CodeCrafted updates and community events and
                  understand that I can unsubscribe at any time.
                </span>
              </label>

              <Button type="submit" className="w-full">
                Get a Tour
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}


