"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Zap, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("Hero");
  const tBenefits = useTranslations("Benefits");

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const benefits = [
    {
      icon: Search,
      title: tBenefits("seo.title"),
      description: tBenefits("seo.description"),
    },
    {
      icon: Zap,
      title: tBenefits("speed.title"),
      description: tBenefits("speed.description"),
    },
    {
      icon: TrendingUp,
      title: tBenefits("sales.title"),
      description: tBenefits("sales.description"),
    },
  ];

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex flex-col justify-center bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          {/* Main Headline */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6"
          >
            {t.rich("title", {
              em: (chunks) => (
                <em className="text-emerald-600 not-italic">{chunks}</em>
              ),
            })}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
            {t("description")}
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="group cursor-pointer bg-gray-900 text-white hover:bg-gray-800 transition-all text-base px-8 py-6 rounded-full focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
              onClick={() => scrollToSection("#contact")}
            >
              {t("cta.primary")}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="cursor-pointer text-gray-600 hover:text-gray-900 text-base focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
              onClick={() => scrollToSection("#projects")}
            >
              {t("cta.seeOurWork")}
            </Button>
          </div>

          {/* Stats */}
          <div
            className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 mt-16 pt-10 border-t border-gray-100"
            data-aos="fade-up"
            data-aos-delay="200"
            role="list"
            aria-label="Company statistics"
          >
            <div className="text-center" role="listitem">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                8+
              </div>
              <div className="text-sm text-gray-500">{t("stats.projects")}</div>
            </div>
            <div className="text-center" role="listitem">
              <div className="text-3xl lg:text-4xl font-bold text-emerald-600 mb-1">
                25k+
              </div>
              <div className="text-sm text-gray-500">{t("stats.monthlyVisits")}</div>
            </div>
            <div className="text-center" role="listitem">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                &lt;1s
              </div>
              <div className="text-sm text-gray-500">{t("stats.loadTime")}</div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div
          className="grid md:grid-cols-3 gap-8 mt-24 max-w-5xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="h-6 w-6 text-emerald-600" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
