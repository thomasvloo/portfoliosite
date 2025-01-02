import * as React from "react";
import "./SideNavigationDrawer.css";
import { Link } from "react-router-dom";

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
          <div className="navigationItem">
            <div className="hline" />
            <Link to="/">About Me</Link>
          </div>
          <div className="navigationItem">
            <div className="hline" />
            <Link to="/education">Education</Link>
          </div>
          <div className="navigationItem">
            <div className="hline" />
            <Link to="/projects">Project Experience</Link>
          </div>
          <div className="navigationItem">
            <div className="hline" />
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNavigationDrawer;
