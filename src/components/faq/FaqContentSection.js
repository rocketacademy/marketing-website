import React from 'react'
import Accordion from 'react-bootstrap/Accordion';


const FaqContentSection = ({ general }) => {
    console.log('general', general.heading);

  return (
    <div className='container faq-content-container'>
        <div className='row faq-content-row'>
            <div className='col-12 col-md-3 faq-content-sidebar-col-desktop'>
                <ul>
                    <li key={general.heading}>{general.heading}</li>
                </ul>
            </div>
            <div className='col-12 col-md-9 faq-content-col'>
                {general.heading}
                <Accordion flush>
                    {general.questions.map((question, index) => {
                        return (
                            <Accordion.Item eventKey={index + 1}>
                                <Accordion.Header>
                                    {question.question}
                                </Accordion.Header>
                                <Accordion.Body>
                                    {question.answer}
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    })}
                </Accordion>
            </div>
        </div>
    </div>
  )
}

export default FaqContentSection