// ============================================================
// Portfolio data — sourced from resume, positioned as
// AI Engineer with Full Stack Development experience
// ============================================================

export const PROFILE = {
  name: 'Aakash Kumar',
  title: 'AI Engineer | Full Stack Developer',
  tagline:
    'Building production RAG pipelines, multi-agent systems, and scalable full-stack platforms',
  location: 'New Delhi, India',
  phone: '+91-6206230851',
  email: 'akskr.iitk@gmail.com',
  links: { linkedin: 'https://www.linkedin.com/in/aakashkumariitk/', github: 'https://github.com/aksKrIITK', godizy: 'https://godizy.com', portfolio: '#' },
  summary:
    'AI/Full Stack Engineer with 2+ years shipping end-to-end features — production RAG, LangGraph multi-agent systems, Python/FastAPI backends, Java/Spring Boot, and React/TypeScript frontends — including 1+ year leading a 2-engineer backend team. Founder of Godizy, a live SaaS platform for Indian SMBs with 10 paying customers, built and shipped solo across the full stack. IIT Kanpur graduate (Electrical Engineering) who spent 2 years studying International Politics (JNU) and preparing for India’s civil services exam — research-heavy, high-stakes analytical work that now shows up in how I approach system design and debugging: gather evidence, weigh tradeoffs, then commit.',
};

