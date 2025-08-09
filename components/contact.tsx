"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapSection } from "./location";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { useTranslations } from "next-intl";

const TELEGRAM_BOT_TOKEN = "8252392415:AAEp3LeItcKbZFyr7XCCJ9zcWL2mTkApkCE";
const TELEGRAM_CHAT_ID = "5350135989";

export function Contact() {
  const t = useTranslations("Contact");
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "+998",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: t("info.email.title"),
      details: "okiljondadakhonov@gmail.com",
      description: t("info.email.description"),
    },
    {
      icon: Phone,
      title: t("info.phone.title"),
      details: "+998 99 109 34 14",
      description: t("info.phone.description"),
    },
    {
      icon: MapPin,
      title: t("info.office.title"),
      details: "Bakhodir 6, Qorasuv 2, Mirzo Ulug'bek, Tashkent",
      description: t("info.office.description"),
    },
    {
      icon: Clock,
      title: t("info.hours.title"),
      details: "Mon-Fri: 9:00 AM - 6:00 PM PST",
      description: t("info.hours.description"),
    },
  ];

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = t("errors.nameRequired");
    if (!formData.email.trim()) newErrors.email = t("errors.emailRequired");
    if (!formData.phone.trim()) newErrors.phone = t("errors.phoneRequired");
    if (!formData.message.trim()) newErrors.message = t("errors.messageRequired");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendToTelegram = async () => {
    const text = `
📩 New Contact Message:
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone}
🏢 Company: ${formData.company || "-"}
💬 Message: ${formData.message}
    `;
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: "HTML",
        }),
      }
    );
    const result = await response.json();
    return result.ok;
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
        email: "",
        phone: "+998",
        company: "",
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
      className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden"
    >
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-emerald-200 opacity-30 rounded-full blur-[150px] -z-10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t("heading")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6" data-aos="fade-up" data-aos-delay="100">
            {contactInfo.map((info, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <info.icon className="text-emerald-600 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{info.title}</h4>
                  <p className="text-gray-900 font-medium">{info.details}</p>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div
            className="lg:col-span-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Card className="bg-white/80 backdrop-blur-md border border-gray-200 shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">
                  {t("sendMessage")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSuccess ? (
                  <div className="text-green-600 font-semibold py-6 text-center animate-pulse">
                    ✅ {t("success")}
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t("fields.fullName")}</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder={t("placeholders.fullName")}
                          className={errors.name ? "border-red-500" : ""}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm">{errors.name}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t("fields.email")}</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                          placeholder={t("placeholders.email")}
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">{t("fields.phone")}</Label>
                      <PhoneInput
                        country={"uz"}
                        value={formData.phone}
                        onChange={(value) => handleChange("phone", value)}
                        inputProps={{
                          name: "phone",
                          required: true,
                          className: `block w-full rounded-md border px-9 py-2 text-sm ${errors.phone ? "border-red-500" : "border-input"
                            }`,
                        }}
                        containerStyle={{ width: "100%" }}
                        buttonStyle={{ border: "none", background: "none" }}
                        dropdownStyle={{ maxHeight: "150px" }}
                        enableSearch
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm">{errors.phone}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">{t("fields.company")}</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) =>
                          handleChange("company", e.target.value)
                        }
                        placeholder={t("placeholders.company")}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t("fields.message")}</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                        placeholder={t("placeholders.message")}
                        rows={6}
                        className={errors.message ? "border-red-500" : ""}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm">{errors.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full cursor-pointer"
                      disabled={isSubmitting}
                    >
                      <Send className="mr-2 h-4 w-4 " />
                      {isSubmitting ? t("button.sending") : t("button.send")}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map */}
        <div className="mt-20" data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-xl font-bold text-gray-900 mb-4">{t("visit.heading")}</h3>
          <p className="text-gray-600 mb-6 max-w-xl">
            {t("visit.description")}
          </p>
          <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-md">
            <MapSection />
          </div>
        </div>
      </div>
    </section>
  );
}
