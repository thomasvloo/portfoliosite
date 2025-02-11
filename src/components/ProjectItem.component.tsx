import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import TechIconFlipper from 'components/TechIconFlipper.component';
import React from 'react';
import styled from 'styled-components';
import { ProjectDetails } from 'types/types';

interface ProjectItemProps {
  project: ProjectDetails;
  expanded: boolean;
  onChange: (event: React.SyntheticEvent, isExpanded: boolean) => void;
}

// Styled Components
const ProjectItemContainer = styled.div`
  display: block;
  background: transparent;
  width: 100%;
`;

const StyledAccordion = styled(Accordion)`
  border-radius: 50px !important;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.colors.primary};
  background-color: transparent !important;
  box-shadow: none;

  &.Mui-expanded {
    background-color: transparent !important;
  }
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  padding: 10px;
  .MuiAccordionSummary-expandIconWrapper {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ProjectTitle = styled.span`
  font-size: ${(props) => props.theme.typography.fontSize.large};
  font-weight: ${(props) => props.theme.typography.fontWeight.bold};
  color: ${(props) => props.theme.colors.primary};
  opacity: 0.8;
`;

const ProjectDetailsContainer = styled.div`
  color: ${(props) => props.theme.colors.secondary};
  width: 100%;
  font-size: ${(props) => props.theme.typography.fontSize.medium};
  padding: 5px;
`;

const ProjectTechnologies = styled.div`
  width: 100%;
  margin-top: 10px;
  color: ${(props) => props.theme.colors.secondary};
  font-size: ${(props) => props.theme.typography.fontSize.medium};
  overflow: hidden;
  position: relative;
  border-bottom: ${(props) => props.theme.colors.primary} 1px solid;
  white-space: nowrap;
`;

const TechScrollContainer = styled.div`
  display: flex;
  align-items: center;

  &:hover .scrollGroup {
    animation-play-state: paused;
  }
`;

const scrollAnimation = `
  @keyframes scrolling {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const ScrollGroup = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 200%;
  will-change: transform;
  animation: scrolling 25s linear infinite;
  ${scrollAnimation}
`;

const ProjectItem: React.FC<ProjectItemProps> = ({
  project,
  expanded,
  onChange,
}) => {
  const { title, description, technologies } = project;

  return (
    <ProjectItemContainer>
      <StyledAccordion expanded={expanded} onChange={onChange}>
        <StyledAccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="project-content"
          id="project-header"
        >
          <TitleWrapper>
            <ProjectTitle>{title}</ProjectTitle>
          </TitleWrapper>
        </StyledAccordionSummary>
        <AccordionDetails>
          <ProjectDetailsContainer>
            <span>{description}</span>
          </ProjectDetailsContainer>
        </AccordionDetails>
      </StyledAccordion>
      <ProjectTechnologies>
        <TechScrollContainer>
          <ScrollGroup>
            {technologies.map((technology, index) => (
              <TechIconFlipper
                key={index}
                tech={technology}
                flipInterval={4000}
              />
            ))}
          </ScrollGroup>
          <ScrollGroup aria-hidden>
            {technologies.map((technology, index) => (
              <TechIconFlipper
                key={index}
                tech={technology}
                flipInterval={4000}
              />
            ))}
          </ScrollGroup>
        </TechScrollContainer>
      </ProjectTechnologies>
    </ProjectItemContainer>
  );
};

export default ProjectItem;
