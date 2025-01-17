"use client";
import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import Project from "./project";
import { useSectionInView } from "@/hooks/useSectionInView.hook";

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.1);

    return (
        <section ref={ref} id="projects" className="scroll-mt-28">
            <SectionHeading>My Projects</SectionHeading>
            <div>
                {projectsData.map((project) => (
                    <Project key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
}
