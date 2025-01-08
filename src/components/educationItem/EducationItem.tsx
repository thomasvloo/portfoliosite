import React from "react";
import "./EducationItem.css";
import { EducationDetails } from "types/types";

interface EducationItemProps {
  education: EducationDetails;
}

function EducationItem({ education }: EducationItemProps) {
  const {
    schoolName,
    startYear,
    endYear,
    degree,
    subject,
    thesis,
    grade,
    location,
  } = education;
  return (
    <div className="educationItem">
      <p className="years">
        {startYear} - {endYear}
      </p>
      <div className="schoolDetails">
        <p className="schoolName">{schoolName}</p>
        {degree && (
          <p className="labelValueRow">
            <span className="label">Degree:</span>
            <span className="value">{degree}</span>
          </p>
        )}

        {subject && (
          <p className="labelValueRow">
            <span className="label">Subject:</span>
            <span className="value">{subject}</span>
          </p>
        )}

        {thesis && (
          <p className="labelValueRow">
            <span className="label">Thesis:</span>
            <span className="value">{thesis}</span>
          </p>
        )}

        {grade && (
          <p className="labelValueRow">
            <span className="label">Grade:</span>
            <span className="value">{grade.toFixed(1)}</span>
          </p>
        )}

        <p className="labelValueRow">
          <span className="label">Location:</span>
          <span className="value">{location}</span>
        </p>
      </div>
    </div>
  );
}

export default EducationItem;
