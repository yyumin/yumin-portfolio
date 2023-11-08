"use client";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function Blogs() {
  const { ref } = useSectionInView("Blogs");
  return (
    <section
      id="blogs"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-centersm:mb-40"
    >
      <SectionHeading>Blogs</SectionHeading>
      <h1 className="text-5xl font-semibold text-zinc-200 capitalize">
        Work on progress...
      </h1>
    </section>
  );
}
