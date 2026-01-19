export const contactInfo = {
  email: "oqiljondadaxanov@gmail.com",
  phone: "+998 99 109 34 14",
  phoneRaw: "+998991093414",
  address: {
    city: "Tashkent",
    country: "Uzbekistan",
  },
  social: {
    github: "https://github.com/technone",
    linkedin: "https://linkedin.com/company/technone",
  },
} as const;

export type ContactInfo = typeof contactInfo;
