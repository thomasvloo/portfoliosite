import React, { useState, useEffect, useRef } from "react";
import SideNavigationDrawer from "./components/sideNavigationDrawer/SideNavigationDrawer";
import "./App.css";
import AboutMe from "./views/AboutMeView/AboutMeView";
import Education from "./views/EducationView/EducationView";
import ProjectExperience from "views/ProjectExperienceView/ProjectExperienceView";
import Contact from "views/ContactView/ContactView";

function App() {
  const [activeSectionId, setActiveSectionId] = useState<string>("");

  const aboutRef = useRef<HTMLElement | null>(null);
  const educationRef = useRef<HTMLElement | null>(null);
  const projectExperienceRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const sections = [
      { id: "aboutme", ref: aboutRef },
      { id: "education", ref: educationRef },
      { id: "projectexperience", ref: projectExperienceRef },
      { id: "contact", ref: contactRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisible = entries[0];
        for (const entry of entries) {
          if (entry.intersectionRatio > mostVisible.intersectionRatio) {
            mostVisible = entry;
          }
        }
        if (mostVisible.isIntersecting) {
          setActiveSectionId(mostVisible.target.id);
          window.history.replaceState(null, "", `#${activeSectionId}`);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );
    sections.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    }, []);

    return () => observer.disconnect();
  });

  return (
    <div className="appContainer">
      <SideNavigationDrawer activeSectionId={activeSectionId} />
      <div className="scrollContainer">
        <section id="aboutme" ref={aboutRef} className="fullPageSection">
          <AboutMe />
        </section>
        <section id="education" ref={educationRef} className="fullPageSection">
          <Education />
        </section>
        <section
          id="projectexperience"
          ref={projectExperienceRef}
          className="fullPageSection"
        >
          <ProjectExperience />
        </section>
        <section id="contact" ref={contactRef} className="fullPageSection">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
