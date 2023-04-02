import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import "./Nav.css";
import { useState } from "react";
import resume from "../Resume/UJAH-RESUME.pdf";

const Nav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <a href="#" className="brand-name">
        StephenUjah
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <BiMenuAltRight />
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a
              href="#about"
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              Contact
            </a>
          </li>
          <li>
            <a href={resume} class="resume-download-btn" download="./">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
