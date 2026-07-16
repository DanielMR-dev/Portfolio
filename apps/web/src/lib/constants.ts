export type LocalizedText = {
  es: string;
  en: string;
};

export type ProjectStatus =
  | 'active-development'
  | 'functional-prototype'
  | 'completed'
  | 'internal';

export type ProjectType =
  | 'cybersecurity'
  | 'web'
  | 'automation'
  | 'desktop';

export type Project = {
  id: string;
  slug: string;
  title: LocalizedText;
  shortDescription: LocalizedText;
  problem?: LocalizedText;
  solution?: LocalizedText;
  imageUrl?: string;
  imageAlt?: LocalizedText;
  repoUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  tags: string[];
  highlights?: LocalizedText[];
  status: ProjectStatus;
  type: ProjectType;
  featured: boolean;
  confidential?: boolean;
  order: number;
};

export type ExperienceItem = {
  id: string;
  role: LocalizedText;
  company: string;
  location: LocalizedText;
  modality: LocalizedText;
  startDate: string;
  endDate: string;
  summary: LocalizedText;
  contributions: {
    es: string[];
    en: string[];
  };
  technologies: string[];
};

export type SkillCategory = 'experience' | 'featured' | 'security' | 'learning';

export type Skill = {
  name: string;
  category: SkillCategory;
  context: LocalizedText;
};

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/DanielMR-dev',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/daniel-mira-restrepo-/',
    icon: 'linkedin',
  },
] as const;

