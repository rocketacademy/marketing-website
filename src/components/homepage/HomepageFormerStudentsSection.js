import React from "react";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const HomepageFormerStudentsSection = ({ formerstudents }) => {
  return (
    <div className="container-fluid homepage-formerstudents-container">
      <div className="container">
        <div className="row homepage-formerstudents-row">
          {formerstudents.map((student, index) => {
            return (
              <React.Fragment key={index}>
                <div className="col-12 col-md-4 homepage-formerstudents-col">
                  <div className="homepage-formerstudents-company">
                    <PreviewCompatibleImage imageInfo={student} />
                  </div>
                  <div className="homepage-formerstudents-testimonial">
                    <p>{student.testimonial}</p>
                  </div>
                  <div className="homepage-formerstudents-info">
                    <p className="homepage-formerstudent-name">
                      {student.studentname}
                    </p>
                    <p className="homepage-formerstudent-position">
                      {student.position}
                    </p>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomepageFormerStudentsSection;
