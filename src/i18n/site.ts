export type Lang = "es" | "en";

type Tone = "orange" | "sand" | "graphite" | "paper";

export interface SiteCopy {
  home: string;
  workPage: string;
  anchors: {
    clients: string;
    services: string;
    work: string;
    process: string;
    contact: string;
  };
  nav: { clients: string; services: string; work: string; contact: string };
  header: {
    homeLabel: string;
    mainNav: string;
    mobileNav: string;
    openMenu: string;
    closeMenu: string;
    cta: string;
    switchLabel: string;
    switchAria: string;
    switchHref: string;
    switchLang: Lang;
  };
  footer: {
    tagline: string;
    nav: string;
    navTitle: string;
    contactTitle: string;
    social: string;
    base: string;
    rights: string;
    backTop: string;
  };
}

export interface HomeCopy {
  hero: {
    lineOne: string;
    /** Each slide pairs the rotating word with a showcase image and its caption. */
    slides: { word: string; image: string; caption: string; detail: string }[];
    lead: string;
    primary: string;
    secondary: string;
    pause: string;
    play: string;
  };
  marquee: string[];
  manifesto: {
    text: string;
    highlights: string[];
    link: string;
    stats: { value: number; suffix: string; label: string }[];
  };
  clients: { title: string; titleAccent: string; aside: string };
  services: {
    title: string;
    titleAccent: string;
    aside: string;
    items: {
      title: string;
      cta: string;
      service: string;
      text: string;
      tags: string[];
      /** Slug of public/images/services/<slug>-{800,1200}.webp */
      image: string;
      alt: string;
      tone: Tone;
    }[];
  };
  work: {
    title: string;
    titleAccent: string;
    intro: string;
    all: string;
    items: {
      name: string;
      category: string;
      result: string;
      /** Slug of public/images/work/<slug>-{800,1400}.webp */
      image: string;
      alt: string;
    }[];
    next: { title: string; accent: string; cta: string };
  };
  process: {
    label: string;
    steps: { title: string; accent: string; text: string }[];
  };
  contact: {
    title: string;
    titleAccent: string;
    intro: string;
    channels: { label: string; value: string; href?: string }[];
    form: {
      name: string;
      email: string;
      company: string;
      service: string;
      servicePlaceholder: string;
      services: string[];
      message: string;
      submit: string;
      note: string;
      sent: string;
      required: string;
      invalidEmail: string;
      subject: string;
    };
  };
}

export const site: Record<Lang, SiteCopy> = {
  es: {
    home: "/",
    workPage: "/trabajos/",
    anchors: {
      clients: "clientes",
      services: "servicios",
      work: "trabajo",
      process: "proceso",
      contact: "contacto",
    },
    nav: {
      clients: "Clientes",
      services: "Servicios",
      work: "Trabajo",
      contact: "Contacto",
    },
    header: {
      homeLabel: "Nexa Digital Agency, inicio",
      mainNav: "Navegación principal",
      mobileNav: "Navegación móvil",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      cta: "Hablemos",
      switchLabel: "EN",
      switchAria: "English version",
      switchHref: "/en/",
      switchLang: "en",
    },
    footer: {
      tagline:
        "Marketing con intención. Estrategia, identidad y movimiento para marcas que quieren avanzar.",
      nav: "Navegación del pie",
      navTitle: "Explora",
      contactTitle: "Contacto",
      social: "Síguenos",
      base: "Madrid / España",
      rights: "© Nexa 2026",
      backTop: "Volver arriba",
    },
  },
  en: {
    home: "/en/",
    workPage: "/en/trabajos/",
    anchors: {
      clients: "clients",
      services: "services",
      work: "work",
      process: "process",
      contact: "contact",
    },
    nav: {
      clients: "Clients",
      services: "Services",
      work: "Work",
      contact: "Contact",
    },
    header: {
      homeLabel: "Nexa Digital Agency, home",
      mainNav: "Main navigation",
      mobileNav: "Mobile navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      cta: "Let’s talk",
      switchLabel: "ES",
      switchAria: "Versión en español",
      switchHref: "/",
      switchLang: "es",
    },
    footer: {
      tagline:
        "Marketing with intention. Strategy, identity and movement for brands ready to move forward.",
      nav: "Footer navigation",
      navTitle: "Explore",
      contactTitle: "Contact",
      social: "Follow us",
      base: "Madrid / Spain",
      rights: "© Nexa 2026",
      backTop: "Back to top",
    },
  },
};

