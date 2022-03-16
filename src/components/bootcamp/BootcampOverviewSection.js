import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import Card from 'react-bootstrap/Card';


const BootcampOverviewSection = ({ overview }) => {
  return (
        <div className='container bootcamp-overview-container section' id={overview.sidebarlabel.replace(/ /g, "-").toLowerCase()}>
            <h2 className='bootcamp-overview-heading'>
                {overview.heading}
            </h2>
            <p className='bootcamp-overview-subheading'>
                {overview.subheading}
            </p>
            <div className='row bootcamp-overview-row-desktop'>
            {overview.reasons.map((reason, index) => {
                return (
                    <div key={index} className='col-md-4 bootcamp-overview-col-desktop'>
                        <div className='bootcamp-overview-slide-container'>
                        
                            <Card>
                                <Card.Body>
                                    <PreviewCompatibleImage imageInfo={reason} />
                                    <Card.Title>
                                        {reason.text}
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                )
            })}
            </div>
            <div className="row bootcamp-overview-row-mobile">
                    <Carousel variant="dark">
                        {overview.reasons.map((reason, index) => {
                            return (
                                <Carousel.Item key={index}>
                                    <div className='bootcamp-overview-col'>
                                        <Card>
                                            <Card.Body>
                                                <div className='bootcamp-overview-image-container'>
                                                <PreviewCompatibleImage imageInfo={reason} />
                                                </div>
                                                <Card.Title>
                                                    {reason.heading}
                                                </Card.Title>
                                                <Card.Text>
                                                    {reason.text}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </div>

                <div className='row bootcamp-testimonial-row'>
                    <div className='bootcamp-testimonial-image-container'>
                         <PreviewCompatibleImage imageInfo={overview.testimonial} />
                    </div>
                    <p className='bootcamp-testimonial-quote'>
                        {overview.testimonial.quote}
                    </p>
                    <p className='bootcamp-testimonial-name'>
                        {overview.testimonial.name}
                    </p>
                    <p className='bootcamp-testimonial-position'>
                        {overview.testimonial.position}
                    </p>
                </div>
        </div>
  )
}

export default BootcampOverviewSection