import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaAngular, FaJava, FaReact, FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import enterpriselevelImg from "@/public/Enterprise-level_employee_platform.png";
import flatTaskImg from "@/public/Flat_task_management_platform.png";
import aiStarImg from "@/public/AI_Star.png";
import saasImg from "@/public/Saas_Platform.jpg";

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
        title: "Heilongjiang University of Science and Technology",
        name: "Bachelor Degree",
        location: "Harbin, China",
        description:
            "Got the bachelor degree in computer science and technology.",
        icon: React.createElement(LuGraduationCap),
        date: "2009-2013",
    },
    {
        title: "NanJing University",
        name: "Master Degree",
        location: "Jiangsu, China",
        description: "Got the master degree in software engineering.",
        icon: React.createElement(LuGraduationCap),
        date: "2013 - 2015",
    },
    {
        title: "Software Development Engineer",
        name: "Nanjing Fujitsu Nanda Software Technology",
        location: "Jiangsu, China",
        description:
            "Enter the company as an intern and become a regular employee through the final assessment. During the internship, participate in the development of COBOL IDE by using Java language, mainly responsible for investigating and correcting existing IDE bugs and testing.",
        icon: React.createElement(FaJava),
        date: "2015.07 - 2016.02",
    },
    {
        title: "Design And Development Engineer",
        name: "Pactera",
        location: "Dalian, China",
        description:
            "Mainly used the Bootstrap , HTML5, CSS3 and JS. Authentication information website development, website adopts front and back end separation architecture, Modular component development, used iview.js as the UI frame, used the Vue.js and ES6 grammar, also learned the webpack and Typescript.",
        icon: React.createElement(FaVuejs),
        date: "2016.09 - 2017.07",
    },
    {
        title: "Web Front-end Development Engineer",
        name: "JF(JiuFu) Group-Insight Credit",
        location: "Dalian, China",
        description:
            "Used Vue.js framework, completed Single Page Application projects.Discuss the contents of the prototype, put forward problems and suggestions.",
        icon: React.createElement(FaVuejs),
        date: "2017.07 - 2019.12",
    },
    {
        title: "Senior Software Engineer",
        name: "Rockwell automation",
        location: "Dalian, China",
        description:
            "Mainly responsible for the secondary packaging development of Angular Material components, responsible for code review within the team, and needs to write comprehensive UT tests and automated tests in the project.",
        icon: React.createElement(FaAngular),
        date: "2019.12 - 2020.12",
    },
    {
        title: "Senior Software Engineer",
        name: "Fidelity (Dalian) Business Services",
        location: "Dalian, China",
        description:
            "4 years of full-stack experience, leading the design and implementation of multiple systems and platforms. Deeply engaged in front-end and devops, proficient in the three major front-end frameworks Vue/React/Angular, and keen on learning new technologies, able to flexibly choose technical solutions according to project needs",
        icon: React.createElement(CgWorkAlt),
        date: "2020.12 - 2024.12",
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
        imageUrl: enterpriselevelImg,
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
        imageUrl: enterpriselevelImg,
    },
    {
        title: "Flat task management platform",
        description:
            "I shares Angular technical with the team, undertakes the main development in this project. Taking the initiative to research SpringBoot and lead the team in Java code development.",
        tags: ["Angular", "Java", "Spring Boot", "Graphql"],
        imageUrl: flatTaskImg,
    },
    {
        title: "AI  Start  Platform",
        description:
            "The project is the output of the company's creative activities. It uses the company's internal github, confluence document data, etc. as data sources. The data is fed to the AI ​​large model for analysis and summary, and the technical expertise and project experience of the company's employees are generated.",
        tags: ["Vuejs", "Nestjs", "ML", "Figma", "Oracle"],
        imageUrl: aiStarImg,
    },
    {
        title: "SaaS Management Platform",
        description:
            "This project is a front-end and back-end separation architecture. The front-end and back-end communication uses the jQuery ajax that has been packaged in the project. The front-end framework used is KeenUI. The project uses vue to encapsulate business components, uses the koa framework, and nginx forwarding to ensure that even if the interface is not completed, it can be tested and developed normally.",
        tags: ["Vuejs", "Java", "Spring Boot", "Axios", "KeenUI"],
        imageUrl: saasImg,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Vuejs",
    "React",
    "Angular",
    "React Native",
    "Next.js",
    "GraphQL",
    "Node.js",
    "Nest.js",
    "TypeORM",
    "Cypress",
    "Java",
    "Spring Boot",
    "DevOps",
    "k8s",
    "My Batis",
    "Git",
    "Tailwind",
    "Prisma",
    "GraphQL",
    "Apollo",
    "Express",
    "mySQL",
    "PostgreSQL",
    "Figma",
] as const;
