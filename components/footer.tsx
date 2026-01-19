"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { contactInfo } from "@/config/contact";

export function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: t("links.services"), href: "#services" },
    { name: t("links.projects"), href: "#projects" },
    { name: t("links.about"), href: "#about" },
    { name: t("links.contact"), href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer role="contentinfo" className="bg-gray-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">
              Techn<span className="text-emerald-500">One</span>
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-md">
              {t("companyDescription")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-200">{t("navigation")}</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors text-sm focus:outline-none focus-visible:text-white focus-visible:underline"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-200">{t("contactTitle")}</h3>
            <address className="not-italic">
              <ul className="space-y-3">
                <li>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-3 text-gray-400 text-sm hover:text-white transition-colors focus:outline-none focus-visible:text-white focus-visible:underline"
                  >
                    <Mail className="h-4 w-4 text-emerald-500 flex-shrink-0" aria-hidden="true" />
                    <span>{contactInfo.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${contactInfo.phoneRaw}`}
                    className="flex items-center gap-3 text-gray-400 text-sm hover:text-white transition-colors focus:outline-none focus-visible:text-white focus-visible:underline"
                  >
                    <Phone className="h-4 w-4 text-emerald-500 flex-shrink-0" aria-hidden="true" />
                    <span>{contactInfo.phone}</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{contactInfo.address.city}, {contactInfo.address.country}</span>
                </li>
              </ul>
            </address>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-gray-500 text-sm text-center">
            {t.rich("copyright", {
              year: () => currentYear.toString(),
            })}
          </p>
        </div>
      </div>
    </footer>
  );
}