export const homeCopy: Record<Lang, HomeCopy> = {
  es: {
    hero: {
      lineOne: "Ideas que",
      slides: [
        {
          word: "mueven.",
          image: "marea",
          caption: "Marea",
          detail: "Branding + Digital",
        },
        {
          word: "venden.",
          image: "paid",
          caption: "Paid media",
          detail: "Campañas que convierten",
        },
        {
          word: "conectan.",
          image: "orbita",
          caption: "Orbita",
          detail: "Campaña & paid media",
        },
        {
          word: "crecen.",
          image: "web",
          caption: "Diseño web",
          detail: "Webs rápidas y memorables",
        },
      ],
      lead: "Estrategia, creatividad y medios bajo un mismo equipo para que tu marca no solo esté: deje huella.",
      primary: "Empieza tu proyecto",
      secondary: "Ver trabajo",
      pause: "Pausar presentación",
      play: "Reanudar presentación",
    },
    marquee: [
      "Branding",
      "Estrategia",
      "Contenido",
      "Paid media",
      "Diseño web",
      "Audiovisual",
    ],
    manifesto: {
      text: "Lo que importa no es estar. Es dejar huella. Entendemos tu negocio, encontramos la tensión y la convertimos en una idea que hace que la gente pare, mire y recuerde.",
      highlights: ["huella.", "recuerde."],
      link: "Conoce cómo trabajamos",
      stats: [
        { value: 6, suffix: "", label: "Disciplinas bajo un mismo equipo" },
        { value: 360, suffix: "°", label: "De la estrategia a los medios" },
        { value: 1, suffix: "", label: "Interlocutor de principio a fin" },
      ],
    },
    clients: {
      title: "Marcas que",
      titleAccent: "confían.",
      aside: "Cada proyecto es una conversación distinta.",
    },
    services: {
      title: "Servicios que",
      titleAccent: "mueven marcas.",
      aside: "Un equipo pequeño. Una mirada grande.",
      items: [
        {
          title: "Diseño gráfico",
          text: "Convertimos ideas complejas en sistemas visuales claros, reconocibles y llenos de intención.",
          tags: ["Editorial", "Key visuals", "Packaging", "Social"],
          image: "graphic",
          alt: "Dirección visual y composición editorial",
          tone: "orange",
          cta: "Pide propuesta de diseño",
          service: "Diseño gráfico",
        },
        {
          title: "Branding",
          text: "Definimos la voz, el lenguaje y la presencia que hacen que una marca se reconozca antes de ser nombrada.",
          tags: ["Naming", "Identidad", "Voz y tono", "Brandbook"],
          image: "branding",
          alt: "Materiales de identidad visual y branding",
          tone: "sand",
          cta: "Pide propuesta de branding",
          service: "Branding",
        },
        {
          title: "Estrategia & creatividad",
          text: "Encontramos la idea que conecta el objetivo de negocio con una conversación cultural relevante.",
          tags: ["Insights", "Concepto", "Campañas", "Contenido"],
          image: "strategy",
          alt: "Dirección creativa para una experiencia digital",
          tone: "graphite",
          cta: "Pide propuesta de estrategia",
          service: "Estrategia y creatividad digital",
        },
        {
          title: "Paid media",
          text: "Planificamos, lanzamos y optimizamos campañas para que la inversión se convierta en aprendizaje y crecimiento.",
          tags: ["Meta Ads", "Google Ads", "TikTok Ads", "Analítica"],
          image: "paid-media",
          alt: "Planificación visual de una campaña",
          tone: "paper",
          cta: "Pide tu plan de medios",
          service: "Paid media",
        },
        {
          title: "Diseño web",
          text: "Diseñamos webs rápidas, memorables y preparadas para convertir visitas en oportunidades.",
          tags: ["UX / UI", "Desarrollo", "SEO", "Conversión"],
          image: "web",
          alt: "Dirección de una experiencia web digital",
          tone: "orange",
          cta: "Pide propuesta web",
          service: "Diseño web",
        },
        {
          title: "Audiovisual",
          text: "Del concepto al montaje final: damos movimiento a la historia que tu marca necesita contar.",
          tags: ["Guion", "Rodaje", "Motion", "Postproducción"],
          image: "audiovisual",
          alt: "Dirección de arte para producción audiovisual",
          tone: "graphite",
          cta: "Pide propuesta audiovisual",
          service: "Producción audiovisual",
        },
      ],
    },
    work: {
      title: "El trabajo",
      titleAccent: "habla.",
      intro:
        "Identidades, campañas y experiencias digitales construidas para que las marcas ocupen un lugar propio.",
      all: "Ver todos los proyectos",
      items: [
        {
          name: "Marea",
          category: "Branding + Digital",
          result: "Una identidad con pulso para cambiar de ritmo.",
          image: "marea",
          alt: "Dirección de arte para el proyecto Marea",
        },
        {
          name: "Norte",
          category: "Identidad & estrategia",
          result: "Una nueva forma de mirar lo cotidiano.",
          image: "norte",
          alt: "Proyecto de identidad Norte",
        },
        {
          name: "Orbita",
          category: "Campaña & paid media",
          result: "Una campaña que puso la conversación en movimiento.",
          image: "orbita",
          alt: "Proyecto de campaña Orbita",
        },
        {
          name: "Studio",
          category: "Producción audiovisual",
          result: "Historias pensadas para verse en movimiento.",
          image: "studio",
          alt: "Dirección de arte para producción audiovisual",
        },
      ],
      next: {
        title: "Tu marca",
        accent: "aquí.",
        cta: "Hablemos",
      },
    },
    process: {
      label: "Cómo trabajamos",
      steps: [
        {
          title: "Una idea",
          accent: "aparece.",
          text: "Partimos de una tensión, una pregunta o una oportunidad de negocio.",
        },
        {
          title: "La forma",
          accent: "cambia.",
          text: "Probamos, mezclamos y damos estructura a lo que todavía no existe.",
        },
        {
          title: "La marca",
          accent: "avanza.",
          text: "Convertimos la idea en una experiencia que se mueve con la gente.",
        },
      ],
    },
    contact: {
      title: "¿Tienes algo",
      titleAccent: "en mente?",
      intro:
        "Cuéntanos qué quieres mover. Te responderemos con una primera mirada, una pregunta y un siguiente paso claro.",
      channels: [
        {
          label: "Email",
          value: "hola@nexa.agency",
          href: "mailto:hola@nexa.agency",
        },
        {
          label: "WhatsApp",
          value: "Escríbenos",
          href: "https://wa.me/34600000000?text=Hola%20Nexa%2C%20quiero%20hablar%20de%20un%20proyecto",
        },
        { label: "Base", value: "Madrid / España" },
      ],
      form: {
        name: "Tu nombre",
        email: "Tu email",
        company: "Empresa",
        service: "Qué necesitas",
        servicePlaceholder: "Selecciona un servicio",
        services: [
          "Diseño gráfico",
          "Branding",
          "Diseño web",
          "Estrategia y creatividad digital",
          "Paid media",
          "Producción audiovisual",
          "Otro proyecto",
        ],
        message: "Háblanos del proyecto",
        submit: "Enviar proyecto",
        note: "Al enviar se abrirá tu cliente de correo con el mensaje preparado.",
        required: "Este campo es obligatorio.",
        invalidEmail:
          "Revisa el email: debe tener el formato nombre@dominio.com.",
        sent: "Tu cliente de correo debería abrirse ahora. Gracias por escribirnos.",
        subject: "Nuevo proyecto",
      },
    },
  },
  en: {
    hero: {
      lineOne: "Ideas that",
      slides: [
        {
          word: "move.",
          image: "marea",
          caption: "Marea",
          detail: "Branding + Digital",
        },
        {
          word: "sell.",
          image: "paid",
          caption: "Paid media",
          detail: "Campaigns that convert",
        },
        {
          word: "connect.",
          image: "orbita",
          caption: "Orbita",
          detail: "Campaign & paid media",
        },
        {
          word: "grow.",
          image: "web",
          caption: "Web design",
          detail: "Fast, memorable websites",
        },
      ],
      lead: "Strategy, creativity and media under one team, so your brand does more than show up: it leaves a mark.",
      primary: "Start your project",
      secondary: "See our work",
      pause: "Pause slideshow",
      play: "Play slideshow",
    },
    marquee: [
      "Branding",
      "Strategy",
      "Content",
      "Paid media",
      "Web design",
      "Film",
    ],
    manifesto: {
      text: "Being there is not enough. You have to leave a mark. We get to know your business, find the tension and turn it into an idea that makes people stop, look and remember.",
      highlights: ["mark.", "remember."],
      link: "Discover our approach",
      stats: [
        { value: 6, suffix: "", label: "Disciplines under one team" },
        { value: 360, suffix: "°", label: "From strategy to media" },
        { value: 1, suffix: "", label: "Single point of contact" },
      ],
    },
    clients: {
      title: "Brands that",
      titleAccent: "trust us.",
      aside: "Every project is a different conversation.",
    },
    services: {
      title: "Services that",
      titleAccent: "move brands.",
      aside: "A small team. A big perspective.",
      items: [
        {
          title: "Graphic design",
          text: "We turn complex ideas into clear, recognisable visual systems full of intention.",
          tags: ["Editorial", "Key visuals", "Packaging", "Social"],
          image: "graphic",
          alt: "Editorial graphic design direction",
          tone: "orange",
          cta: "Request a design proposal",
          service: "Graphic design",
        },
        {
          title: "Branding",
          text: "We define the voice, language and presence that make a brand recognisable before it is named.",
          tags: ["Naming", "Identity", "Tone of voice", "Brandbook"],
          image: "branding",
          alt: "Brand identity materials",
          tone: "sand",
          cta: "Request a branding proposal",
          service: "Branding",
        },
        {
          title: "Strategy & creativity",
          text: "We find the idea that connects business goals with a relevant cultural conversation.",
          tags: ["Insights", "Concept", "Campaigns", "Content"],
          image: "strategy",
          alt: "Digital creative direction",
          tone: "graphite",
          cta: "Request a strategy proposal",
          service: "Digital strategy & creativity",
        },
        {
          title: "Paid media",
          text: "We plan, launch and optimise campaigns so investment turns into learning and growth.",
          tags: ["Meta Ads", "Google Ads", "TikTok Ads", "Analytics"],
          image: "paid-media",
          alt: "Visual campaign planning",
          tone: "paper",
          cta: "Request a media plan",
          service: "Paid media",
        },
        {
          title: "Web design",
          text: "Fast, memorable websites built to turn visits into opportunities.",
          tags: ["UX / UI", "Development", "SEO", "Conversion"],
          image: "web",
          alt: "Digital web experience",
          tone: "orange",
          cta: "Request a web proposal",
          service: "Web design",
        },
        {
          title: "Film production",
          text: "From concept to final cut: we give movement to the story your brand needs to tell.",
          tags: ["Script", "Shooting", "Motion", "Post-production"],
          image: "audiovisual",
          alt: "Art direction for film production",
          tone: "graphite",
          cta: "Request a film proposal",
          service: "Film production",
        },
      ],
    },
    work: {
      title: "The work",
      titleAccent: "speaks.",
      intro:
        "Identities, campaigns and digital experiences built to give brands a place of their own.",
      all: "See all projects",
      items: [
        {
          name: "Marea",
          category: "Branding + Digital",
          result: "An identity with a pulse, made to change pace.",
          image: "marea",
          alt: "Marea art direction case study",
        },
        {
          name: "Norte",
          category: "Identity & strategy",
          result: "A new way of looking at everyday life.",
          image: "norte",
          alt: "Norte identity project",
        },
        {
          name: "Orbita",
          category: "Campaign & paid media",
          result: "A campaign that set the conversation in motion.",
          image: "orbita",
          alt: "Orbita campaign project",
        },
        {
          name: "Studio",
          category: "Film production",
          result: "Stories designed to be seen in motion.",
          image: "studio",
          alt: "Art direction for film production",
        },
      ],
      next: {
        title: "Your brand",
        accent: "here.",
        cta: "Let’s talk",
      },
    },
    process: {
      label: "How we work",
      steps: [
        {
          title: "An idea",
          accent: "appears.",
          text: "We start with a tension, a question or a business opportunity.",
        },
        {
          title: "The shape",
          accent: "changes.",
          text: "We test, mix and give structure to what does not exist yet.",
        },
        {
          title: "The brand",
          accent: "moves.",
          text: "We turn the idea into an experience that moves with people.",
        },
      ],
    },
    contact: {
      title: "Have something",
      titleAccent: "in mind?",
      intro:
        "Tell us what you want to move. We will reply with a first perspective, a question and a clear next step.",
      channels: [
        {
          label: "Email",
          value: "hola@nexa.agency",
          href: "mailto:hola@nexa.agency",
        },
        {
          label: "WhatsApp",
          value: "Write to us",
          href: "https://wa.me/34600000000?text=Hi%20Nexa%2C%20I%27d%20like%20to%20talk%20about%20a%20project",
        },
        { label: "Based in", value: "Madrid / Spain" },
      ],
      form: {
        name: "Your name",
        email: "Your email",
        company: "Company",
        service: "What you need",
        servicePlaceholder: "Choose a service",
        services: [
          "Graphic design",
          "Branding",
          "Web design",
          "Digital strategy & creativity",
          "Paid media",
          "Film production",
          "Something else",
        ],
        message: "Tell us about the project",
        submit: "Send project",
        note: "Sending opens your email client with the message ready.",
        required: "This field is required.",
        invalidEmail: "Check the email: it should look like name@domain.com.",
        sent: "Your email client should open now. Thanks for reaching out.",
        subject: "New project",
      },
    },
  },
};

