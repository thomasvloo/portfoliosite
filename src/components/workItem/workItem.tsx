import React from "react";
import "./workItem.css";
import { WorkDetails } from "types/types";

interface WorkItemProps {
  work: WorkDetails;
}

function WorkItem({ work }: WorkItemProps) {
  const { company, position, startYear, endYear, location, description } = work;
  return (
    <div className="workItem">
      <p className="years">
        {startYear} - {endYear}
      </p>
      <div className="workDetails">
        <p className="company">{company}</p>

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
    </div>
  );
}

export default WorkItem;
