"use server";

// Simple in-memory rate limiting (resets on server restart)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now - record.lastReset > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count++;
  return false;
}

export type ContactFormData = {
  name: string;
  phone: string;
  message: string;
};

export type ContactFormResult = {
  success: boolean;
  error?: string;
};

export async function submitContactForm(
  data: ContactFormData,
  clientIp?: string
): Promise<ContactFormResult> {
  // Rate limiting
  const ip = clientIp || "unknown";
  if (isRateLimited(ip)) {
    return { success: false, error: "Too many requests. Please try again later." };
  }

  // Validation
  if (!data.name?.trim()) {
    return { success: false, error: "Name is required" };
  }
  if (!data.phone?.trim()) {
    return { success: false, error: "Phone is required" };
  }
  if (!data.message?.trim()) {
    return { success: false, error: "Message is required" };
  }

  // Server-only environment variables (no NEXT_PUBLIC_ prefix)
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error("Telegram credentials not configured");
    return { success: false, error: "Server configuration error" };
  }

  const text = `
New Contact Message:

Name: ${data.name}
Phone: ${data.phone}
Message: ${data.message}
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

    if (!result.ok) {
      console.error("Telegram API error:", result);
      return { success: false, error: "Failed to send message" };
    }

    return { success: true };
  } catch (error) {
    console.error("Failed to send message:", error);
    return { success: false, error: "Failed to send message" };
  }
}
