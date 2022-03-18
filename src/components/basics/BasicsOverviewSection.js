import React from 'react'
import CarouselSlide from '../CarouselSlide';
import Carousel from 'react-bootstrap/Carousel';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import Card from 'react-bootstrap/Card';


const BasicsOverviewSection = ({ overview }) => {
  return (
        <div className='container basics-overview-container section' id={overview.sidebarlabel.replace(/ /g, "-").toLowerCase()}>
            <h2 className='basics-overview-heading' >
                {overview.heading}
            </h2>
            <div className='row basics-overview-row-desktop'>
            {overview.studentexperience.map((experience) => {
                return (
                    <div className='col-md-6 basics-overview-col-desktop'>
                        <div className='basics-overview-slide-container'>
                            <CarouselSlide section={experience} />
                        </div>
                    </div>
                )
            })}
            </div>
            <div className="row basics-overview-row-mobile">
                    <Carousel variant="dark">
                        {overview.studentexperience.map((experience) => {
                            return (
                                <Carousel.Item>
                                    <div className='basics-overview-col'>
                                        <CarouselSlide section={experience} />
                                    </div>
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </div>

                <div className='row basics-testimonial-row'>
                    <div className='basics-testimonial-image-container'>
                         <PreviewCompatibleImage imageInfo={overview.testimonial} />
                    </div>
                    <p className='basics-testimonial-quote'>
                        {overview.testimonial.quote}
                    </p>
                    <p className='basics-testimonial-name'>
                        {overview.testimonial.name}
                    </p>
                    <p className='basics-testimonial-position'>
                        {overview.testimonial.position}
                    </p>
                </div>

                <div className='row basics-learning-row-desktop'>
                    <h2 className='basics-learning-heading' >
                        {overview.learningstyle.heading}
                    </h2>
                    {overview.learningstyle.card.map((card) => {
                        return (
                            <div className='col-12 col-md-4 basics-learning-card'>
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
                <div className='row basics-learning-row-mobile'>
                    <h2 className='basics-learning-heading'>
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
                </div>
        </div>
  )
}

export default BasicsOverviewSection