"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star } from "lucide-react";
import { useTranslations } from "next-intl";

export function Products() {
  const t = useTranslations("Products");
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const products = [
    {
      name: "TechnFlow",
      description:
        "A comprehensive project management and workflow automation platform designed for software development teams.",
      features: [
        "Task Management",
        "Team Collaboration",
        "Time Tracking",
        "Automated Reporting",
      ],
      image: "/placeholder.svg?height=300&width=500",
      status: "Live",
      rating: 4.8,
      users: "10K+",
    },
    {
      name: "DataSync Pro",
      description:
        "Enterprise-grade data integration and synchronization tool for seamless data flow across multiple platforms.",
      features: [
        "Real-time Sync",
        "API Integration",
        "Data Transformation",
        "Security Compliance",
      ],
      image: "/placeholder.svg?height=300&width=500",
      status: "Beta",
      rating: 4.6,
      users: "2K+",
    },
    {
      name: "CloudMonitor",
      description:
        "Advanced cloud infrastructure monitoring and alerting system with AI-powered insights.",
      features: [
        "Real-time Monitoring",
        "AI Insights",
        "Custom Alerts",
        "Performance Analytics",
      ],
      image: "/placeholder.svg?height=300&width=500",
      status: "Coming Soon",
      rating: null,
      users: null,
    },
  ];

  return (
    <section
      id="products"
      className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden"
    >
      {/* Decorative background blur */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-emerald-200 opacity-30 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t("heading")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-white/70 backdrop-blur-md border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Product image and badge */}
              <div className="relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-52 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge
                    variant={
                      product.status === "Live"
                        ? "default"
                        : product.status === "Beta"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {product.status}
                  </Badge>
                </div>
              </div>

              {/* Title and rating */}
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-gray-900">
                    {product.name}
                  </CardTitle>
                  {product.rating && (
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-gray-700">
                        {product.rating}
                      </span>
                    </div>
                  )}
                </div>
              </CardHeader>

              {/* Description, features, users, and buttons */}
              <CardContent>
                <p className="text-gray-600 mb-4">{product.description}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {t("keyFeatures")}
                    </h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-600 flex items-center"
                        >
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {product.users && (
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">{product.users}</span>{" "}
                      {t("activeUsers")}
                    </div>
                  )}

                  <div className="flex space-x-2 pt-2">
                    {product.status === "Live" && (
                      <>
                        <Button size="sm" className="flex-1">
                          {t("buttons.tryDemo")}
                        </Button>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </>
                    )}
                    {product.status === "Beta" && (
                      <Button size="sm" variant="outline" className="flex-1">
                        {t("buttons.joinBeta")}
                      </Button>
                    )}
                    {product.status === "Coming Soon" && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        disabled
                      >
                        {t("buttons.comingSoon")}
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
  );
}
