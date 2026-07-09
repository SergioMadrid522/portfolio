import {
  ai,
  backend,
  databases,
  deployment,
  frontend,
  GLOBAL,
  languages,
  testing,
  workflow,
} from "./icons.data";
import type { NavbarOptions, SocialMedia } from "./types";

const { githubIconGlobal, linkedIn } = GLOBAL;
const { typescriptIcon, javascriptIcon, pythonIcon, javaIcon } = languages;
const { htmlIcon, cssIcon, sassIcon, tailwindIcon, reactIcon, nextIcon } =
  frontend;
const { nodeIcon, expressIcon, springBootIcon, rabbitmqIcon } = backend;
const { mysqlIcon, mariadbIcon, postgresqlIcon, prismaIcon } = databases;
const { dockerIcon, cloudinaryIcon } = deployment;
const { playwrightIcon, zodIcon, postmanIcon } = testing;
const { gitIcon, githubIcon, jupyterIcon } = workflow;
const { geminiIcon } = ai;
export const navbarOptions: NavbarOptions[] = [
  { label: "About me", link: "/#about-me" },
  { label: "Experience", link: "/#experience" },
  { label: "Tech stack", link: "/#tech-stack" },
  { label: "Projects", link: "/#projects" },
  { label: "Contact me", link: "/#contact-me" },
];

export const socialMediaLinks: SocialMedia[] = [
  {
    label: "Github",
    icon: githubIconGlobal(),
    link: "https://github.com/SergioMadrid522",
  },
  {
    label: "LinkedIn",
    icon: linkedIn(),
    link: "https://www.linkedin.com/in/sergio-acuña-59735336b",
  },
];

export const skillCards = [
  { title: "Years of experience", label: "1" },
  { title: "What am I currently learning?", label: "Github Actions" },
];

export const techStack = [
  {
    title: "Languages",
    hoverColor: "#FACC15",
    stack: [
      { label: "JavaScript", icon: javascriptIcon() },
      { label: "TypeScript", icon: typescriptIcon() },
      { label: "Python", icon: pythonIcon() },
      { label: "Java", icon: javaIcon() },
    ],
  },
  {
    title: "Frontend",
    hoverColor: "#60A5FA",
    stack: [
      { label: "HTML", icon: htmlIcon() },
      { label: "CSS", icon: cssIcon() },
      { label: "Sass/SCSS", icon: sassIcon() },
      { label: "Tailwind CSS", icon: tailwindIcon() },
      { label: "React.js", icon: reactIcon() },
      { label: "Next.js", icon: nextIcon() },
    ],
  },
  {
    title: "Backend",
    hoverColor: "#60A5FA",
    stack: [
      { label: "Node.js", icon: nodeIcon() },
      { label: "Express.js", icon: expressIcon() },
      { label: "Spring Boot", icon: springBootIcon() },
      { label: "RabbitMQ", icon: rabbitmqIcon() },
    ],
  },
  {
    title: "Databases & ORMs",
    hoverColor: "#C49A6C",
    stack: [
      { label: "MySQL", icon: mysqlIcon() },
      { label: "MariaDB", icon: mariadbIcon() },
      { label: "PostgreSQL", icon: postgresqlIcon() },
      { label: "Prisma", icon: prismaIcon() },
    ],
  },
  {
    title: "Cloud & Deployment",
    hoverColor: "#ff6c37",
    stack: [
      { label: "Docker", icon: dockerIcon() },
      { label: "Cloudinary", icon: cloudinaryIcon() },
    ],
  },
  {
    title: "QA & Testing",
    hoverColor: "#d65348",
    stack: [
      { label: "Playwright", icon: playwrightIcon() },
      { label: "Zod", icon: zodIcon() },
      { label: "Postman", icon: postmanIcon() },
    ],
  },
  {
    title: "Workflow & Tools",
    hoverColor: "#c084fc",
    stack: [
      { label: "Git", icon: gitIcon() },
      { label: "GitHub", icon: githubIcon() },
      { label: "Jupyter Notebook", icon: jupyterIcon() },
    ],
  },
];

