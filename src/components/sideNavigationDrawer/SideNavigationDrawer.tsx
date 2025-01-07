import * as React from "react";
import "./SideNavigationDrawer.css";
import { NavLink } from "react-router-dom";

function SideNavigationDrawer() {
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
          <NavLink to="/" className="navigationItem">
            <div className="hline" />
            <span>About Me</span>
          </NavLink>
          <NavLink to="/education" className="navigationItem">
            <div className="hline" />
            <span>Education</span>
          </NavLink>
          <NavLink to="/projects" className="navigationItem">
            <div className="hline" />
            <span>Project Experience</span>
          </NavLink>
          <NavLink to="/contact" className="navigationItem">
            <div className="hline" />
            <span>Contact</span>
          </NavLink>
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
