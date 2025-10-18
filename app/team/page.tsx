"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink, Code, Brain, Database, Smartphone } from "lucide-react"

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-muted-foreground">
            The brilliant minds behind CodeCrafted - combining years of experience 
            in AI, full-stack development, and innovative solutions.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Muhammad Khan */}
            <Card className="p-8 bg-card/60 border-border/60">
              <div className="text-center mb-8">
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-6 border-4 border-primary/20">
                  <img 
                    src="/team/muhammad-khan.jpg?v=2" 
                    alt="Muhammad Khan" 
                    className="w-full h-full object-cover"
                    onLoad={() => console.log('Muhammad image loaded successfully')}
                    onError={(e) => {
                      console.log('Muhammad image failed to load');
                      e.currentTarget.style.display = 'none';
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (nextElement) {
                        nextElement.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                    <Brain className="h-16 w-16 text-primary" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-2">Muhammad Khan</h2>
                <p className="text-primary font-semibold text-lg mb-4">CEO & AI Solutions Architect</p>
                <p className="text-muted-foreground text-sm">
                  Software Engineer with 4+ years experience in AI and providing AI solutions
                </p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">About Muhammad</h3>
                  <p className="text-muted-foreground mb-4">
                    Muhammad is a visionary software engineer with deep expertise in artificial intelligence 
                    and machine learning. With over 4 years of experience, he specializes in building 
                    AI-powered solutions that transform businesses and automate complex processes.
                  </p>
                  <p className="text-muted-foreground">
                    As the CEO of CodeCrafted, Muhammad leads the strategic direction of the company, 
                    focusing on innovative AI solutions, intelligent automation, and cutting-edge 
                    technology implementations that drive real business value.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Core Expertise</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Brain className="h-4 w-4 text-primary" />
                      <span>AI & Machine Learning</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Code className="h-4 w-4 text-primary" />
                      <span>Full-Stack Development</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Database className="h-4 w-4 text-primary" />
                      <span>Data Engineering</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Smartphone className="h-4 w-4 text-primary" />
                      <span>Mobile Development</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open('https://github.com/MuhammadKhan148?tab=repositories', '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.location.href = 'mailto:muhammad.mak252@gmail.com'}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                </div>
              </div>
            </Card>

            {/* Aakash Ijaz */}
            <Card className="p-8 bg-card/60 border-border/60">
              <div className="text-center mb-8">
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-6 border-4 border-primary/20">
                  <img 
                    src="/team/aakash-ijaz.jpg?v=2" 
                    alt="Aakash Ijaz" 
                    className="w-full h-full object-cover object-center scale-110"
                    onLoad={() => console.log('Aakash image loaded successfully')}
                    onError={(e) => {
                      console.log('Aakash image failed to load');
                      e.currentTarget.style.display = 'none';
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (nextElement) {
                        nextElement.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                    <Code className="h-16 w-16 text-primary" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-2">Aakash Ijaz</h2>
                <p className="text-primary font-semibold text-lg mb-4">CTO & Full-Stack Engineer</p>
                <p className="text-muted-foreground text-sm">
                  Full Stack Web Developer and Software Engineer with 3+ years experience
                </p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">About Aakash</h3>
                  <p className="text-muted-foreground mb-4">
                    Aakash is a passionate full-stack developer with a strong foundation in modern 
                    web technologies and software engineering principles. With over 3 years of 
                    industry experience, he excels at building scalable, maintainable applications 
                    that solve real-world problems.
                  </p>
                  <p className="text-muted-foreground">
                    As the CTO of CodeCrafted, Aakash oversees the technical architecture and 
                    development processes, ensuring that every project meets the highest standards 
                    of quality, performance, and user experience.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Core Expertise</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Code className="h-4 w-4 text-primary" />
                      <span>Full-Stack Web</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Database className="h-4 w-4 text-primary" />
                      <span>Backend Systems</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Smartphone className="h-4 w-4 text-primary" />
                      <span>Mobile Apps</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Brain className="h-4 w-4 text-primary" />
                      <span>System Architecture</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open('https://github.com/Aakashijaz786/', '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.location.href = 'mailto:aakashijaz2002@gmail.com'}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide our work and drive our success
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
              <p className="text-muted-foreground">
                We stay at the forefront of technology, constantly exploring new tools, 
                frameworks, and methodologies to deliver cutting-edge solutions.
              </p>
            </Card>
            
            <Card className="p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Code</h3>
              <p className="text-muted-foreground">
                Every line of code is written with care, following best practices and 
                maintaining high standards for performance, security, and maintainability.
              </p>
            </Card>
            
            <Card className="p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110">
                <ExternalLink className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Client Success</h3>
              <p className="text-muted-foreground">
                Your success is our success. We work closely with clients to understand 
                their needs and deliver solutions that exceed expectations.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Work with Our Team?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how we can help bring your vision to life with our expertise and passion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => window.location.href = '/work-with-us'}
            >
              Start a Project
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => window.location.href = '/projects'}
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
