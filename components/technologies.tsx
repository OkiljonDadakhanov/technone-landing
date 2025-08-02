import { Card, CardContent } from "@/components/ui/card";

export function Technologies() {
  const techCategories = [
    {
      category: "Frontend",
      technologies: [
        { name: "React", logo: "/placeholder.svg?height=40&width=40" },
        { name: "Next.js", logo: "/placeholder.svg?height=40&width=40" },
        { name: "Vue.js", logo: "/placeholder.svg?height=40&width=40" },
        { name: "Angular", logo: "/placeholder.svg?height=40&width=40" },
        { name: "TypeScript", logo: "/placeholder.svg?height=40&width=40" },
        { name: "Tailwind CSS", logo: "/placeholder.svg?height=40&width=40" },
      ],
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", logo: "/placeholder.svg?height=40&width=40" },
        { name: "Python", logo: "/placeholder.svg?height=40&width=40" },
        { name: "Java", logo: "/placeholder.svg?height=40&width=40" },
        { name: "Go", logo: "/placeholder.svg?height=40&width=40" },
        { name: "PHP", logo: "/placeholder.svg?height=40&width=40" },
        { name: "C#", logo: "/placeholder.svg?height=40&width=40" },
      ],
    },
    {
      category: "Mobile",
      technologies: [
        { name: "React Native", logo: "/placeholder.svg?height=40&width=40" },
        { name: "Flutter", logo: "/placeholder.svg?height=40&width=40" },
        { name: "Swift", logo: "/placeholder.svg?height=40&width=40" },
        { name: "Kotlin", logo: "/placeholder.svg?height=40&width=40" },
        { name: "Xamarin", logo: "/placeholder.svg?height=40&width=40" },
        { name: "Ionic", logo: "/placeholder.svg?height=40&width=40" },
      ],
    },
    {
      category: "Database",
      technologies: [
        { name: "PostgreSQL", logo: "/placeholder.svg?height=40&width=40" },
        { name: "MongoDB", logo: "/placeholder.svg?height=40&width=40" },
        { name: "MySQL", logo: "/placeholder.svg?height=40&width=40" },
        { name: "Redis", logo: "/placeholder.svg?height=40&width=40" },
        { name: "Elasticsearch", logo: "/placeholder.svg?height=40&width=40" },
        { name: "Firebase", logo: "/placeholder.svg?height=40&width=40" },
      ],
    },
    {
      category: "Cloud & DevOps",
      technologies: [
        { name: "AWS", logo: "/placeholder.svg?height=40&width=40" },
        { name: "Azure", logo: "/placeholder.svg?height=40&width=40" },
        { name: "Google Cloud", logo: "/placeholder.svg?height=40&width=40" },
        { name: "Docker", logo: "/placeholder.svg?height=40&width=40" },
        { name: "Kubernetes", logo: "/placeholder.svg?height=40&width=40" },
        { name: "Jenkins", logo: "/placeholder.svg?height=40&width=40" },
      ],
    },
    {
      category: "AI & ML",
      technologies: [
        { name: "TensorFlow", logo: "/placeholder.svg?height=40&width=40" },
        { name: "PyTorch", logo: "/placeholder.svg?height=40&width=40" },
        { name: "OpenAI", logo: "/placeholder.svg?height=40&width=40" },
        { name: "Scikit-learn", logo: "/placeholder.svg?height=40&width=40" },
        { name: "Pandas", logo: "/placeholder.svg?height=40&width=40" },
        { name: "NumPy", logo: "/placeholder.svg?height=40&width=40" },
      ],
    },
  ];

  return (
    <section id="technologies" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Technologies & Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies and industry-leading tools to
            build robust, scalable, and future-proof solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <Card key={index} className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                  {category.category}
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group cursor-pointer"
                    >
                      <img
                        src={tech.logo || "/placeholder.svg"}
                        alt={tech.name}
                        className="w-10 h-10 mb-2 group-hover:scale-110 transition-transform"
                      />
                      <span className="text-xs text-gray-600 text-center font-medium">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
