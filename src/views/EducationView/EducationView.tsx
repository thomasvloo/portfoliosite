import EducationItem from 'components/educationItem/EducationItem';
import React from 'react';
import styled from 'styled-components';
import { educationList } from 'types/education';

// Styled component replacing .educationContainer
const EducationContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

function EducationView() {
  return (
    <EducationContainer>
      {educationList.map((education) => (
        <EducationItem key={education.id} education={education} />
      ))}
    </EducationContainer>
  );
}

export default EducationView;
