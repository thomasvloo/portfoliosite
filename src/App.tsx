import './App.css';

import React, { useEffect, useRef, useState } from 'react';
import ContactView from 'views/ContactView/ContactView';
import ProjectExperienceView from 'views/ProjectExperienceView/ProjectExperienceView';
import ReferralsView from 'views/ReferralsView/ReferralsView';
import WorkView from 'views/WorkView/WorkView';

import SideNavigationDrawer from './components/sideNavigationDrawer/SideNavigationDrawer';
import AboutMeView from './views/AboutMeView/AboutMeView';
import EducationView from './views/EducationView/EducationView';

function App() {
  const [activeSectionId, setActiveSectionId] = useState<string>('');

  const aboutRef = useRef<HTMLElement | null>(null);
  const educationRef = useRef<HTMLElement | null>(null);
  const workRef = useRef<HTMLElement | null>(null);
  const projectExperienceRef = useRef<HTMLElement | null>(null);
  const referralsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const sections = [
      { id: 'aboutme', ref: aboutRef },
      { id: 'education', ref: educationRef },
      { id: 'work', ref: workRef },
      { id: 'projectexperience', ref: projectExperienceRef },
      { id: 'referrals', ref: referralsRef },
      { id: 'contact', ref: contactRef },
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
          window.history.replaceState(null, '', `#${activeSectionId}`);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      },
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
          <AboutMeView />
        </section>
        <section id="education" ref={educationRef} className="fullPageSection">
          <EducationView />
        </section>
        <section id="work" ref={workRef} className="fullPageSection">
          <WorkView />
        </section>
        <section
          id="projectexperience"
          ref={projectExperienceRef}
          className="fullPageSection"
        >
          <ProjectExperienceView />
        </section>
        <section id="referrals" ref={referralsRef} className="fullPageSection">
          <ReferralsView />
        </section>
        <section id="contact" ref={contactRef} className="fullPageSection">
          <ContactView />
        </section>
      </div>
    </div>
  );
}

export default App;
