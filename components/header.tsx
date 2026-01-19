"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/navigation";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useFocusTrap } from "@/hooks/use-focus-trap";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations("Header");
  const mobileMenuRef = useFocusTrap<HTMLElement>(isMobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isMobileMenuOpen]);

  const navItems = [
    { href: "#services", label: t("nav.services") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#about", label: t("nav.about") },
    { href: "#contact", label: t("nav.contact") },
  ];

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 rounded-lg"
            aria-label="TechnOne - Go to homepage"
          >
            <span className="text-2xl font-bold tracking-tight text-gray-900">
              Techn<span className="text-emerald-600 group-hover:text-emerald-500 transition-colors">One</span>
            </span>
          </Link>

          {/* Desktop Nav - Centered */}
          <nav
            className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2"
            role="navigation"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-2">
            <LanguageSwitcher />
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-6 cursor-pointer transition-all hover:shadow-lg focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
            >
              {t("cta.contactUs")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <LanguageSwitcher />
            <button
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
              onClick={() => setIsMobileMenuOpen((s) => !s)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <nav
          ref={mobileMenuRef}
          id="mobile-menu"
          role="navigation"
          aria-label="Mobile navigation"
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="flex flex-col gap-1 pt-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                tabIndex={isMobileMenuOpen ? 0 : -1}
                className="px-4 py-3 text-left text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 mt-2 border-t border-gray-100">
              <Button
                className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-full"
                onClick={() => scrollToSection("#contact")}
                tabIndex={isMobileMenuOpen ? 0 : -1}
              >
                {t("cta.contactUs")}
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
