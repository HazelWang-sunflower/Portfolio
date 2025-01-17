"use client";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];
export default function Project({
    title,
    description,
    tags,
    imageUrl,
}: ProjectProps) {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
            }}
            className="group mb-3 last:mb-0 sm:mb-8"
        >
            <section className="tranistion relative max-w-[50rem] overflow-hidden border border-black/5 bg-gray-100 last:mb-0 even:pl-8 hover:bg-gray-200 sm:mb-8 sm:h-[30rem] sm:pr-8">
                <div className="flex h-full flex-col px-5 pb-7 pt-4 group-even:ml-[26rem] sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-700">
                        {description}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
                        {tags.map((tag, index) => (
                            <li
                                className="rounded-full bg-black/[0.7] px-3 py-1 text-sm uppercase tracking-wide text-white"
                                key={index}
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>

                <Image
                    className="absolute -right-40 top-8 hidden w-[28.25rem] rounded-t-lg shadow-2xl transition group-even:-left-40 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 sm:block"
                    src={imageUrl}
                    alt={title}
                    quality={95}
                ></Image>
            </section>
        </motion.div>
    );
}
