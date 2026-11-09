document.documentElement.classList.add("js");

const translations = {
  en: {
    skipLink: "Skip to content",
    brand: { role: "Data science & statistics" },
    nav: {
      about: "About",
      experience: "Experience",
      expertise: "Expertise",
      education: "Education",
      contact: "Get in touch",
    },
    hero: {
      location: "San José, Costa Rica",
      role: "Data scientist",
      roleSecondary: "Statistician",
      summary:
        "I turn complex data into clear, decision-ready insight — through statistical modeling, thoughtful analysis, and better data workflows.",
      explore: "Explore selected work",
      download: "Download résumé",
      linkedin: "Connect on LinkedIn",
      scroll: "Scroll to explore",
    },
    about: {
      label: "About",
      kicker: "A little beneath the surface",
      title: "Good analysis starts with <em>the right questions.</em>",
      p1:
        "With a degree in Statistics and experience across financial data, institutional research, and public surveys, I work from the foundations up: understand the data, test the assumptions, and make the result useful.",
      p2:
        "My work spans statistical modeling, data quality, automation, and business intelligence. I value reproducible methods, clear communication, and insights people can act on — not just numbers on a screen.",
      line: "There is always more beneath the surface.",
    },
    highlights: {
      kicker: "Evidence in practice",
      title: "Selected <em>contributions.</em>",
      aside:
        "A few documented examples of turning analytical work into consistent methods, clearer reporting, and useful decisions.",
      card1Tag: "DATA QUALITY",
      card1Title: "Reliable data, ready to move.",
      card1Text:
        "Owned regional data feeds across firmographics, financials, shareholder structures, and corporate hierarchies. Investigated data-quality issues, coordinated root-cause resolution, and improved monitoring through workflow automation.",
      card1Foot: "Data Specialist · Heredia, Costa Rica",
      card2Tag: "RESEARCH",
      card2Title: "Researchers, one comparable index.",
      card2Text:
        "Developed a composite bibliometric performance index from Scopus datasets spanning 2019–2024, with weighting, normalization, and outlier treatment designed for statistical comparability.",
      card2Foot: "Institutional research · Universidad de Costa Rica",
      card3Tag: "MODELING",
      card3Title: "Models tested beyond the average case.",
      card3Text:
        "Built flexible time-series models using GAMLSS and spline components, benchmarked against ARIMA, and used Monte Carlo simulations to examine robustness and uncertainty.",
      card3Foot: "Statistical modeling · CIMPA",
      card4Tag: "DECISION SUPPORT",
      card4Title: "Analysis people can explore.",
      card4Text:
        "Built interactive Power BI dashboards for institutional decision-makers and automated data-processing workflows to improve reporting efficiency.",
      card4Foot: "Business intelligence · Universidad de Costa Rica",
    },
    experience: {
      kicker: "The path so far",
      title: "Experience in <em>context.</em>",
      aside:
        "Roles across data operations, institutional research, statistical modeling, and survey analysis.",
      date1: "Apr 2026 — Current",
      date2: "Mar 2025 — Feb 2026",
      date3: "Mar 2024 — Dec 2024",
      date4: "Aug 2023 — Dec 2023",
      date5: "Aug 2023 — Dec 2023",
      role1: "Data Specialist",
      role2: "Data Analyst, Institutional Research",
      role3: "Research Data Analyst",
      role4: "Statistical Modeling Analyst",
      role5: "Survey Data Analyst",
      location1: "Heredia, Costa Rica",
      org2: "Observatorio de Datos Institucionales · Universidad de Costa Rica",
      org3: "Escuela de Estadística · Universidad de Costa Rica",
      org4: "Centro de Investigación en Matemática Pura y Aplicada (CIMPA)",
      org5: "Actualidades Survey 2023 · San José, Costa Rica",
      point1a:
        "Owned regional data feeds covering firmographics, financials, shareholder structures, and corporate hierarchies.",
      point1b:
        "Investigated data-quality issues and coordinated cross-functional resolution with internal teams and external providers.",
      point1c:
        "Improved data-quality monitoring and operational efficiency through workflow automation and process improvements.",
      point2a:
        "Developed a bibliometric index evaluating 1,800+ researchers using multi-source Scopus data from 2019–2024.",
      point2b:
        "Designed weighting, normalization, and outlier-treatment methods for robust comparison.",
      point2c:
        "Built Power BI dashboards for institutional performance evaluation and strategic planning.",
      point3a:
        "Compared aging and frailty indicators using national and international survey datasets.",
      point3b:
        "Harmonized cross-country variables and performed data validation, cleaning, and statistical modeling in R and Stata.",
      point4a:
        "Developed GAMLSS time-series models with spline components and compared performance with ARIMA benchmarks.",
      point4b:
        "Designed Monte Carlo simulations to assess model robustness and uncertainty.",
      point5a:
        "Contributed to survey design, data collection, quality control, and statistical analysis.",
      point5b:
        "Prepared analytical reports summarizing findings for applied research.",
    },
    expertise: {
      kicker: "Tools for getting to the signal",
      title: "A practical <em>toolkit.</em>",
      aside: "Skills and tools reflected in Daniel’s professional experience and résumé.",
      skill1Title: "Programming",
      skill1Text: "R · Python · SQL · Stata",
      skill2Title: "Analytics & modeling",
      skill2Text: "Predictive modeling · Time-series analysis · Neural networks · Model validation · Monte Carlo simulation",
      skill3Title: "Business intelligence",
      skill3Text: "Power BI · Tableau · KPI development · Performance metrics · Dashboard development",
      skill4Title: "Data & reporting",
      skill4Text: "Data cleaning · Data transformation · Microsoft Office",
      skill5Title: "Languages",
      langSpanish: "Spanish",
      langNative: "Native",
      langEnglish: "English",
      langAdvanced: "Advanced",
    },
    education: {
      kicker: "Foundations",
      title: "Built on <em>statistics.</em>",
      date: "Mar 2020 — Dec 2025",
      degree: "Bachelor’s Degree in Statistics",
      school: "Universidad de Costa Rica",
      location: "San José, Costa Rica",
    },
    contact: {
      kicker: "Start a conversation",
      title: "Let’s make the<br><em>data meaningful.</em>",
      emailLabel: "Email",
      resume: "Download résumé",
    },
    footer: {
      quote: "There is always more beneath the surface.",
      backToTop: "Back to top",
      meta: "Data science · Statistics · Costa Rica",
    },
  },
  es: {
    skipLink: "Saltar al contenido",
    brand: { role: "Ciencia de datos y estadística" },
    nav: {
      about: "Acerca de",
      experience: "Experiencia",
      expertise: "Especialidades",
      education: "Educación",
      contact: "Contáctame",
    },
    hero: {
      location: "San José, Costa Rica",
      role: "Científico de datos",
      roleSecondary: "Estadístico",
      summary:
        "Transformo datos complejos en información clara y útil para la toma de decisiones — mediante modelado estadístico, análisis cuidadoso y mejores flujos de trabajo de datos.",
      explore: "Explorar trabajo seleccionado",
      download: "Descargar currículum",
      linkedin: "Conéctate en LinkedIn",
      scroll: "Desplázate para explorar",
    },
    about: {
      label: "Acerca de",
      kicker: "Un poco debajo de la superficie",
      title: "El buen análisis empieza con <em>las preguntas correctas.</em>",
      p1:
        "Con una licenciatura en Estadística y experiencia en datos financieros, investigación institucional y encuestas públicas, trabajo desde lo básico: entiendo los datos, pruebo los supuestos y hago que el resultado sea útil.",
      p2:
        "Mi trabajo abarca modelado estadístico, calidad de datos, automatización e inteligencia de negocio. Valoro los métodos reproducibles, la comunicación clara y los conocimientos que la gente puede actuar — no solo números en una pantalla.",
      line: "Siempre hay más debajo de la superficie.",
    },
    highlights: {
      kicker: "Evidencia en la práctica",
      title: "Selección de <em>contribuciones.</em>",
      aside:
        "Algunos ejemplos documentados de convertir el trabajo analítico en métodos consistentes, reportes más claros y decisiones útiles.",
      card1Tag: "CALIDAD DE DATOS",
      card1Title: "Datos confiables, listos para moverse.",
      card1Text:
        "Administré feeds regionales de datos sobre información corporativa, financieros, estructuras accionarias y jerarquías empresariales. Investigué problemas de calidad de datos, coordiné la resolución de la causa raíz y mejoré el monitoreo mediante automatización de flujos de trabajo.",
      card1Foot: "Especialista en datos · Heredia, Costa Rica",
      card2Tag: "INVESTIGACIÓN",
      card2Title: "Investigadores, un índice comparable.",
      card2Text:
        "Desarrollé un índice bibliométrico compuesto a partir de conjuntos de datos de Scopus entre 2019 y 2024, con ponderación, normalización y tratamiento de valores atípicos diseñados para comparabilidad estadística.",
      card2Foot: "Investigación institucional · Universidad de Costa Rica",
      card3Tag: "MODELADO",
      card3Title: "Modelos probados más allá del caso promedio.",
      card3Text:
        "Construí modelos flexibles de series de tiempo con GAMLSS y componentes spline, comparados contra ARIMA, y utilicé simulaciones de Monte Carlo para evaluar robustez e incertidumbre.",
      card3Foot: "Modelado estadístico · CIMPA",
      card4Tag: "APOYO A LA DECISIÓN",
      card4Title: "Análisis que la gente puede explorar.",
      card4Text:
        "Construí paneles interactivos de Power BI para tomadores de decisiones institucionales y flujos de trabajo automatizados de procesamiento de datos para mejorar la eficiencia de los reportes.",
      card4Foot: "Inteligencia de negocio · Universidad de Costa Rica",
    },
    experience: {
      kicker: "El camino hasta ahora",
      title: "Experiencia en <em>contexto.</em>",
      aside:
        "Roles en operaciones de datos, investigación institucional, modelado estadístico y análisis de encuestas.",
      date1: "Abr 2026 — Actualidad",
      date2: "Mar 2025 — Feb 2026",
      date3: "Mar 2024 — Dic 2024",
      date4: "Ago 2023 — Dic 2023",
      date5: "Ago 2023 — Dic 2023",
      role1: "Especialista en datos",
      role2: "Analista de datos, investigación institucional",
      role3: "Analista de datos de investigación",
      role4: "Analista de modelado estadístico",
      role5: "Analista de datos de encuestas",
      location1: "Heredia, Costa Rica",
      org2: "Observatorio de Datos Institucionales · Universidad de Costa Rica",
      org3: "Escuela de Estadística · Universidad de Costa Rica",
      org4: "Centro de Investigación en Matemática Pura y Aplicada (CIMPA)",
      org5: "Actualidades Survey 2023 · San José, Costa Rica",
      point1a:
        "Administré feeds regionales de datos que cubrían información corporativa, financieros, estructuras accionarias y jerarquías empresariales.",
      point1b:
        "Investigué problemas de calidad de datos y coordiné la resolución multifuncional con equipos internos y proveedores externos.",
      point1c:
        "Mejoré el monitoreo de la calidad de los datos y la eficiencia operativa mediante automatización de flujos de trabajo y mejoras de procesos.",
      point2a:
        "Desarrollé un índice bibliométrico que evaluó a más de 1,800 investigadores usando datos de Scopus de múltiples fuentes entre 2019 y 2024.",
      point2b:
        "Diseñé métodos de ponderación, normalización y tratamiento de valores atípicos para una comparación sólida.",
      point2c:
        "Construí paneles de Power BI para evaluación del desempeño institucional y planificación estratégica.",
      point3a:
        "Comparé indicadores de envejecimiento y fragilidad usando conjuntos de datos de encuestas nacionales e internacionales.",
      point3b:
        "Homogeneicé variables entre países y realicé validación, limpieza y modelado estadístico en R y Stata.",
      point4a:
        "Desarrollé modelos de series de tiempo GAMLSS con componentes spline y comparé su desempeño con benchmarks de ARIMA.",
      point4b:
        "Diseñé simulaciones de Monte Carlo para evaluar la robustez e incertidumbre del modelo.",
      point5a:
        "Contribuí al diseño de encuestas, la recolección de datos, el control de calidad y el análisis estadístico.",
      point5b:
        "Preparé informes analíticos que resumían hallazgos para investigación aplicada.",
    },
    expertise: {
      kicker: "Herramientas para llegar a la señal",
      title: "Un conjunto <em>práctico.</em>",
      aside: "Habilidades y herramientas reflejadas en la experiencia profesional y el currículum de Daniel.",
      skill1Title: "Programación",
      skill1Text: "R · Python · SQL · Stata",
      skill2Title: "Análisis y modelado",
      skill2Text: "Modelado predictivo · Análisis de series de tiempo · Redes neuronales · Validación de modelos · Simulación Monte Carlo",
      skill3Title: "Inteligencia de negocio",
      skill3Text: "Power BI · Tableau · Desarrollo de KPI · Métricas de rendimiento · Desarrollo de paneles",
      skill4Title: "Datos e informes",
      skill4Text: "Limpieza de datos · Transformación de datos · Microsoft Office",
      skill5Title: "Idiomas",
      langSpanish: "Español",
      langNative: "Nativo",
      langEnglish: "Inglés",
      langAdvanced: "Avanzado",
    },
    education: {
      kicker: "Fundamentos",
      title: "Construido sobre <em>estadística.</em>",
      date: "Mar 2020 — Dic 2025",
      degree: "Licenciatura en Estadística",
      school: "Universidad de Costa Rica",
      location: "San José, Costa Rica",
    },
    contact: {
      kicker: "Inicia una conversación",
      title: "Hagamos que los <em>datos tengan sentido.</em>",
      emailLabel: "Correo",
      resume: "Descargar currículum",
    },
    footer: {
      quote: "Siempre hay más debajo de la superficie.",
      backToTop: "Volver arriba",
      meta: "Ciencia de datos · Estadística · Costa Rica",
    },
  },
};

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-navigation");
const languageOptions = document.querySelectorAll(".language-option");

