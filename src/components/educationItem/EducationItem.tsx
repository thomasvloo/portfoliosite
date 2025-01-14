import './EducationItem.css';

import React from 'react';
import { EducationDetails } from 'types/types';

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
      <p className="edu-years">
        {startYear} - {endYear}
      </p>
      <div className="schoolDetails">
        <p className="schoolName">{schoolName}</p>
        {degree && (
          <p className="edu-labelValueRow">
            <span className="edu-label">Degree:</span>
            <span className="edu-value">{degree}</span>
          </p>
        )}

        {subject && (
          <p className="edu-labelValueRow">
            <span className="edu-label">Subject:</span>
            <span className="edu-value">{subject}</span>
          </p>
        )}

        {thesis && (
          <p className="edu-labelValueRow">
            <span className="edu-label">Thesis:</span>
            <span className="edu-value">{thesis}</span>
          </p>
        )}

        {grade && (
          <p className="edu-labelValueRow">
            <span className="edu-label">Grade:</span>
            <span className="edu-value">{grade.toFixed(1)}</span>
          </p>
        )}

        <p className="edu-labelValueRow">
          <span className="edu-label">Location:</span>
          <span className="edu-value">{location}</span>
        </p>
      </div>
    </div>
  );
}

export default EducationItem;
