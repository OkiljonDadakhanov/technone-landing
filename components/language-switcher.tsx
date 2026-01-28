"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/src/i18n/navigation";
import { routing } from "@/src/i18n/routing";

const localeConfig: Record<string, { name: string; short: string; flag: string }> = {
  en: { name: "English", short: "EN", flag: "gb" },
  ru: { name: "Русский", short: "RU", flag: "ru" },
  uz: { name: "O'zbekcha", short: "UZ", flag: "uz" },
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const current = localeConfig[locale] || localeConfig.en;

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
        className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-gray-100 focus-visible:ring-offset-2"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`Current language: ${current.name}. Click to change language.`}
      >
        <Image
          src={`https://flagcdn.com/20x15/${current.flag}.png`}
          width={20}
          height={15}
          alt=""
          aria-hidden="true"
          className="rounded-sm"
        />
        <span className="hidden sm:inline">{current.short}</span>
        <ChevronDown
          size={14}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <ul
            role="listbox"
            aria-label="Select language"
            className="absolute right-0 top-full mt-2 z-50 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 py-2 min-w-[160px]"
          >
            {routing.locales.map((loc) => {
              const config = localeConfig[loc] || { name: loc, short: loc.toUpperCase(), flag: "" };
              const isActive = loc === locale;
              return (
                <li key={loc} role="option" aria-selected={isActive}>
                  <Link
                    href={pathname}
                    locale={loc}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors focus:outline-none focus-visible:bg-gray-100 dark:focus-visible:bg-gray-800 ${
                      isActive
                        ? "bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white font-medium"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    <Image
                      src={`https://flagcdn.com/20x15/${config.flag}.png`}
                      width={20}
                      height={15}
                      alt=""
                      aria-hidden="true"
                      className="rounded-sm"
                    />
                    <span>{config.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}
