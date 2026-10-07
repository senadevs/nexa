export type Lang = "es" | "en";

type Tone = "orange" | "sand" | "graphite" | "paper";

export interface SiteCopy {
  home: string;
  workPage: string;
  anchors: {
    about: string;
    clients: string;
    services: string;
    work: string;
    contact: string;
  };
  nav: { about: string; services: string; work: string; contact: string };
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
    /** Each slide pairs the rotating word with its discipline, lead copy and showcase image. */
    slides: {
      word: string;
      image: string;
      caption: string;
      detail: string;
      lead: string;
      alt: string;
    }[];
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
      /** Slug of public/images/services/<slug>-{800,1200}.webp; omit for a colour-only card. */
      image?: string;
      alt?: string;
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
    next: { title: string; accent: string; text: string; cta: string };
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
      about: "nosotros",
      clients: "clientes",
      services: "servicios",
      work: "trabajo",
      contact: "contacto",
    },
    nav: {
      about: "Nosotros",
      services: "Servicios",
      work: "Proyectos",
      contact: "Contacto",
    },
    header: {
      homeLabel: "The Nexa Agency, inicio",
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
        "Conectamos estrategia, creatividad y ejecución para mover marcas hacia adelante.",
      nav: "Navegación del pie",
      navTitle: "Explora",
      contactTitle: "Contacto",
      social: "Síguenos",
      base: "Santo Domingo, República Dominicana",
      rights: "© 2026 The Nexa Agency. Todos los derechos reservados.",
      backTop: "Volver arriba",
    },
  },
  en: {
    home: "/en/",
    workPage: "/en/trabajos/",
    anchors: {
      about: "about",
      clients: "clients",
      services: "services",
      work: "work",
      contact: "contact",
    },
    nav: {
      about: "About",
      services: "Services",
      work: "Projects",
      contact: "Contact",
    },
    header: {
      homeLabel: "The Nexa Agency, home",
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
        "We connect strategy, creativity and delivery to move brands forward.",
      nav: "Footer navigation",
      navTitle: "Explore",
      contactTitle: "Contact",
      social: "Follow us",
      base: "Santo Domingo, Dominican Republic",
      rights: "© 2026 The Nexa Agency. All rights reserved.",
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
          image: "strategy",
          caption: "Estrategia + Marketing",
          detail: "Dirección para cada acción",
          lead: "Convertimos objetivos de negocio en estrategias claras para hacer avanzar tu marca.",
          alt: "Dirección creativa para una estrategia de marca",
        },
        {
          word: "identifican.",
          image: "branding",
          caption: "Branding + Identidad visual",
          detail: "Marcas reconocibles",
          lead: "Creamos identidades con personalidad, coherencia y una imagen capaz de diferenciar tu marca.",
          alt: "Materiales de identidad visual y branding",
        },
        {
          word: "conectan.",
          image: "orbita-v2",
          caption: "Social Media",
          detail: "Comunidad en movimiento",
          lead: "Gestionamos tus redes con estrategia, creatividad y una comunicación pensada para construir comunidad.",
          alt: "Composición en órbita que representa la conversación social",
        },
        {
          word: "cuentan.",
          image: "studio",
          caption: "Creación de contenido",
          detail: "Historias que conectan",
          lead: "Transformamos lo que tu marca tiene para decir en contenido relevante, creativo y hecho para conectar.",
          alt: "Set de producción de contenido",
        },
        {
          word: "cobran vida.",
          image: "audiovisual",
          caption: "Producción audiovisual",
          detail: "Foto y vídeo de marca",
          lead: "Creamos fotografía y vídeo que muestran tu marca, tus productos y tus historias de forma memorable.",
          alt: "Dirección de arte para producción audiovisual",
        },
        {
          word: "venden.",
          image: "paid",
          caption: "Campañas + Paid Media",
          detail: "Atención en oportunidades",
          lead: "Creamos y gestionamos campañas que llevan tu mensaje a las personas correctas y generan oportunidades.",
          alt: "Planificación visual de una campaña de medios",
        },
        {
          word: "se ven.",
          image: "graphic",
          caption: "Diseño gráfico + Publicidad",
          detail: "Coherencia en cada pieza",
          lead: "Diseñamos piezas digitales, impresas y publicitarias para que tu marca sea coherente en cada punto de contacto.",
          alt: "Dirección visual y composición editorial",
        },
        {
          word: "crecen.",
          image: "web",
          caption: "Diseño web + Digital",
          detail: "Presencia que convierte",
          lead: "Creamos experiencias digitales funcionales y atractivas que fortalecen la presencia de tu negocio.",
          alt: "Dirección de una experiencia web digital",
        },
      ],
      primary: "Empieza tu proyecto",
      secondary: "Ver proyectos",
      pause: "Pausar presentación",
      play: "Reanudar presentación",
    },
    marquee: [
      "Estrategia",
      "Branding",
      "Social Media",
      "Contenido",
      "Paid media",
      "Diseño web",
    ],
    manifesto: {
      text: "Lo que importa no es estar. Es dejar huella. Entendemos tu negocio, definimos una estrategia y la transformamos en identidad, contenido y experiencias que conectan con tu audiencia y hacen crecer tu marca.",
      highlights: ["huella.", "marca."],
      link: "Conoce cómo trabajamos",
      stats: [
        { value: 6, suffix: "", label: "Disciplinas conectadas" },
        { value: 360, suffix: "°", label: "Una visión integral" },
        { value: 1, suffix: "", label: "Un solo equipo" },
      ],
    },
    clients: {
      title: "Marcas que",
      titleAccent: "confían.",
      aside:
        "Cada marca empieza con una conversación. Cada proyecto, con una idea.",
    },
    services: {
      title: "Servicios que",
      titleAccent: "mueven marcas.",
      aside:
        "Estrategia, creatividad y ejecución conectadas en un mismo equipo.",
      items: [
        {
          title: "Estrategia & Marketing",
          text: "Entendemos tu negocio, tu audiencia y tus objetivos para construir estrategias que le den dirección a cada acción de tu marca.",
          tags: ["Estrategia", "Marketing", "Campañas", "Consultoría"],
          image: "strategy",
          alt: "Dirección creativa para una estrategia de marca",
          tone: "orange",
          cta: "Hablemos de estrategia",
          service: "Estrategia & Marketing",
        },
        {
          title: "Branding & Identidad",
          text: "Construimos marcas con personalidad, propósito y una identidad visual coherente para que sean reconocibles, relevantes y memorables.",
          tags: ["Naming", "Identidad visual", "Branding", "Manual de marca"],
          image: "branding",
          alt: "Materiales de identidad visual y branding",
          tone: "sand",
          cta: "Construyamos tu marca",
          service: "Branding & Identidad",
        },
        {
          title: "Social Media & Contenido",
          text: "Convertimos la estrategia de tu marca en contenido que conecta, comunica y construye comunidad en cada plataforma.",
          tags: ["Estrategia", "Contenido", "Community", "Social Media"],
          tone: "graphite",
          cta: "Impulsa tus redes",
          service: "Social Media & Contenido",
        },
        {
          title: "Diseño gráfico",
          text: "Transformamos ideas en soluciones visuales claras, atractivas y coherentes con la identidad de tu marca.",
          tags: ["Digital", "Impresos", "Publicidad", "Editorial"],
          image: "graphic",
          alt: "Dirección visual y composición editorial",
          tone: "paper",
          cta: "Dale forma a tu idea",
          service: "Diseño gráfico",
        },
        {
          title: "Producción audiovisual",
          text: "Llevamos tus ideas a foto y vídeo para crear historias, contenido y experiencias que hagan que tu marca cobre vida.",
          tags: ["Vídeo", "Fotografía", "Reels", "Producción"],
          image: "audiovisual",
          alt: "Dirección de arte para producción audiovisual",
          tone: "graphite",
          cta: "Demos vida a tu idea",
          service: "Producción audiovisual",
        },
        {
          title: "Campañas & Paid Media",
          text: "Planificamos, ejecutamos y optimizamos campañas para llevar tu mensaje a las personas correctas y convertir atención en oportunidades.",
          tags: ["Meta Ads", "Google Ads", "Campañas", "Optimización"],
          image: "paid-media",
          alt: "Planificación visual de una campaña de medios",
          tone: "orange",
          cta: "Impulsa tu campaña",
          service: "Campañas & Paid Media",
        },
        {
          title: "Diseño web & Digital",
          text: "Diseñamos experiencias digitales funcionales, intuitivas y alineadas con tu marca para convertir visitas en oportunidades.",
          tags: ["Diseño web", "Landing pages", "Responsive"],
          image: "web",
          alt: "Dirección de una experiencia web digital",
          tone: "sand",
          cta: "Lleva tu marca a digital",
          service: "Diseño web & Digital",
        },
      ],
    },
    work: {
      title: "El trabajo",
      titleAccent: "habla.",
      intro:
        "Ideas convertidas en marcas, campañas y experiencias que conectan, comunican y dejan huella.",
      all: "Ver todos los proyectos",
      items: [
        {
          name: "Marea",
          category: "Branding + Identidad",
          result:
            "Una identidad creada para destacar, conectar y moverse a su propio ritmo.",
          image: "marea-v2",
          alt: "Dirección de arte para el proyecto Marea",
        },
        {
          name: "Norte",
          category: "Estrategia + Marketing",
          result:
            "Una estrategia pensada para darle dirección a la marca y convertir objetivos en acciones.",
          image: "norte-v2",
          alt: "Proyecto de estrategia Norte",
        },
        {
          name: "Órbita",
          category: "Campaña + Paid Media",
          result:
            "Una campaña diseñada para poner la marca en el centro de la conversación.",
          image: "orbita-v2",
          alt: "Proyecto de campaña Órbita",
        },
        {
          name: "Studio",
          category: "Contenido + Producción audiovisual",
          result:
            "Historias creadas para captar miradas, generar conexión y quedarse en la memoria.",
          image: "studio",
          alt: "Dirección de arte para producción audiovisual",
        },
      ],
      next: {
        title: "Tu marca",
        accent: "aquí.",
        text: "La próxima idea que deje huella puede ser la tuya.",
        cta: "Hablemos",
      },
    },
    contact: {
      title: "¿Tienes algo",
      titleAccent: "en mente?",
      intro:
        "Cuéntanos qué quieres construir, transformar o hacer crecer. Nosotros conectamos los puntos para convertirlo en una idea que avance.",
      channels: [
        {
          label: "Email",
          value: "info@thenexaagency.com",
          href: "mailto:info@thenexaagency.com",
        },
        {
          label: "WhatsApp",
          value: "Escríbenos",
          href: "https://wa.me/18090000000?text=Hola%20Nexa%2C%20quiero%20hablar%20de%20un%20proyecto",
        },
        { label: "Base", value: "Santo Domingo, República Dominicana" },
      ],
      form: {
        name: "Tu nombre",
        email: "Tu email",
        company: "Empresa / Marca",
        service: "¿Qué necesitas?",
        servicePlaceholder: "Selecciona un servicio",
        services: [
          "Estrategia & Marketing",
          "Branding & Identidad",
          "Social Media & Contenido",
          "Diseño gráfico",
          "Producción audiovisual",
          "Campañas & Paid Media",
          "Diseño web & Digital",
          "Otro / No estoy seguro",
        ],
        message: "Cuéntanos sobre tu proyecto",
        submit: "Cuéntanos tu idea",
        note: "Al enviar se abrirá tu cliente de correo con el mensaje preparado.",
        sent: "Tu idea ya está en movimiento. Hablamos pronto.",
        required: "Este campo es obligatorio.",
        invalidEmail:
          "Revisa el email: debe tener el formato nombre@dominio.com.",
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
          image: "strategy",
          caption: "Strategy + Marketing",
          detail: "Direction for every move",
          lead: "We turn business goals into clear strategies that move your brand forward.",
          alt: "Creative direction for a brand strategy",
        },
        {
          word: "identify.",
          image: "branding",
          caption: "Branding + Visual identity",
          detail: "Brands you recognise",
          lead: "We create identities with personality, consistency and an image that sets your brand apart.",
          alt: "Brand identity materials",
        },
        {
          word: "connect.",
          image: "orbita-v2",
          caption: "Social Media",
          detail: "Community in motion",
          lead: "We run your channels with strategy, creativity and communication built to grow a community.",
          alt: "Orbiting composition representing social conversation",
        },
        {
          word: "tell.",
          image: "studio",
          caption: "Content creation",
          detail: "Stories that connect",
          lead: "We turn what your brand has to say into relevant, creative content made to connect.",
          alt: "Content production set",
        },
        {
          word: "come alive.",
          image: "audiovisual",
          caption: "Film production",
          detail: "Brand photo and video",
          lead: "We create photography and video that show your brand, your products and your stories in a memorable way.",
          alt: "Art direction for film production",
        },
        {
          word: "sell.",
          image: "paid",
          caption: "Campaigns + Paid Media",
          detail: "Attention into opportunities",
          lead: "We create and run campaigns that take your message to the right people and generate opportunities.",
          alt: "Visual planning of a media campaign",
        },
        {
          word: "get seen.",
          image: "graphic",
          caption: "Graphic design + Advertising",
          detail: "Consistent at every touchpoint",
          lead: "We design digital, printed and advertising pieces so your brand stays consistent at every touchpoint.",
          alt: "Editorial graphic design direction",
        },
        {
          word: "grow.",
          image: "web",
          caption: "Web design + Digital",
          detail: "A presence that converts",
          lead: "We build functional, attractive digital experiences that strengthen your business presence.",
          alt: "Digital web experience direction",
        },
      ],
      primary: "Start your project",
      secondary: "See projects",
      pause: "Pause slideshow",
      play: "Play slideshow",
    },
    marquee: [
      "Strategy",
      "Branding",
      "Social Media",
      "Content",
      "Paid media",
      "Web design",
    ],
    manifesto: {
      text: "Being there is not enough. You have to leave a mark. We get to know your business, define a strategy and turn it into identity, content and experiences that connect with your audience and grow your brand.",
      highlights: ["mark.", "brand."],
      link: "Discover how we work",
      stats: [
        { value: 6, suffix: "", label: "Connected disciplines" },
        { value: 360, suffix: "°", label: "One integrated vision" },
        { value: 1, suffix: "", label: "One single team" },
      ],
    },
    clients: {
      title: "Brands that",
      titleAccent: "trust us.",
      aside:
        "Every brand starts with a conversation. Every project, with an idea.",
    },
    services: {
      title: "Services that",
      titleAccent: "move brands.",
      aside: "Strategy, creativity and delivery connected in one team.",
      items: [
        {
          title: "Strategy & Marketing",
          text: "We get to know your business, your audience and your goals to build strategies that give direction to everything your brand does.",
          tags: ["Strategy", "Marketing", "Campaigns", "Consulting"],
          image: "strategy",
          alt: "Creative direction for a brand strategy",
          tone: "orange",
          cta: "Let’s talk strategy",
          service: "Strategy & Marketing",
        },
        {
          title: "Branding & Identity",
          text: "We build brands with personality, purpose and a consistent visual identity so they are recognisable, relevant and memorable.",
          tags: ["Naming", "Visual identity", "Branding", "Brand manual"],
          image: "branding",
          alt: "Brand identity materials",
          tone: "sand",
          cta: "Let’s build your brand",
          service: "Branding & Identity",
        },
        {
          title: "Social Media & Content",
          text: "We turn your brand strategy into content that connects, communicates and builds community on every platform.",
          tags: ["Strategy", "Content", "Community", "Social Media"],
          tone: "graphite",
          cta: "Boost your channels",
          service: "Social Media & Content",
        },
        {
          title: "Graphic design",
          text: "We turn ideas into clear, attractive visual solutions that stay true to your brand identity.",
          tags: ["Digital", "Print", "Advertising", "Editorial"],
          image: "graphic",
          alt: "Editorial graphic design direction",
          tone: "paper",
          cta: "Shape your idea",
          service: "Graphic design",
        },
        {
          title: "Film production",
          text: "We bring your ideas to photo and video to create stories, content and experiences that make your brand come alive.",
          tags: ["Video", "Photography", "Reels", "Production"],
          image: "audiovisual",
          alt: "Art direction for film production",
          tone: "graphite",
          cta: "Bring your idea to life",
          service: "Film production",
        },
        {
          title: "Campaigns & Paid Media",
          text: "We plan, run and optimise campaigns to take your message to the right people and turn attention into opportunities.",
          tags: ["Meta Ads", "Google Ads", "Campaigns", "Optimisation"],
          image: "paid-media",
          alt: "Visual planning of a media campaign",
          tone: "orange",
          cta: "Boost your campaign",
          service: "Campaigns & Paid Media",
        },
        {
          title: "Web design & Digital",
          text: "We design functional, intuitive digital experiences aligned with your brand to turn visits into opportunities.",
          tags: ["Web design", "Landing pages", "Responsive"],
          image: "web",
          alt: "Digital web experience direction",
          tone: "sand",
          cta: "Take your brand digital",
          service: "Web design & Digital",
        },
      ],
    },
    work: {
      title: "The work",
      titleAccent: "speaks.",
      intro:
        "Ideas turned into brands, campaigns and experiences that connect, communicate and leave a mark.",
      all: "See all projects",
      items: [
        {
          name: "Marea",
          category: "Branding + Identity",
          result:
            "An identity created to stand out, connect and move at its own pace.",
          image: "marea-v2",
          alt: "Marea art direction case study",
        },
        {
          name: "Norte",
          category: "Strategy + Marketing",
          result:
            "A strategy built to give the brand direction and turn goals into action.",
          image: "norte-v2",
          alt: "Norte strategy project",
        },
        {
          name: "Órbita",
          category: "Campaign + Paid Media",
          result:
            "A campaign designed to put the brand at the centre of the conversation.",
          image: "orbita-v2",
          alt: "Órbita campaign project",
        },
        {
          name: "Studio",
          category: "Content + Film production",
          result:
            "Stories created to catch the eye, spark connection and stay in memory.",
          image: "studio",
          alt: "Art direction for film production",
        },
      ],
      next: {
        title: "Your brand",
        accent: "here.",
        text: "The next idea that leaves a mark could be yours.",
        cta: "Let’s talk",
      },
    },
    contact: {
      title: "Have something",
      titleAccent: "in mind?",
      intro:
        "Tell us what you want to build, transform or grow. We connect the dots to turn it into an idea that moves.",
      channels: [
        {
          label: "Email",
          value: "info@thenexaagency.com",
          href: "mailto:info@thenexaagency.com",
        },
        {
          label: "WhatsApp",
          value: "Write to us",
          href: "https://wa.me/18090000000?text=Hi%20Nexa%2C%20I%27d%20like%20to%20talk%20about%20a%20project",
        },
        { label: "Based in", value: "Santo Domingo, Dominican Republic" },
      ],
      form: {
        name: "Your name",
        email: "Your email",
        company: "Company / Brand",
        service: "What do you need?",
        servicePlaceholder: "Choose a service",
        services: [
          "Strategy & Marketing",
          "Branding & Identity",
          "Social Media & Content",
          "Graphic design",
          "Film production",
          "Campaigns & Paid Media",
          "Web design & Digital",
          "Other / Not sure yet",
        ],
        message: "Tell us about your project",
        submit: "Tell us your idea",
        note: "Sending opens your email client with the message ready.",
        sent: "Your idea is already in motion. We’ll be in touch soon.",
        required: "This field is required.",
        invalidEmail: "Check the email: it should look like name@domain.com.",
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
    title: "Proyectos — The Nexa Agency",
    description:
      "Ideas convertidas en marcas, campañas y experiencias que conectan, comunican y dejan huella.",
    heading: "Hacemos",
    headingAccent: "que pase.",
    intro:
      "Ideas convertidas en marcas, campañas y experiencias que conectan, comunican y dejan huella.",
    explore: "Explorar proyectos",
    projectsLabel: "Proyectos",
    endTitle: "¿Hacemos el siguiente?",
    endCta: "Cuéntanos tu idea",
  },
  en: {
    title: "Projects — The Nexa Agency",
    description:
      "Ideas turned into brands, campaigns and experiences that connect, communicate and leave a mark.",
    heading: "We make",
    headingAccent: "things happen.",
    intro:
      "Ideas turned into brands, campaigns and experiences that connect, communicate and leave a mark.",
    explore: "Explore projects",
    projectsLabel: "Projects",
    endTitle: "Shall we make the next one?",
    endCta: "Tell us your idea",
  },
};
