import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO",
      company: "RetailCorp",
      content:
        "TechnOne transformed our entire e-commerce platform. Their expertise in modern technologies and attention to detail resulted in a 300% increase in our conversion rates. Exceptional work!",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Michael Chen",
      position: "Founder",
      company: "MedTech Solutions",
      content:
        "Working with TechnOne was a game-changer for our healthcare platform. They delivered a HIPAA-compliant system that exceeded our expectations. Their team is professional, responsive, and highly skilled.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Emily Rodriguez",
      position: "VP of Technology",
      company: "InvestPro",
      content:
        "The financial analytics dashboard TechnOne built for us is incredible. Real-time data processing that used to take hours now happens in seconds. Our investment team loves the new interface.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "David Kim",
      position: "Operations Director",
      company: "LogiFlow",
      content:
        "TechnOne's AI-powered supply chain solution revolutionized our operations. We achieved 40% cost reduction and 99.5% delivery accuracy. Their innovative approach to problem-solving is outstanding.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Lisa Thompson",
      position: "CEO",
      company: "StartupXYZ",
      content:
        "From concept to deployment, TechnOne guided us through every step. Their expertise in modern web technologies helped us launch our SaaS product ahead of schedule and under budget.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "James Wilson",
      position: "IT Manager",
      company: "Enterprise Corp",
      content:
        "TechnOne's cloud migration services were flawless. They moved our entire infrastructure to AWS with zero downtime. Their DevOps expertise saved us months of work and significant costs.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  const clientLogos = [
    { name: "RetailCorp", logo: "/placeholder.svg?height=40&width=120" },
    { name: "MedTech Solutions", logo: "/placeholder.svg?height=40&width=120" },
    { name: "InvestPro", logo: "/placeholder.svg?height=40&width=120" },
    { name: "LogiFlow", logo: "/placeholder.svg?height=40&width=120" },
    { name: "StartupXYZ", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Enterprise Corp", logo: "/placeholder.svg?height=40&width=120" },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with TechnOne.
          </p>
        </div>

        {/* Client Logos */}
        <div className="mb-16">
          <h3 className="text-center text-lg font-semibold text-gray-900 mb-8">Trusted by Leading Companies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex justify-center cursor-pointer">
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  className="h-10 opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Quote className="h-4 w-4 text-emerald-600" />
                </div>

                <div className="mb-4">
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic leading-relaxed">"{testimonial.content}"</p>
                </div>

                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.position} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
