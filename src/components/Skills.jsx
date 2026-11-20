import { ArrowUpRight, Braces, Layers3, Wrench } from "lucide-react";
import { skillGroups } from "../data/profile";
const icons = [Braces, Layers3, Wrench];

export default function Skills() {
  return (
    <div className="skills-grid">
      {skillGroups.map((group, i) => {
        const Icon = icons[i];
        return (
          <article className="skill-card" key={group.title}>
            <div className="skill-icon">
              <Icon size={23} />
              <span>0{i + 1}</span>
            </div>
            <h3>{group.title}</h3>
            <p>{group.note}</p>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>
                  {skill}
                  <ArrowUpRight size={14} aria-hidden="true" />
                </li>
              ))}
            </ul>
          </article>
        );
      })}
    </div>
  );
}
