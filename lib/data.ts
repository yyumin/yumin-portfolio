import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import feelioImg from "@/public/feelio.png";
import financialdashboardImg from "@/public/financialdashboard.png";
import fitnessIMG from "@/public/fitness-app.png";

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
    name: "Blogs",
    hash: "#blogs",
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
    title: "Feelio",
    description:
      "As a full-stack developer on the Feelio team, I've been instrumental in creating a space where users can track their mood, record thoughts, and revisit their entries with ease. Feelio offers a transformative experience by integrating ChatGPT AI, allowing users to adjust the tone of their notes.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Supabase",
      "OpenAI API",
    ],
    imageUrl: feelioImg,
  },
  {
    title: "Personal Portfolio",
    description:
      "Explore my personal portfolio to witness a blend of the newest Next.js 14 capabilities, coupled with robust TypeScript and Tailwind CSS techniques. It's an interactive guide through advanced animations with Framer Motion, context management in React, and responsive, dual-themed UI design.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: financialdashboardImg,
  },
  {
    title: "Calorie Calculator",
    description:
      "This is my first academic project. The project helps users to provide a user-friendly interface that allows users to input their meals and track the number of calories consumed for each meal.",
    tags: ["Java", "OOP", "JSON", "Swing"],
    imageUrl: fitnessIMG,
  },
] as const;
