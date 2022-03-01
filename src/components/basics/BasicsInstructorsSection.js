import React from 'react'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import Carousel from 'react-bootstrap/Carousel';
import CarouselSlide from '../CarouselSlide';


const BasicsInstructorsSection = ({ instructors }) => {
  return (
    <div className='container basics-instructors-container'>
        <div className='basics-instructors-heading'>
            {instructors.heading}
        </div>
        <div className='row basics-instructors-row'>
            {instructors.profile.map((profile) => {
                return (
                    <div className='basics-instructors-profile'>
                        <PreviewCompatibleImage imageInfo={profile} />
                        <div className='basics-instructors-name'>
                            {profile.name}
                        </div>
                        <div className='basics-instructors-position'>
                            {profile.position}
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default BasicsInstructorsSection