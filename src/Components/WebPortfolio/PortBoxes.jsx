import React, { useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import Estate from "../../Assets/estate.png";
import Budget from "../../Assets/expensify.svg";
import Stevetech from "../../Assets/stevetech.png";
import Movie from "../../Assets/streamflix.png";
import Notepad from "../../Assets/notepad.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./WebPortfolio.css";

const PortBoxes = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="port-box-container">
      <div className="port-boxes" data-aos="fade-up">
        <div
          className="portfolio-image"
          onClick={() =>
            window.open("https://steve-tech.vercel.app", "_blank", "noreferrer")
          }
        >
          <img src={Stevetech} loading="lazy" alt="stevetech" />
        </div>

        <div>
          <h3>Steve-Technologies</h3>
          <p>
            A full stack MERN website that takes inventory of all employees in
            an organization, their portfolios, assigned client's task and status
            progress.
          </p>
        </div>

        <div>
          <button data-aos="fade-up">REACT</button>
          <button data-aos="fade-down">REDUX</button>
          <button data-aos="fade-up">EXPRESS</button>
          <button data-aos="fade-down">MONGODB</button>
          <button data-aos="fade-up">NODEJS</button>
          <button data-aos="fade-down" style={{ cursor: "pointer" }}>
            <a href="https://github.com/ochosteve08/SteveTech" target="_blank">
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
              "https://estate-management23.vercel.app/",
              "_blank",
              "noreferrer"
            )
          }
        >
          <img src={Estate} loading="lazy" alt="real-estate" />
        </div>

        <div className="portfolio-image">
          <h3>Realtor Real-Estate</h3>
          <p>
            A FullStack Real Estate website where users can check for listed
            properties of their choice and contact the landlord/agent.
            Authenticated users can also list properties for sale or rent.
          </p>
        </div>

        <div>
          <button data-aos="fade-up">REACT</button>
          <button data-aos="fade-up">TAILWIND</button>
          <button data-aos="fade-up">FIREBASE</button>

          <button data-aos="fade-up" style={{ cursor: "pointer" }}>
            <a
              href="https://github.com/ochosteve08/Realtor-Estate"
              target="_blank"
            >
              <BsGithub />
            </a>
          </button>
        </div>
      </div>
      <div className="port-boxes" data-aos="fade-down">
        <div
          onClick={() =>
            window.open(
              "https://expensify-2.vercel.app/",
              "_blank",
              "noreferrer"
            )
          }
          className="portfolio-image"
        >
          <img src={Budget} loading="lazy" alt="Fashionista-boutique" />
        </div>

        <div className="portfolio-image">
          <h3>EXPENSIFY</h3>
          <p>
            A Budget/Expense Tracker App that allows users create budget and
            track expenses made in line with budgeted amount.
          </p>
        </div>

        <div>
          <button data-aos="fade-up">REACT</button>
          <button data-aos="fade-up"> REACT-ROUTER V6.4</button>

          <button data-aos="fade-up" style={{ cursor: "pointer" }}>
            <a href="https://github.com/ochosteve08/Expensify" target="_blank">
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
              "https://stream-flix-sandy.vercel.app/",
              "_blank",
              "noreferrer"
            )
          }
        >
          <img src={Movie} loading="lazy" alt="movie Image" />
        </div>

        <div>
          <h3>StreamFlix</h3>
          <p>
            A cinema website that allows users search for their favorite movies
            and further check for details.
          </p>
        </div>

        <div>
          <button data-aos="fade-up">REACT</button>
          <button data-aos="fade-up">REDUX</button>
          <button data-aos="fade-up">SASS</button>
          <button data-aos="fade-up" style={{ cursor: "pointer" }}>
            <a href="https://github.com/ochosteve08/StreamFlix" target="_blank">
              <BsGithub />
            </a>
          </button>
        </div>
      </div>

      {/* <div className="port-boxes" data-aos="fade-down">
        <div
          onClick={() =>
            window.open(
              "https://fashionista-boutique-ecommerce.netlify.app/",
              "_blank",
              "noreferrer"
            )
          }
          className="portfolio-image"
        >
          <img src={Boutique} loading="lazy" alt="Fashionista-boutique" />
        </div>

        <div className="portfolio-image">
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
      </div> */}

      {/* <div className="port-boxes" data-aos="fade-up">
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
      </div> */}

      <div className="port-boxes" data-aos="fade-down">
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
            A note-taking tool which will help users document their notes and
            store them until when needed. This application allows users to
            create, read, update, and delete notes. Provision is made to ensure
            that data persists.
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
