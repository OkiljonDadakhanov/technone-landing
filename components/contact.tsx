"use client";

import { useEffect, useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";

export function Contact() {
  const t = useTranslations("Contact");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = t("errors.nameRequired");
    if (!formData.phone.trim()) newErrors.phone = t("errors.phoneRequired");
    if (!formData.message.trim()) newErrors.message = t("errors.messageRequired");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendToTelegram = async () => {
    const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error("Telegram credentials not configured");
      return false;
    }

    const text = `
New Contact Message:

Name: ${formData.name}
Phone: ${formData.phone}
Message: ${formData.message}
    `.trim();

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text,
          }),
        }
      );
      const result = await response.json();
      return result.ok;
    } catch (error) {
      console.error("Failed to send message:", error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    const success = await sendToTelegram();
    if (success) {
      setIsSuccess(true);
      setFormData({
        name: "",
        phone: "",
        message: "",
      });
    } else {
      alert("Failed to send message. Please try again later.");
    }
    setIsSubmitting(false);
  };

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
      className="py-24 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t("heading")}
            </h2>
            <p className="text-lg text-gray-600">
              {t("description")}
            </p>
          </div>

          {/* Contact Info */}
          <div
            className="flex flex-wrap justify-center gap-8 mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <a
              href="mailto:oqiljondadaxanov@gmail.com"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus-visible:text-gray-900 focus-visible:underline"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              <span>oqiljondadaxanov@gmail.com</span>
            </a>
            <a
              href="tel:+998991093414"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus-visible:text-gray-900 focus-visible:underline"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              <span>+998 99 109 34 14</span>
            </a>
          </div>

          {/* Form */}
          <div data-aos="fade-up" data-aos-delay="200">
            {isSuccess ? (
              <div
                className="text-center py-12 bg-emerald-50 rounded-2xl"
                role="status"
                aria-live="polite"
              >
                <p className="text-emerald-600 font-medium text-lg">
                  {t("success")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name" className="text-gray-700">
                      {t("fields.fullName")}
                    </Label>
                    <Input
                      id="contact-name"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder={t("placeholders.fullName")}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`bg-gray-50 border-gray-200 focus:bg-white ${
                        errors.name ? "border-red-500" : ""
                      }`}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-red-500 text-sm" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone" className="text-gray-700">
                      {t("fields.phone")}
                    </Label>
                    <Input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+998 90 123 45 67"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      className={`bg-gray-50 border-gray-200 focus:bg-white ${
                        errors.phone ? "border-red-500" : ""
                      }`}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="text-red-500 text-sm" role="alert">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message" className="text-gray-700">
                    {t("fields.message")}
                  </Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder={t("placeholders.message")}
                    rows={5}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`bg-gray-50 border-gray-200 focus:bg-white resize-none ${
                      errors.message ? "border-red-500" : ""
                    }`}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-red-500 text-sm" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full cursor-pointer bg-gray-900 hover:bg-gray-800 text-white rounded-full py-6 focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
                  disabled={isSubmitting}
                  aria-disabled={isSubmitting}
                >
                  <Send className="mr-2 h-4 w-4" aria-hidden="true" />
                  {isSubmitting ? t("button.sending") : t("button.send")}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
