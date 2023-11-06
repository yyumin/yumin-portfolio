"use client";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Upon completing my studies in <span className="font-medium">Law</span>,
        I was drawn to the world of coding and decided to follow that passion. I
        commenced my education in{" "}
        <span className="font-medium">computer science</span> at the University
        of British Columbia in 2022. I specialize in{" "}
        <span className="font-medium">React and Next.js</span> within my
        technical stack and have a good grasp of TypeScript. My journey in
        technology is ever-evolving, as I continually seek out new technical
        knowledge.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy
        powerlifting, Crossfit, Spartan Races, drawing and reading. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">nutrition and Japanese</span>.
      </p>
    </motion.section>
  );
}
