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
const { typescriptIcon, javascriptIcon, pythonIcon } = languages;
const { htmlIcon, cssIcon, sassIcon, tailwindIcon, reactIcon, nextIcon } =
  frontend;
const { nodeIcon, expressIcon, rabbitmqIcon } = backend;
const { mysqlIcon, mariadbIcon, postgresqlIcon, prismaIcon } = databases;
const { dockerIcon, cloudinaryIcon } = deployment;
const { playwrightIcon, zodIcon, postmanIcon } = testing;
const { gitIcon, githubIcon, jupyterIcon } = workflow;
const { geminiIcon } = ai;
export const navbarOptions: NavbarOptions[] = [
  { label: "About me", link: "/#about-me" },
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
      { label: "TypeScript", icon: typescriptIcon() },
      { label: "JavaScript", icon: javascriptIcon() },
      { label: "Python", icon: pythonIcon() },
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
      "Full-stack ticket management system. Architected Server/Client Component boundaries to eliminate N+1 queries. Ensured data integrity through Zod validation and managed UI state with React Context.",
    stack: [
      { label: "Next.js", icon: nextIcon() },
      { label: "TypeScript", icon: typescriptIcon() },
      { label: "Tailwind CSS", icon: tailwindIcon() },
      { label: "Prisma", icon: prismaIcon() },
      { label: "PostgreSQL", icon: postgresqlIcon() },
      { label: "Zod", icon: zodIcon() },
      { label: "Docker", icon: dockerIcon() },
      { label: "Node.js", icon: nodeIcon() },
    ],
    demoLink: "",
    githubLink: "https://github.com/SergioMadrid522/proyecto-residencias",
    badge: "E2E Tested",
    slug: "bug-tracker",
    isUnderDevelopment: true,
    mobileFirst: false,
  },
  {
    id: 2,
    tags: ["Python & ML", "Data Engineering", "Scikit-Learn"],
    title: "US Traffic Risk Predictor",
    description:
      "AI-powered analysis engine processing over 7 million historical records to predict traffic accident severity. Architected a data pipeline with Pandas and trained a Random Forest classification model achieving 74.14% accuracy. Currently extending the architecture with a FastAPI backend and React dashboard.",
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
      { label: "Gemini API", icon: geminiIcon() },
      { label: "Docker", icon: dockerIcon() },
    ],
    demoLink: "",
    githubLink: "https://github.com/SergioMadrid522/info-diputada",
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
