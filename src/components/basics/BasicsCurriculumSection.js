import React from "react";

const BasicsCurriculumSection = ({ curriculum }) => {
  return (
    <div
      className="container basics-curriculum-container section"
      id={curriculum.sidebarlabel.replace(/ /g, "-").toLowerCase()}
    >
      <div className="basics-curriculum-heading">{curriculum.heading}</div>
      <div className="row basics-curriculum-row">
        {curriculum.topics.map((topic) => {
          return <div className="basics-curriculum-topic">{topic.topic}</div>;
        })}
      </div>
    </div>
  );
};

export default BasicsCurriculumSection;
