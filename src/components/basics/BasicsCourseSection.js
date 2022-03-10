import React from 'react'
import Table from 'react-bootstrap/Table';
import { remark } from 'remark';
import recommended from 'remark-preset-lint-recommended';
import remarkHtml from 'remark-html';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Accordion from 'react-bootstrap/Accordion';


const BasicsCourseSection = ({ lessons }) => {

    const weeks = ["0-1", "2", "3", "4", "5"];

    return (
        <div className='container basics-course-container'>
            <div className='basics-course-header' id={lessons.sidebarlabel.replace(/ /g, "-").toLowerCase()} >
                {lessons.heading}
            </div>
            <div className='basics-course-subheading'>
                {lessons.subheading}
            </div>
            <div className='basics-course-content-desktop'>
                <Tabs defaultActiveKey="Week 0-1" className="mb-3">
                    {weeks.map(week => {
                        const weekLabel = `Week ${week}`;

                        return (
                            <Tab eventKey={weekLabel} key={weekLabel} title={weekLabel}>
                                <Table borderless>
                                    <thead>
                                        <tr>
                                            <th>LESSON</th>
                                            <th>PRE-CLASS</th>
                                            <th>IN-CLASS</th>
                                            <th>PROJECT</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {lessons.lesson.filter(lesson => lesson.week === week).map(lesson => {
                                            
                                            lesson.preclass = remark()
                                                .use(recommended)
                                                .use(remarkHtml)
                                                .processSync(lesson.preclass).toString();

                                            lesson.inclass = remark()
                                                .use(recommended)
                                                .use(remarkHtml)
                                                .processSync(lesson.inclass).toString();

                                            lesson.project = remark()
                                                .use(recommended)
                                                .use(remarkHtml)
                                                .processSync(lesson.project).toString();

                                            
                                            return (
                                                <tr>
                                                    <td>
                                                        <p className='basics-course-lesson-number'>
                                                            Lesson {lesson.number}:
                                                        </p> 
                                                        <p className='basics-course-lesson-title'>
                                                            {lesson.title}
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <div dangerouslySetInnerHTML={{__html: lesson.preclass}} />
                                                    </td>
                                                    <td>
                                                        <div dangerouslySetInnerHTML={{__html: lesson.inclass}} />
                                                    </td>
                                                    <td>
                                                        <div dangerouslySetInnerHTML={{__html: lesson.project}} />
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
            <div className='basics-course-content-mobile'>
                <Accordion flush>
                    {weeks.map((week, index) => {
                        const weekLabel = `Week ${week}`;

                        return (
                            <Accordion.Item eventKey={index + 1}>
                                <Accordion.Header>{weekLabel}</Accordion.Header>
                                        {lessons.lesson.filter(lesson => lesson.week === week).map((lesson, index) => {

                                            return (
                                                <Accordion.Body key={index} >
                                                    <p className='basics-course-accordion-lesson'>
                                                        Lesson: {lesson.number}
                                                    </p>
                                                    <p className='basics-course-accordion-title'>
                                                         {lesson.title}
                                                    </p>
                                                    <p className='basics-course-accordion-heading'>
                                                        Pre Class:
                                                    </p>
                                                    <div dangerouslySetInnerHTML={{__html: lesson.preclass}} />
                                                    <p className='basics-course-accordion-heading'>
                                                        In Class:
                                                    </p>
                                                    <div dangerouslySetInnerHTML={{__html: lesson.inclass}} />
                                                    <p className='basics-course-accordion-heading'>
                                                        Projects :
                                                    </p>
                                                    <div dangerouslySetInnerHTML={{__html: lesson.project}} />
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

export default BasicsCourseSection