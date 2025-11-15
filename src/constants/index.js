import {
  mobile,
  backend,
  Ganesh_Logo,
  Infosys,
  API,
  githubs,
  Java,
  Database,
  jenkins,
  Express,
  Infor,
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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  MERN_Project,
  AI_Platform,
  To_Do_App,
  github,
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Automation Tester",
    icon: web,
  },
  {
    title: "Automation Framework Developer",
    icon: mobile,
  },
  {
    title: "API Tester",
    icon: creator,
  },
  {
    title: "Java",
    icon: creator,
  },
  {
    title: "DSA",
    icon: creator,
  },
  {
    title: "Devops & Tools",
    icon: creator,
  },
  {
    title: "SDET",
    icon: creator,
  }


  
  
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
    name: "Database",
    icon: Database,
  },
  {
    name: "API",
    icon: API,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Github",
    icon: githubs,
  },
  {
    name: "Tailwind css",
    icon: tailwind,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "React.js",
    icon: reactjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: Java,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Senior System Engineer",
    company_name: "Infosys",
    icon: Infosys,
    iconBg: "#383E56",
    date: "August 2022 - December 2025",
    points: [
      "Developed 90+ automated UI and API test scripts using Java, Selenium, and REST Assured, improving test coverage and reducing manual effort by 40%.",
      "Integrated automation suites with Jenkins and Looper CI/CD pipelines, accelerating sprint delivery and reducing deployment delays.",
      "Validated HR, Payroll, and Mainframe-based modules; authored 250+ reusable test cases ensuring stable, defect-free releases.",
      "Automated 95+ REST API endpoints using in-house frameworks and delivered client demos, contributing to improved sprint completion rates.",
      "Supported system modernization by validating backend logic during C-to-Go migration, ensuring error-free production rollout.",
      "Built a Kafka Data Validation utility for cross-pipeline data reliability, helping teams detect faulty messages early.",
      "Received multiple awards including RISE Awards (Rookie of the Quarter, Tech Domain Maestro) and IQE Annual Honor Awards for excellence in automation.",
      "Collaborated within Agile teams using Jira and cross-functional workflows to maintain high-quality releases.",
    ]    
  },
  {
    title: "Quality Assurance Analyst",
    company_name: "Infor",
    icon: Infor,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Currently Working",
    points: [
      "Designed and implemented automation scripts for multiple product releases, ensuring stable and repeatable QA processes.",
      "Enhanced script reusability by maintaining and optimizing automation suites each release, reducing regression effort.",
      "Collaborated closely with developers to understand backend logic and feature workflows, enabling faster defect resolution.",
      "Tested cross-product functionality and gained strong understanding of product architecture, integrations, and lifecycle.",
      "Analyzed and converted manual cases into automated flows, bridging QA gaps and improving development efficiency.",
      "Participated in feature discussions and walkthroughs, contributing testing insights to improve product quality.",
      "Worked across backend and API validation to simulate real user scenarios and validate critical workflows.",
      "Applied programming expertise to streamline testing pipelines and support high-quality, on-schedule releases.",
    ]
    
  }
  
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
    name: "MERN App Login Authentication",
    description:
      "Simple MERN Stack Login App with: User Registration & Login JWT Authentication OTP Verification for Password Reset Profile Update Feature Built with MongoDB, Express.js, React, and Node.js.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
    ],
    image: MERN_Project,
    source_code_link: "https://github.com/ganesh883/MERN_Login_App_With_Authentication",
  },
  {
    name: "AI Interview Platform",
    description:
      "An AI-powered mock interview platform built using Next.js and Vapi AI that simulates real-time interviews, provides instant feedback, and helps users improve their communication, confidence, and technical skills through personalized practice sessions..",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Vapi",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "Firbase",
        color: "green-text-gradient",
      },
    ],
    image: AI_Platform,
    source_code_link: "https://github.com/ganesh883/AI_Voice_Agent_Interview_Platform",
  },
  {
    name: "Product Management Service",
    description:
      "Developed a backend microservice in Java using Maven to manage product operations including create, read, update, and delete. Implemented a modular project structure following best practices, with REST API integration, database persistence.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Springboot",
        color: "green-text-gradient",
      },
      {
        name: "RESTful API Design",
        color: "pink-text-gradient",
      },
    ],
    image: To_Do_App,
    source_code_link: "https://github.com/ganesh883/ProductService",
  },
];

export { services, technologies, experiences, testimonials, projects };
