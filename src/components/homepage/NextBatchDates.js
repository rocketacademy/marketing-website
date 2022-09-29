import React from "react";

const NextBatchDates = ({ details, upcomingCourseDates }) => {
  if (upcomingCourseDates) {
    let heading = "";

    if (details.heading === "Coding Basics") {
      heading = "Basics";
    } else if (details.heading === "Coding Bootcamp") {
      heading = "Bootcamp";
    }

    let nextStartDate = "";
    let nextEndDate = "";

    if (heading === "Basics") {
      nextStartDate = new Date("2022-10-03");
      nextEndDate = new Date("2022-11-14");
    } else {
      if (details.type === "Full Time" || details.type === "Part Time") {
        nextStartDate = new Date("2022-10-17");
        nextEndDate = new Date("2023-02-10");
      }
    }

    let startDate = nextStartDate;
    let endDate = nextEndDate;

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

    const displayDate = `${getFormattedDate(startDate)} - ${getFormattedDate(
      endDate
    )}`;

    if (heading === "Basics") {
      return <li>✓ Next Batch: 3 Oct 2022 - 14 Nov 2022</li>;
    }
    return <li>✓ Next Batch: {displayDate}</li>;
  } else {
    return <li></li>;
  }
};

export default NextBatchDates;
