import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  starbucks,
  postgres,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  gsg,
  ppu,
  sharkod,
  sol,
  carshop,
  chippy,
  educenter,
  sharkodP,
  solP,
  choaches

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "front-end Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "teach teacher",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
  name: "Postgres SQL",
    icon: postgres,
  },
  {
    name: "git",
    icon: git,
  },
 
  
];


const experiences = [
  {
    title: "Full Stack intern",
    company_name: "solution",
    icon:sol,
    iconBg: "white",
    date: "May 2025 – September 2025",
    points: [
      "Worked remotely in a team environment, strengthening collaboration and social skills, while designing all UI/UX elements myself in the e-commerce website.",
      "Built production-ready apps (POS & e-commerce website called Chippy) with React, Electron, TypeScript, Express, and PostgreSQL, incorporating designs I created.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Collaborated in an Agile team using Git, utilizing Zustand for state management and i18n for translations, with all app designs personally crafted.",
    ],
  },
  {
    title: "Computer Lab Supervisor",
    company_name: "Palestine Polytechnic University",
    icon: ppu,
    iconBg: "white",
    date: "September 2024 – January 2025",
    points: [
    "Conducted computer lab sessions, teaching foundational skills in Microsoft Excel, Word, PowerPoint, C++, and Data Structures.",
    "Assisted students with practical applications of theoretical concepts to strengthen their understanding of programming and data handling",
    "Enhanced student engagement through interactive lessons and one-on-one support."
  ],
  },


  {
    title: "Front-End Developer",
    company_name: "Sharkod",
    icon: sharkod,
    iconBg: "white",
    date: "May 2024 – July 2024",
    points: [
      "Worked remotely to contribute to the development of an HR system, enhancing teamwork and gaining in-depth knowledge of HR features.",
      "Integrated backend APIs with modern frontend designs, improving user experience and interface aesthetics using React and Tailwind UI/UX.",
      "Applied Git version control and collaborative development methodologies effectively.",
    ],
  },
  {
    title: "React Trainee",
    company_name: "Gaza Sky Geeks",
    icon: gsg,
    iconBg: "black",
    date: "September 2022 – December 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Worked in a team environment, strengthening collaboration and social skills.",
      "Gained proficiency in React fundamentals, including JSX, hooks, services, routing, and context, by building multiple projects.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SOL",
    description:
      "A modern platform built with React, Node.js, and MongoDB to manage educational centers. It provides tools for handling students, courses, teachers, financial operations, and generating reports.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: solP, // replace with your project image
    source_code_link: "https://github.com/manalamro/sol",
    live_demo: "https://sol-pi-five.vercel.app/",
  },
  {
    name: "Chippy E-Commerce",
    description:
      "A professional full-stack e-commerce application. The backend is built with Node.js/Express and PostgreSQL, and the frontend with React + Vite. It fully supports Arabic and English with RTL/LTR layouts, advanced cart and order management, and an admin dashboard.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "postgresql", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },

    ],
    image: chippy, // add your project image
    source_code_link: "https://github.com/manalamro/chippy",
    live_demo: "https://chippy-manals-projects-ec1b19ad.vercel.app/",
  },
  {
    name: "CenterApp",
    description:
      "An education management platform to handle students, teachers, courses, enrollments, payments, and operating costs. Built with a React frontend and a Node.js/Express + MongoDB backend.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "ant design", color: "pink-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: educenter, // add your project image
    source_code_link: "https://github.com/manalamro/centerApp",
  },
  {
    name: "Car Shop",
    description:
      "A frontend project for a car shop. Cars are displayed as sliding cards with filtering and search functionality. Includes a details page for each car and admin features for adding new cars.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: carshop, // add your project image
    source_code_link: "https://github.com/manalamro/car-shop",
    live_demo: "https://user-images.githubusercontent.com/105562468/213748037-33f9b392-0f5a-4e4b-ad7d-6968c969f167.mp4",

  },
  {
    name: "Sharkod HR System",
    description:
      "A complete HR management system (SaaS) designed to streamline human resources processes including employees, contracts, payroll, and reporting.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nextjs", color: "yellow-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "postgres", color: "pink-text-gradient" },
    ],
    image: sharkodP, // add your project image
    live_demo: "https://sharkod.com/",
  },
  {
    name: "Coaches Platform",
    description:
      "An online coaching and learning platform built on Graphy. It provides pages for coaches to showcase their programs, manage sessions, and interact with learners.",
    tags: [
      { name: "graphy", color: "blue-text-gradient" },
      { name: "saas", color: "green-text-gradient" },
      { name: "platform", color: "pink-text-gradient" },
    ],
    image:choaches, // add your project image here
    live_demo: "https://abdelmageed.graphy.com/s/pages/coaches",
  }
  
  
];


export { services, technologies, experiences, testimonials, projects };
