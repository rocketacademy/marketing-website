import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import Card from 'react-bootstrap/Card';


const BootcampOverviewSection = ({ overview }) => {
  return (
        <div className='container bootcamp-overview-container'>
            <h2 className='bootcamp-overview-heading' id={overview.sidebarlabel.replace(/ /g, "-").toLowerCase()}>
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
                                <Carousel.Item>
                                    <div key={index} className='bootcamp-overview-col'>
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

                {/* <div className='row bootcamp-curriculum-row-desktop'>
                    <h2 className='bootcamp-curriculum-heading'>
                        {overview.learningstyle.heading}
                    </h2>
                    {overview.learningstyle.card.map((card) => {
                        return (
                            <div className='col-12 col-md-4 bootcamp-curriculum-card'>
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
                <div className='row bootcamp-curriculum-row-mobile'>
                    <h2 className='bootcamp-curriculum-heading'>
                        {overview.learningstyle.heading}
                    </h2>
                     <Carousel variant="dark">
                        {overview.learningstyle.card.map((card) => {
                            return (
                                <Carousel.Item>
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
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </div> */}
        </div>
  )
}

export default BootcampOverviewSection