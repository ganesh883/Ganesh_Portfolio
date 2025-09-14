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
    title: "System Engineer",
    company_name: "Infosys",
    icon: Infosys,
    iconBg: "#383E56",
    date: "August 2022 - October 2025",
    points: [
      "Developed 90+ automated UI and API test scripts in Java and Selenium, improving test coverage and reducing manual effort.",
      "Integrated automation scripts into Jenkins and Looper pipelines, accelerating deployment and sprint delivery.",
      "Validated HR, Payroll, and other modules on mainframes; created 250+ reusable test cases ensuring defect-free releases.",
      "Automated 95+ REST API endpoints using internal frameworks; delivered client demos and enhanced sprint completion rates.",
      "Supported C to Go migration projects by validating backend programs and ensuring seamless production rollout.",
      "Received multiple awards for excellence in automation and QA, including RISE Awards (Rookie of the Quarter, Tech Domain Maestro) and IQE Annual Honor Awards.",
      "Built a 'Kafka Data Validation' artifact to ensure reliable data processing across pipelines.",
      "Worked in Agile teams using Jira; collaborated across testing, development, and deployment teams to ensure high-quality delivery.",
    ],
  },
  {
    title: "Quality Assurance Analyst",
    company_name: "Infor",
    icon: Infor,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Currently Working",
    points: [
    "Designed and implemented automated test scripts for multiple product releases, ensuring reliable and efficient QA processes.",
    "Maintained and updated automation scripts for every release, improving test reusability and reducing regression effort.",
    "Closely collaborated with developers to understand features and backend logic, contributing to faster issue resolution and feature validation.",
    "Tested cross-product features for each release, gaining in-depth understanding of product architecture and workflows.",
    "Analyzed manual test cases to identify automation opportunities, bridging QA processes with development efficiency.",
    "Actively participated in product discussions and feature walkthroughs, providing insights from testing to enhance development quality.",
    "Gained strong understanding of full product lifecycle in a product-based environment, including backend workflows and feature dependencies.",
    "Applied programming and automation skills to streamline testing pipelines, simulating real-world scenarios and validating APIs.",
        ],
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
    name: "To Do App",
    description:
      "This is a simple To-Do application that allows users to add and delete tasks. It's designed to help manage daily tasks in a clean and easy-to-use interface. This project was built as a beginner-level exercise to practice basic frontend development skills.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: To_Do_App,
    source_code_link: "https://github.com/ganesh883/To_Do_App",
  },
];

export { services, technologies, experiences, testimonials, projects };
