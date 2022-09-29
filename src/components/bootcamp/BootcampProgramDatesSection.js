import React from "react";
import Table from "react-bootstrap/Table";
import { StaticImage } from "gatsby-plugin-image";

const BootcampProgramDatesSection = ({ programdates, upcomingCourseDates }) => {
  let bootcampDates;

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

  if (upcomingCourseDates) {
    bootcampDates = upcomingCourseDates.filter(
      (course) =>
        course.node.description.includes("Full Time") ||
        course.node.description.includes("Part Time")
    );
  }

  return (
    <div
      className="container bootcamp-program-dates-container section"
      id={programdates.sidebarlabel.replace(/ /g, "-").toLowerCase()}
    >
      <div className="bootcamp-program-dates-heading">
        {programdates.heading}
      </div>

      <div className="row bootcamp-program-dates-row-desktop">
        <Table borderless className="bootcamp-program-dates-row">
          <thead>
            <tr>
              <th>PACE</th>
              <th>FIRST CLASS</th>
              <th>LAST CLASS</th>
              <th>ADMISSIONS DEADLINE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bootcamp-program-dates-frequency">Full Time</td>
              <td className="bootcamp-program-dates-firstclass">
                <div className="bootcamp-program-dates-content">
                  <div>{getFormattedDate("2022-10-17")}</div>
                  <div className="bootcamp-program-dates-arrow-container">
                    <StaticImage
                      src="../../img/basics-arrow-right.png"
                      alt="right arrow"
                    />
                  </div>
                </div>
              </td>
              <td>{getFormattedDate("2023-02-10")}</td>
              <td>{getFormattedDate("2022-10-03")}</td>
            </tr>
            <tr>
              <td className="bootcamp-program-dates-frequency">Part Time</td>
              <td className="bootcamp-program-dates-firstclass">
                <div className="bootcamp-program-dates-content">
                  <div>{getFormattedDate("2022-11-26")}</div>
                  <div className="bootcamp-program-dates-arrow-container">
                    <StaticImage
                      src="../../img/basics-arrow-right.png"
                      alt="right arrow"
                    />
                  </div>
                </div>
              </td>
              <td>{getFormattedDate("2023-06-20")}</td>
              <td>{getFormattedDate("2022-11-12")}</td>
            </tr>
          </tbody>
        </Table>
      </div>

      <div className="row bootcamp-program-dates-row-mobile">
        <div className="col-12 bootcamp-program-dates-col">
          <div className="bootcamp-program-dates-container">
            <span>{getFormattedDate("2022-10-17")}</span>
            <span className="bootcamp-program-dates-arrow-container">
              <StaticImage
                src="../../img/basics-arrow-right.png"
                alt="right arrow"
              />
            </span>
            <span>{getFormattedDate("2023-02-10")}</span>
          </div>
          <div className="bootcamp-program-dates-deadline">
            Admissions deadline: {getFormattedDate("2022-10-03")}
          </div>
        </div>
        <div className="col-12 bootcamp-program-dates-col">
          <div className="bootcamp-program-dates-container">
            <span>{getFormattedDate("2022-11-26")}</span>
            <span className="bootcamp-program-dates-arrow-container">
              <StaticImage
                src="../../img/basics-arrow-right.png"
                alt="right arrow"
              />
            </span>
            <span>{getFormattedDate("2023-06-20")}</span>
          </div>
          <div className="bootcamp-program-dates-deadline">
            Admissions deadline: {getFormattedDate("2022-11-12")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BootcampProgramDatesSection;
