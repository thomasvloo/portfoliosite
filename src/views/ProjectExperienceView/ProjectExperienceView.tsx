import ProjectItem from 'components/projectItem/projectItem';
import React, { useState } from 'react';
import styled from 'styled-components';
import { projectsList } from 'types/projectExperience';

// Styled component replacing .projectsContainer
const ProjectsContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

function ProjectExperienceView() {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange =
    (panelId: number) =>
    (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panelId : false);
    };

  return (
    <ProjectsContainer>
      {projectsList.map((project, index) => (
        <ProjectItem
          key={index}
          project={project}
          expanded={expanded === index}
          onChange={handleChange(index)}
        />
      ))}
    </ProjectsContainer>
  );
}

export default ProjectExperienceView;
