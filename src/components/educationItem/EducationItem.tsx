import React from 'react';
import styled from 'styled-components';
import { EducationDetails } from 'types/types';

interface EducationItemProps {
  education: EducationDetails;
}

const EducationItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

const EduYears = styled.p`
  font-size: ${(props) => props.theme.typography.fontSize.large};
  color: ${(props) => props.theme.colors.primary};
  opacity: 0.8;
  width: 120px;
  white-space: nowrap;
  text-align: left;
  margin-right: 40px;
`;

const SchoolDetails = styled.div`
  color: ${(props) => props.theme.colors.secondary};
  width: 100%;
  font-size: ${(props) => props.theme.typography.fontSize.medium};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const SchoolName = styled.p`
  font-size: ${(props) => props.theme.typography.fontSize.large};
  font-weight: ${(props) => props.theme.typography.fontWeight.bold};
  color: ${(props) => props.theme.colors.primary};
  opacity: 0.8;
`;

const EduLabelValueRow = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  column-gap: 8px;
  margin: 0 0 5px 0;
`;

const EduLabel = styled.span`
  white-space: nowrap;
  font-weight: ${(props) => props.theme.typography.fontWeight.bold};
`;

const EduValue = styled.span`
  font-weight: ${(props) => props.theme.typography.fontWeight.normal};
`;

const EducationItem: React.FC<EducationItemProps> = ({ education }) => {
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
    <EducationItemContainer>
      <EduYears>
        {startYear} - {endYear}
      </EduYears>
      <SchoolDetails>
        <SchoolName>{schoolName}</SchoolName>
        {degree && (
          <EduLabelValueRow>
            <EduLabel>Degree:</EduLabel>
            <EduValue>{degree}</EduValue>
          </EduLabelValueRow>
        )}

        {subject && (
          <EduLabelValueRow>
            <EduLabel>Subject:</EduLabel>
            <EduValue>{subject}</EduValue>
          </EduLabelValueRow>
        )}

        {thesis && (
          <EduLabelValueRow>
            <EduLabel>Thesis:</EduLabel>
            <EduValue>{thesis}</EduValue>
          </EduLabelValueRow>
        )}

        {grade && (
          <EduLabelValueRow>
            <EduLabel>Grade:</EduLabel>
            <EduValue>{grade.toFixed(1)}</EduValue>
          </EduLabelValueRow>
        )}

        <EduLabelValueRow>
          <EduLabel>Location:</EduLabel>
          <EduValue>{location}</EduValue>
        </EduLabelValueRow>
      </SchoolDetails>
    </EducationItemContainer>
  );
};

export default EducationItem;
