import React, { useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import Boutique from "../../Assets/fashionista-boutique.png";
import Budget from "../../Assets/budget-app.png";
import Landing from "../../Assets/manage-landing-page-frontendmentor-io.netlify.app_.png";
import Portfolio from "../../Assets/portfolio.png";
import Movie from "../../Assets/Movie-App.png";
import Notepad from "../../Assets/notepad.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./WebPortf.css";

const PortBoxes = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="port-box-container">
      <div className="port-boxes" data-aos="fade-up">
        <div className="portfolio-image">
          <img src={Budget} loading="lazy" alt="Fashionista-boutique" />
        </div>

        <div
          className="portfolio-image"
          onClick={() =>
            window.open(
              "https://ochosteve08.github.io/Budget-App/",
              "_blank",
              "noreferrer"
            )
          }
        >
          <h3>Budget and Expense Tracker</h3>
          <p>
            Expense Tracker App that allows you to track your expenses. It uses
            the useReducer hook and context API to manage global state and store
            data in local storage.
          </p>
        </div>

        <div>
          <button data-aos="fade-up">REACT</button>
          <button data-aos="fade-up">BOOTSTRAP</button>

          <button data-aos="fade-up" style={{ cursor: "pointer" }}>
            <a
              href="https://github.com/ochosteve08/Budget-App/tree/master"
              target="_blank"
            >
              <BsGithub />
            </a>
          </button>
        </div>
      </div>

      <div className="port-boxes" data-aos="fade-down">
        <div
          className="portfolio-image"
          onClick={() =>
            window.open(
              "https://ochosteve08.github.io/Movie-App/",
              "_blank",
              "noreferrer"
            )
          }
        >
          <img src={Movie} loading="lazy" alt="movie Image" />
        </div>

        <div>
          <h3>Movie App</h3>
          <p>
            Site allows the user to search for and save their favorite movies.
            It uses an external API to fetch movie data and local storage to
            store the user's favorite movies.
          </p>
        </div>

        <div>
          <button data-aos="fade-up">REACT</button>
          <button data-aos="fade-up">BOOTSTRAP</button>
          <button data-aos="fade-up" style={{ cursor: "pointer" }}>
            <a href="https://github.com/ochosteve08/Movie-App" target="_blank">
              <BsGithub />
            </a>
          </button>
        </div>
      </div>

      <div className="port-boxes" data-aos="fade-up">
        <div
          className="portfolio-image"
          onClick={() =>
            window.open(
              "https://ujah-stephen.netlify.app/",
              "_blank",
              "noreferrer"
            )
          }
        >
          <img src={Portfolio} loading="lazy" alt="portfolio image" />
        </div>

        <div>
          <h3>My Portfolio</h3>
          <p>
            My portfolio showcasing a few of the projects built so far, others
            can be found in my github profile.
          </p>
        </div>

        <div>
          <button data-aos="fade-up">REACT</button>
          <button data-aos="fade-up">CSS</button>
          <button data-aos="fade-up" style={{ cursor: "pointer" }}>
            <a
              href="https://github.com/ochosteve08/React-Portfolio"
              target="_blank"
            >
              <BsGithub />
            </a>
          </button>
        </div>
      </div>
      <div className="port-boxes" data-aos="fade-up">
        <div className="portfolio-image">
          <img src={Boutique} loading="lazy" alt="Fashionista-boutique" />
        </div>

        <div
          className="portfolio-image"
          onClick={() =>
            window.open(
              "https://fashionista-boutique-ecommerce.netlify.app/",
              "_blank",
              "noreferrer"
            )
          }
        >
          <h3>Fashionista</h3>
          <p>
            An e-commerce landing page with CRUD (Create, Read, Update, and
            Delete) functionality, using local storage to store the product's
            data on browser.
          </p>
        </div>

        <div>
          <button data-aos="fade-up">HTML</button>
          <button data-aos="fade-up">CSS</button>
          <button data-aos="fade-up">JAVASCRIPT</button>
          <button data-aos="fade-up">FIGMA</button>
          <button data-aos="fade-up" style={{ cursor: "pointer" }}>
            <a
              href="https://github.com/ochosteve08/Fashionista-E-commerce"
              target="_blank"
            >
              <BsGithub />
            </a>
          </button>
        </div>
      </div>
      <div className="port-boxes" data-aos="fade">
        <div
          className="portfolio-image"
          onClick={() =>
            window.open(
              "https://manage-landing-page-frontendmentor-io.netlify.app/",
              "_blank",
              "noreferrer"
            )
          }
        >
          <img src={Landing} loading="lazy" alt="manage Landing page Image" />
        </div>

        <div>
          <h3> Manage landing page</h3>
          <p>
            An intermediate project on Frontendmentor that test responsive
            skills, taking into account a lot of small details and slight
            content shifts for different screen sizes.
          </p>
        </div>

        <div>
          <button data-aos="fade-up">HTML</button>
          <button data-aos="fade-up">TAILWIND</button>
          <button data-aos="fade-up">JAVASCRIPT</button>
          <button data-aos="fade-up" style={{ cursor: "pointer" }}>
            <a
              href="https://github.com/ochosteve08/Manage-Landing-Page"
              target="_blank"
            >
              <BsGithub />
            </a>
          </button>
        </div>
      </div>

      <div className="port-boxes" data-aos="fade">
        <div
          className="portfolio-image"
          onClick={() =>
            window.open(
              "https://notes-app15.netlify.app/",
              "_blank",
              "noreferrer"
            )
          }
        >
          <img src={Notepad} loading="lazy" alt="notepad Image" />
        </div>

        <div>
          <h3>NotePad</h3>
          <p>
            This is a note taking tool which will help you in writing down your
            notes and store them until when needed. this application allows
            users to create, read, update, and delete notes. This project uses
            Local Storage to save the notes.
          </p>
        </div>

        <div>
          <button>HTML</button>
          <button>BOOTSTRAP</button>
          <button>JAVASCRIPT</button>
          <button data-aos="fade-up" style={{ cursor: "pointer" }}>
            <a
              href="https://github.com/ochosteve08/Notes-Taking-App"
              target="_blank"
            >
              <BsGithub />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortBoxes;