export const SKILLS: Skill[] = [
  // Professional Experience
  { name: 'React', category: 'experience', context: { es: 'Desarrollo de interfaces web modernas.', en: 'Modern web interface development.' } },
  { name: 'TypeScript', category: 'experience', context: { es: 'Lenguaje principal para aplicaciones y herramientas.', en: 'Main language for applications and tools.' } },
  { name: 'JavaScript', category: 'experience', context: { es: 'Desarrollo web fundamental.', en: 'Core web development.' } },
  { name: 'Tailwind CSS', category: 'experience', context: { es: 'Sistema de estilos para componentes UI.', en: 'Styling system for UI components.' } },
  { name: 'React Router', category: 'experience', context: { es: 'Enrutamiento en aplicaciones SPA.', en: 'Routing in SPA applications.' } },
  { name: 'Zustand', category: 'experience', context: { es: 'Gestión de estado global ligero.', en: 'Lightweight global state management.' } },
  { name: 'Zod', category: 'experience', context: { es: 'Validación de esquemas y datos.', en: 'Schema and data validation.' } },
  { name: 'Node.js', category: 'experience', context: { es: 'Desarrollo de herramientas internas y backend.', en: 'Internal tools and backend development.' } },
  { name: 'Microsoft SQL Server', category: 'experience', context: { es: 'Bases de datos relacionales en entornos empresariales.', en: 'Relational databases in enterprise environments.' } },
  { name: 'Git', category: 'experience', context: { es: 'Control de versiones.', en: 'Version control.' } },
  { name: 'Figma', category: 'experience', context: { es: 'Creación de wireframes y mockups UI.', en: 'UI mockups and wireframing.' } },

  // Featured Projects
  { name: 'Rust', category: 'featured', context: { es: 'Utilizado en NetSentinel para construir el motor de red y la arquitectura.', en: 'Used in NetSentinel to build the network engine and architecture.' } },
  { name: 'Tokio', category: 'featured', context: { es: 'Runtime asíncrono para concurrencia en Rust.', en: 'Asynchronous runtime for concurrency in Rust.' } },
  { name: 'Iced', category: 'featured', context: { es: 'Desarrollo de interfaz gráfica nativa.', en: 'Native GUI development.' } },
  { name: 'SQLite', category: 'featured', context: { es: 'Persistencia local estructurada.', en: 'Structured local persistence.' } },
  { name: 'Networking', category: 'featured', context: { es: 'Análisis de protocolos y descubrimiento de hosts.', en: 'Protocol analysis and host discovery.' } },
  { name: 'gRPC', category: 'featured', context: { es: 'Comunicación estructurada entre servicios.', en: 'Structured communication between services.' } },
  { name: 'TLS', category: 'featured', context: { es: 'Análisis y conexiones seguras.', en: 'Secure connections and analysis.' } },
  { name: 'Next.js', category: 'featured', context: { es: 'Framework principal para aplicaciones web modernas.', en: 'Main framework for modern web applications.' } },
  { name: 'Turborepo', category: 'featured', context: { es: 'Gestión de monorepos y orquestación de builds.', en: 'Monorepo management and build orchestration.' } },

  // Security & Networks
  { name: 'Nmap', category: 'security', context: { es: 'Auditoría de redes y escaneo de puertos.', en: 'Network auditing and port scanning.' } },
  { name: 'Wireshark', category: 'security', context: { es: 'Análisis de tráfico de red a bajo nivel.', en: 'Low-level network traffic analysis.' } },
  { name: 'Burp Suite', category: 'security', context: { es: 'Evaluación de seguridad en aplicaciones web.', en: 'Security evaluation in web applications.' } },
  { name: 'OWASP', category: 'security', context: { es: 'Metodologías y mitigación de riesgos web.', en: 'Methodologies and web risk mitigation.' } },
  { name: 'Linux', category: 'security', context: { es: 'Administración y entornos de pentesting.', en: 'Administration and pentesting environments.' } },
  { name: 'Cisco Networking', category: 'security', context: { es: 'Diseño y comprensión de infraestructuras de red.', en: 'Network infrastructure design and understanding.' } },
  { name: 'Ethical Hacking', category: 'security', context: { es: 'Prácticas ofensivas para mejorar defensas.', en: 'Offensive practices to improve defenses.' } },
  { name: 'Network Security', category: 'security', context: { es: 'Conceptos y aplicación de seguridad perimetral e interna.', en: 'Concepts and application of perimeter and internal security.' } },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'safite',
    role: {
      es: 'Desarrollador Full Stack',
      en: 'Full Stack Developer',
    },
    company: 'SAFITE S.A.S.',
    location: {
      es: 'Pereira, Colombia',
      en: 'Pereira, Colombia',
    },
    modality: {
      es: 'Remoto / Híbrido',
      en: 'Remote / Hybrid',
    },
    startDate: '2025-04',
    endDate: '2026-01',
    summary: {
      es: 'Desarrollo y mantenimiento de interfaces web, integración de APIs y automatización de procesos técnicos mediante React, TypeScript, Node.js y Microsoft SQL Server.',
      en: 'Development and maintenance of web interfaces, API integration, and automation of technical processes using React, TypeScript, Node.js, and Microsoft SQL Server.',
    },
    contributions: {
      es: [
        'Desarrollé vistas y componentes reutilizables con React, TypeScript, Tailwind CSS, React Router, Zustand y Zod.',
        'Integré APIs y construí flujos consistentes para estados de carga, validación, errores y normalización de datos.',
        'Participé en el refinamiento de interfaces y experiencias de usuario, desde wireframes en Figma hasta componentes productivos.',
        'Diseñé una herramienta en TypeScript y Node.js para ejecutar Stored Procedures en paralelo sobre múltiples bases de datos e instancias de SQL Server.',
        'Elaboré documentación técnica y participé en procesos de desarrollo organizados mediante Scrum.',
      ],
      en: [
        'Developed reusable views and components with React, TypeScript, Tailwind CSS, React Router, Zustand, and Zod.',
        'Integrated APIs and built consistent flows for loading states, validation, error handling, and data normalization.',
        'Participated in UI/UX refinement, turning Figma wireframes into production-ready components.',
        'Designed a TypeScript and Node.js tool to execute Stored Procedures in parallel across multiple databases and SQL Server instances.',
        'Created technical documentation and participated in agile development processes using Scrum.',
      ],
    },
    technologies: ['React', 'TypeScript', 'Node.js', 'Microsoft SQL Server', 'Tailwind CSS', 'Zustand', 'Zod', 'Figma'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'netsentinel',
    slug: 'netsentinel',
    title: {
      es: 'NetSentinel',
      en: 'NetSentinel',
    },
    shortDescription: {
      es: 'Aplicación nativa de escritorio para descubrir dispositivos, auditar servicios y analizar la seguridad de una red local mediante un motor concurrente desarrollado en Rust.',
      en: 'A native desktop application for discovering devices, auditing services and analyzing local network security through a concurrent engine built with Rust.',
    },
    problem: {
      es: 'La necesidad de auditar infraestructuras de red local de manera rápida y sin dependencias pesadas.',
      en: 'The need to audit local network infrastructures quickly and without heavy dependencies.',
    },
    solution: {
      es: 'Un motor de escaneo concurrente con interfaz nativa para simplificar el reconocimiento de red y el análisis de servicios.',
      en: 'A concurrent scanning engine with a native interface to simplify network reconnaissance and service analysis.',
    },
    imageUrl: undefined,
    repoUrl: 'https://github.com/DanielMR-dev/NetSentinel',
    tags: ['Rust', 'Tokio', 'Iced', 'SQLite', 'Networking', 'TLS', 'gRPC'],
    highlights: [
      { es: 'Descubrimiento de hosts', en: 'Host discovery' },
      { es: 'Escaneo concurrente', en: 'Concurrent scanning' },
      { es: 'Análisis de puertos', en: 'Port analysis' },
      { es: 'Detección de servicios', en: 'Service detection' },
      { es: 'Banner grabbing', en: 'Banner grabbing' },
      { es: 'Análisis TLS/SSL', en: 'TLS/SSL analysis' },
      { es: 'Persistencia local', en: 'Local persistence' },
      { es: 'Arquitectura modular', en: 'Modular architecture' },
    ],
    status: 'active-development',
    type: 'cybersecurity',
    featured: true,
    order: 1,
  },
  {
    id: 'sp-executor',
    slug: 'sp-executor',
    title: {
      es: 'Ejecutor multiinstancia de Stored Procedures',
      en: 'Multi-instance Stored Procedures Executor',
    },
    shortDescription: {
      es: 'Herramienta desarrollada con TypeScript y Node.js para ejecutar Stored Procedures en paralelo sobre múltiples bases de datos e instancias de Microsoft SQL Server, con manejo de errores, logs, configuración por ambientes y reportes de ejecución.',
      en: 'A TypeScript and Node.js tool designed to execute Stored Procedures in parallel across multiple Microsoft SQL Server databases and instances, including error handling, logs, environment-based configuration and execution reports.',
    },
    tags: ['TypeScript', 'Node.js', 'SQL Server', 'Command Pattern', 'Concurrency'],
    status: 'completed',
    type: 'automation',
    featured: false,
    confidential: true,
    order: 2,
  },
  {
    id: 'portfolio',
    slug: 'portfolio',
    title: {
      es: 'Portfolio Personal',
      en: 'Personal Portfolio',
    },
    shortDescription: {
      es: 'Portafolio profesional bilingüe desarrollado con Next.js, React y TypeScript, con modo claro y oscuro, diseño responsive, formulario validado y arquitectura monorepo mediante Turborepo y pnpm.',
      en: 'A bilingual professional portfolio built with Next.js, React and TypeScript, featuring dark and light themes, responsive design, validated contact forms and a monorepo architecture powered by Turborepo and pnpm.',
    },
    repoUrl: 'https://github.com/DanielMR-dev/Portfolio',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'next-intl', 'Turborepo'],
    status: 'completed',
    type: 'web',
    featured: false,
    order: 3,
  },
];
