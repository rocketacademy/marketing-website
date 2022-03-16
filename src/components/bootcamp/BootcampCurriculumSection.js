import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import { Accordion } from 'react-bootstrap';


const BootcampCurriculumSection = ({ curriculum }) => {

    const BootcampCurriculumCard = ({card}) => {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>
                        {card.heading}
                    </Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{card.section1}</ListGroup.Item>
                        <ListGroup.Item>{card.section2}</ListGroup.Item>
                        <ListGroup.Item>{card.section3}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        )
    }

    const BootcampCurriculumTopics = ({ module }, index) => {
        return (
             <Accordion key={index} flush>
                <Accordion.Item eventKey={index}> 
                    <Accordion.Header>{module.heading}</Accordion.Header>
                    <Accordion.Body>
                    <ul>
                        {module.topics.map((topic, index) => {
                            return (
                                <li key={index}>{topic.topic}</li>
                            )
                        })}
                    </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        )
    }

  return (
      <div className='container bootcamp-curriculum-container section'  id={curriculum.sidebarlabel.replace(/ /g, "-").toLowerCase()}>
          <h2 className='bootcamp-curriculum-heading'>
                {curriculum.heading}
            </h2>
            <p className='bootcamp-curriculum-subheading'>
                {curriculum.subheading}
            </p>
        <div className='row bootcamp-curriculum-row-desktop'>
            
            {curriculum.sections.map((card, index) => {
                return (
                    <div key={index} className='col-12 col-md-4 bootcamp-curriculum-card'>
                        <BootcampCurriculumCard card={card} />
                    </div>
                )
            })}
        </div>

        <div className='row bootcamp-curriculum-row-mobile'>
            <Carousel variant="dark">
                {curriculum.sections.map((card, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <div className='bootcamp-overview-col'>
                                <BootcampCurriculumCard card={card} />
                            </div>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
        <div className='row bootcamp-curriculum-accordions-row'>
            <div className='bootcamp-curriculum-accordions-heading'>
                {curriculum.modulesheading}
            </div>
            <div className='col-12 col-md-6 bootcamp-curriculum-accordions-col'>
            {curriculum.modules1.map((module, index) => {
                return (
                    <BootcampCurriculumTopics module={module} index={index} />
                )}
            )}
            </div>
            <div className='col-12 col-md-6 bootcamp-curriculum-accordions-col'>
            {curriculum.modules2.map((module, index) => {
                return (
                    <BootcampCurriculumTopics module={module} index={index} />
                )}
            )}
            </div>
        </div>
    </div>
  )
}

export default BootcampCurriculumSection