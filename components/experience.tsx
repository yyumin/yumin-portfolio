import Image, { type StaticImageData } from "next/image";
import ubcImg from "@/public/ubc.png";
import ucsImg from "@/public/usc.png";
import beshiningImg from "@/public/beshining.png";
import React from "react";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

type Resume = {
  company: string;
  title: string;
  start: string | { label: string; dateTime: number };
  end: string | { label: string; dateTime: number };
  logo: StaticImageData;
};

const resume: Resume[] = [
  {
    company: "University of British Columbia",
    title: "Computer Science Senior Student",
    logo: ubcImg,
    start: "2022",
    end: {
      label: "present",
      dateTime: new Date().getFullYear(),
    },
  },
  {
    company: "Beshining Law Office",
    title: "Intellectual Property Legal Assistant",
    logo: beshiningImg,
    start: "2021",
    end: "2022",
  },
  {
    company: "University Of Southern California",
    title: "Business Law Student",
    logo: ucsImg,
    start: "2019",
    end: "2020",
  },
];

function getRoleDate(date: Resume["start"] | Resume["end"], label = true) {
  if (typeof date === "string") {
    return date;
  }

  if (label) {
    return date.label;
  } else {
    return String(date.dateTime);
  }
}

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  return (
    <div
      ref={ref}
      id="experience"
      className="scroll-mt-28 rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <SectionHeading>My Experience</SectionHeading>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt={role.company}
                className="h-8 w-8 rounded-full"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">公司</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">职位</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">日期</dt>
              <dd
                className="ml-auto text-xs text-zinc-500/80 dark:text-zinc-400/80"
                aria-label={`${getRoleDate(role.start)} 到 ${getRoleDate(
                  role.end
                )}`}
              >
                <time dateTime={getRoleDate(role.start, false)}>
                  {getRoleDate(role.start)}
                </time>{" "}
                <span aria-hidden="true">—</span>{" "}
                <time dateTime={getRoleDate(role.end, false)}>
                  {getRoleDate(role.end)}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  );
}
