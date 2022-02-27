import React from 'react'
import PreviewCompatibleImage from './PreviewCompatibleImage';
import PropTypes from 'prop-types';

const CarouselSlide = ({ section }) => {
  
  return (
      <div className='slide-container'>
        <div className='slide-image'>
          <PreviewCompatibleImage imageInfo={section} />
        </div>
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