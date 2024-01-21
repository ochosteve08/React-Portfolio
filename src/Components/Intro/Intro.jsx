import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <section className="intro">
      <div 
      data-aos="flip-left"
      data-aos-easing='ease-out-cubic'
       className="intro-container">
        <h1 className="intro-text">
          {/* <span>Hi, I am </span> */}
          <span className="red">Ujah Stephen</span>
        </h1>
        <p className="intro-preface">Software Engineer</p>
      </div>
    </section>
  );
};
export default Intro;
