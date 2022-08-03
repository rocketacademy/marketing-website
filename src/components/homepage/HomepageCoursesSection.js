import React from "react";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import CourseCard from "./CourseCard";

const HomepageCoursesSection = ({ courses, upcomingCourseDates }) => {
  return (
    <div className="container-fluid homepage-courses-container">
      <div className="container">
        <div className="row homepage-courses-heading-row">
          <div className="col-md-6 order-2 order-md-1 homepage-courses-heading-col-left">
            <h2>{courses.heading}</h2>
          </div>
          <div className="col-md-6 order-1 order-md-2 homepage-courses-heading-col-right">
            <div className="image-container">
              <PreviewCompatibleImage imageInfo={courses.image} />
            </div>
          </div>
        </div>
        <div className="row homepage-courses-cards-row">
          {courses.details.map((detail, index) => {
            return (
              <div
                className="col-12 col-md-4 mb-3 homepage-courses-cards-col"
                key={index}
              >
                <CourseCard
                  details={detail}
                  upcomingCourseDates={upcomingCourseDates}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomepageCoursesSection;
