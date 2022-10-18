import React from "react";

const NextBatchDates = ({ details, upcomingCourseDates }) => {
  if (details.heading === "Coding Basics") {
    return (
      <div>
        <li>
          ✓ Upcoming course dates: 21 Nov 2022 - 16 Jan 2023, 26 Jan 2023 - 6
          Mar 2023
        </li>
      </div>
    );
  }

  let nextStartDate = "";
  let nextEndDate = "";

  if (details.type === "Part Time") {
    nextStartDate = new Date("2022-11-26");
    nextEndDate = new Date("2023-06-20");
  } else if (details.type === "Full Time") {
    nextStartDate = new Date("2023-01-30");
    nextEndDate = new Date("2023-05-18");
  }

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

  const displayDate = `${getFormattedDate(nextStartDate)} - ${getFormattedDate(
    nextEndDate
  )}`;

  return <li>✓ Next batch: {displayDate}</li>;
};

export default NextBatchDates;
