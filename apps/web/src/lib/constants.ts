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

export const SKILLS = [
  // Languages
  { name: 'Python', category: 'languages' as const, level: 90 },
  { name: 'TypeScript', category: 'languages' as const, level: 85 },
  { name: 'JavaScript', category: 'languages' as const, level: 85 },
  { name: 'PHP', category: 'languages' as const, level: 75 },
  { name: 'Bash', category: 'languages' as const, level: 80 },
  { name: 'SQL', category: 'languages' as const, level: 75 },

  // Frameworks
  { name: 'React', category: 'frameworks' as const, level: 85 },
  { name: 'Next.js', category: 'frameworks' as const, level: 80 },
  { name: 'NestJS', category: 'frameworks' as const, level: 75 },
  { name: 'TailwindCSS', category: 'frameworks' as const, level: 90 },

  // Security
  { name: 'Kali Linux', category: 'security' as const, level: 85 },
  { name: 'Metasploit', category: 'security' as const, level: 80 },
  { name: 'Burp Suite', category: 'security' as const, level: 80 },
  { name: 'Wireshark', category: 'security' as const, level: 75 },
  { name: 'Nmap', category: 'security' as const, level: 85 },
  { name: 'OWASP', category: 'security' as const, level: 85 },

  // DevOps
  { name: 'Linux', category: 'devops' as const, level: 85 },
  { name: 'Docker', category: 'devops' as const, level: 75 },
  { name: 'Git', category: 'devops' as const, level: 90 },
  { name: 'PostgreSQL', category: 'devops' as const, level: 75 },
] as const;

export const EXPERIENCE = [
  // {
  //   title: 'Purple Team Analyst',
  //   company: 'Freelancer',
  //   period: 'Present',
  //   periodEs: 'Presente',
  //   description:
  //     'Conducting penetration tests, vulnerability assessments, and threat hunting. Building automated security tools and integrating offensive/defensive security practices.',
  //   descriptionEs:
  //     'Realizando pruebas de penetración, evaluaciones de vulnerabilidades y threat hunting. Construyendo herramientas de seguridad automatizadas e integrando prácticas ofensivas y defensivas.',
  //   tags: ['Python', 'Kali Linux', 'SIEM', 'Threat Intelligence'],
  // },
  {
    title: 'Full Stack Developer',
    company: 'SAFITE SAS',
    period: '2025 - 2026',
    periodEs: '2025 - 2026',
    description:
      'Responsible for the development of systems and applications, ensuring the functionality, scalability and optimal maintenance of technological solutions. Ensure code quality, database integration and compliance with the requirements established by customers and users.',
    descriptionEs:
      'Encargado de la creación y el mantenimiento del software, análisis y diseño de Sistemas de Información, desarrollo de código y lenguaje de Programación, determinación de la estructura (arquitectura) del software, definir especificación y tareas de investigación, diseño y desarrollo de programas, documentar los trabajos realizados, participar en reuniones técnicas y ajustándose a las especificaciones solicitadas, elaboración de los manuales de uso y la documentación técnica del mismo.',
    tags: ['PHP', 'React', 'MySQL', 'Microsoft SQL Server', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'Laravel', 'Figma', 'Git', 'GitHub', 'Jira', 'Scrum'],
  },
] as const;

export const PROJECTS = [
  {
    id: '1',
    slug: 'portfolio',
    title: 'Personal Portfolio',
    titleEs: 'Portfolio Personal',
    description:
      'This portfolio built with Next.js 15, NestJS, and PostgreSQL. Features dark/light mode, bilingual support, and contact form.',
    descriptionEs:
      'Este portfolio construido con Next.js 15, NestJS y PostgreSQL. Con modo oscuro/claro, soporte bilingüe y formulario de contacto.',
    imageUrl: null,
    repoUrl: 'https://github.com/DanielMR-dev/portfolio',
    liveUrl: null,
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Turbopack'],
    featured: true,
    order: 1,
  },
] as const;
