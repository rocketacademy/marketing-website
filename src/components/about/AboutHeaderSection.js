import React from "react";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import "../../styles/main.scss";

const AboutHeaderSection = ({ header, image }) => {
  return (
    <div className="container-fluid about-header-outer-container">
      <div className="container about-header-inner-container">
        <div className="about-header-text-container">
          <div className="about-header-heading">{header.heading}</div>
          <div className="about-header-subheading">{header.subheading}</div>
        </div>
        <div className="about-header-image">
          <PreviewCompatibleImage imageInfo={image} />
        </div>
      </div>
    </div>
  );
};

export default AboutHeaderSection;
