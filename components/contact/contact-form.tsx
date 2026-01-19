"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";
import { submitContactForm } from "@/app/actions/contact";

interface ContactFormProps {
  onSuccess: () => void;
}

export function ContactForm({ onSuccess }: ContactFormProps) {
  const t = useTranslations("Contact");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    const result = await submitContactForm(formData);

    if (result.success) {
      onSuccess();
      setFormData({
        name: "",
        phone: "",
        message: "",
      });
    } else {
      alert(result.error || "Failed to send message. Please try again later.");
    }
    setIsSubmitting(false);
  };

  return (
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
  );
}
