import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import "./Nav.css";
import { useState, useRef, useEffect } from "react";
import resume from "../Resume/UJAH-RESUME.pdf";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navRef = useRef(null);

  const handleClickOutside = (event) => {
    
    if (
      toggleMenu &&
      navRef.current &&
      !navRef.current.contains(event.target)
    ) {
      
      setToggleMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleMenu]);

  return (
    <nav className="navigation">
      <a href="#" className="brand-name">
        StephenUjah
      </a>
      <button className="hamburger " onClick={() => setToggleMenu(!toggleMenu)}>
        {toggleMenu ? <AiOutlineClose /> : <BiMenuAltRight />}
      </button>
      <div
        ref={navRef}
        className={toggleMenu ? "navigation-menu expanded" : "navigation-menu"}
      >
        <ul>
          <li>
            <a href="#about" onClick={() => setToggleMenu(!toggleMenu)}>
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={() => setToggleMenu(!toggleMenu)}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setToggleMenu(!toggleMenu)}>
              Contact
            </a>
          </li>
          <li>
            <a
              href={resume}
              className="resume-download-btn"
              download="./"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
