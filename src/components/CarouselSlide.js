import React from 'react'
import PreviewCompatibleImage from './PreviewCompatibleImage';
import PropTypes from 'prop-types';

const CarouselSlide = ({ section }) => {
  
  return (
      <div className='slide-container'>
            <PreviewCompatibleImage imageInfo={section} />
            <div className='slide-heading'>
                {section.heading}
            </div>
            <div className='slide-text'>
                {section.text}
            </div>
      </div>

  )
}

CarouselSlide.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  text: PropTypes.string,
}

export default CarouselSlide