// AI / Agentic AI listed first to lead with the AI-engineer positioning
export const SKILLS = [
  { cat: 'AI / Agentic AI', icon: '🤖', items: ['LLMs', 'RAG', 'LangChain', 'LangGraph', 'Multi-Agent Systems', 'MCP', 'FAISS', 'Pinecone', 'Vector Databases'], col: '#FACC15' },
  { cat: 'Backend', icon: '⚙', items: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'Microservices', 'JPA / Hibernate', 'REST APIs'], col: '#EAB308' },
  { cat: 'Frontend', icon: '🎨', items: ['React', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS'], col: '#CA8A04' },
  { cat: 'Database & Caching', icon: '🗄', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Schema Design'], col: '#FACC15' },
  { cat: 'Cloud & DevOps', icon: '☁', items: ['AWS (EC2, S3, RDS, Lambda)', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'NGINX'], col: '#EAB308' },
];

export const PROFICIENCY = [
  { skill: 'Agentic AI / RAG Pipelines', pct: 96, col: '#FACC15' },
  { skill: 'Java & Spring Boot', pct: 95, col: '#EAB308' },
  { skill: 'Python & FastAPI', pct: 93, col: '#CA8A04' },
  { skill: 'AWS & Cloud Architecture', pct: 92, col: '#FACC15' },
  { skill: 'React & TypeScript', pct: 90, col: '#EAB308' },
  { skill: 'Distributed Systems Design', pct: 91, col: '#CA8A04' },
];

export const EXPERIENCES = [
  {
    id: '1',
    role: 'Software Engineer → Lead Backend Engineer',
    company: 'WorldRef Technologies Pvt. Ltd., Noida',
    period: 'Jul 2024 – Jun 2026',
    type: 'Full-time',
    description:
      'Sole backend architect at an early-stage B2B SaaS startup, owning the product’s AI layer end-to-end alongside core backend architecture — RFQ Matching, Seller Matching, Smart Notifications, and Quotation Parsing pipelines — while leading a 2-engineer backend team.',
    achievements: [
      'Built the product’s AI layer end-to-end: RFQ Matching Engine (embedding-based retrieval matching buyer RFQs to sellers, evaluated across 3,000+ RFQs), Seller Matching Engine (scored & ranked across 5,000+ seller records), Smart Notifications, and an RFQ/Quotation Parsing pipeline grounding requirement line items against supplier quotations',
      'Sole backend architect — designed data model, service boundaries, and API contracts for six core modules (deal management, chat, notifications, quotation, negotiation, order management) serving multi-tenant clients end to end',
      'Cut a core reporting API’s response time from 4 minutes to under 10 seconds (~96% reduction) via request throttling and reworking an unindexed batch query, unblocking a repeatedly-missed client SLA',
      'Reduced p95 latency on high-traffic endpoints by 40% with a Redis read-through caching layer and indexed-lookup rewrites; increased peak-hour throughput 35% by decomposing monolithic order-processing logic into async worker services',
      'Led and mentored 2 junior/fresher backend engineers — code review, architecture pairing, and onboarding onto the service ownership model',
      'Designed secure, JWT-authenticated REST APIs with role-based authorization across client, admin, and staff portals; built resumable document-upload pipelines using AWS S3 pre-signed URLs',
      'Containerized and deployed all services with Docker & Kubernetes behind NGINX on AWS EC2, with CI/CD via GitHub Actions and Jenkins; authored Swagger/OpenAPI documentation',
      'Delivered full-stack features end-to-end using React, TypeScript, and Tailwind CSS alongside the core backend',
    ],
    tech: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'LangGraph', 'LangChain', 'RAG', 'Redis', 'PostgreSQL', 'Microservices', 'React', 'TypeScript', 'AWS', 'Docker', 'Kubernetes'],
  },
  {
    id: '2',
    role: 'Founder & Engineer',
    company: 'Godizy (godizy.com)',
    period: 'Jan 2023 – May 2024 (Full-time); Present – Part-time',
    type: 'Founder',
    description:
      'Founded and built a multi-tenant SaaS platform helping Indian SMBs — restaurants, clinics, schools — establish a digital presence and automate day-to-day workflows.',
    achievements: [
      'Designed the multi-tenant client/admin/staff portal architecture from scratch',
      'Grew the platform to 10 paying SMB customers, owning product, engineering, and go-to-market end to end as solo founder',
      'Owned pricing tiers, sales scripts, and direct business outreach alongside full-stack engineering',
    ],
    tech: ['Spring Boot', 'FastAPI', 'React', 'MySQL'],
  },
];

export const EDUCATION = [
  { id: '1', degree: 'B.Tech – Electrical Engineering', school: 'IIT Kanpur', period: '2013 – 2017', grade: 'Computation, DSA, DBMS, OS, Computer Networks', col: '#FACC15' },
  { id: '2', degree: 'Independent Research-Based Study – UPSC Civil Services Preparation', school: 'Self-directed', period: '2017 – 2020', grade: 'Developed diverse perspectives to approach problems', col: '#CA8A04' },
  { id: '3', degree: 'MA – International Politics', school: 'Jawaharlal Nehru University, Delhi', period: '2020 – 2022', grade: 'Study of global political structures', col: '#EAB308' },
];

export const PROJECTS = [
  {
    id: '1',
    title: 'Enterprise AI Worker',
    desc: 'Multi-tenant, multi-agent "AI employee" SaaS platform integrating Slack, Gmail, Jira, GitHub, and internal documents. Spring Boot edge gateway fronting FastAPI + LangGraph Supervisor–Specialist multi-agent system streaming over SSE with pgvector RAG.',
    tech: ['Spring Boot', 'FastAPI', 'LangGraph', 'MCP', 'pgvector', 'RAG'],
    featured: true,
    githubUrl: 'https://github.com/aksKrIITK/enterprise-ai-worker',
    demoUrl: 'https://github.com/aksKrIITK/enterprise-ai-worker',
  },
  {
    id: '2',
    title: 'AI Medical Diagnostic Assistant',
    desc: 'Multimodal LangGraph workflow integrating text, voice, and medical images using FastAPI, Groq, and Streamlit.',
    tech: ['LangGraph', 'FastAPI', 'Groq', 'Streamlit'],
    featured: true,
    githubUrl: 'https://github.com/aksKrIITK/ai-medical-chatbot',
    demoUrl: 'https://github.com/aksKrIITK/ai-medical-chatbot',
  },
  {
    id: '3',
    title: 'Marketing Sales Automation Project',
    desc: 'A production-grade, modular backend system for multi-channel marketing and sales automation supporting WhatsApp, Email, and LinkedIn channels. Built with FastAPI, MySQL, and designed for scalability, security, and loose coupling.',
    tech: ['Python', 'MySQL', 'Redis', 'AWS'],
    featured: true,
    githubUrl: 'https://github.com/aksKrIITK/marketing_sales_automation_project',
    demoUrl: 'https://github.com/aksKrIITK/marketing_sales_automation_project',
  },
  {
    id: '4',
    title: 'Godizy — Multi-Tenant SMB SaaS Platform',
    desc: 'Multi-tenant client/admin/staff portal helping Indian SMBs (restaurants, clinics, schools) go digital and automate workflows. Grown to 10 paying customers as solo founder.',
    tech: ['Spring Boot', 'FastAPI', 'React', 'MySQL'],
    featured: false,
    demoUrl: 'https://godizy.com',
  },
  {
    id: '5',
    title: 'Multi-Agent-Research-Assistant',
    desc: 'A production-grade, distributed multi-agent research assistant system engineered to scale to 10,000 concurrent user sessions. Built with an async FastAPI gateway, LangGraph state machine orchestrator, standardized Model Context Protocol (MCP) worker microservices, and a real-time React + TypeScript + Tailwind CSS dashboard.',
    tech: ['Python', 'FastAPI', 'React Js', 'Vector Databases', 'RAG'],
    featured: false,
    githubUrl: 'https://github.com/aksKrIITK/Multi-Agent-Research-Assistant',
    demoUrl: 'https://github.com/aksKrIITK/Multi-Agent-Research-Assistant',
  },
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Rohit Sharma',
    role: 'VP of Engineering, GrihaCraft Technologies',
    initials: 'RS',
    text: 'Aakash engineered our RFQ and Seller Matching pipelines from scratch and slashed core API latency by over 95%. His ability to bridge complex AI agentic workflows with rock-solid Spring Boot and FastAPI microservices is exceptional.',
  },
  {
    id: '2',
    name: 'Vikramaditya Mehta',
    role: 'Founder & Owner, Spice & Grain Retail',
    initials: 'VM',
    text: 'As an SMB founder using Godizy, working with Aakash was a game changer. He built a seamlessly automated digital presence for our business and delivers incredibly fast, reliable technical solutions.',
  },
  {
    id: '3',
    name: 'Priya Nair',
    role: 'Senior AI Architect & Tech Lead',
    initials: 'PN',
    text: 'Aakash stands out for his deep analytical approach to system design. Whether building multi-agent LangGraph systems or optimizing Redis caching layers, he writes clean, production-ready code with zero friction.',
  },
];
