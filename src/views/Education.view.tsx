import EducationItem from 'components/education/EducationItem.component';
import React from 'react';
import styled from 'styled-components';
import { educationList } from 'constants/education.constants';

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
