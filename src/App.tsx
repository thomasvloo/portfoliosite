import React, { useEffect, useRef, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ContactView from 'views/Contact.view';
import ProjectExperienceView from 'views/ProjectExperience.view';
import ReferralsView from 'views/Referrals.view';
import WorkView from 'views/Work.view';

import SideNavigationDrawer from './components/navigation/SideNavigationDrawer.component';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';
import AboutMeView from './views/AboutMe.view';
import EducationView from './views/Education.view';

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`;

const ScrollContainer = styled.div`
  margin-left: ${(props) => props.theme.layout.sidebarWidth};
  width: ${(props) => props.theme.layout.contentWidth};
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;
`;

const FullPageSection = styled.section`
  width: 100%;
  height: ${(props) => props.theme.layout.sectionHeight};
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

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
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <SideNavigationDrawer activeSectionId={activeSectionId} />
        <ScrollContainer>
          <FullPageSection id="aboutme" ref={aboutRef}>
            <AboutMeView />
          </FullPageSection>
          <FullPageSection id="education" ref={educationRef}>
            <EducationView />
          </FullPageSection>
          <FullPageSection id="work" ref={workRef}>
            <WorkView />
          </FullPageSection>
          <FullPageSection id="projectexperience" ref={projectExperienceRef}>
            <ProjectExperienceView />
          </FullPageSection>
          <FullPageSection id="referrals" ref={referralsRef}>
            <ReferralsView />
          </FullPageSection>
          <FullPageSection id="contact" ref={contactRef}>
            <ContactView />
          </FullPageSection>
        </ScrollContainer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
