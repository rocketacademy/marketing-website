import React from "react";
import GetStartedButton from "./GetStartedButton";

const StartCodingSection = () => {
  return (
    <div className="container-fluid startcoding-outer-container">
      <div className="container startcoding-inner-container">
        <h2 className="startcoding-heading">🚀 Start Coding Today</h2>
        <div className="row startcoding-text-row">
          <div className="startcoding-info-container">
            <div className="startcoding-info">
              <div className="startcoding-basics-text">Coding Basics</div>
              <div className="startcoding-basics-date">
                21 Nov 2022, 26 Jan 2023
              </div>
            </div>
            <div className="startcoding-info">
              <div className="startcoding-bootcampft-text">
                Bootcamp (Full Time)
              </div>
              <div className="startcoding-bootcampft-date">30 Jan 2023</div>
            </div>
            <div className="startcoding-info">
              <div className="startcoding-bootcampft-text">
                Bootcamp (Part Time)
              </div>
              <div className="startcoding-bootcampft-date">26 Nov 2022</div>
            </div>
          </div>
        </div>
        <GetStartedButton toPath={"/get-started/"} />
      </div>
    </div>
  );
};

export default StartCodingSection;
