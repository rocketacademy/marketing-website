import React from 'react'
import Card from 'react-bootstrap/Card';
import GetStartedButton from '../GetStartedButton';
import PreviewCompatibleImage from '../PreviewCompatibleImage';


const BootcampTuitionSection = ({ tuition }) => {
  return (
    <div className='container bootcamp-tuition-container section' id={tuition.sidebarlabel.replace(/ /g, "-").toLowerCase()}>
        <div className='bootcamp-tuition-heading'>
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
                                        <PreviewCompatibleImage imageInfo={card.frequency} />
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
        <div className='bootcamp-tuition-get-started-button-container'>
            <GetStartedButton />
        </div>
    </div>
  )
}

export default BootcampTuitionSection