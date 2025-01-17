import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Graduated bootcamp",
        location: "Miami, FL",
        description:
            "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(LuGraduationCap),
        date: "2019",
    },
    {
        title: "Front-End Developer",
        location: "Orlando, FL",
        description:
            "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
    {
        title: "Full-Stack Developer",
        location: "Houston, TX",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2021 - present",
    },
] as const;

export const projectsData = [
    {
        title: "Dev Connect",
        description:
            "This is my first Nextjs project, I try to learn the React and Nextjs from building this project.",
        tags: [
            "React",
            "Next.js",
            "Prisma",
            "Tailwind",
            "PostgreSQL",
            "Neon",
            "Vercel",
        ],
        imageUrl: corpcommentImg,
    },
    {
        title: "Enterprise-level employee platform",
        description:
            "I worked as a full-stack developer on this startup project for 4 years. As an initial member of the project, I have led the development of multiple complex and important Sprints.",
        tags: [
            "Vuejs",
            "Vuetify",
            "Nest.js",
            "TypeOrm",
            "Micro apps",
            "Cypress",
            "Oracle",
        ],
        imageUrl: corpcommentImg,
    },
    {
        title: "Flat task management platform",
        description:
            "I shares Angular technical with the team, undertakes the main development in this project. Taking the initiative to research SpringBoot and lead the team in Java code development.",
        tags: ["Angular", "Java", "Spring Boot", "Graphql"],
        imageUrl: rmtdevImg,
    },
    {
        title: "AI  Start  Platform",
        description:
            "The project is the output of the company's creative activities. It uses the company's internal github, confluence document data, etc. as data sources. The data is fed to the AI ​​large model for analysis and summary, and the technical expertise and project experience of the company's employees are generated.",
        tags: ["Vuejs", "Nestjs", "ML", "Figma", "Oracle"],
        imageUrl: wordanalyticsImg,
    },
    {
        title: "SaaS Management Platform",
        description:
            "This project is a front-end and back-end separation architecture. The front-end and back-end communication uses the jQuery ajax that has been packaged in the project. The front-end framework used is KeenUI. The project uses vue to encapsulate business components, uses the koa framework, and nginx forwarding to ensure that even if the interface is not completed, it can be tested and developed normally.",
        tags: ["Vuejs", "Java", "Spring Boot", "Axios", "KeenUI"],
        imageUrl: wordanalyticsImg,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Vuejs",
    "React",
    "Next.js",
    "Angular",
    "Node.js",
    "Nest.js",
    "Cypress",
    "Java",
    "Spring Boot",
    "My Batis",
    "Git",
    "Tailwind",
    "Prisma",
    "GraphQL",
    "Apollo",
    "Express",
    "PostgreSQL",
    "Figma",
] as const;
