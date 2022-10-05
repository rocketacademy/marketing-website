import React from "react";
import GetStartedButton from "./GetStartedButton";

const NextBatchSection = ({ upcomingCourseDates, pagename }) => {
  if (upcomingCourseDates) {
    const getFormattedDate = (d) => {
      const dateObj = new Date(d);
      const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
        dateObj
      );
      const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(
        dateObj
      );
      const da = new Intl.DateTimeFormat("en", { day: "numeric" }).format(
        dateObj
      );

      return `${da} ${mo} ${ye}`;
    };

    let nextStartDate;
    let followingStartDate;
    let toPath;

    if (pagename === "basics") {
      nextStartDate = new Date("2022-11-21");
      followingStartDate = new Date("2023-01-26");
      toPath = "https://learn.rocketacademy.co/student/";
    } else {
      nextStartDate = new Date("2022-10-17");
      followingStartDate = new Date("2022-11-26");
      toPath = "/courses/bootcamp/apply/";
    }

    return (
      <div className="container basics-next-batch-container">
        <div className="basics-next-batch-content">
          <p className="basics-next-batch-heading">🚀 Next Launch</p>
          <p className="basics-next-batch-text basics-next-batch-text-desktop">
            Now enrolling for {getFormattedDate(nextStartDate)} and{" "}
            {getFormattedDate(followingStartDate)}
          </p>
          <p className="basics-next-batch-text basics-next-batch-text-mobile">
            Now enrolling for <br />
            {getFormattedDate(nextStartDate)},{" "}
            {getFormattedDate(followingStartDate)}
          </p>
        </div>
        <div className="basics-next-batch-button-container">
          <GetStartedButton toPath={toPath} />
        </div>
      </div>
    );
  } else {
    return <div>dynamic data from gcal</div>;
  }
};

export default NextBatchSection;
