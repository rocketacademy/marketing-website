import React from 'react'
import Table from 'react-bootstrap/Table';
import { StaticImage } from 'gatsby-plugin-image';


const BootcampProgramDatesSection = ({ programdates, upcomingCourseDates }) => {
  let bootcampDates;

  const getFormattedDate = (d) => {
    const dateObj = new Date(d);
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(dateObj);
    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(dateObj);
    const da = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(dateObj);
    return `${da} ${mo} ${ye}`;
  }

  const BootcampProgramDatesRow = ({ batch }) => {

    const startDate = new Date(batch.node.start.dateTime);
    const deadline = startDate.setDate(startDate.getDate() - 2);

    return (
      <tr>
        <td className='bootcamp-program-dates-frequency'>{batch.node.description}</td>
        <td className='bootcamp-program-dates-firstclass'>
          <div className='bootcamp-program-dates-content'>
            <div>
              {getFormattedDate(batch.node.start.dateTime)}
            </div>
            <div className='bootcamp-program-dates-arrow-container'>
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
    bootcampDates = upcomingCourseDates.filter(course => course.node.description.includes('Full Time') || course.node.description.includes('Part Time') );
  }

  return (
    <div className='container bootcamp-program-dates-container section' id={programdates.sidebarlabel.replace(/ /g, "-").toLowerCase()}>
      <div className='bootcamp-program-dates-heading'>
        {programdates.heading}
      </div>

      <div className='bootcamp-program-dates-subheading'>
        {programdates.subheading}
      </div>

      <div className='row bootcamp-program-dates-row-desktop'>
        <Table borderless className='bootcamp-program-dates-row'>
          <thead>
              <tr>
                <th>PACE</th>
                <th>FIRST CLASS</th>
                <th>LAST CLASS</th>
                <th>ADMISSIONS DEADLINE</th>
              </tr>
            </thead> 
            <tbody>
              {upcomingCourseDates ? (
                bootcampDates.map((batch, index) => {
                return (
                  <BootcampProgramDatesRow batch={batch}/>
                )
              })
              ) : (
                <div>dynamic data from gcal</div>
              )}
            </tbody>
        </Table>
      </div>
      <div className='row bootcamp-program-dates-row-mobile'>
        {upcomingCourseDates ? (
          bootcampDates.map((batch, index) => {
            const startDate = new Date(batch.node.start.dateTime);
            const deadline = startDate.setDate(startDate.getDate() - 2);

            return (
              <div key={index} className='col-12 bootcamp-program-dates-col'>
                <div className='bootcamp-program-dates-container'>
                  <span>
                    {getFormattedDate(batch.node.start.dateTime)}
                  </span>
                  <span className='bootcamp-program-dates-arrow-container'>
                    <StaticImage src="../../img/basics-arrow-right.png" alt="right arrow" />
                  </span>
                  <span>
                    {getFormattedDate(batch.node.end.dateTime)}
                  </span>
                </div>
                <div className='bootcamp-program-dates-deadline'>
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

export default BootcampProgramDatesSection