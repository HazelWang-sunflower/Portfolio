"use client";
import { useSectionInView } from "@/hooks/useSectionInView.hook";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
    const { ref } = useSectionInView("About", 0.5);

    const linkedIn = "https://www.linkedin.com/in/hazel-wang-351213335/";
    return (
        <section
            ref={ref}
            className="mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0"
            id="home"
        >
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "tween", duration: 0.25 }}
                    >
                        <Image
                            src="/me.jpg"
                            alt="Hazel Avatar"
                            width={192}
                            height={192}
                            quality={95}
                            priority={true}
                            className="h-24 w-24 rounded-full border-[0.5rem] border-white object-cover shadow-xl"
                        />
                    </motion.div>
                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            duration: 0.7,
                            delay: 0.1,
                        }}
                        className="absolute bottom-0 right-0 text-4xl"
                    >
                        👋
                    </motion.span>
                </div>
            </div>
            <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            >
                <span className="font-bold">Hello, I'm Hazel Wang.</span> I'm a{" "}
                <span className="font-bold">full-stack developer</span> with{" "}
                <span className="font-bold">9 years</span> of experience. I
                enjoy building <span className="italic">sites & apps</span>. My
                focus is{" "}
                <span className="underline">VueJs and React (Next.js)</span>.
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
            >
                <Link
                    className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
                    href="#contact"
                >
                    Contack me here
                    <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
                </Link>
                <a
                    className="group flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105"
                    href="/Hazel_Wang_Full-stack.pdf"
                    download
                >
                    Download CV{" "}
                    <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
                </a>
                <a
                    className="flex items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-gray-700 outline-none transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-[1.15]"
                    href={linkedIn}
                    target="_blank"
                >
                    <BsLinkedin />
                </a>
                <a className="flex items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-[1.35rem] text-gray-700 outline-none transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-[1.15]">
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    );
}
