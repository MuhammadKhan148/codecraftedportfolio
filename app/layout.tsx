import type React from "react"
import type { Metadata } from "next"
// Fonts removed to avoid unused variable lint; add back when used.
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"


export const metadata: Metadata = {
  title: "CodeCrafted | Engineering Intelligence for Real Products",
  description:
    "Team CodeCrafted showcases the intelligent software we build—AI-powered platforms, Flutter + Firebase apps, and modern full-stack systems engineered for scale.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className="font-sans antialiased"
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
