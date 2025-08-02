"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Smartphone, Globe, Cloud, Palette, Wrench, Database, Shield } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions built to your exact specifications and business requirements.",
      technologies: ["React", "Node.js", "Python", "Java"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    {
      icon: Globe,
      title: "Web App Development",
      description: "Modern, responsive web applications with cutting-edge technologies.",
      technologies: ["Next.js", "Vue.js", "Angular", "TypeScript"],
    },
    {
      icon: Cloud,
      title: "SaaS Product Development",
      description: "Scalable Software-as-a-Service solutions from concept to deployment.",
      technologies: ["AWS", "Docker", "Kubernetes", "Microservices"],
    },
    {
      icon: Database,
      title: "Cloud Solutions",
      description: "Cloud migration, architecture design, and infrastructure optimization.",
      technologies: ["AWS", "Azure", "GCP", "Terraform"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive and engaging experiences.",
      technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and optimization for your software solutions.",
      technologies: ["24/7 Support", "Performance Monitoring", "Security Updates"],
    },
    {
      icon: Shield,
      title: "DevOps & Security",
      description: "Secure deployment pipelines and infrastructure management.",
      technologies: ["CI/CD", "Jenkins", "GitLab", "Security Audits"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive software development services to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
                  <service.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <div className="flex flex-wrap gap-1">
                  {service.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            onClick={() => {
              const element = document.querySelector("#contact")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  )
}
