import React from 'react'
import CarouselSlide from '../CarouselSlide';


const BasicsOverviewSection = ({ overview }) => {
  return (
        <div className='row basics-overview-row'>
            <h2 className='basics-overview-heading'>
                {overview.heading}
            </h2>
            {overview.studentexperience.map(experience => {
                return (
                    <div className='col-md-6 basics-overview-col-desktop'>
                        <CarouselSlide section={experience} />
                    </div>
                )
            })}
        </div>
  )
}

export default BasicsOverviewSection