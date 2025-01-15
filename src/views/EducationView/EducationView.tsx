import './EducationView.css';

import EducationItem from 'components/educationItem/EducationItem';
import React from 'react';
import { educationList } from 'types/education';

function EducationView() {
  const educationItems = educationList.map((education) => (
    <EducationItem key={education.id} education={education} />
  ));

  return <div className="educationContainer">{educationItems}</div>;
}

export default EducationView;
