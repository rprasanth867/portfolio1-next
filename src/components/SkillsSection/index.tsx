
import { skills } from "@/db/skills";
import SkillCard from "../SkillCard";
import "./index.css";

export default function SkillsSection() {
    const { programming_languages, frontend, backend } = skills;

    return (
        <div className="skills-section-main-container">
            <h1 className="heading">Skills</h1>
            <section className="mb-30">
                <h2 className="sub-heading">Programming Languages</h2>
                <ul className="skills-list">
                    {programming_languages.map(d => (
                        <SkillCard
                            key={d.id}
                            logo={<d.Logo width="100px" height="100px" />}
                            name={d.name} />
                    ))}
                </ul>
            </section>
            <section className="mb-30">
                <h2 className="sub-heading">Frontend</h2>
                <ul className="skills-list">
                    {frontend.map(d => (
                        <SkillCard
                            key={d.id}
                            logo={<d.Logo width="100px" height="100px" />}
                            name={d.name} />
                    ))}
                </ul>
            </section>
            <section className="mb-20">
                <h2 className="sub-heading">Backend</h2>
                <ul className="skills-list">
                    {backend.map(d => (
                        <SkillCard
                            key={d.id}
                            logo={<d.Logo width="100px" height="100px" />}
                            name={d.name} />
                    ))}
                </ul>
            </section>
        </div>
    )
}