export const projects = [
  {
    id: 1,
    tags: ["Next.js App Router", "TypeScript", "Prisma + PostgreSQL"],
    title: "Bug Tracker MVP",
    description:
      "Full-stack platform for reporting, assigning, and tracking software issues with role-based access control (Admin, Tester, Dev). Features real-time metrics dashboards (MTTR, reopen rate, unstable modules), AI-powered severity classification via Gemini, and Excel/CSV data export. Built with Next.js, TypeScript, Prisma, and PostgreSQL, deployed on Vercel + Neon.",
    fullDescription:
      "A platform designed for development teams to report, assign, and track software issues while maintaining a full change history and quality metrics. Role-based access control: implemented three permission levels (Admin, Tester, Dev), each with distinct access scopes over users, projects, and tickets, protected at both the route and component level using JWT. Real-time metrics dashboards: calculated key indicators such as MTTR (mean time to resolution, measured from ticket creation to first closure), reopen rate, error trends by month/priority, and detection of unstable modules (Frontend, Backend, API, Mobile, Database), all visualized with Recharts. Automated AI classification: integrated the Google Gemini API to analyze ticket title, description, reproduction steps, and affected module, automatically classifying issue severity. History and traceability: every significant ticket change (status, assignment, priority) is logged in a timeline, enabling full audit of an issue's lifecycle. Additional features: Excel/CSV export for tickets, users, and projects for reporting purposes, soft delete for closed or cancelled tickets, and profile management with password change.",
    stack: [
      { label: "Next.js", icon: nextIcon() },
      { label: "TypeScript", icon: typescriptIcon() },
      { label: "Tailwind CSS", icon: tailwindIcon() },
      { label: "Prisma", icon: prismaIcon() },
      { label: "PostgreSQL", icon: postgresqlIcon() },
      { label: "Zod", icon: zodIcon() },
      { label: "Docker", icon: dockerIcon() },
      { label: "Node.js", icon: nodeIcon() },
      { label: "Gemini API", icon: geminiIcon() },
    ],
    demoLink: "https://bug-tracker-six-eta.vercel.app",
    githubLink: "https://github.com/SergioMadrid522/proyecto-residencias",
    badge: "Real-Time Analytics",
    slug: "bug-tracker",
    isUnderDevelopment: false,
    mobileFirst: false,
  },
  {
    id: 2,
    tags: ["Python & ML", "Data Engineering", "Scikit-Learn"],
    title: "US Accident Analysis",
    description:
      "Microservices-based platform analyzing 7.7M+ historical U.S. traffic accident records (2016–2023) to predict incident severity in real time. Trained a Random Forest model (83.61% accuracy) served via a FastAPI microservice, orchestrated through a Spring Boot BFF that validates requests and computes state-level risk metrics. Visualized on an interactive GeoJSON map built with React, Leaflet, and Tailwind CSS.",
    fullDescription:
      "Machine Learning-powered traffic risk prediction platform designed to process and analyze over 7 million historical accident records. The system leverages Python, Pandas, and Scikit-Learn to perform large-scale data preprocessing, feature engineering, and predictive modeling, achieving 83.61% classification accuracy. The backend architecture consists of a FastAPI microservice responsible for serving a trained machine learning model through RESTful endpoints, enabling real-time traffic risk predictions. To support frontend consumption, the platform integrates a Java + Spring Boot Backend-for-Frontend (BFF) that securely orchestrates communication between services and delivers geospatial risk data to an interactive Leaflet-based map interface.",
    stack: [
      { label: "Python", icon: pythonIcon() },
      { label: "Jupyter Notebook", icon: jupyterIcon() },
      //{ label: "Tailwind CSS", icon: tailwindIcon() },
    ],
    demoLink: "",
    githubLink: "https://github.com/SergioMadrid522/us-accidents-analysis-ml",
    badge: ["7M+ Records Analyzed"],
    slug: "us-traffic-predictor",
    isUnderDevelopment: true,
    mobileFirst: false,
  },
  {
    id: 3,
    tags: ["Progressive Web App", "Advanced CSS", "SEO & Performance"],
    title: "Silent Beauty",
    description:
      "A pixel-perfect, progressive web app designed for photography. Achieved a perfect 100/100 Google Lighthouse score across Performance, SEO, and Accessibility. Solved complex cross-browser compatibility issues (iOS/In-App Browsers) using modern CSS viewports (svh) and adaptive Flexbox layouts.",
    stack: [
      { label: "Next.js", icon: nextIcon() },
      { label: "TypeScript", icon: typescriptIcon() },
      { label: "Tailwind CSS", icon: tailwindIcon() },
    ],
    demoLink: "https://fabian-photography.vercel.app",
    githubLink: "https://github.com/SergioMadrid522/blog",
    badge: "100/100 Lighthouse",
    slug: "silent-beauty",
    video:
      "https://res.cloudinary.com/dlhd0iosj/video/upload/v1779549305/silent-beauty_eu99hm.mp4",
    isUnderDevelopment: false,
    mobileFirst: false,
  },
  {
    id: 4,
    tags: ["Next.js App Router", "TypeScript", "Mobile-first"],
    title: "Yama",
    description:
      "Designed and engineered a Mobile-First digital menu MVP to modernize the customer experience in a local restaurant. Architected with Next.js and Tailwind CSS, the UI/UX was strictly aligned with real-world user behavior, ensuring an intuitive navigation and highly optimized load times on mobile networks.",
    stack: [
      { label: "Next.js", icon: nextIcon() },
      { label: "TypeScript", icon: typescriptIcon() },
      { label: "Tailwind CSS", icon: tailwindIcon() },
    ],
    demoLink: "https://yama-nine.vercel.app/",
    githubLink: "https://github.com/SergioMadrid522/yama",
    badge: "E2E Tested",
    slug: "yama",
    video:
      "https://res.cloudinary.com/dlhd0iosj/video/upload/v1779549268/yama_bmeens.mov",
    isUnderDevelopment: false,
    mobileFirst: true,
  },
  {
    id: 5,
    tags: ["AI Integration", "Prompt Engineering", "Docker"],
    title: "AI Legislative Assistant",
    description:
      "An AI-powered conversational platform engineered for a legislative representative. Integrated the Gemini API with React and TypeScript to handle real-time streaming responses, optimized complex system prompt logic for civic domains, and containerized the application environment with Docker to guarantee reproducible builds.",
    stack: [
      { label: "React.js", icon: reactIcon() },
      { label: "TypeScript", icon: typescriptIcon() },
      { label: "Tailwind CSS", icon: tailwindIcon() },
      { label: "Node.js", icon: nodeIcon() },
      { label: "Gemini API", icon: geminiIcon() },
      { label: "Docker", icon: dockerIcon() },
    ],
    demoLink: "",
    githubLink: "https://github.com/SergioMadrid522/proyectoUrsula",
    badge: ["Gemini AI Powered"],
    slug: "info-diputada",
    video:
      "https://res.cloudinary.com/dlhd0iosj/video/upload/v1779660900/ursula_ictbgy.mp4",
    isUnderDevelopment: false,
    mobileFirst: false,
  },
  /*{
    id: 5,
    tags: ["", "", ""],
    title: "",
    description: "",
    badge: "",
    slug: "",
    demoLink: "",
    githubLink:"",
    isUnderDevelopment: true,
  },
  {
    id: 6,
    tags: ["", "", ""],
    title: "",
    description: "",
    badge: "",
    slug: "",
    demoLink: "",
    githubLink:"",
    isUnderDevelopment: true,
  },
  {
    id: 7,
    tags: ["", "", ""],
    title: "",
    description: "",
    badge: "",
    slug: "",
    demoLink: "",
    githubLink:"",
    isUnderDevelopment: true,
  }, */
];

