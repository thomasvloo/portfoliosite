import './WorkView.css';

import WorkItem from 'components/workItem/workItem';
import React, { useState } from 'react';

function WorkView() {
  const [expanded, setExpanded] = useState<number | false>(false);

  const workList = [
    {
      id: 0,
      company: 'PwC Germany',
      position: 'Associate',
      startYear: '2021',
      endYear: 'Present',
      location: 'Munich, Germany',
      description: `Worked in financial services consulting, specializing in digital assets,
       blockchain, cryptocurrency, generative AI, and data engineering. Engaged in diverse projects,
        including web and backend development, technical due diligence, code auditing, 
        policy writing, and developing generative AI applications. Supported clients in navigating technical 
        and strategic transformations within the financial sector.
        `,
    },
    {
      id: 1,
      company: 'PwC Germany',
      position: 'Working Student',
      startYear: '2021',
      endYear: '2021',
      location: 'Munich, Germany',
      description: `Contributed to the financial services consulting sector, focusing on blockchain and cryptocurrency.
         Developed a web application for blockchain auditing purposes.
        `,
    },
    {
      id: 2,
      company: 'Opitz Consulting',
      position: 'Working Student',
      startYear: '2019',
      endYear: '2021',
      location: 'Munich, Germany',
      description: `Supported AI application development, leveraging various cloud 
          platforms for computing and deployment.
         Contributed to technical consulting projects by assisting in the 
         design and implementation of innovative AI-driven solutions.`,
    },
    {
      id: 3,
      company: 'ESRI South Africa',
      position: 'Intern',
      startYear: '2016',
      endYear: '2016',
      location: 'Cape Town, South Africa',
      description: `Assisted with software testing by identifying and reporting bugs across various features. 
        Supported geo-referencing efforts by digitizing geographical data for regional projects, contributing
         to accurate and reliable geospatial solutions.
        `,
    },
    {
      id: 4,
      company: '3-GIS',
      position: 'Intern',
      startYear: '2015',
      endYear: '2015',
      location: 'Decatur, Alabama',
      description: `Worked as part of the testing team, focusing on identifying and reporting software bugs to enhance
         product quality and reliability. Assisted in ensuring smooth functionality through detailed testing
          and documentation.`,
    },
  ];

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
