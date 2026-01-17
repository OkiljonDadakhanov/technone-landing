"use client";

import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations("About");

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
          <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            {t.rich("heading", {
              brand: (chunks) => (
                <span className="text-emerald-600">{chunks}</span>
              ),
            })}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {t("intro")}
          </p>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed">
              {t("story.p1")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
