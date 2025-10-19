"use client"

import type React from "react"

import { useState } from "react"

const FIVERR_URL =
  "https://www.fiverr.com/codecraftedmk/develop-a-custom-chrome-firefox-or-edge-extension-for-automation-and-web-tools?context_referrer=tailored_homepage_perseus&source=recently_viewed_gigs&ref_ctx_id=1c97c055e63a4cc4b2714a43c4597509&context=recommendation&pckg_id=1&pos=4&context_alg=recently_viewed&seller_online=true&imp_id=2f25c024-a682-4c59-80ab-1cb3ba504984"
const FREELANCER_URL = "https://www.freelancer.com/u/CodeCraftedMK"

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, type, value } = event.target

    if (type === "checkbox") {
      const { checked } = event.target as HTMLInputElement
      setFormData((previous) => ({ ...previous, [name]: checked }))
      return
    }

    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-20 sm:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Let&apos;s scope your next release
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Team CodeCrafted plugs into your roadmap with senior engineers, designers, and AI specialists.
            </p>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="font-bold text-primary">*</span>
                <span>Ship Flutter + Firebase products with vetted patterns for auth, realtime data, and scale.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">*</span>
                <span>Design and deploy AI-powered experiences that tie back to measurable KPIs.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">*</span>
                <span>Automate operations with dashboards, workflows, and integrations your team can own.</span>
              </li>
            </ul>
          </div>

          <div
            data-slot="card"
            className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-border/50 p-8 shadow-sm"
          >
            <h3 className="mb-6 text-xl font-bold text-foreground">Schedule a Tour</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                  Yes, I would like to receive communications about CodeCrafted updates and community events and understand
                  that I can unsubscribe at any time.
                </span>
              </label>

              <button
                data-slot="button"
                type="submit"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 has-[&_svg]:px-3 w-full"
              >
                Get a Tour
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
