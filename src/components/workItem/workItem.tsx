import React from "react";
import "./workItem.css";
import { WorkDetails } from "types/types";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface WorkItemProps {
  work: WorkDetails;
}

function WorkItem({ work }: WorkItemProps) {
  const { company, position, startYear, endYear, location, description } = work;
  return (
    <div className="workItem">
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="work-content"
          id="work-header"
        >
          <div className="accordionSummaryContent">
            <span className="years">
              {startYear} - {endYear}
            </span>
            <span className="company">{company}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="workDetails">
            <p className="labelValueRow">
              <span className="label">Position:</span>
              <span className="value">{position}</span>
            </p>
            <p className="labelValueRow">
              <span className="label">Location:</span>
              <span className="value">{location}</span>
            </p>
            <p className="labelValueRow">
              <span className="label">Description:</span>
              <span className="value">{description}</span>
            </p>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
    // <div className="workItem">
    //     <p className="years">
    //       {startYear} - {endYear}
    //     </p>
    //     <div className="workDetails">
    //       <p className="company">{company}</p>
    //       <p className="labelValueRow">
    //         <span className="label">Position:</span>
    //         <span className="value">{position}</span>
    //       </p>
    //       <p className="labelValueRow">
    //         <span className="label">Location:</span>
    //         <span className="value">{location}</span>
    //       </p>
    //       <p className="labelValueRow">
    //         <span className="label">Description:</span>
    //         <span className="value">{description}</span>
    //       </p>
    //     </div>
    // </div>
  );
}

export default WorkItem;
