import React from 'react'
import CarouselSlide from '../CarouselSlide';
import PropTypes from "prop-types";
import Carousel from 'react-bootstrap/Carousel';


const HomepageSuccessSection = ({ success }) => {

    return (
        <div className='container-fluid homepage-success-outer-container'>
            <div className='container homepage-success-inner-container'>
                <h2 className='homepage-success-heading'>{success.heading}</h2>
                <div className='row homepage-success-row-desktop'>
                    {success.blurbs.map((blurb, index) => {
                        return (
                            <div key={index} className='col-3 homepage-success-row-col'>
                                <CarouselSlide section={blurb} />
                            </div>
                        )
                    })}
                </div>
                <div className="row homepage-success-row-mobile">
                    <Carousel variant="dark">
                        {success.blurbs.map((blurb, index) => {
                            return (
                                <Carousel.Item>
                                    <div key={index} className='homepage-success-col'>
                                        <CarouselSlide section={blurb} />
                                    </div>
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

HomepageSuccessSection.propTypes = {
    blurbs: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            heading: PropTypes.string,
            text: PropTypes.string,
        })
    )
}

export default HomepageSuccessSection