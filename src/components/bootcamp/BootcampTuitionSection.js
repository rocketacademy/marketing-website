import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import Card from 'react-bootstrap/Card';
import GetStartedButton from '../GetStartedButton';


const BootcampTuitionSection = ({ tuition }) => {
  return (
    <div className='container bootcamp-tuition-container'>
        <div className='bootcamp-tuition-heading' id={tuition.sidebarlabel.replace(/ /g, "-").toLowerCase()} >
            {tuition.heading}
        </div>
        <div className='bootcamp-tuition-subheading'>
            {tuition.subheading}
        </div>
        <div className='row bootcamp-tuition-row'>
            {tuition.card.map((card) => {
                return (
                    <div className='col-12 col-md-6 bootcamp-tuition-col'>
                        <Card>
                            <Card.Body>
                                <div className='bootcamp-tuition-top'>

                                    <div className='bootcamp-tuition-cardheading'>
                                        <StaticImage src="../../../static/img/homepage/schedule-icon.png" />
                                        <span>{card.frequency}</span>
                                    </div>
                                    <span className='bootcamp-tuition-prevcost'>
                                        {card.prevcost}&nbsp;
                                    </span>
                                    <span className='bootcamp-tuition-currentcost'>
                                        &nbsp;&nbsp;{card.currentcost}
                                    </span>
                                </div>
                                <div className='bootcamp-tuition-bottom'>
                                    <p>{card.text}</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })}
        </div>
        <div className='bootcamp-tuition-payment'>
            {tuition.payment}
        </div>
        <div className='bootcamp-tuition-get-started-button-container'>
            <GetStartedButton />
        </div>
    </div>
  )
}

export default BootcampTuitionSection