import React from 'react'
import Accordion from 'react-bootstrap/Accordion';


const FaqContentIndividualSection = ({ content }) => {
  return (
    <div className='faq-content-col-accordion'>
        <div className='faq-content-col-accordion-heading' id={content.heading.toLowerCase()}>
            {content.heading}
        </div>
        <Accordion flush>
            {content.questions.map((question, index) => {
                return (
                    <Accordion.Item eventKey={index + 1}>
                        <Accordion.Header>
                            {question.question}
                        </Accordion.Header>
                        <Accordion.Body>
                            <div>{question.answers}</div>
                        </Accordion.Body>
                    </Accordion.Item>
                )
            })}
        </Accordion>
    </div>
  )
}

export default FaqContentIndividualSection