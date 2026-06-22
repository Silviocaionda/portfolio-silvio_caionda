document.addEventListener("DOMContentLoaded", () => {
  const skills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript",
    "SQL",
    "PHP",
    "React JS",
    "Laravel",
    "Docker",
    "Uso de IA para desenvolvimento",
    "Excel",
    "Python",
    "Pandas",
    "Numpy",
    "Spiceworks",
    "KoolReport",
    "GLPI",
    "Dokuwiki",
    "Fundamentos de Estatística para Análise de Dados",
    "Metabase",
    "Power BI",
    "Gestão de Projetos",
    "Marketing e Analytics",
    "Negociação"
  ];

  const services = [
    {
      icon: "fa-solid fa-code",
      title: "Desenvolvimento Web",
      text: "Sistemas empresariais e aplicações web com foco em clareza, desempenho e manutenção."
    },
    {
      icon: "fa-solid fa-chart-column",
      title: "Business Intelligence",
      text: "Dashboards Power BI, Metabase e KoolReport para apoiar decisões com dados confiáveis."
    },
    {
      icon: "fa-solid fa-headset",
      title: "Service Desk e Gestão de Incidentes",
      text: "Implementação e melhoria de processos de suporte com Spiceworks e GLPI."
    },
    {
      icon: "fa-solid fa-boxes-stacked",
      title: "Gestão de Ativos de TI",
      text: "Inventário, controlo e organização de ativos tecnológicos para equipas de TI."
    }
  ];

  const experience = [
    {
      period: "2015",
      company: "LS Youtube",
      role: "Programador Web Junior",
      responsibilities: [
        "Desenvolvimento do website da LS Youtube."
      ]
    },
    {
      period: "2016 - 2026",
      company: "Clínica Sagrada Esperança",
      role: "Programador Web e Analista de Dados",
      responsibilities: [
        "Desenvolvimento de sistemas internos.",
        "Dashboards e indicadores.",
        "Automação de processos.",
        "Gestão de incidentes e suporte técnico."
      ]
    },
    {
      company: "Epia digital",
      role: "Project Management / Product Owner",
      responsibilities: [
        "Planeamento do projeto, gestão da equipa e controlo de prazos e custos.",
        "Definição da visão do produto, gestão do backlog e priorização de funcionalidades.",
        "Validação do produto e representação das necessidades reais dos utilizadores."
      ]
    },
    {
      company: "Onjango Edu",
      role: "Coordenador Pedagógico",
      responsibilities: [
        "Planeamento pedagógico e acompanhamento dos formadores.",
        "Gestão da aprendizagem dos alunos e garantia da qualidade do ensino.",
        "Apoio pedagógico e atualização de conteúdos."
      ]
    }
  ];

  const projects = [
    {
      title: "Portfólio Profissional de Silvio Caionda",
      description: "Website institucional de apresentação profissional, com destaque para experiência, competências e projetos realizados.",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "web",
      href: "#topo"
    },
    {
      title: "Sistema de Gestão de Incidentes de Informática",
      description: "Plataforma para registo, acompanhamento e controlo estruturado de incidentes de suporte técnico.",
      tech: ["Spiceworks", "SQL Server", "SQLite"],
      category: "service-desk"
    },
    {
      title: "Portal Técnico de Documentação e Suporte de Informática",
      description: "Plataforma centralizada para documentação técnica, procedimentos operacionais e apoio à resolução de incidentes.",
      tech: ["Spiceworks", "SQL Server", "SQLite"],
      category: "service-desk"
    },
    {
      title: "Portal Corporativo de Notícias e Eventos Internos",
      description: "Canal interno para comunicação institucional, divulgação de informações e organização de eventos.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "SQL Server"],
      category: "web"
    },
    {
      title: "Plataforma Central de Base de Conhecimento",
      description: "Repositório estruturado de documentação técnica e operacional para consulta e apoio às equipas.",
      tech: ["Dokuwiki", "PHP", "SQL Server"],
      category: "service-desk"
    },
    {
      title: "Sistema de Registo de Sugestões e Reclamações",
      description: "Solução para recolha, organização e acompanhamento de feedback dos utilizadores.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "SQL Server"],
      category: "service-desk"
    },
    {
      title: "Dashboard Analítico de Lançamentos por Hora",
      description: "Painel analítico para acompanhamento de lançamentos operacionais por intervalos de tempo.",
      tech: ["SQL Server", "HTML", "CSS", "PHP", "KoolReport"],
      category: "business-intelligence"
    },
    {
      title: "Dashboard de Movimentos de Stock Pendentes de Integração",
      description: "Painel de monitorização para controlo de movimentos de stock ainda por integrar.",
      tech: ["SQL Server", "HTML", "CSS", "PHP", "KoolReport"],
      category: "business-intelligence"
    },
    {
      title: "Dashboard Executivo de Indicadores de Performance em Gestão de Saúde",
      description: "Painel executivo com indicadores-chave de desempenho para apoio à gestão em saúde.",
      tech: ["SQL Server", "Metabase"],
      category: "saude"
    },
    {
      title: "Conjunto de Dashboards Analíticos em Power BI",
      description: "Coleção de relatórios analíticos orientados para monitorização e suporte à decisão.",
      tech: ["Excel", "SQL Server", "Power BI"],
      category: "business-intelligence"
    },
    {
      title: "Sistema de Registo e Acompanhamento de Síndromes Coronárias Agudas",
      description: "Plataforma clínica para registo, seguimento e apoio ao acompanhamento de pacientes com SCA.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "SQL Server"],
      category: "saude"
    },
    {
      title: "Sistema de Notificação e Monitorização Epidemiológica",
      description: "Solução para recolha, registo e monitorização de ocorrências epidemiológicas.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "SQL Server"],
      category: "saude"
    },
    {
      title: "Sistema de Certificação de Resultados Laboratoriais COVID-19",
      description: "Sistema para emissão, validação e consulta de resultados laboratoriais relacionados com COVID-19.",
      tech: ["HTML", "CSS", "PHP", "SQL Server"],
      category: "saude"
    },
    {
      title: "HemoSys - Sistema de Gestão de Doação de Sangue",
      description: "Solução para gestão de doadores, reservas e processos clínicos associados à hemoterapia.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "SQL Server"],
      category: "saude"
    },
    {
      title: "Plataforma de Gestão de Ativos de Tecnologia da Informação",
      description: "Sistema para inventário, controlo e administração de equipamentos tecnológicos.",
      tech: ["Docker", "GLPI"],
      category: "service-desk"
    },
    {
      title: "Gio - Soluções de Software para ERP e POS",
      description: "Marca de software orientada ao desenvolvimento de soluções empresariais para gestão e vendas.",
      tech: ["ERP", "POS"],
      category: "web"
    },
    {
      title: "Ta Kuyar - Projeto de Comercialização de Mel",
      description: "Iniciativa dedicada à produção, promoção e comercialização de mel.",
      tech: ["Comércio", "Marketing"],
      category: "web"
    },
    {
      title: "Onjango Edu - Orientação Profissional e Desenvolvimento de Carreira",
      description: "Plataforma de apoio à orientação profissional, aprendizagem e evolução de carreira.",
      tech: ["Educação", "Carreira"],
      category: "web"
    }
  ];

  const renderTags = (target, items) => {
    target.innerHTML = items.map((item) => `<span class="tag">${item}</span>`).join("");
  };

  const renderServices = (target, items) => {
    target.innerHTML = items.map((item) => `
      <article class="card">
        <i class="${item.icon}" aria-hidden="true"></i>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `).join("");
  };

  const renderExperience = (target, items) => {
    target.innerHTML = items.map((item) => `
      <article class="timeline-item">
        <div class="timeline-item__top">
          <h3>${item.company}</h3>
          ${item.period ? `<span class="timeline-item__year">${item.period}</span>` : ""}
        </div>
        <p class="timeline-item__role">${item.role}</p>
        <ul>
          ${item.responsibilities.map((point) => `<li>${point}</li>`).join("")}
        </ul>
      </article>
    `).join("");
  };

  const renderProjects = (target, items) => {
    target.innerHTML = items.map((item) => {
      const linkLabel = item.href ? "Saiba mais" : "Contacto";
      const linkHref = item.href || "#contacto";

      return `
        <article class="card card--project" data-category="${item.category}">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="card__meta" aria-label="Tecnologias usadas">
            ${item.tech.map((tech) => `<span class="chip">${tech}</span>`).join("")}
          </div>
          <div class="card__actions">
            <a class="card__link" href="${linkHref}">
              <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
              <span>${linkLabel}</span>
            </a>
          </div>
        </article>
      `;
    }).join("");
  };

  const setupScrollReveal = () => {
    const candidates = document.querySelectorAll(
      ".hero, .section-block, .hero-panel, .prose-card, .card-grid > *, .timeline-item, .card"
    );

    if (!candidates.length) {
      return;
    }

    const revealItems = Array.from(candidates);

    revealItems.forEach((item, index) => {
      item.classList.add("reveal");
      item.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 90}ms`);
    });

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, {
      root: null,
      threshold: 0.15,
      rootMargin: "0px 0px -8% 0px"
    });

    revealItems.forEach((item) => observer.observe(item));
  };

  const skillsGrid = document.getElementById("skills-grid");
  const servicesGrid = document.getElementById("services-grid");
  const experienceList = document.getElementById("experience-list");
  const projectsGrid = document.getElementById("projects-grid");

  renderTags(skillsGrid, skills);
  renderServices(servicesGrid, services);
  renderExperience(experienceList, experience);
  renderProjects(projectsGrid, projects);

  const projectFilters = document.querySelector("[data-project-filters]");

  if (projectFilters && projectsGrid) {
    const filterButtons = Array.from(projectFilters.querySelectorAll("[data-filter]"));

    const applyProjectFilter = (filter) => {
      const cards = Array.from(projectsGrid.querySelectorAll("[data-category]"));

      cards.forEach((card) => {
        const isVisible = filter === "all" || card.dataset.category === filter;
        card.hidden = !isVisible;
      });

      filterButtons.forEach((button) => {
        const isActive = button.dataset.filter === filter;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });
    };

    projectFilters.addEventListener("click", (event) => {
      const button = event.target.closest("[data-filter]");

      if (!button || !projectFilters.contains(button)) {
        return;
      }

      applyProjectFilter(button.dataset.filter || "all");
    });

    applyProjectFilter("all");
  }

  setupScrollReveal();

  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-site-nav]");

  if (toggle && nav) {
    const closeNav = () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      const icon = toggle.querySelector("i");
      if (icon) {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }
    };

    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      const icon = toggle.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars", !isOpen);
        icon.classList.toggle("fa-xmark", isOpen);
      }
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("click", (event) => {
      if (!nav.contains(event.target) && !toggle.contains(event.target)) {
        closeNav();
      }
    });
  }
});
