import './workItem.css';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import React from 'react';
import { WorkDetails } from 'types/types';

interface WorkItemProps {
  work: WorkDetails;
  expanded: boolean;
  onChange: (event: React.SyntheticEvent, isExpanded: boolean) => void;
}

function WorkItem({ work, expanded, onChange }: WorkItemProps) {
  const { company, position, startYear, endYear, location, description } = work;

  return (
    <div className="workItem">
      <Accordion expanded={expanded} onChange={onChange}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="work-content"
          id="work-header"
        >
          <div className="accordionSummaryContent">
            <span className="work-years">
              {startYear} - {endYear}
            </span>
            <span className="company">{company}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="workDetails">
            <p className="work-labelValueRow">
              <span className="work-label">Position:</span>
              <span className="work-value">{position}</span>
            </p>
            <p className="work-labelValueRow">
              <span className="work-label">Location:</span>
              <span className="work-value">{location}</span>
            </p>
            <p className="work-labelValueRow">
              <span className="work-label">Description:</span>
              <span className="work-value">{description}</span>
            </p>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default WorkItem;
