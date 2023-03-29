import React from 'react'
import './Intro.css'
import {FiLinkedin, FiTwitter, FiGithub} from 'react-icons/fi'

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-container">
        <h1 className="intro-text">
          <span>Hi, I am </span>
          <span className="red">Ujah Stephen</span>
        </h1>
        <p className="intro-preface">
          A software developer with a strong background in frontend web
          development. As a front-end developer, I am eager to apply my
          technical skills and problem-solving abilities to help bring software
          ideas to life.
        </p>
      </div>
    </section>
  );
}
export default Intro