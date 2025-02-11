import React from 'react';
import styled from 'styled-components';

interface Props {
  activeSectionId: string;
}

// Styled Components
const DrawerContainer = styled.div`
  width: 25%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const Title = styled.h3`
  color: ${(props) => props.theme.colors.primary};
`;

const DrawerContent = styled.div`
  color: ${(props) => props.theme.colors.secondary};
  height: 100%;
  padding: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
`;

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin-top: 20%;
`;

const NavigationItem = styled.a<{ active: boolean }>`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  width: 100%;
  text-decoration: none;
  color: inherit;
  margin-top: 10px;
  padding: 0;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:hover span {
    color: ${(props) => props.theme.colors.primary}; /* Only text changes */
  }

  &:hover .hline {
    background-color: ${(props) =>
      props.theme.colors.primary}; /* Only HLine changes */
  }

  ${(props) =>
    props.active &&
    `
      span {
        color: ${props.theme.colors.primary};
      }
      .hline {
        background-color: ${props.theme.colors.primary};
      }
  `}
`;

const HLine = styled.div`
  height: 1px;
  background-color: ${(props) => props.theme.colors.secondary};
  width: 20%;
  margin-right: 10px;
`;

const ProfilePic = styled.img`
  width: 50%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 50%;
`;

const IconContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 10px;
`;

const SideNavigationDrawer: React.FC<Props> = ({ activeSectionId }) => {
  return (
    <DrawerContainer>
      <DrawerContent>
        <div>
          <ProfilePic src="../../../assets/profile.jpeg" alt="Thomas van Loo" />
          <h1>Thomas van Loo</h1>
          <Title>Full Stack Engineer</Title>
        </div>
        <NavigationContainer>
          {[
            { id: 'aboutme', label: 'About Me' },
            { id: 'education', label: 'Education' },
            { id: 'work', label: 'Work Experience' },
            { id: 'projectexperience', label: 'Project Experience' },
            { id: 'referrals', label: 'Referrals & Certifications' },
            { id: 'contact', label: 'Contact' },
          ].map((navItem) => (
            <NavigationItem
              key={navItem.id}
              href={`#${navItem.id}`}
              active={activeSectionId === navItem.id}
            >
              <HLine className="hline" />
              <span>{navItem.label}</span>
            </NavigationItem>
          ))}
        </NavigationContainer>
        <IconContainer>
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
        </IconContainer>
      </DrawerContent>
    </DrawerContainer>
  );
};

export default SideNavigationDrawer;
