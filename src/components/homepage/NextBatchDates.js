import React from "react";

const NextBatchDates = ({ details, upcomingCourseDates }) => {
  let heading = "";

  if (details.heading === "Coding Basics") {
    heading = "Basics";
  } else if (details.heading === "Coding Bootcamp") {
    heading = "Bootcamp";
  }

  let nextStartDate = "";
  let nextEndDate = "";

  if (details.type === "Part Time") {
    nextStartDate = new Date("2022-11-26");
    nextEndDate = new Date("2023-06-20");
  }
  if (details.type === "Full Time") {
    nextStartDate = new Date("2022-10-17");
    nextEndDate = new Date("2023-02-10");
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
    return (
      <div>
        <li>
          ✓ Upcoming course dates: 21 Nov 2022 - 16 Jan 2023, 26 Jan 2023 - 6
          Mar 2023
        </li>
      </div>
    );
  }
  return <li>✓ Next batch: {displayDate}</li>;
};

export default NextBatchDates;
