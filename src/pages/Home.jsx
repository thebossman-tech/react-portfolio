import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="stack-strip">
        <div className="container">
          <span>THE EVERYDAY TOOLKIT</span>
          {[
            "HTML & CSS",
            "JavaScript",
            "React",
            "Git & GitHub",
            "Responsive by default",
            "Node JS",
            "Express",
            "MySql"
          ].map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </div>
      <section className="section container">
        <div className="heading-row">
          <SectionHeading
            label="SELECTED WORK / 01"
            title="A few things I’ve built."
          >
            Real projects. Practical problems. A little more considered each
            time.
          </SectionHeading>
          <Link className="text-link" to="/projects">
            All projects <ArrowUpRight size={17} />
          </Link>
        </div>
        <Projects featured />
      </section>
      <section className="approach-section">
        <div className="container approach-grid">
          <div>
            <p className="eyebrow">A LITTLE ABOUT MY APPROACH</p>
            <h2>
              Built for people.
              <br />
              <span>Not just screens.</span>
            </h2>
          </div>
          <div>
            <p className="large-copy">
              I’m a frontend developer with a background in Microbiology.
              Curiosity brought me here. Building things people can use keeps me
              going.
            </p>
            <ul className="principles">
              {[
                "Understand the purpose before writing the code.",
                "Make the small-screen experience a first-class citizen.",
                "Test the details, then explain the decisions.",
              ].map((text) => (
                <li key={text}>
                  <Check size={17} />
                  {text}
                </li>
              ))}
            </ul>
            <Link className="text-link" to="/about">
              More about me <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section container">
        <SectionHeading
          label="TOOLS & PRACTICE / 02"
          title="A solid foundation. A learning mindset."
        >
          The skills I use today—and the ones I’m building through practice.
        </SectionHeading>
        <Skills />
      </section>
    </>
  );
}
