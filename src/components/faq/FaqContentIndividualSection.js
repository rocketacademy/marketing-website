import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import MarkdownContent from '../ConvertMarkdown';
 
const FaqContentIndividualSection = ({ content }) => {

    const questions = content.questions;

    
  return (
    <div className='faq-content-col-accordion section'>
        <div className='faq-content-col-accordion-heading'>
            {content.heading}
        </div>
        <Accordion id={content.sidebarlabel.replace(/ /g, "-").toLowerCase()} flush>
            {questions.map((question, index) => {
               
                return (
                    <Accordion.Item eventKey={index + 1}>
                        <Accordion.Header>
                            {question.question}
                        </Accordion.Header>
                        <Accordion.Body>
                            <MarkdownContent 
                                content={question.answers} 
                                className={'faq-content-col-content'}
                            />
                        </Accordion.Body>
                    </Accordion.Item>
                )
            })}
        </Accordion>
    </div>
  )
}

export default FaqContentIndividualSection