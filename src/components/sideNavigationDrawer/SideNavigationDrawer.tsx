import * as React from "react";
import "./SideNavigationDrawer.css";

interface Props {
  activeSectionId: string;
}

function SideNavigationDrawer({ activeSectionId }: Props) {
  return (
    <div className="drawerContainer">
      <div className="drawerContent">
        <div>
          <img
            className="profilePic"
            src="../../../assets/profile.jpeg"
            alt="Thomas van Loo"
          />
          <h1>Thomas van Loo</h1>
          <h3>Full Stack Engineer</h3>
        </div>
        <div className="navigationContainer">
          <a
            href="#aboutme"
            className={`navigationItem ${
              activeSectionId === "aboutme" ? "active" : ""
            }`}
          >
            <div className="hline" />
            <span>About Me</span>
          </a>
          <a
            href="#education"
            className={`navigationItem ${
              activeSectionId === "education" ? "active" : ""
            }`}
          >
            <div className="hline" />
            <span>Education</span>
          </a>
          <a
            href="#projectexperience"
            className={`navigationItem ${
              activeSectionId === "projectexperience" ? "active" : ""
            }`}
          >
            <div className="hline" />
            <span>Project Experience</span>
          </a>
          <a
            href="#contact"
            className={`navigationItem ${
              activeSectionId === "contact" ? "active" : ""
            }`}
          >
            <div className="hline" />
            <span>Contact</span>
          </a>
        </div>
        <div className="iconContainer">
          <a
            href="https://github.com/thomasvloo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../../../assets/githubicon.png" alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/thomas-van-loo-a028a1213/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../../../assets/linkedinicon.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SideNavigationDrawer;
