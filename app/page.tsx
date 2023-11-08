"use client";
import About from "@/components/about";
import Blogs from "@/components/blogs";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <main
      className="flex flex-col items-center
    px-4"
    >
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Blogs />
      <Experience />
    </main>
  );
}
