"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { ContactInfo } from "@/components/contact/contact-info";
import { ContactForm } from "@/components/contact/contact-form";
import { SuccessMessage } from "@/components/contact/success-message";

export function Contact() {
  const t = useTranslations("Contact");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      const timeout = setTimeout(() => setIsSuccess(false), 4000);
      return () => clearTimeout(timeout);
    }
  }, [isSuccess]);

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 bg-white dark:bg-gray-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t("heading")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t("description")}
            </p>
          </div>

          <ContactInfo />

          <div data-aos="fade-up" data-aos-delay="200">
            {isSuccess ? (
              <SuccessMessage />
            ) : (
              <ContactForm onSuccess={() => setIsSuccess(true)} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
