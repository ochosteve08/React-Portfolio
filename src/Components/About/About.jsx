import React from "react";
import passport from "../../Assets/passport.png";
import "./About.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiJavascript1, DiCss3Full, DiSass, DiNodejs } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";

const About = () => {
  return (
    <section className="about-container" id="about">
      <div className="about-f-container">
        <div className="about-heading">
          <h2 data-aos="fade-in">
            About <span className="red">Me</span>
          </h2>
          <span className="line"></span>
        </div>
        <p>
          I am a software developer with a strong background in frontend web
          development, focused on creating user-friendly and engaging websites.
          I am results-driven and passionately detail-oriented to ensuring to
          producing projects with smooth user interfaces and experience, and I
          apply my technical skills and problem-solving abilities as a front-end
          developer to help bring software ideas to life.
        </p>
        <h3 data-aos="fade-in" className="stack">
          Stacks and <span className="red">Tools</span>
        </h3>
        <div className="skills-button">
          <span className="skills-icon" data-aos="fade-in">
            <AiFillHtml5 className="skill-icon red" title="HTML" />
          </span>
          <span className="skills-icon" data-aos="fade-down">
            <DiJavascript1 className="skill-icon yellow" title="JAVASCRIPT" />
          </span>
          <span className="skills-icon" data-aos="fade-up">
            <FaReact className="skill-icon dodgerblue" title="REACT" />
          </span>
          <span className="skills-icon" data-aos="fade-down">
            <SiTailwindcss className="skill-icon dodgerblue" title="TAILWIND" />
          </span>
          <span className="skills-icon" data-aos="fade-down">
            <DiCss3Full className="skill-icon blue" title="CSS" />
          </span>
          <span className="skills-icon" data-aos="fade-up">
            <DiSass className="skill-icon red" title="SASS" />
          </span>
          <span className="skills-icon" data-aos="fade-right">
            <FaFigma className="skill-icon " title="FIGMA" />
          </span>
          <span className="skills-icon" data-aos="fade-left">
            <FaBootstrap className="skill-icon blue " title="BOOTSTRAP" />
          </span>
          <span className="skills-icon green" data-aos="fade-left">
            <DiNodejs className="skill-icon green" title="NODE.JS" />
          </span>
        </div>
      </div>
      <div className="about-image-container">
        <img
          src={passport}
          alt="UJAH-STEPHEN"
          data-aos="fade-in"
          className="about-image"
        />
      </div>
    </section>
  );
};

export default About;
