import React from "react";
import "./WorkView.css";
import WorkItem from "components/workItem/workItem";

function Work() {
  const workList = [
    {
      id: 0,
      company: "PwC Germany",
      position: "Associate",
      startYear: "2021",
      endYear: "Present",
      location: "Munich, Germany",
      description: "TBD",
    },
  ];

  const workItems = workList.map((work) => (
    <WorkItem key={work.id} work={work} />
  ));

  return <div className="workContainer">{workItems}</div>;
}

export default Work;