function closeNavigation() {
  if (!menuToggle || !navigation) {
    return;
  }

  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", document.documentElement.dataset.lang === "es" ? "Abrir navegación" : "Open navigation");
  navigation.classList.remove("is-open");
}

function setLanguage(lang) {
  const selectedLanguage = translations[lang] ? lang : "en";
  document.documentElement.dataset.lang = selectedLanguage;
  document.documentElement.lang = selectedLanguage;

  const textNodes = document.querySelectorAll("[data-i18n]");
  for (const element of textNodes) {
    const path = element.dataset.i18n.split(".");
    let value = translations[selectedLanguage];

    for (const key of path) {
      value = value?.[key];
    }

    if (value === undefined) {
      continue;
    }

    if (element.querySelector("em") || value.includes("<em>") || value.includes("<br>")) {
      element.innerHTML = value;
    } else {
      element.textContent = value;
    }
  }

  for (const languageOption of languageOptions) {
    languageOption.setAttribute(
      "aria-pressed",
      String(languageOption.dataset.language === selectedLanguage),
    );
  }

  if (menuToggle) {
    menuToggle.setAttribute("aria-label", selectedLanguage === "en" ? "Open navigation" : "Abrir navegación");
  }
}

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeNavigation();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      closeNavigation();
      menuToggle.focus();
    }
  });
}

for (const languageOption of languageOptions) {
  languageOption.addEventListener("click", () => {
    const selectedLanguage = languageOption.dataset.language;
    if (selectedLanguage) {
      setLanguage(selectedLanguage);
    }
  });
}

setLanguage("en");

const currentYear = document.querySelector("#current-year");
if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

const revealElements = document.querySelectorAll(
  ".intro-content, .highlight-card, .timeline-entry, .skill-group, .education-card, .contact-links",
);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12 },
  );

  for (const element of revealElements) {
    element.classList.add("reveal");
    revealObserver.observe(element);
  }
} else {
  for (const element of revealElements) {
    element.classList.add("is-visible");
  }
}
