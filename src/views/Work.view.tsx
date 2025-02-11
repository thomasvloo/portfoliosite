import WorkItem from 'components/WorkItem.component';
import React, { useState } from 'react';
import styled from 'styled-components';
import { workList } from 'types/workExperience';

// Styled component replacing .workContainer
const WorkContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

function WorkView() {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange =
    (panelId: number) =>
    (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panelId : false);
    };

  return (
    <WorkContainer>
      {workList.map((work) => (
        <WorkItem
          key={work.id}
          work={work}
          expanded={expanded === work.id}
          onChange={handleChange(work.id)}
        />
      ))}
    </WorkContainer>
  );
}

export default WorkView;
