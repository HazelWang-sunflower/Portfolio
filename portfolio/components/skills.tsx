import SectionHeading from "./section-heading";

export default function Skills() {
    return (
        <section id="skills" className="scroll-mt-48">
            <SectionHeading>My Skills</SectionHeading>
            {/* <ul className="flex flex-wrap justify-center gap-2">
                {skillsData.map((skill, index) => (
                    <li
                        className="bg-white/10 px-4 py-2 text-xs uppercase tracking-widest text-white"
                        key={index}
                    >
                        {skill}
                    </li>
                ))}
            </ul> */}
        </section>
    );
}
