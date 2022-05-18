import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import MarkdownContent from '../ConvertMarkdown';

const BootcampCourseSection = ({ course }) => {
    return (
        <div className='container bootcamp-course-container section' id={course.sidebarlabel.replace(/ /g, "-").toLowerCase()}>
            <div className='bootcamp-course-header'>
                {course.heading}
            </div>
            <MarkdownContent content={course.subheading} className={'bootcamp-course-subheading'} />
            <div className='bootcamp-course-content-desktop'>
                <Table borderless>
                    <thead>
                        <tr>
                            <th></th>
                            <th>TECHNOLOGIES</th>
                            <th>ALGORITHMS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {course.schedule.map((section) => {
                            return (
                                <tr>
                                    <td>
                                        <p className='bootcamp-course-module'>
                                            {section.heading}
                                        </p> 
                                    </td>
                                    <td className='bootcamp-course-topics'>
                                        {section.topics.map(topic => {
                                            return (
                                            <span className='bootcamp-course-topic technologies'>
                                                {topic.topic}
                                            </span>
                                            )
                                        })}
                                    </td>
                                    <td className='bootcamp-course-topics'>
                                        {section.algorithms.map(algorithm => {
                                            return (
                                            <span className='bootcamp-course-topic algorithms'>
                                                {algorithm.topic}
                                            </span>
                                            ) 
                                        })}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
            <div className='bootcamp-course-content-mobile'>
                <Accordion flush>
                    {course.schedule.map((section, index) => {
                        return (
                            <Accordion.Item eventKey={index + 1}>
                                <Accordion.Header>{section.heading}</Accordion.Header>
                                    <Accordion.Body >
                                        <Table borderless>
                                            <thead>
                                                <tr>
                                                    <th>TECHNOLOGIES</th>
                                                </tr>
                                                <tr>
                                                    <td className='bootcamp-course-topics'>
                                                        {section.topics.map(topic => {
                                                            return (
                                                            <div className='bootcamp-course-topic technologies'>
                                                                {topic.topic}
                                                            </div>
                                                            )
                                                        })}
                                                    </td>
                                                </tr>
                                            </thead>
                                        </Table>
                                        <Table borderless>
                                            <thead>
                                                <tr>
                                                    <th>ALGORITHMS</th>
                                                </tr>
                                                <tr>
                                                    <td className='bootcamp-course-topics'>
                                                        {section.algorithms.map(topic => {
                                                            return (
                                                            <div className='bootcamp-course-topic algorithms'>
                                                                {topic.topic}
                                                            </div>
                                                            )
                                                        })}
                                                    </td>
                                                </tr>
                                            </thead>
                                        </Table>
                                    </Accordion.Body>
                            </Accordion.Item>
                        )
                    })}
                </Accordion>
            </div>
        </div>
    )
}

export default BootcampCourseSection