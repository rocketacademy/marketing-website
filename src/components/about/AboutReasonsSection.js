import React from 'react'
import CarouselSlide from '../CarouselSlide';
import Carousel from 'react-bootstrap/Carousel';


const AboutReasonsSection = ({ why }) => {
  return (
    <div className='container about-reasons-container'>
        <div className='row about-reasons-row-desktop'>
          <div className='col-3 about-reasons-heading-col'>
            {why.heading}
          </div>
          {why.reasons.map((reason, index) => {
            return (
              <div key={index} className='col-3 about-reasons-content-col'>
                <CarouselSlide section={reason} />
              </div>
            )
          })}
        </div>
        <div className="row about-reasons-row-mobile">
          <div className='about-reasons-heading-col'>
            {why.heading}
        </div>
        <Carousel variant="dark">
            {why.reasons.map((reason, index) => {
                return (
                    <Carousel.Item>
                        <div key={index} className='about-reasons-col'>
                            <CarouselSlide section={reason} />
                        </div>
                    </Carousel.Item>
                )
            })}
        </Carousel>
        </div>
    </div>
  )
}

export default AboutReasonsSection