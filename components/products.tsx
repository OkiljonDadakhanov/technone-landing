import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Star } from "lucide-react"

export function Products() {
  const products = [
    {
      name: "TechnFlow",
      description:
        "A comprehensive project management and workflow automation platform designed for software development teams.",
      features: ["Task Management", "Team Collaboration", "Time Tracking", "Automated Reporting"],
      image: "/placeholder.svg?height=300&width=500",
      status: "Live",
      rating: 4.8,
      users: "10K+",
    },
    {
      name: "DataSync Pro",
      description:
        "Enterprise-grade data integration and synchronization tool for seamless data flow across multiple platforms.",
      features: ["Real-time Sync", "API Integration", "Data Transformation", "Security Compliance"],
      image: "/placeholder.svg?height=300&width=500",
      status: "Beta",
      rating: 4.6,
      users: "2K+",
    },
    {
      name: "CloudMonitor",
      description: "Advanced cloud infrastructure monitoring and alerting system with AI-powered insights.",
      features: ["Real-time Monitoring", "AI Insights", "Custom Alerts", "Performance Analytics"],
      image: "/placeholder.svg?height=300&width=500",
      status: "Coming Soon",
      rating: null,
      users: null,
    },
  ]

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our suite of innovative software products designed to streamline business operations and boost
            productivity.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge
                    variant={
                      product.status === "Live" ? "default" : product.status === "Beta" ? "secondary" : "outline"
                    }
                  >
                    {product.status}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  {product.rating && (
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 mb-4">{product.description}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {product.users && (
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">{product.users}</span> active users
                    </div>
                  )}

                  <div className="flex space-x-2 pt-2">
                    {product.status === "Live" && (
                      <>
                        <Button size="sm" className="flex-1">
                          Try Free Demo
                        </Button>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </>
                    )}
                    {product.status === "Beta" && (
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        Join Beta
                      </Button>
                    )}
                    {product.status === "Coming Soon" && (
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent" disabled>
                        Coming Soon
                      </Button>
                    )}
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
