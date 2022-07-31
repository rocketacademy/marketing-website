import React from "react";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const AboutRocketSection = ({ rocket }) => {
  return (
    <div className="container about-rocket-container">
      <div className="row about-rocket-top-row">
        <div className="about-rocket-top-heading">
          <p>{rocket.heading}</p>
        </div>
        <div className="about-rocket-top-text">{rocket.text}</div>
      </div>
      <div className="row about-rocket-bottom-row">
        <div className="col-12 col-md-4 about-rocket-bottom-col-left">
          <div className="about-rocket-bottom-col-left-image">
            <PreviewCompatibleImage imageInfo={rocket.image} />
          </div>
        </div>
        <div className="col-12 col-md-8 about-rocket-bottom-col-right">
          <div className="about-rocket-bottom-col-right-text">
            {rocket.quote}
          </div>
          <div className="about-rocket-bottom-col-right-name">
            {rocket.name}, &nbsp;
            <span className="about-rocket-bottom-col-right-position">
              {rocket.position}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutRocketSection;
