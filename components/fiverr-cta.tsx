"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ExternalLink, Star, Clock, Shield, Zap, Briefcase } from "lucide-react"

export function FiverrCTA() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            🚀 Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground">
            Get instant access to our services through our verified Fiverr profile
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Fiverr Card */}
          <Card className="p-8 bg-white dark:bg-card border-green-200 dark:border-green-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Fiverr Marketplace</h3>
              <p className="text-muted-foreground mb-6">
                Browse our services, read reviews, and book instantly with secure payment protection.
              </p>
              
              <div className="space-y-3 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span>Secure payment protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-green-600" />
                  <span>Fast delivery guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-green-600" />
                  <span>Instant project start</span>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 text-lg"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.open('https://www.fiverr.com/codecraftedmk/develop-a-custom-chrome-firefox-or-edge-extension-for-automation-and-web-tools?context_referrer=tailored_homepage_perseus&source=recently_viewed_gigs&ref_ctx_id=1c97c055e63a4cc4b2714a43c4597509&context=recommendation&pckg_id=1&pos=4&context_alg=recently_viewed&seller_online=true&imp_id=2f25c024-a682-4c59-80ab-1cb3ba504984', '_blank')
                  }
                }}
              >
                🌟 Visit Our Fiverr Profile
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>

          {/* Freelancer Card */}
          <Card className="p-8 bg-white dark:bg-card border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Freelancer.com</h3>
              <p className="text-muted-foreground mb-6">
                Connect with us on Freelancer for custom quotes, milestones, and collaboration.
              </p>
              <div className="space-y-3 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-blue-600" />
                  <span>Verified Preferred Freelancer</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span>Flexible engagement & milestones</span>
                </div>
              </div>
              <Button 
                size="lg" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 text-lg"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.open('https://www.freelancer.com/u/CodeCraftedMK', '_blank')
                  }
                }}
              >
                💼 Visit Our Freelancer Profile
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>
          
          {/* Services Preview */}
          <div className="space-y-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Browser Extensions & Automation
              </h4>
              <p className="text-muted-foreground text-sm">
                Custom Chrome, Firefox, and Edge extensions for web automation, data extraction, and productivity tools.
              </p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                AI Solutions & Chatbots
              </h4>
              <p className="text-muted-foreground text-sm">
                Intelligent AI agents, chatbots, and automation solutions that transform your business processes.
              </p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Full-Stack Development
              </h4>
              <p className="text-muted-foreground text-sm">
                Complete web applications, mobile apps, and backend systems built with modern technologies.
              </p>
            </Card>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            💡 <strong>Pro Tip:</strong> Check our Fiverr profile for detailed service packages, pricing, and client reviews
          </p>
        </div>
      </div>
    </section>
  )
}
