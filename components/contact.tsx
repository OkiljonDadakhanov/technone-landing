"use client";

import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapSection } from "./location";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

const TELEGRAM_BOT_TOKEN = "8252392415:AAEp3LeItcKbZFyr7XCCJ9zcWL2mTkApkCE";
const TELEGRAM_CHAT_ID = "5350135989";

export function Contact() {
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
      title: "Email",
      details: "hello@technone.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm",
    },
    {
      icon: MapPin,
      title: "Office",
      details: "123 Tech Street, San Francisco, CA 94105",
      description: "Visit our headquarters",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 9:00 AM - 6:00 PM PST",
      description: "We're here to help",
    },
  ];

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required";
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
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    } else {
      alert("Failed to send message. Please try again later.");
    }
    setIsSubmitting(false);
  };

  useEffect(() => {
    if (isSuccess) {
      const timeout = setTimeout(() => {
        setIsSuccess(false);
      }, 3000); // 3 seconds

      return () => clearTimeout(timeout);
    }
  }, [isSuccess]);

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your next project? Send us a message and we’ll get
            back to you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
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

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                {isSuccess ? (
                  <div className="text-green-600 font-semibold py-6">
                    ✅ Your message has been sent successfully!
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="Your full name"
                          className={errors.name ? "border-red-500" : ""}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm">{errors.name}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                          placeholder="your@email.com"
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <PhoneInput
                        country={"uz"}
                        value={formData.phone}
                        onChange={(value) => handleChange("phone", value)}
                        inputProps={{
                          name: "phone",
                          required: true,
                          className: `block w-full rounded-md border border-input bg-background px-9 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
                            errors.phone ? "border-red-500" : ""
                          }`,
                        }}
                        containerStyle={{ width: "100%" }}
                        buttonStyle={{
                          border: "none",
                          background: "none",
                        }}
                        dropdownStyle={{
                          maxHeight: "150px",
                        }}
                        enableSearch
                      />

                      {errors.phone && (
                        <p className="text-red-500 text-sm">{errors.phone}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) =>
                          handleChange("company", e.target.value)
                        }
                        placeholder="Company (optional)"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                        placeholder="Tell us about your project or inquiry"
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
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Visit Us</h3>
          <p className="text-gray-600 mb-6">
            Our office is located in the heart of San Francisco. Feel free to
            stop by during business hours or schedule an appointment.
          </p>
          <div className="aspect-w-16 aspect-h-9">
            <MapSection />
          </div>
        </div>
      </div>
    </section>
  );
}
