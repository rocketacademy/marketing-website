import React from 'react'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';


const BasicsInstructorsSection = ({ instructors }) => {
  return (
    <div className='container basics-instructors-container'>
        <div className='basics-instructors-heading' id={instructors.sidebarlabel.replace(/ /g, "-").toLowerCase()} >
            {instructors.heading}
        </div>
        <div className='row basics-instructors-row-desktop'>
            {instructors.profile.map((profile) => {
                return (
                    <div className='basics-instructors-profile'>
                        <div className='basics-instructors-image'>
                        <PreviewCompatibleImage imageInfo={profile} />
                        </div>
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
        <div className='row basics-instructors-row-mobile'>
            <Carousel variant="dark">

            {instructors.profile.map((profile, index) => {
                return (
                        <Carousel.Item>
                            <div key={index} className='bootcamp-instructors-col'>
                                <Card>
                                    <Card.Body>
                                        <div className='bootcamp-instructors-image-container'>
                                        <PreviewCompatibleImage imageInfo={profile} />
                                        </div>
                                        <Card.Title>
                                            {profile.name}
                                        </Card.Title>
                                        <Card.Text>
                                            {profile.position}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Carousel.Item>
                    )
                })}
                    </Carousel>

        </div>
    </div>
  )
}

export default BasicsInstructorsSection