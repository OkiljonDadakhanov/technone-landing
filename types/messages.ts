export interface HeaderMessages {
  nav: {
    services: string;
    projects: string;
    about: string;
    contact: string;
  };
  cta: {
    contactUs: string;
  };
}

export interface HeroMessages {
  title: string;
  description: string;
  cta: {
    primary: string;
    seeOurWork: string;
  };
  stats: {
    projects: string;
    monthlyVisits: string;
    loadTime: string;
  };
}

export interface BenefitsMessages {
  seo: {
    title: string;
    description: string;
  };
  speed: {
    title: string;
    description: string;
  };
  sales: {
    title: string;
    description: string;
  };
}

export interface ServicesMessages {
  heading: string;
  description: string;
  services: {
    customDev: {
      title: string;
      description: string;
    };
    mobile: {
      title: string;
      description: string;
    };
    web: {
      title: string;
      description: string;
    };
    design: {
      title: string;
      description: string;
    };
  };
}

export interface ProjectsMessages {
  heading: string;
  description: string;
  items: {
    edux: string;
    epixrent: string;
    arbicho: string;
    gradabroad: string;
    trapo: string;
    khimio: string;
  };
}

export interface AboutMessages {
  heading: string;
  intro: string;
  story: {
    p1: string;
  };
}

export interface ContactMessages {
  heading: string;
  description: string;
  success: string;
  fields: {
    fullName: string;
    phone: string;
    message: string;
  };
  placeholders: {
    fullName: string;
    message: string;
  };
  errors: {
    nameRequired: string;
    phoneRequired: string;
    messageRequired: string;
  };
  button: {
    send: string;
    sending: string;
  };
}

export interface FooterMessages {
  companyDescription: string;
  navigation: string;
  contactTitle: string;
  links: {
    services: string;
    projects: string;
    about: string;
    contact: string;
  };
  copyright: string;
}

export interface Messages {
  Header: HeaderMessages;
  Hero: HeroMessages;
  Benefits: BenefitsMessages;
  Services: ServicesMessages;
  Projects: ProjectsMessages;
  About: AboutMessages;
  Contact: ContactMessages;
  Footer: FooterMessages;
}
