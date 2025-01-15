import './projectItem.css';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import TechIconFlipper from 'components/techIconFlipper/techIconFlipper';
import React from 'react';
import { ProjectDetails } from 'types/types';

interface ProjectItemProps {
  project: ProjectDetails;
  expanded: boolean;
  onChange: (event: React.SyntheticEvent, isExpanded: boolean) => void;
}

function ProjectItem({ project, expanded, onChange }: ProjectItemProps) {
  const { title, description, technologies } = project;

  return (
    <div className="projectItem">
      <Accordion expanded={expanded} onChange={onChange}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="project-content"
          id="project-header"
        >
          <div className="titleWrapper">
            <span className="projectTitle">{title}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="projectDetails">
            <span className="projectDescription">{description}</span>
          </div>
        </AccordionDetails>
      </Accordion>
      <div className="projectTechnologies">
        <div className="techScrollContainer">
          <div className="scrollGroup">
            {technologies.map((technology, index) => (
              <TechIconFlipper
                key={index}
                tech={technology}
                flipInterval={4000}
              />
            ))}
          </div>
          <div aria-hidden className="scrollGroup">
            {technologies.map((technology, index) => (
              <TechIconFlipper
                key={index}
                tech={technology}
                flipInterval={4000}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
