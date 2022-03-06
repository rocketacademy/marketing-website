import React from 'react'
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


const BootcampCourseSection = ({ course }) => {
  const months = ["1-3", "4-6"];

    return (
        <div className='container bootcamp-course-container'>
            <div className='bootcamp-course-header' id={course.sidebarlabel.replace(/ /g, "-").toLowerCase()} >
                {course.heading}
            </div>
            <div className='bootcamp-course-subheading'>
                {course.subheading}
            </div>
            <div className='bootcamp-course-content-desktop'>
                <Tabs defaultActiveKey="0" className="mb-3">
                    {months.map((month, index) => {
                        const monthLabel = `Months ${month}`;

                        return (
                            <Tab eventKey={index} key={index} title={monthLabel}>
                                <Table borderless>
                                    <thead>
                                        <tr>
                                            <th>PROJECT</th>
                                            <th>TOPICS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {course.schedule.filter(section => section.heading === month).map(section => {

                                            return (
                                                <tr>
                                                    <td>
                                                        <p className='bootcamp-course-lesson-number'>
                                                            {section.project}
                                                        </p> 
                                                    </td>
                                                    <td>
                                                        {section.topics.map(topic => {
                                                            return (
                                                            <span>
                                                                {topic.topic}
                                                            </span>
                                                            )
                                                            
                                                        })}
                                                    </td>
                                                </tr>
                                            )
                                        
                                        })}
                                    </tbody>
                                </Table>
                            </Tab>
                        )
                    })}
                </Tabs>
            </div>
            <div className='bootcamp-course-content-mobile'>
                <Accordion flush>
                    {months.map((month, index) => {
                        const monthLabel = `Months ${month}`;

                        return (
                            <Accordion.Item eventKey={index + 1}>
                                <Accordion.Header>{monthLabel}</Accordion.Header>
                                        {course.schedule.filter(section => section.heading === month).map((section, index) => {
                                            
                                            return (
                                                <Accordion.Body key={index} >
                                                    <p className='bootcamp-course-accordion-lesson'>
                                                        {section.project}
                                                    </p>
                                                    {section.topics.map(topic => {
                                                        return (
                                                        <span className='bootcamp-course-accordion-content'>
                                                            {topic.topic}
                                                        </span>
                                                        )
                                                    })}
                                                </Accordion.Body>
                                            )
                                        })}
                            </Accordion.Item>
                        )
                    })}
                    
                </Accordion>
            </div>
        </div>
    )
}

export default BootcampCourseSection