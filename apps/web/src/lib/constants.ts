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
  {
    title: 'Purple Team Analyst',
    company: 'Security Operations',
    period: 'Present',
    periodEs: 'Presente',
    description:
      'Conducting penetration tests, vulnerability assessments, and threat hunting. Building automated security tools and integrating offensive/defensive security practices.',
    descriptionEs:
      'Realizando pruebas de penetración, evaluaciones de vulnerabilidades y threat hunting. Construyendo herramientas de seguridad automatizadas e integrando prácticas ofensivas y defensivas.',
    tags: ['Python', 'Kali Linux', 'SIEM', 'Threat Intelligence'],
  },
  {
    title: 'Full Stack Developer',
    company: 'SAFITE SAS',
    period: '2025 - 2026',
    periodEs: '2025 - 2026',
    description:
      'Building web applications for clients using React, Next.js, and NestJS. Implementing security best practices in all projects.',
    descriptionEs:
      'Desarrollando aplicaciones web para clientes usando React, Next.js y NestJS. Implementando buenas prácticas de seguridad en todos los proyectos.',
    tags: ['React', 'Next.js', 'NestJS', 'PostgreSQL'],
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
    tags: ['Next.js', 'TypeScript', 'TailwindCSS'],
    featured: true,
    order: 1,
  },
] as const;
