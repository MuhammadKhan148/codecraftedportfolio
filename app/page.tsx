import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { PlatformFeatures } from "@/components/platform-features"
import { Customers } from "@/components/customers"
import { Resources } from "@/components/resources"
import { FiverrCTA } from "@/components/fiverr-cta"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PlatformFeatures />
      <Customers />
      <Resources />
      <FiverrCTA />
      <ContactForm />
      <Footer />
    </main>
  )
}
