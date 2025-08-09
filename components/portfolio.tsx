import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function Portfolio() {
  const t = useTranslations("Portfolio");
  const projects = [
    {
      title: "E-Commerce Platform Redesign",
      client: "RetailCorp",
      description:
        "Complete redesign and development of a multi-vendor e-commerce platform handling 100K+ daily transactions.",
      problem: "Legacy system with poor performance and user experience",
      solution: "Modern React-based platform with microservices architecture",
      result: "300% increase in conversion rate, 50% faster load times",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      image: "/placeholder.svg?height=300&width=500",
      category: "E-Commerce",
    },
    {
      title: "Healthcare Management System",
      client: "MedTech Solutions",
      description:
        "Comprehensive patient management system with telemedicine capabilities and HIPAA compliance.",
      problem: "Manual processes and disconnected systems",
      solution:
        "Integrated platform with real-time data sync and secure communication",
      result:
        "80% reduction in administrative time, improved patient satisfaction",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      image: "/placeholder.svg?height=300&width=500",
      category: "Healthcare",
    },
    {
      title: "Financial Analytics Dashboard",
      client: "InvestPro",
      description:
        "Real-time financial data visualization and analytics platform for investment professionals.",
      problem: "Slow data processing and limited visualization options",
      solution:
        "High-performance dashboard with advanced charting and real-time updates",
      result:
        "90% faster data processing, enhanced decision-making capabilities",
      technologies: ["Angular", "Java", "Redis", "D3.js"],
      image: "/placeholder.svg?height=300&width=500",
      category: "FinTech",
    },
    {
      title: "Supply Chain Optimization",
      client: "LogiFlow",
      description:
        "AI-powered supply chain management system with predictive analytics and automated workflows.",
      problem: "Inefficient inventory management and lack of visibility",
      solution:
        "ML-driven platform with real-time tracking and predictive insights",
      result: "40% reduction in inventory costs, 99.5% delivery accuracy",
      technologies: ["React", "Python", "TensorFlow", "Kubernetes"],
      image: "/placeholder.svg?height=300&width=500",
      category: "Logistics",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t("heading")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge>{project.category}</Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-emerald-600 font-medium">
                      {t("client")} {project.client}
                    </p>
                  </div>

                  <p className="text-gray-600">{project.description}</p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {t("problem")}
                      </h4>
                      <p className="text-sm text-gray-600">{project.problem}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {t("solution")}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {project.solution}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {t("results")}
                      </h4>
                      <p className="text-sm text-emerald-600 font-medium">
                        {project.result}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">
                      {t("technologiesUsed")}
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 bg-transparent cursor-pointer"
                    >
                      {t("buttons.viewCaseStudy")}
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 bg-transparent cursor-pointer"
                    >
                      <ExternalLink className="h-4 w-4 " />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 cursor-pointer">
          <Button size="lg">
            {t("buttons.viewAll")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