export const phases = [
  {
    phase: "[x] Phase 1: ETL, EDA, and ML Model Training",
    description:
      "Cleaned and preprocessed 7 million historical records, conducted exploratory data analysis, performed feature engineering (including One-Hot Encoding for weather conditions), and trained a Scikit-Learn Random Forest model achieving 83.61% accuracy. Exported the trained model and feature structure into .pkl files for",
  },
  {
    phase: "[x] Phase 2: Data & AI Microservice with FastAPI",
    description:
      "Built a high-performance Python server that loads serialized .pkl files into memory on startup for low-latency inference. Exposes a GET /data endpoint serving a 4,000-record sample dataset, a GET /columns endpoint sharing the model's feature schema, and a POST /predict endpoint for live inference on new accident data.",
  },
  {
    phase:
      "[ ] Phase 3: BFF (Backend for Frontend) Orchestrator with Spring Boot",
    description:
      "Developing a strongly-typed API Gateway using Java and Spring Boot. Validates incoming UI requests with strict Jakarta schemas, handles data grouping and pagination, and acts as a secure reverse proxy to the Python microservice, eliminating browser CORS conflicts.",
  },
  {
    phase:
      "[ ] Phase 4: Interactive Dashboard & Simulator with React & Leaflet",
    description:
      "Designing a Modern Dark Mode UI consuming structured data from the Spring Boot BFF. Features an analytical dashboard with interactive charts and geospatial visualizations powered by Leaflet, plus a dedicated 'Risk Simulator' form for live risk predictions from the ML pipeline.",
  },
];
