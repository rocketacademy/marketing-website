import React from "react";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const HomepageCurriculumSection = ({ curriculum }) => {
  return (
    <div className="container-fluid homepage-curriculum-outer-container">
      <div className="container homepage-curriculum-inner-container">
        <div className="row homepage-curriculum-heading-row">
          <div className="col-12 col-md-6 homepage-curriculum-heading-col-left">
            {/* <p className='curriculum-smalltext'>{curriculum.smalltext}</p> */}
            <h2 className="curriculum-header">{curriculum.heading}</h2>
            <p className="curriculum-subheading">{curriculum.subheading}</p>
          </div>
          <div className="col-12 col-md-6 homepage-curriculum-heading-col-right">
            <PreviewCompatibleImage imageInfo={curriculum.image} />
          </div>
        </div>
        {/* <div className='row homepage-curriculum-edu-staff-row'>
                {curriculum.instructors.map((instructor, index) => {
                  return (
                    <React.Fragment key={index}>
                    <div className='col-12 col-md-6 homepage-edu-staff-col'>
                      <div className='row homepage-edu-staff-row'>
                      <div className='col-4 homepage-curriculum-edu-staff-img'>
                        <PreviewCompatibleImage imageInfo={instructor} />
                      </div>
                    
                      <div className='col-8 homepage-curriculum-edu-staff-info'>
                        <p className='homepage-curriculum-edu-staff-name'>{instructor.name}</p>
                        <p className='homepage-curriculum-edu-staff-position'>{instructor.position}</p>
                        <p className='homepage-curriculum-edu-staff-experience'>{instructor.experience}</p>
                      </div>
                      </div>
                    </div>
                    </React.Fragment>
                  )
                })}
            </div> */}
      </div>
    </div>
  );
};

export default HomepageCurriculumSection;
