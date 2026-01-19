import { contactInfo } from "@/config/contact";

// FAQ Schema
interface FAQItem {
  question: string;
  answer: string;
}

const faqContent: Record<string, FAQItem[]> = {
  en: [
    {
      question: "What services does TechnOne offer?",
      answer:
        "TechnOne offers custom software development, mobile app development, web applications, and UI/UX design services. We specialize in building high-converting, SEO-optimized websites.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "Project timelines vary based on complexity. A simple landing page can take 2-4 weeks, while a full-featured web application may take 2-3 months. We'll provide a detailed timeline after understanding your requirements.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We use modern technologies including React, Next.js, TypeScript, Node.js, and various database solutions. We choose the best tech stack based on your project's specific needs.",
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer:
        "Yes, we offer ongoing maintenance and support packages to ensure your website or application runs smoothly. This includes security updates, performance optimization, and feature additions.",
    },
    {
      question: "How can I get a quote for my project?",
      answer:
        "You can reach us through our contact form, email, or phone. We'll schedule a consultation to understand your requirements and provide a detailed proposal.",
    },
  ],
  ru: [
    {
      question: "Какие услуги предлагает TechnOne?",
      answer:
        "TechnOne предлагает разработку программного обеспечения на заказ, мобильных приложений, веб-приложений и услуги UI/UX дизайна. Мы специализируемся на создании высококонверсионных, SEO-оптимизированных веб-сайтов.",
    },
    {
      question: "Сколько времени занимает создание веб-сайта?",
      answer:
        "Сроки проекта зависят от сложности. Простая лендинг-страница может занять 2-4 недели, в то время как полнофункциональное веб-приложение может занять 2-3 месяца. Мы предоставим детальный план после изучения ваших требований.",
    },
    {
      question: "Какие технологии вы используете?",
      answer:
        "Мы используем современные технологии, включая React, Next.js, TypeScript, Node.js и различные решения для баз данных. Мы выбираем лучший технологический стек в зависимости от конкретных потребностей вашего проекта.",
    },
    {
      question: "Предоставляете ли вы поддержку после запуска?",
      answer:
        "Да, мы предлагаем пакеты постоянного обслуживания и поддержки, чтобы ваш веб-сайт или приложение работали без сбоев. Это включает обновления безопасности, оптимизацию производительности и добавление функций.",
    },
    {
      question: "Как я могу получить расчёт стоимости моего проекта?",
      answer:
        "Вы можете связаться с нами через форму обратной связи, электронную почту или телефон. Мы назначим консультацию, чтобы понять ваши требования и предоставить детальное предложение.",
    },
  ],
  uz: [
    {
      question: "TechnOne qanday xizmatlar taklif qiladi?",
      answer:
        "TechnOne buyurtma bo'yicha dasturiy ta'minot ishlab chiqish, mobil ilovalar ishlab chiqish, veb-ilovalar va UI/UX dizayn xizmatlarini taklif qiladi. Biz yuqori konversiyali, SEO-optimallashtirilgan veb-saytlar yaratishga ixtisoslashganmiz.",
    },
    {
      question: "Veb-sayt yaratish qancha vaqt oladi?",
      answer:
        "Loyiha muddatlari murakkablikka qarab farq qiladi. Oddiy landing sahifa 2-4 hafta davom etishi mumkin, to'liq funksional veb-ilova esa 2-3 oy davom etishi mumkin. Talablaringizni o'rganib chiqqandan so'ng batafsil jadval taqdim etamiz.",
    },
    {
      question: "Qanday texnologiyalardan foydalanasiz?",
      answer:
        "Biz React, Next.js, TypeScript, Node.js va turli xil ma'lumotlar bazasi yechimlarini o'z ichiga olgan zamonaviy texnologiyalardan foydalanamiz. Loyihangizning maxsus ehtiyojlariga qarab eng yaxshi texnologik to'plamni tanlaymiz.",
    },
    {
      question: "Ishga tushirilgandan keyin doimiy qo'llab-quvvatlashni ta'minlaysizmi?",
      answer:
        "Ha, biz veb-saytingiz yoki ilovangiz muammosiz ishlashini ta'minlash uchun doimiy xizmat ko'rsatish va qo'llab-quvvatlash paketlarini taklif qilamiz. Bu xavfsizlik yangilanishlari, ishlash optimizatsiyasi va funksiyalar qo'shishni o'z ichiga oladi.",
    },
    {
      question: "Loyiham uchun narxni qanday olishim mumkin?",
      answer:
        "Biz bilan aloqa shakli, elektron pochta yoki telefon orqali bog'lanishingiz mumkin. Talablaringizni tushunish va batafsil taklif taqdim etish uchun konsultatsiya belgilaymiz.",
    },
  ],
};

export function generateFAQSchema(locale: string) {
  const faqs = faqContent[locale] || faqContent.en;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Breadcrumb Schema
interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Organization Schema (enhanced with contact info)
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TechnOne",
    url: "https://technone.uz",
    logo: "https://technone.uz/logo.png",
    description:
      "Software development agency specializing in web and mobile applications",
    address: {
      "@type": "PostalAddress",
      addressLocality: contactInfo.address.city,
      addressCountry: "UZ",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contactInfo.phoneRaw,
      email: contactInfo.email,
      contactType: "sales",
      availableLanguage: ["English", "Russian", "Uzbek"],
    },
    sameAs: [contactInfo.social.github, contactInfo.social.linkedin],
  };
}

// Local Business Schema
export function generateLocalBusinessSchema(locale: string) {
  const descriptions: Record<string, string> = {
    en: "Custom software development, mobile apps, and web development services in Tashkent, Uzbekistan.",
    ru: "Услуги по разработке программного обеспечения, мобильных приложений и веб-разработке в Ташкенте, Узбекистан.",
    uz: "Toshkent, O'zbekistonda maxsus dasturiy ta'minot ishlab chiqish, mobil ilovalar va veb-dasturlash xizmatlari.",
  };

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "TechnOne",
    description: descriptions[locale] || descriptions.en,
    url: "https://technone.uz",
    telephone: contactInfo.phoneRaw,
    email: contactInfo.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: contactInfo.address.city,
      addressCountry: contactInfo.address.country,
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };
}
