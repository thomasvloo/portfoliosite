import './ProjectExperienceView.css';

import ProjectItem from 'components/projectItem/projectItem';
import React, { useState } from 'react';
import { projectsList } from 'types/projectExperience';

function ProjectExperienceView() {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange =
    (panelId: number) =>
    (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panelId : false);
    };

  const projectItems = projectsList.map((project, index) => (
    <ProjectItem
      key={index}
      project={project}
      expanded={expanded === index}
      onChange={handleChange(index)}
    />
  ));

  return <div className="projectsContainer">{projectItems}</div>;
}

export default ProjectExperienceView;
