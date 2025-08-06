"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#products", label: "Products" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}

          {/* <Image
            src="/images/logo.png" // Use your actual logo path here
            alt="TechnOne Logo"
            width={150}
            height={40}
            className="h-8 w-auto"
          /> */}

          <div className="text-2xl font-extrabold tracking-tight text-gray-900 cursor-pointer">
            <Link href="/" className="flex items-center">
              Techn<span className="text-emerald-600">One</span>
            </Link>
          </div>
          {/* Desktop Navigation */}
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

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="hover:border-emerald-500 transition-colors cursor-pointer"
            >
              Get Quote
            </Button>
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-emerald-600 hover:bg-emerald-700 text-white transition-colors cursor-pointer"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
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
                Get Quote
              </Button>
              <Button
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                onClick={() => scrollToSection("#contact")}
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
