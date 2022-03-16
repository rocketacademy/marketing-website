import React from 'react'
import Card from 'react-bootstrap/Card';
import GetStartedButton from '../GetStartedButton';

const BasicsAdmissionsSection = ({ admissions }) => {
  return (
    <div className='container basics-admissions-container section' id={admissions.sidebarlabel.replace(/ /g, "-").toLowerCase()} >
        <div className='basics-admissions-heading'>
            {admissions.heading}
        </div>
        <div className='basics-admissions-subheading'>
            {admissions.subheading}
        </div>
        <div className='row basics-admissions-row'>
            <div className='col-12 col-md-5 basics-admissions-col'>
            <Card>
                <Card.Body>
                    <div className='basics-admissions-top'>
                        <div className='basics-admissions-cardheading'>
                            {admissions.cardheading}
                        </div>
                        <span className='basics-admissions-prevcost'>
                            {admissions.prevcost}&nbsp;
                        </span>
                        <span className='basics-admissions-currentcost'>
                            &nbsp;&nbsp;{admissions.currentcost}
                        </span>
                    </div>
                    <div className='basics-admissions-bottom'>
                        <ul>
                            {admissions.objectives.map((objective, index) => {
                                return (
                                    <li key={index} data-icon="✔">
                                        {objective.objective}
                                    </li>
                                )
                                })
                            }
                        </ul>
                    </div>
                </Card.Body>
            </Card>
            </div>
        </div>
        <div className='basics-admissions-get-started-button-container'>
            <GetStartedButton />
        </div>
    </div>
  )
}

export default BasicsAdmissionsSection