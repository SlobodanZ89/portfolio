export type Language = 'en' | 'de'

type Dictionary = {
  nav: {
    home: string
    projects: string
    evolution: string
    skills: string
    contact: string
  }
  hero: {
    role: string
    name: string
    tagline: string
    profileSummary: string
    ctaProjects: string
    ctaDownloadCv: string
    cvEnglish: string
    cvGerman: string
  }
  projects: {
    title: string
    screenshots: {
      easyFarmHome: { title: string; description: string }
      easyFarmFinance: { title: string; description: string }
      kinoMovies: { title: string; description: string }
      kinoSeats: { title: string; description: string }
    }
    easyFarm: {
      title: string
      description: string
      stack: string[]
      features: string[]
    }
    kinoApp: {
      title: string
      description: string
      stack: string[]
      features: string[]
    }
    harvestIQ: {
      title: string
      description: string
      stack: string[]
      features: string[]
      comingSoon: string
    }
  }
  evolution: {
    title: string
    items: { title: string; subtitle: string; description: string }[]
  }
  skills: {
    title: string
    frontend: { title: string; items: string[] }
    backend: { title: string; items: string[] }
    data: { title: string; items: string[] }
    tools: { title: string; items: string[] }
    projectManagement: { title: string; items: string[] }
    languages: { title: string; items: string[] }
  }
  contact: {
    title: string
    intro: string
    nameLabel: string
    emailLabel: string
    messageLabel: string
    send: string
    sending: string
    success: string
    validationError: string
    error: string
  }
}

