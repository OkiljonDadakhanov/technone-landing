"use client";

import {
  ShoppingCart,
  Smartphone,
  Globe,
  Palette,
} from "lucide-react";
import { useTranslations } from "next-intl";

export function Services() {
  const t = useTranslations("Services");

  const services = [
    {
      icon: ShoppingCart,
      title: t("services.customDev.title"),
      description: t("services.customDev.description"),
    },
    {
      icon: Smartphone,
      title: t("services.mobile.title"),
      description: t("services.mobile.description"),
    },
    {
      icon: Globe,
      title: t("services.web.title"),
      description: t("services.web.description"),
    },
    {
      icon: Palette,
      title: t("services.design.title"),
      description: t("services.design.description"),
    },
  ];

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t("heading")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
          {services.map((service, index) => (
            <li
              key={index}
              className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-emerald-100 transition-colors"
                aria-hidden="true"
              >
                <service.icon className="h-6 w-6 text-gray-700 group-hover:text-emerald-600 transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