export interface WorkPageCopy {
  title: string;
  description: string;
  heading: string;
  headingAccent: string;
  intro: string;
  explore: string;
  projectsLabel: string;
  endTitle: string;
  endCta: string;
}

/** /trabajos pages. Project cards reuse homeCopy[lang].work so both pages stay in sync. */
export const workPageCopy: Record<Lang, WorkPageCopy> = {
  es: {
    title: "Trabajo — Nexa",
    description:
      "Una selección del trabajo de Nexa: marcas, campañas, webs y contenido que dejan huella.",
    heading: "Hacemos",
    headingAccent: "que pase.",
    intro:
      "Identidad, estrategia y experiencias digitales pensadas para transformar atención en una relación real con la marca.",
    explore: "Explorar proyectos",
    projectsLabel: "Proyectos",
    endTitle: "¿Hacemos el siguiente?",
    endCta: "Cuéntanos tu idea",
  },
  en: {
    title: "Work — Nexa",
    description:
      "Selected Nexa work: brands, campaigns, websites and content built to leave a mark.",
    heading: "We make",
    headingAccent: "things happen.",
    intro:
      "Identity, strategy and digital experiences designed to turn attention into a genuine relationship with the brand.",
    explore: "Explore projects",
    projectsLabel: "Projects",
    endTitle: "Shall we make the next one?",
    endCta: "Tell us your idea",
  },
};
