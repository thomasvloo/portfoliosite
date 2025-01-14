import './EducationView.css';

import EducationItem from 'components/educationItem/EducationItem';
import React from 'react';

function EducationView() {
  const educationList = [
    {
      id: 0,
      schoolName: 'Technical University of Munich (TUM)',
      startYear: 2021,
      endYear: 2024,
      degree: 'Master of Science',
      subject: 'Computer Science',
      thesis:
        'A Soft Integration Approach for the Integration of Blockchains with Process Management Technology',
      grade: 1.0,
      location: 'Munich, Germany',
    },
    {
      id: 1,
      schoolName: 'Technical University of Munich (TUM)',
      startYear: 2016,
      endYear: 2021,
      degree: 'Bachelor of Science',
      subject: 'Computer Science',
      thesis:
        'Scalable Workload Characterization of the Google Cluster Dataset',
      grade: 1.7,
      location: 'Munich, Germany',
    },
    {
      id: 2,
      schoolName: 'Wilhelm-Hausenstein-Gymnasium',
      startYear: 2010,
      endYear: 2015,
      degree: 'Abitur',
      location: 'Munich, Germany',
    },
    {
      id: 3,
      schoolName: 'Bavarian International School',
      startYear: 2007,
      endYear: 2010,
      location: 'Haimhausen, Germany',
    },
    {
      id: 4,
      schoolName: 'Mariposa Elementary School',
      startYear: 2001,
      endYear: 2006,
      location: 'Redlands, California',
    },
  ];

  const educationItems = educationList.map((education) => (
    <EducationItem key={education.id} education={education} />
  ));

  return <div className="educationContainer">{educationItems}</div>;
}

export default EducationView;
