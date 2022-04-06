import React from 'react'
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import MarkdownContent from '../ConvertMarkdown';


const BootcampCourseSection = ({ course }) => {
  const months = ["1-3", "4-6"];

    return (
        <div className='container bootcamp-course-container section' id={course.sidebarlabel.replace(/ /g, "-").toLowerCase()}>
            <div className='bootcamp-course-header' >
                {course.heading}
            </div>
            <MarkdownContent content={course.subheading} className={'bootcamp-course-subheading'} />
            <div className='bootcamp-course-content-desktop'>
                <Tabs defaultActiveKey="0" className="mb-3">
                    {months.map((month, index) => {
                        const monthLabel = `Months ${month}`;

                        return (
                            <Tab eventKey={index} title={monthLabel}>
                                <Table borderless>
                                    <thead>
                                        <tr>
                                            <th>PROJECT</th>
                                            <th>TOPICS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {course.schedule.filter(section => section.heading === month).map((section) => {

                                            return (
                                                <tr>
                                                    <td>
                                                        <p className='bootcamp-course-lesson-number'>
                                                            {section.project}
                                                        </p> 
                                                    </td>
                                                    <td className='bootcamp-course-lesson-topics'>
                                                        {section.topics.map(topic => {
                                                            return (
                                                            <div className='bootcamp-course-lesson-topic'>
                                                                {topic.topic}
                                                            </div>
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
                                        {course.schedule.filter(section => section.heading === month).map((section) => {
                                            
                                            return (
                                                <Accordion.Body >
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