"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, CardContent } from "@/components/ui/card";

export function Technologies() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const techCategories = [
    {
      category: "Frontend",
      technologies: [
        {
          name: "React",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",
        },
        {
          name: "Next.js",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nextdotjs.svg",
        },
        {
          name: "Vue.js",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vuedotjs.svg",
        },
        {
          name: "Angular",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/angular.svg",
        },
        {
          name: "TypeScript",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/typescript.svg",
        },
        {
          name: "Tailwind CSS",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tailwindcss.svg",
        },
      ],
    },
    {
      category: "Backend",
      technologies: [
        {
          name: "Node.js",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg",
        },
        {
          name: "Python",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg",
        },
        {
          name: "Java",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/jsdelivr.svg",
        },
        {
          name: "Go",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/go.svg",
        },
        {
          name: "PHP",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/php.svg",
        },
        {
          name: "C#",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/csharp.svg",
        },
      ],
    },
    {
      category: "Mobile",
      technologies: [
        {
          name: "React Native",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",
        },
        {
          name: "Flutter",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/flutter.svg",
        },
        {
          name: "Swift",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/swift.svg",
        },
        {
          name: "Kotlin",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/kotlin.svg",
        },
        {
          name: "Xamarin",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/xamarin.svg",
        },
        {
          name: "Ionic",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/ionic.svg",
        },
      ],
    },
    {
      category: "Database",
      technologies: [
        {
          name: "PostgreSQL",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postgresql.svg",
        },
        {
          name: "MongoDB",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mongodb.svg",
        },
        {
          name: "MySQL",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mysql.svg",
        },
        {
          name: "Redis",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/redis.svg",
        },
        {
          name: "Elasticsearch",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/elasticsearch.svg",
        },
        {
          name: "Firebase",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/firebase.svg",
        },
      ],
    },
    {
      category: "Cloud & DevOps",
      technologies: [
        {
          name: "AWS",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg",
        },
        {
          name: "Azure",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftazure.svg",
        },
        {
          name: "Google Cloud",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlecloud.svg",
        },
        {
          name: "Docker",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg",
        },
        {
          name: "Kubernetes",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/kubernetes.svg",
        },
        {
          name: "Jenkins",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/jenkins.svg",
        },
      ],
    },
    {
      category: "AI & ML",
      technologies: [
        {
          name: "TensorFlow",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tensorflow.svg",
        },
        {
          name: "PyTorch",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/pytorch.svg",
        },
        {
          name: "OpenAI",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg",
        },
        {
          name: "Scikit-learn",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/scikitlearn.svg",
        },
        {
          name: "Pandas",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/pandas.svg",
        },
        {
          name: "NumPy",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/numpy.svg",
        },
      ],
    },
  ];

  return (
    <section
      id="technologies"
      className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden"
    >
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-emerald-200 opacity-30 rounded-full blur-[150px] -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Technologies & Tools
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We leverage industry-leading technologies to engineer elegant,
            scalable, and future-ready solutions tailored to your vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {techCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 bg-white/70 backdrop-blur-md border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-6 tracking-tight">
                  {category.category}
                </h3>
                <div className="grid grid-cols-3 gap-6">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex flex-col items-center justify-center text-center cursor-pointer hover:scale-105 transition-transform duration-300 group"
                    >
                      <div className="w-12 h-12 mb-2 flex items-center justify-center rounded-lg bg-gray-100 group-hover:bg-emerald-100 transition-colors">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-6 h-6 object-contain filter grayscale group-hover:grayscale-0 transition duration-300"
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-700">
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
