import React from 'react'
import Table from 'react-bootstrap/Table';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Accordion from 'react-bootstrap/Accordion';
import MarkdownContent from '../ConvertMarkdown';


const BasicsCourseSection = ({ lessons }) => {

    const weeks = ["0-1", "2", "3", "4", "5"];

    return (
        <div className='container basics-course-container section' id={lessons.sidebarlabel.replace(/ /g, "-").toLowerCase()}>
            <div className='basics-course-header'>
                {lessons.heading}
            </div>
            <div className='basics-course-subheading'>
                <MarkdownContent content={lessons.subheading} className={'basics-course-subheading'} />
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
                                        {lessons.lesson.filter(lesson => lesson.week === week).map((lesson, index) => {

                                            return (
                                                <tr key={index}>
                                                    <td>
                                                        <p className='basics-course-lesson-number'>
                                                            Lesson {lesson.number}:
                                                        </p> 
                                                        <p className='basics-course-lesson-title'>
                                                            {lesson.title}
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <MarkdownContent 
                                                            content={lesson.preclass}
                                                            className={"basics-course-lesson-preclass"}
                                                        />
                                                    </td>
                                                    <td>
                                                        <MarkdownContent 
                                                            content={lesson.inclass}
                                                            className={"basics-course-lesson-inclass"}
                                                        />
                                                    </td>
                                                    <td>
                                                        <MarkdownContent 
                                                            content={lesson.project}
                                                            className={"basics-course-lesson-project"}
                                                        />
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
                            <Accordion.Item eventKey={index + 1} key={index}>
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
                                                    <MarkdownContent 
                                                        content={lesson.preclass}
                                                        className={"basics-course-lesson-preclass"}
                                                    />
                                                    <p className='basics-course-accordion-heading'>
                                                        In Class:
                                                    </p>
                                                    <MarkdownContent 
                                                        content={lesson.inclass}
                                                        className={"basics-course-lesson-inclass"}
                                                    />
                                                    <p className='basics-course-accordion-heading'>
                                                        Projects :
                                                    </p>
                                                    <MarkdownContent 
                                                        content={lesson.project}
                                                        className={"basics-course-lesson-project"}
                                                    />
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