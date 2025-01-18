"use client";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/hooks/useSectionInView.hook";

export default function About() {
    const { ref } = useSectionInView("About", 0.6);

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
            id="about"
        >
            <SectionHeading>About Me</SectionHeading>

            <p className="mb-3">
                After graduating with master degree in{" "}
                <span className="font-medium">Software Engineering</span> from{" "}
                <span>NanJing University</span>, I started working on software
                development. Recent 4 years, I drive in{" "}
                <span className="font-medium">full-stack web development</span>.{" "}
                <span className="italic">My favorite part of programming</span>{" "}
                is the problem-solving aspect. I{" "}
                <span className="underline">love</span> the feeling of finally
                figuring out a solution to a problem. My core stack is{" "}
                <span className="font-medium">
                    Vuejs, React, Node.js, Nestjs, and Java
                </span>
                . I am also familiar with TypeScript and E2E test. I am always
                looking to learn new technologies. I am currently looking for a{" "}
                <span className="font-medium">full-time position</span> as a
                full-stack engineer or front-end developer.
            </p>

            <p>
                <span className="italic">When I'm not coding</span>, I enjoy
                working out, baking, and playing with my cat. I also enjoy{" "}
                <span className="font-medium">learning new things</span>. I am
                currently learning about{" "}
                <span className="font-medium">painting and UI design</span>.
            </p>
        </motion.section>
    );
}
