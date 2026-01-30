"use client";

import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Bot } from "lucide-react";
import { useTranslations } from "next-intl";

export function Projects() {
  const t = useTranslations("Projects");

  const projects: {
    title: string;
    url: string;
    description: string;
    category: string;
    telegramBot?: string;
  }[] = [
    {
      title: "Edux Center",
      url: "https://www.edux.center/",
      description: t("items.edux"),
      category: "Education",
    },
    {
      title: "EpixRent",
      url: "https://info-epix-rent.vercel.app/",
      description: t("items.epixrent"),
      category: "Mobility",
    },
    {
      title: "ARBIChO 2025",
      url: "https://www.arbicho.uz/",
      description: t("items.arbicho"),
      category: "Education",
    },
    {
      title: "Gradabroad",
      url: "https://gradabroad.net/",
      description: t("items.gradabroad"),
      category: "Education",
    },
    {
      title: "Trapo",
      url: "https://trapo-three.vercel.app/",
      description: t("items.trapo"),
      category: "E-Commerce",
    },
    {
      title: "Al-Khwarizmi IMIO",
      url: "https://www.khimio.uz/",
      description: t("items.khimio"),
      category: "Education",
    },
    {
      title: "Namangan Car Rent",
      url: "https://namangan-car-rent-magic.vercel.app/",
      description: t("items.namanganCarRent"),
      category: "Mobility",
      telegramBot: "https://t.me/rentcarnamanganbot",
    },
    {
      title: "Integer Academy",
      url: "https://www.integer-academy.uz/",
      description: t("items.integerAcademy"),
      category: "Education",
    },
  ];

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-24 bg-white dark:bg-gray-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 id="projects-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("heading")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {projects.map((project, index) => (
            <li key={index} data-aos="fade-up" data-aos-delay={index * 50}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-gray-100 focus-visible:ring-offset-2"
                aria-label={`${project.title} - ${project.category}. Opens in new tab.`}
              >
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="secondary" className="text-xs font-medium">
                    {project.category}
                  </Badge>
                  <ArrowUpRight
                    className="h-5 w-5 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                {project.telegramBot && (
                  <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                    <a
                      href={project.telegramBot}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-500 hover:text-blue-600 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`Telegram Bot for ${project.title}. Opens in new tab.`}
                    >
                      <Bot className="h-3.5 w-3.5" aria-hidden="true" />
                      Telegram Web App
                    </a>
                  </div>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
