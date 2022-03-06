import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { remark } from 'remark';
import recommended from 'remark-preset-lint-recommended';
import remarkHtml from 'remark-html';

 
const FaqContentIndividualSection = ({ content }) => {

    const questions = content.questions;

    console.log('csidebarlabel', content.sidebarlabel);
    
  return (
    <div className='faq-content-col-accordion'>
        <div className='faq-content-col-accordion-heading' id={content.sidebarlabel.replace(/ /g, "-").toLowerCase()}>
            {content.heading}
        </div>
        <Accordion flush>
            {questions.map((question, index) => {
                question.answers = remark()
                    .use(recommended)
                    .use(remarkHtml)
                    .processSync(question.answers).toString();
                

                return (
                    <Accordion.Item eventKey={index + 1}>
                        <Accordion.Header>
                            {question.question}
                        </Accordion.Header>
                        <Accordion.Body>
                            <div dangerouslySetInnerHTML={{__html: question.answers}} />
                        </Accordion.Body>
                    </Accordion.Item>
                )
            })}
        </Accordion>
    </div>
  )
}

export default FaqContentIndividualSection