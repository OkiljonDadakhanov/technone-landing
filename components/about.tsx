import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Users } from "lucide-react"

export function About() {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions.",
    },
    {
      icon: Eye,
      title: "Quality",
      description: "Every line of code is crafted with precision and attention to detail.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We love what we do and it shows in every project we deliver.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients as true technology partners.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About TechnOne</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded with a vision to bridge the gap between innovative ideas and powerful software solutions, TechnOne
            has been at the forefront of digital transformation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Our Story</h3>
            <p className="text-gray-600 leading-relaxed">
              Since our inception, we've been dedicated to creating software that not only meets today's needs but
              anticipates tomorrow's challenges. Our team of passionate developers, designers, and strategists work
              together to turn complex problems into elegant solutions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe that great software is born from understanding our clients' unique challenges and crafting
              solutions that drive real business value. Every project is an opportunity to push boundaries and create
              something extraordinary.
            </p>
          </div>
          <div className="relative">
            <img src="/placeholder.svg?height=400&width=600" alt="TechnOne Team" className="rounded-lg shadow-lg" />
          </div>
        </div>

        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-600">
                  To empower businesses with innovative software solutions that drive growth, efficiency, and
                  competitive advantage in the digital age.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading technology partner for businesses seeking to transform their operations through
                  cutting-edge software solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
