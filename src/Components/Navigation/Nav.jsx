import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import "./Nav.css";
import { useState, useRef, useEffect } from "react";
import resume from "../Resume/UJAH-RESUME.pdf";

const Nav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [toggle, setToggle] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (toggle && navRef.current && !navRef.current.contains(event.target)) {
      setIsNavExpanded(false);
      setToggle(false);
    }
  };

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
        {!toggle ? <BiMenuAltRight /> : <AiOutlineClose />}
      </button>
      <div
        ref={navRef}
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
            <a
              href={resume}
              className="resume-download-btn"
              download="./"
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
                setToggle(!toggle);
              }}
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
