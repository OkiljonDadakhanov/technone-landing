"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Users } from "lucide-react";

export function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description:
        "We stay ahead of technology trends to deliver cutting-edge solutions.",
    },
    {
      icon: Eye,
      title: "Quality",
      description:
        "Every line of code is crafted with precision and attention to detail.",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "We love what we do and it shows in every project we deliver.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We work closely with our clients as true technology partners.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Light background blur accent */}
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-emerald-100 blur-[150px] rounded-full opacity-40 -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            About <span className="text-emerald-600">TechnOne</span>
          </h2>
          <p className="text-lg text-gray-600">
            Founded to bridge the gap between vision and execution, TechnOne
            empowers digital transformation through clean code and bold
            thinking.
          </p>
        </div>

        {/* Story Section */}
        <div
          className="grid lg:grid-cols-2 gap-16 items-center mb-24"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Our Story</h3>
            <p className="text-gray-700 leading-relaxed">
              Since inception, we've focused on crafting software that doesn't
              just solve problems—it creates opportunity. Our team of
              developers, designers, and thinkers operate at the intersection of
              function and beauty.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We treat every project as a mission to innovate, aligning with
              your goals and accelerating your journey through digital success.
            </p>
          </div>
          <div className="relative">
            <div
              className="relative z-10 rounded-xl overflow-hidden shadow-2xl"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img
                src="/images/about.jpg"
                alt="TechnOne Team"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-emerald-100 rounded-xl -z-10"></div>
          </div>
        </div>

       
        {/* Core Values */}
       
      </div>
    </section>
  );
}
