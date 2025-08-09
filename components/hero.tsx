"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("Hero");
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      easing: "ease-in-out", // smooth easing
      once: true, // animate only once
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      {/* Gradient Blur Background */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-emerald-200 rounded-full blur-[150px] opacity-30 z-0"></div>

      <div className="container relative z-10 mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight"
                data-aos="fade-up"
              >
                {t.rich("title", {
                  em: (chunks) => (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">{chunks}</span>
                  ),
                })}
              </h1>
              <p
                className="text-lg text-gray-600 leading-relaxed max-w-xl"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {t("description")}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group cursor-pointer bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                onClick={() => scrollToSection("#contact")}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {t("cta.getStarted")}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group border-gray-300 text-gray-700 hover:border-emerald-500 hover:text-emerald-600 transition-colors cursor-pointer"
                onClick={() => scrollToSection("#portfolio")}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Play className="mr-2 h-5 w-5" />
                {t("cta.seeOurWork")}
              </Button>
            </div>

            <div
              className="flex items-center space-x-8 pt-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {[
                { label: t("stats.projects"), value: "5+" },
                { label: t("stats.satisfaction"), value: "98%" },
                { label: t("stats.experience"), value: "3+" },
              ].map((stat) => (
                <div className="text-center" key={stat.label}>
                  <div className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Content */}
          <div className="relative w-full h-full">
            <div className="relative z-10 rounded-3xl shadow-2xl overflow-hidden">
              <Image
                src="/images/main.jpg" // <-- use a real image here
                alt="TechnOne Solutions"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                data-aos="zoom-in-left"
                data-aos-delay="400"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-full h-full bg-emerald-100 rounded-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
