import React from "react";
import Table from "react-bootstrap/Table";
import { StaticImage } from "gatsby-plugin-image";

const BasicsProgramDatesSection = () => {
  return (
    <div className="container basics-program-dates-container section">
      <div className="basics-program-dates-heading">Upcoming Program Dates</div>
      <div className="basics-program-dates-subheading">
        Every Monday and Thursday from 7.30pm-9.30pm GMT+08
      </div>
      <div className="row basics-program-dates-row-desktop">
        <Table borderless className="basics-program-dates-row">
          <thead>
            <tr>
              <th>DURATION</th>
              <th>FIRST CLASS</th>
              <th>LAST CLASS</th>
              <th>ADMISSIONS DEADLINE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="basics-program-dates-duration">6 weeks</td>
              <td className="basics-program-dates-firstclass">
                <div className="basics-program-dates-content">
                  <div>3 Oct 2022</div>
                  <div className="basics-program-dates-arrow-container">
                    <StaticImage
                      src="../../img/basics-arrow-right.png"
                      alt="right arrow"
                    />
                  </div>
                </div>
              </td>
              <td>14 Nov 2022</td>
              <td>26 Sep 2022</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="row basics-program-dates-row-mobile">
        <div className="col-12 basics-program-dates-col">
          <div className="basics-program-dates-container">
            <span>3 Oct 2022</span>
            <span className="basics-program-dates-arrow-container">
              <StaticImage
                src="../../img/basics-arrow-right.png"
                alt="right arrow"
              />
            </span>
            <span>14 Nov 2022</span>
          </div>
          <div className="basics-program-dates-deadline">
            Admissions deadline: 26 Sep 2022
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicsProgramDatesSection;
