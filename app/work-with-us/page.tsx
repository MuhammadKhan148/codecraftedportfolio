"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowRight, CheckCircle, Star } from "lucide-react"
import { useState } from "react"

export default function WorkWithUsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    projectIdea: "",
    projectType: "",
    projectTypeCustom: "",
    projectDescription: "",
    budgetRange: "",
    budgetCustom: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()
      
      if (result.success) {
        setSubmitMessage("✅ " + result.message)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          projectIdea: "",
          projectType: "",
          projectTypeCustom: "",
          projectDescription: "",
          budgetRange: "",
          budgetCustom: ""
        })
      } else {
        setSubmitMessage("❌ " + result.message)
      }
    } catch (error) {
      setSubmitMessage("❌ An error occurred. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Let's Build Something Amazing Together
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to transform your ideas into powerful digital solutions? 
            Partner with CodeCrafted for expert development, AI solutions, and cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose CodeCrafted?</h2>
            <p className="text-lg text-muted-foreground">
              We combine technical expertise with business understanding
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">4+ Years Experience</h3>
              <p className="text-muted-foreground">
                Proven track record in AI solutions, full-stack development, and enterprise software
              </p>
            </Card>
            
            <Card className="p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-First Approach</h3>
              <p className="text-muted-foreground">
                Specialized in AI agents, automation, and intelligent solutions that drive business growth
              </p>
            </Card>
            
            <Card className="p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Agile development process with regular updates and transparent communication
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground">
              From concept to deployment, we handle every aspect of your project
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">AI & Automation Solutions</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Custom AI agents and chatbots</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Process automation and workflows</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Machine learning integration</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Data analysis and insights</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Full-Stack Development</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Web applications (React, Next.js)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Mobile apps (Flutter, React Native)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Backend APIs and databases</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Cloud deployment and scaling</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Removed marketplace CTA to match request */}

      {/* Contact Form */}
      <section id="contact-form" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Let's Discuss Your Project</h2>
            <p className="text-lg text-muted-foreground">
              Tell us about your vision and we'll help bring it to life
            </p>
          </div>
          
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitMessage && (
                <div className={`p-4 rounded-lg text-center font-medium ${
                  submitMessage.includes('✅') 
                    ? 'bg-green-100 text-green-800 border border-green-200' 
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`}>
                  {submitMessage}
                </div>
              )}
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Your Project Idea</label>
                  <input
                    type="text"
                    name="projectIdea"
                    value={formData.projectIdea}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Describe your project idea or concept"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Project Type</label>
                  <div className="space-y-3">
                    <select 
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select project type</option>
                      <option value="ai">AI & Automation</option>
                      <option value="web">Web Application</option>
                      <option value="mobile">Mobile App</option>
                      <option value="fullstack">Full-Stack Solution</option>
                      <option value="consulting">Technical Consulting</option>
                      <option value="other">Other (specify below)</option>
                    </select>
                    <input
                      type="text"
                      name="projectTypeCustom"
                      value={formData.projectTypeCustom}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Or describe your specific project type here"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Project Description</label>
                <textarea
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  rows={4}
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Describe your project requirements, goals, and timeline..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Budget Range</label>
                <div className="space-y-3">
                  <select 
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select budget range</option>
                    <option value="any-price">Any Price - Let's discuss</option>
                    <option value="under-1k">Under $1,000</option>
                    <option value="1k-5k">$1,000 - $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-plus">$50,000+</option>
                    <option value="custom">Custom Budget (specify below)</option>
                  </select>
                  <input
                    type="text"
                    name="budgetCustom"
                    value={formData.budgetCustom}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Or enter your specific budget range here (e.g., $500-$2000)"
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Project Request"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
