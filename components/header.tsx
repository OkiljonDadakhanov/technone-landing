"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Menu, X, Globe, Check } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/src/i18n/navigation";
import { routing } from "@/src/i18n/routing";

/** Flag image (FlagCDN) like in your template */
function Flag({ code, alt }: { code: string; alt: string }) {
  if (!code) return <span aria-hidden>🌐</span>;
  return (
    <img
      src={`https://flagcdn.com/24x18/${code}.png`}
      srcSet={`https://flagcdn.com/24x18/${code}.png 1x, https://flagcdn.com/36x27/${code}.png 1.5x, https://flagcdn.com/48x36/${code}.png 2x`}
      width={24}
      height={18}
      alt={alt}
      className="rounded-[2px] shadow-sm ring-1 ring-gray-200"
      loading="eager"
    />
  );
}

function LanguageSwitcher({ className = "" }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();

  // Map app locales -> human label + FlagCDN country code
  const locales: Record<string, { name: string; code: string }> = {
    en: { name: "English", code: "gb" }, // use GB for English, like your list
    ru: { name: "Русский", code: "ru" },
    uz: { name: "O‘zbekcha", code: "uz" },
  };

  const current = locales[locale] ?? { name: locale.toUpperCase(), code: "" };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={`gap-2 ${className} cursor-pointer`}
          aria-label="Change language"
          title="Change language"
        >
          <Flag code={current.code} alt={`${current.name} flag`} />
          <span className="hidden sm:inline">{current.name}</span>
          <span className="sm:hidden">{locale.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="min-w-44">
        <DropdownMenuLabel className="text-xs text-muted-foreground">
          Select language
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {routing.locales.map((loc) => {
          const item =
            locales[loc] ?? { name: loc.toUpperCase(), code: "" };
          const active = loc === locale;
          return (
            <Link key={loc} href={pathname} locale={loc} className="no-underline">
              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                <Flag code={item.code} alt={`${item.name} flag`} />
                <span className="flex-1">{item.name}</span>
                {active && <Check size={16} className="opacity-70" />}
              </DropdownMenuItem>
            </Link>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations("Header");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: t("nav.about") },
    { href: "#services", label: t("nav.services") },
    { href: "#products", label: t("nav.products") },
    { href: "#portfolio", label: t("nav.portfolio") },
    { href: "#contact", label: t("nav.contact") },
  ];

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-extrabold tracking-tight text-gray-900 cursor-pointer">
            <Link href="/" className="flex items-center">
              Techn<span className="text-emerald-600">One</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="relative text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 cursor-pointer"
              >
                <span className="inline-block relative group">
                  {item.label}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </button>
            ))}
          </nav>

          {/* Desktop CTAs + Language */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="hover:border-emerald-500 transition-colors cursor-pointer"
            >
              {t("cta.getQuote")}
            </Button>
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-emerald-600 hover:bg-emerald-700 text-white transition-colors cursor-pointer"
            >
              {t("cta.contactUs")}
            </Button>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMobileMenuOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 bg-white/95 backdrop-blur-xl rounded-lg shadow-lg border px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-base font-medium text-gray-700 hover:text-emerald-600 transition-colors"
              >
                {item.label}
              </button>
            ))}

            <div className="pt-2 space-y-3">
              <Button
                variant="outline"
                className="w-full border-gray-300"
                onClick={() => scrollToSection("#contact")}
              >
                {t("cta.getQuote")}
              </Button>
              <Button
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                onClick={() => scrollToSection("#contact")}
              >
                {t("cta.contactUs")}
              </Button>

              {/* Mobile: same switcher */}
              <div className="flex justify-center">
                <LanguageSwitcher className="w-full justify-center" />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
