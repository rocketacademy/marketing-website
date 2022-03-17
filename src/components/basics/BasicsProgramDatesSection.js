import React from 'react'
import Table from 'react-bootstrap/Table';
import { StaticImage } from 'gatsby-plugin-image';


const BasicsProgramDatesSection = ({ programdates, upcomingCourseDates }) => {
  let basicsDates;

  const getFormattedDate = (d) => {
      const dateObj = new Date(d);
      const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(dateObj);
      const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(dateObj);
      const da = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(dateObj);
      return `${da} ${mo} ${ye}`;
  }

  const BasicsProgramDatesRow = ({ batch }) => {
    const startDate = new Date(batch.node.start.dateTime);
    const deadline = startDate.setDate(startDate.getDate() - 2);

    return (
      <tr>
        <td className='basics-program-dates-duration'>5 weeks</td>
        <td className='basics-program-dates-firstclass'>
          <div className='basics-program-dates-content'>
            <div>
              {getFormattedDate(batch.node.start.dateTime)}
            </div>
            <div className='basics-program-dates-arrow-container'>
              <StaticImage src="../../img/basics-arrow-right.png" alt="right arrow" />
            </div>
          </div>
        </td>
        <td>{getFormattedDate(batch.node.end.dateTime)}</td>
        <td>{getFormattedDate(deadline)}</td>
      </tr>
    )
  }

  if (upcomingCourseDates) {
    basicsDates = upcomingCourseDates.filter(course => course.node.summary.includes('Basics'));
  }

  return (
    <div className='container basics-program-dates-container section' id={programdates.sidebarlabel.replace(/ /g, "-").toLowerCase()}>
      <div className='basics-program-dates-heading'>
        {programdates.heading}
      </div>

      <div className='basics-program-dates-subheading'>
        {programdates.subheading}
      </div>

      <div className='row basics-program-dates-row-desktop'>
        <Table borderless className='basics-program-dates-row'>
          <thead>
              <tr>
                <th>DURATION</th>
                <th>FIRST CLASS</th>
                <th>LAST CLASS</th>
                <th>ADMISSIONS DEADLINE</th>
              </tr>
            </thead> 
            <tbody>
              {upcomingCourseDates ? (
                basicsDates.map((batch, index) => {
                return (
                  <BasicsProgramDatesRow batch={batch} key={index} />
                )
              })
              ) : (
                <div>dynamic data from gcal</div>
              )}
            </tbody>
        </Table>
      </div>
      <div className='row basics-program-dates-row-mobile'>
        {upcomingCourseDates ? (
          basicsDates.map((batch, index) => {
            const startDate = new Date(batch.node.start.dateTime);
            const deadline = startDate.setDate(startDate.getDate() - 14);

            return (
              <div key={index} className='col-12 basics-program-dates-col'>
                <div className='basics-program-dates-container'>
                  <span>
                    {getFormattedDate(batch.node.start.dateTime)}
                  </span>
                  <span className='basics-program-dates-arrow-container'>
                    <StaticImage src="../../img/basics-arrow-right.png" alt="right arrow" />
                  </span>
                  <span>
                    {getFormattedDate(batch.node.end.dateTime)}
                  </span>
                </div>
                <div className='basics-program-dates-deadline'>
                  Admissions deadline: {getFormattedDate(deadline)}
                </div>
              </div>
            )
          })
        ) : (
          <div>dynamic dates from gcal</div>
        )}
      </div>
    </div>
  )
}

export default BasicsProgramDatesSection