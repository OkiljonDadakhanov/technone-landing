"use client";

import { Mail, Phone } from "lucide-react";
import { contactInfo } from "@/config/contact";

export function ContactInfo() {
  return (
    <div
      className="flex flex-wrap justify-center gap-8 mb-12"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <a
        href={`mailto:${contactInfo.email}`}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus-visible:text-gray-900 focus-visible:underline"
      >
        <Mail className="h-5 w-5" aria-hidden="true" />
        <span>{contactInfo.email}</span>
      </a>
      <a
        href={`tel:${contactInfo.phoneRaw}`}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus-visible:text-gray-900 focus-visible:underline"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        <span>{contactInfo.phone}</span>
      </a>
    </div>
  );
}
