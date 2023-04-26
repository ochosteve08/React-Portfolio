import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import {AiOutlineClose} from "react-icons/ai";
import "./Nav.css";
import { useState } from "react";
import resume from "../Resume/UJAH-RESUME.pdf";

const Nav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navigation">
      <a href="#" className="brand-name">
        StephenUjah
      </a>
      <button
        className="hamburger "
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
          setToggle(!toggle);
        }}
      >
        {!toggle ? <BiMenuAltRight /> : <AiOutlineClose/>}
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
                setToggle(!toggle);
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
                setToggle(!toggle);
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
                setToggle(!toggle);
              }}
            >
              Contact
            </a>
          </li>
          <li>
            <a href={resume} class="resume-download-btn" download="./" onClick={()=>{
              setIsNavExpanded(!isNavExpanded);
              setToggle(!toggle)}}>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
