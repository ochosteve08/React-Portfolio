import React from "react";
import { BsTwitter, BsGithub, BsMedium } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const today = new Date('2023-01-01');
  
  return (
    <footer>
      <div>
        <a href="https://twitter.com/Prof_Ochosteve" target={"_blank"}>
          <BsTwitter />
        </a>
        <a href="mailto:stephenujah@yahoo.com">
          <FiMail />
        </a>
        <a href="https://www.linkedin.com/in/ujah-stephen" target={"_blank"}>
          <FaLinkedinIn />
        </a>

        <a href="https://github.com/ochosteve08" target={"_blank"}>
          <BsGithub />
        </a>
        <a href="https://medium.com/ochosteve08" target={"_blank"}>
          <BsMedium />
        </a>
      </div>
      <p style={{ margin: "20px" }}>Copyright &copy; {today.getFullYear()} </p>
    </footer>
  );
};
export default Footer;
