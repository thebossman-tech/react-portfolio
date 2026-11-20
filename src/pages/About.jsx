import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Skills from "../components/Skills";
import SectionHeading from "../components/SectionHeading";
export default function About() {
  return (
    <>
      <section className="container page-section about-intro">
        <div>
          <p className="eyebrow">THE PERSON BEHIND THE PIXELS</p>
          <h1>
            Curious by nature.
            <br />
            <span className="muted-heading">A builder by choice.</span>
          </h1>
          <p className="page-intro">
            I’m Ogundijo Olatunbosun, a frontend developer based in Ibadan,
            Nigeria. I build responsive websites and I’m growing my React skills
            through hands-on projects.
          </p>
          <p>
            My background in Microbiology taught me to observe carefully, ask
            better questions and pay attention to the details. I bring that same
            mindset to frontend development.
          </p>
          <Link className="button button-primary" to="/contact">
            Let’s work together <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="about-photo">
          <img
            src="/images/portrait.jpeg"
            alt="Olatunbosun Ogundijo"
            width="640"
            height="760"
          />
          <span>Always learning. Always building.</span>
        </div>
      </section>
      <section className="container section journey">
        <SectionHeading
          label="EXPERIENCE & EDUCATION"
          title="The path so far."
        />
        <div className="timeline">
          <article>
            <span>DEVELOPMENT EXPERIENCE</span>
            <div>
              <h3>Frontend Development Intern</h3>
              <p>AppRo8</p>
              <p>
                Building responsive interfaces and strengthening React
                fundamentals through practical internship assignments, including
                Velora and this portfolio.
              </p>
            </div>
          </article>
          <article>
            <span>2016 — 2022</span>
            <div>
              <h3>BSc Microbiology</h3>
              <p>Olabisi Onabanjo University</p>
              <p>
                A scientific foundation in research, observation and analytical
                thinking.
              </p>
            </div>
          </article>
        </div>
      </section>
      <section className="container section">
        <SectionHeading
          label="SKILLS & CONTINUED LEARNING"
          title="Tools I use. Skills I’m growing."
        >
          HTML, CSS and JavaScript are my foundation. React is an active part of
          my project learning; REST APIs and backend fundamentals are next.
        </SectionHeading>
        <Skills />
      </section>
    </>
  );
}
