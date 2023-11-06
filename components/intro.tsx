"use client";
import Image from "next/image";
import selfieImg from "@/public/selfie.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { MoveRight, ArrowDownToLine, Linkedin, Github } from "lucide-react";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem]
    text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={selfieImg}
              alt="selfie"
              width={100}
              height={100}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.15rem] border-white"
            />
          </motion.div>
        </div>
      </div>

      <motion.p
        className="mb-10 mt-4 px-4 text-large font-medium sm:text-xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <>
          Hey, I am Yumin Chen. I am a <span className="text-3xl">&lt;</span>{" "}
          <span className="text-3xl">developer </span>
          <span className="text-3xl">/&gt;</span>. I enjoy building sites &
          apps. I am currently a computer science student at University of
          British Columbia.
        </>
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-5 py-3 flex items-center gap-2 rounded-full
        outline:none hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here{" "}
          <MoveRight className="opacity-70 group-hover:translate-x-1 transition " />
        </Link>

        <a
          className="group bg-white px-5 py-3 flex items-center gap-2 rounded-full hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
          href="/CV.pdf"
          download
        >
          Download CV
          <ArrowDownToLine className="opacity-60 group-hover:scale-105 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700
        py-3 flex items-center gap-2 rounded-full hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10"
          href="https://linkedin.com/in/yumin-chen-104297256"
        >
          <Linkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700
        py-3 flex items-center gap-2 rounded-full hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10"
          href="https://github.com/yyumin"
        >
          <Github />
        </a>
      </motion.div>
    </section>
  );
}
