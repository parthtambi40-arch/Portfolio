import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiGithub,
  SiVite,
} from "react-icons/si";

export const personalInfo = {
  name: "Parth Tambi",

  role: "Full Stack Developer",

  tagline: "I build modern digital experiences.",

  description:
    "BCA student and aspiring Full Stack Developer passionate about building responsive, interactive and user-friendly web applications.",

  email: "yourmail@gmail.com",

  location: "India",

  github: "https://github.com/parthtambi40-arch",

  linkedin: "#",

  instagram: "#",
};

export const navLinks = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Journey",
    href: "#journey",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export const skills = [
  {
    name: "HTML5",
    icon: FaHtml5,
    color: "text-orange-500",
  },

  {
    name: "CSS3",
    icon: FaCss3Alt,
    color: "text-blue-500",
  },

  {
    name: "JavaScript",
    icon: FaJs,
    color: "text-yellow-400",
  },

  {
    name: "React",
    icon: FaReact,
    color: "text-cyan-400",
  },

  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-cyan-300",
  },

  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-500",
  },

  {
    name: "Express",
    icon: SiExpress,
    color: "text-gray-200",
  },

  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-400",
  },

  {
    name: "Python",
    icon: FaPython,
    color: "text-yellow-300",
  },

  {
    name: "Git",
    icon: FaGitAlt,
    color: "text-orange-500",
  },

  {
    name: "GitHub",
    icon: SiGithub,
    color: "text-white",
  },

  {
    name: "Vite",
    icon: SiVite,
    color: "text-purple-400",
  },
];

export const projects = [
  {
    title: "Registration Form Website",

    description:
      "A responsive registration form website created using HTML, CSS and JavaScript with a clean interface, structured form fields and user-friendly design.",

    tech: ["HTML", "CSS", "JavaScript"],

    github:
      "https://github.com/parthtambi40-arch/registration-form",

    demo: "#",

    featured: true,
  },

  {
    title: "Modern React Portfolio",

    description:
      "A modern developer portfolio built with React, Tailwind CSS and Framer Motion featuring responsive layouts, smooth animations and reusable components.",

    tech: ["React", "Tailwind", "Framer Motion"],

    github: "#",

    demo: "#",

    featured: true,
  },

  {
    title: "Full Stack Web Application",

    description:
      "A full-stack web application concept using React, Node.js, Express and MongoDB with a scalable structure for frontend and backend development.",

    tech: ["React", "Node.js", "MongoDB"],

    github: "#",

    demo: "#",

    featured: false,
  },
];

export const journey = [
  {
    year: "2024 — Present",

    title: "Bachelor of Computer Applications",

    organization: "BCA — Full Stack Development",

    description:
      "Building a strong foundation in programming, web technologies, databases, software development and computer science fundamentals.",
  },

  {
    year: "2025 — Present",

    title: "Frontend Development",

    organization: "React & Modern Web Technologies",

    description:
      "Working with React, JavaScript, Tailwind CSS and modern frontend development practices while building practical projects.",
  },

  {
    year: "2026",

    title: "Full Stack Development",

    organization: "React • Node.js • MongoDB",

    description:
      "Expanding into backend development and learning how frontend, APIs, servers and databases work together.",
  },
];