import './WorkView.css';

import WorkItem from 'components/workItem/workItem';
import React, { useState } from 'react';
import { workList } from 'types/workExperience';

function WorkView() {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange =
    (panelId: number) =>
    (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panelId : false);
    };

  const workItems = workList.map((work) => (
    <WorkItem
      key={work.id}
      work={work}
      expanded={expanded === work.id}
      onChange={handleChange(work.id)}
    />
  ));

  return <div className="workContainer">{workItems}</div>;
}

export default WorkView;
