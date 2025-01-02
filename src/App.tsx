import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNavigationDrawer from "./components/sideNavigationDrawer/SideNavigationDrawer";
import "./App.css";
import AboutMe from "./views/AboutMeView/AboutMeView";
import Education from "./views/EducationView/EducationView";
import ProjectExperience from "views/ProjectExperienceView/ProjectExperienceView";
import Contact from "views/ContactView/ContactView";

function App() {
  return (
    <Router>
      <div className="container">
        <SideNavigationDrawer />
        <div className="contentContainer">
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<ProjectExperience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
