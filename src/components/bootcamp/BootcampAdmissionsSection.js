import React from 'react'
import Card from 'react-bootstrap/Card'
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import Carousel from 'react-bootstrap/Carousel';
import MarkdownContent from '../ConvertMarkdown';


const BootcampAdmissionsSection = ({ admissions }) => {

  return (
    <div className='container bootcamp-admissions-container'>
        <div className='bootcamp-admissions-header' id={admissions.sidebarlabel.replace(/ /g, "-").toLowerCase()}>
            {admissions.heading}
        </div>
        <MarkdownContent content={admissions.subheading} className={'bootcamp-admissions-subheading'} />
        <div className='row bootcamp-admissions-row-desktop'>
            {admissions.steps.map((card) => {
                return (
                    <div className='col-12 col-md-4 bootcamp-admissions-card'>
                        <Card>
                            <Card.Body>
                                <PreviewCompatibleImage imageInfo={card} />
                                <Card.Title>
                                    {card.heading}
                                </Card.Title>
                                <Card.Text>
                                    {card.text}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })}
        </div>
        <div className='bootcamp-admissions-row-mobile'>
            <Carousel variant="dark">

            {admissions.steps.map((card, index) => {
                return (
                        <Carousel.Item>
                            <div key={index} className='bootcamp-instructors-col'>
                                <Card>
                                    <Card.Body>
                                        <div className='bootcamp-instructors-image-container'>
                                        <PreviewCompatibleImage imageInfo={card} />
                                        </div>
                                        <Card.Title>
                                            {card.heading}
                                        </Card.Title>
                                        <Card.Text>
                                            {card.text}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Carousel.Item>
                    )
                })}
                    </Carousel>
        </div>
        <div className='bootcamp-admissions-suitability-row'>
            <h2 className='bootcamp-suitability-header'>
                {admissions.suitabilityheading}
            </h2>
            <p className='bootcamp-suitability-subheading'>
                {admissions.suitabilitysubheading}
            </p>
            <div className='bootcamp-suitability-objectives'>
                <ul>
                    {admissions.suitabilityobjectives.map((objective) => {
                        return (
                            <li data-icon="✔">{objective.objective}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default BootcampAdmissionsSection