export const CONTENT: Record<Language, Dictionary> = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      evolution: 'Evolution',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      role: 'Full Stack Developer',
      name: 'Slobodan Zivojinovic, BSc',
      tagline: 'From high-stakes hospitality operations to scalable full-stack solutions.',
      profileSummary:
        'Full Stack Developer with a BSc in Computer Science and hands-on training in digital transformation, cloud, and information security.\n\nJava · Spring Boot · REST APIs · JWT authentication\nReact (Vite) · Redux Toolkit · Tailwind CSS · Material UI\nMariaDB · SQL · ER design · JPA & Hibernate\nDocker · Git · IntelliJ IDEA · Agile / Scrum\n3 languages: English · German · Serbian\n12+ years in hospitality ops — purchasing, inventory, process optimisation',
      ctaProjects: 'View Projects',
      ctaDownloadCv: 'Download CV',
      cvEnglish: 'English (EN)',
      cvGerman: 'German (DE)',
    },
    projects: {
      title: 'Selected Projects',
      screenshots: {
        easyFarmHome: {
          title: 'Dashboard + Fields map',
          description:
            'Home view with key farm metrics and a map where fields are visible for quick orientation and planning.',
        },
        easyFarmFinance: {
          title: 'Finance',
          description:
            'Financial planning view showing budgets, costs, and overview metrics to support operational decisions.',
        },
        kinoMovies: {
          title: 'Movies',
          description: 'Movies list view for browsing titles and selecting a screening to start the booking flow.',
        },
        kinoSeats: {
          title: 'Seat selection',
          description:
            'Interactive seating chart showing available and reserved seats as part of the booking experience.',
        },
      },
      easyFarm: {
        title: 'easyFarm (Smart Agriculture ERP)',
        description:
          'An ERP-style farm management platform focused on planning, visibility, and data-driven decisions.',
        stack: ['Spring Boot', 'React', 'Docker', 'JWT', 'MariaDB'],
        features: ['GIS map visualization', 'Financial planning', 'Resource management'],
      },
      kinoApp: {
        title: 'kinoApp (Cinema Booking)',
        description: 'Cinema booking and administration platform with an interactive seat selection experience.',
        stack: ['Java', 'Spring Boot', 'React'],
        features: ['Interactive seat visualization', 'Booking flow', 'Admin management'],
      },
      harvestIQ: {
        title: 'HarvestIQ (Farm Operations & Cost Tracking)',
        description:
          'Coming soon — a farm management platform with end-to-end traceability (field → harvest → storage → sale), subsidy workflows, and an AI agent to search and chat over farm documents.',
        stack: ['Spring Boot', 'React', 'SQL', 'Docker'],
        features: [
          'AI agent (document chat + search)',
          'Subsidy programs & applications',
          'Operations planning + assignments',
          'Cost tracking (resources, paid ops, maintenance)',
          'Harvest → storage → sales traceability',
        ],
        comingSoon: 'Coming soon…',
      },
    },
    evolution: {
      title: 'Professional Evolution',
      items: [
        {
          title: 'Full Stack Developer / Project delivery',
          subtitle: 'Projects for Coders.Bay · 07/2025 – 10/2025',
          description:
            'Project “easyFarm” — full-stack ERP system (Spring Boot, React, Docker, JWT/Spring Security, MariaDB): development of a smart agriculture platform for financial planning and resource management; digital farm management with GIS map visualisation and financial planning.\n\nCinema app — development of seat visualisation and a booking platform.',
        },
        {
          title: 'Farm management & IT project',
          subtitle: 'Family business (hybrid/seasonal) · 01/2020 – Present',
          description:
            'Farm Manager / Sales / Analysis / Financial Planning / Subsidy Management / IT project implementation. Management of an agricultural business: price trend analysis, marketing, competitor monitoring, subsidy application submissions, administration. Development of an IT project for the digital management of the business.',
        },
        {
          title: 'Logistics, finance & operations (hospitality)',
          subtitle:
            'Anantara Palais Hansen Vienna, Grand Ferdinand, 25 Hours Hotels, Vienna Marriott Hotel · 06/2012 – 07/2024',
          description:
            'Pricing, supplier management, warehouse management, purchasing, stocktaking, ordering. Invoice controlling, payment approvals, professional guest relations, deputy for Admin Manager.',
        },
        {
          title: 'Education & languages',
          subtitle: 'University of Graz · CODERS.BAY Vienna · University of Požarevac',
          description:
            'University Course Digitalisation Management — University of Graz (03/2026 – 05/2026): Cloud Computing, Information Security, Quality Management, e-Strategy, Digitalisation and Project Management.\n\nDiploma Programme in Software Development — CODERS.BAY Vienna (04/2025 – 10/2025).\n\nBSc Computer Science — University of Požarevac (10/2008 – 03/2012).\n\nLanguages: English (proficient, written and spoken), German (proficient, written and spoken), Serbian (native).',
        },
      ],
    },
    skills: {
      title: 'Skills & Tech Stack',
      frontend: {
        title: 'Frontend',
        items: [
          'HTML',
          'CSS',
          'Bootstrap',
          'JavaScript',
          'React (Vite)',
          'JSX',
          'React Router',
          'Redux Toolkit',
          'Material UI',
          'Tailwind CSS',
        ],
      },
      backend: {
        title: 'Backend',
        items: [
          'Java',
          'Spring Boot (Maven)',
          'Spring Web',
          'REST API',
          'OpenAPI / Swagger UI',
          'JPA & Hibernate',
          'Spring Security',
          'JWT (stateless auth)',
        ],
      },
      data: {
        title: 'Databases',
        items: ['MariaDB', 'MySQL', 'SQL', 'ER diagrams & data modelling'],
      },
      tools: {
        title: 'Tools',
        items: ['Docker', 'Git', 'IntelliJ IDEA', 'WebStorm', 'Information Security', 'Agentic AI (coming soon…)'],
      },
      projectManagement: {
        title: 'Project management',
        items: ['Waterfall', 'Agile / Scrum', 'Digital Transformation'],
      },
      languages: {
        title: 'Languages',
        items: ['English', 'German', 'Serbian'],
      },
    },
    contact: {
      title: 'Contact',
      intro: 'Send me a message and I’ll get back to you.',
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      send: 'Send message',
      sending: 'Sending…',
      success: 'Thanks! Your message was sent.',
      validationError: 'Please check your details and message (all fields are required).',
      error: 'Something went wrong. Please try again.',
    },
  },
  de: {
    nav: {
      home: 'Start',
      projects: 'Projekte',
      evolution: 'Werdegang',
      skills: 'Skills',
      contact: 'Kontakt',
    },
    hero: {
      role: 'Full Stack Developer',
      name: 'Slobodan Zivojinovic, BSc',
      tagline: 'Von High-End Hotellerie-Operations zu skalierbaren Full-Stack-Lösungen.',
      profileSummary:
        'Full Stack Developer mit BSc in Informatik und praxisnaher Ausbildung in digitaler Transformation, Cloud und Informationssicherheit.\n\nJava · Spring Boot · REST APIs · JWT-Authentifizierung\nReact (Vite) · Redux Toolkit · Tailwind CSS · Material UI\nMariaDB · SQL · ER-Design · JPA & Hibernate\nDocker · Git · IntelliJ IDEA · Agile / Scrum\n3 Sprachen: Englisch · Deutsch · Serbisch\n12+ Jahre Hotellerie-Operations — Einkauf, Inventar, Prozessoptimierung',
      ctaProjects: 'Projekte ansehen',
      ctaDownloadCv: 'CV herunterladen',
      cvEnglish: 'Englisch (EN)',
      cvGerman: 'Deutsch (DE)',
    },
    projects: {
      title: 'Ausgewählte Projekte',
      screenshots: {
        easyFarmHome: {
          title: 'Dashboard + Felderkarte',
          description:
            'Startansicht mit zentralen Kennzahlen und Karte, auf der die Felder sichtbar sind — für schnelle Orientierung und Planung.',
        },
        easyFarmFinance: {
          title: 'Finanzen',
          description:
            'Finanzplanungsansicht mit Budget, Kosten und Übersichten zur Unterstützung operativer Entscheidungen.',
        },
        kinoMovies: {
          title: 'Filme',
          description: 'Filmliste zum Durchsuchen der Titel und Auswahl einer Vorstellung für den Buchungs-Flow.',
        },
        kinoSeats: {
          title: 'Sitzplatz-Auswahl',
          description:
            'Interaktive Sitzplatzgrafik mit verfügbaren und reservierten Plätzen als Teil des Buchungserlebnisses.',
        },
      },
      easyFarm: {
        title: 'easyFarm (Smart Agriculture ERP)',
        description:
          'Eine ERP-orientierte Farm-Management-Plattform mit Fokus auf Planung, Transparenz und datenbasierte Entscheidungen.',
        stack: ['Spring Boot', 'React', 'Docker', 'JWT', 'MariaDB'],
        features: ['GIS-Kartenvisualisierung', 'Finanzplanung', 'Ressourcenmanagement'],
      },
      kinoApp: {
        title: 'kinoApp (Cinema Booking)',
        description:
          'Kino-Buchungs- und Admin-Plattform mit interaktiver Sitzplatz-Auswahl und durchgängiger Buchungsstrecke.',
        stack: ['Java', 'Spring Boot', 'React'],
        features: ['Interaktive Sitzplatz-Visualisierung', 'Buchungs-Flow', 'Admin-Verwaltung'],
      },
      harvestIQ: {
        title: 'HarvestIQ (Farm-Operations & Kosten)',
        description:
          'Coming soon — eine Farm-Management-Plattform mit End-to-End-Traceability (Feld → Ernte → Lager → Verkauf), Förder-Workflows und einem KI-Agenten für Dokumentensuche & Chat.',
        stack: ['Spring Boot', 'React', 'SQL', 'Docker'],
        features: [
          'KI-Agent (Dokumenten-Chat + Suche)',
          'Förderprogramme & Anträge',
          'Operationsplanung + Zuweisungen',
          'Kosten-Tracking (Ressourcen, Fremdleistungen, Wartung)',
          'Ernte → Lager → Verkauf (Traceability)',
        ],
        comingSoon: 'Coming soon…',
      },
    },
    evolution: {
      title: 'Professionelle Entwicklung',
      items: [
        {
          title: 'Full Stack Developer / Projektabwicklung',
          subtitle: 'Projekte für Coders.Bay · 07/2025 – 10/2025',
          description:
            'Projekt „easyFarm“ — Full-Stack-ERP-System (Spring Boot, React, Docker, JWT/Spring Security, MariaDB): Entwicklung einer Smart-Agriculture-Plattform für Finanzplanung und Ressourcenmanagement; digitale Agrar-Verwaltung mit GIS-Kartenvisualisierung und Finanzplanung.\n\nKino-App — Entwicklung von Raumvisualisierung und Buchungsplattform.',
        },
        {
          title: 'Betriebsleitung & IT-Projekt',
          subtitle: 'Familienbetrieb (hybrid/saisonal) · 01/2020 – Heute',
          description:
            'Betriebsleiter / Vertrieb / Analyse / Finanzplanung / Förderabwicklung / Umsetzung IT-Projekt. Betriebsleitung eines landwirtschaftlichen Betriebs: Analyse der Preisentwicklung, Marketing, Mitbewerbsbeobachtung, Einreichung von Förderanträgen, Administration. Entwicklung: IT-Projekt zur digitalen Abwicklung des Betriebs.',
        },
        {
          title: 'Logistik, Finanzen & Prozesse (Hotellerie)',
          subtitle:
            'Anantara Palais Hansen Vienna, Grand Ferdinand, 25 Hours Hotels, Vienna Marriott Hotel · 06/2012 – 07/2024',
          description:
            'Preisgestaltung, Lieferantenmanagement, Lagerwirtschaft, Einkauf, Inventuren, Bestellwesen. Rechnungscontrolling, Zahlungsfreigaben, professionelle Gästebetreuung, Vertretung Admin Manager.',
        },
        {
          title: 'Ausbildung & Sprachen',
          subtitle: 'Universität Graz · CODERS.BAY Vienna · Hochschule Požarevac',
          description:
            'Universitätskurs Digitalisierungsmanagement — Universität Graz (03/2026 – 05/2026): Cloud Computing, Informationssicherheit, Qualitätsmanagement, e-Strategien, Digitalisierung und Projektmanagement.\n\nDiplomlehrgang für Softwareentwicklung — CODERS.BAY Vienna (04/2025 – 10/2025).\n\nBSc Informatik / Informationstechnologie — Hochschule Požarevac (10/2008 – 03/2012).\n\nSprachen: Deutsch (sehr gut in Wort und Schrift), Englisch (sehr gut in Wort und Schrift), Serbisch (Erstsprache).',
        },
      ],
    },
    skills: {
      title: 'Skills & Tech Stack',
      frontend: {
        title: 'Frontend',
        items: [
          'HTML',
          'CSS',
          'Bootstrap',
          'JavaScript',
          'React (Vite)',
          'JSX',
          'React Router',
          'Redux Toolkit',
          'Material UI',
          'Tailwind CSS',
        ],
      },
      backend: {
        title: 'Backend',
        items: [
          'Java',
          'Spring Boot (Maven)',
          'Spring Web',
          'REST API',
          'OpenAPI / Swagger UI',
          'JPA & Hibernate',
          'Spring Security',
          'JWT (stateless)',
        ],
      },
      data: {
        title: 'Datenbanken',
        items: ['MariaDB', 'MySQL', 'SQL', 'ER-Diagramme & Datenmodellierung'],
      },
      tools: {
        title: 'Tools',
        items: ['Docker', 'Git', 'IntelliJ IDEA', 'WebStorm', 'Informationssicherheit', 'Agentische KI (coming soon…)'],
      },
      projectManagement: {
        title: 'Projektmanagement',
        items: ['Wasserfallmodell', 'Agiles Projektmanagement (Scrum)', 'Digitale Transformation'],
      },
      languages: {
        title: 'Sprachen',
        items: ['Englisch', 'Deutsch', 'Serbisch'],
      },
    },
    contact: {
      title: 'Kontakt',
      intro: 'Schreib mir eine Nachricht – ich melde mich so bald wie möglich.',
      nameLabel: 'Name',
      emailLabel: 'E-Mail',
      messageLabel: 'Nachricht',
      send: 'Nachricht senden',
      sending: 'Wird gesendet…',
      success: 'Danke! Deine Nachricht wurde gesendet.',
      validationError: 'Bitte prüfe deine Eingaben (alle Felder sind erforderlich).',
      error: 'Etwas ist schiefgelaufen. Bitte versuche es erneut.',
    },
  },
}
