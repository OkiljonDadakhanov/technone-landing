import "../globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";
import { AOSProvider } from "@/components/aos-provider";
import type { Metadata, Viewport } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: "TechnOne - Software Development Agency",
    ru: "TechnOne - Агентство по разработке ПО",
    uz: "TechnOne - Dasturiy ta'minot agentligi",
  };

  const descriptions: Record<string, string> = {
    en: "We build digital products that drive growth. Custom software, mobile apps, and web development for ambitious businesses.",
    ru: "Мы создаём цифровые продукты для роста бизнеса. Заказная разработка, мобильные приложения и веб-разработка.",
    uz: "Biz o'sishni ta'minlaydigan raqamli mahsulotlar yaratamiz. Maxsus dasturiy ta'minot, mobil ilovalar va veb dasturlash.",
  };

  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;

  return {
    title: {
      default: title,
      template: `%s | TechnOne`,
    },
    description,
    keywords: [
      "software development",
      "web development",
      "mobile apps",
      "custom software",
      "UI/UX design",
      "Tashkent",
      "Uzbekistan",
    ],
    authors: [{ name: "TechnOne" }],
    creator: "TechnOne",
    publisher: "TechnOne",
    metadataBase: new URL("https://technone.uz"),
    alternates: {
      canonical: "/",
      languages: {
        en: "/en",
        ru: "/ru",
        uz: "/uz",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: "https://technone.uz",
      siteName: "TechnOne",
      title,
      description,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "TechnOne - Software Development Agency",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TechnOne",
    url: "https://technone.uz",
    logo: "https://technone.uz/logo.png",
    description: "Software development agency specializing in web and mobile applications",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tashkent",
      addressCountry: "UZ",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+998-99-109-34-14",
      contactType: "sales",
      availableLanguage: ["English", "Russian", "Uzbek"],
    },
    sameAs: [
      "https://github.com/technone",
      "https://linkedin.com/company/technone",
    ],
  };

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://flagcdn.com" />
        <link rel="dns-prefetch" href="https://flagcdn.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gray-900 focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AOSProvider>{children}</AOSProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
