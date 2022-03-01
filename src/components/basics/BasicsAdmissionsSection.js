import React from 'react'
import { Card } from 'react-bootstrap'

const BasicsAdmissionsSection = ({ admissions }) => {
  return (
    <div className='container basics-admissions-container'>
        <div className='basics-admissions-heading'>
            {admissions.heading}
        </div>
        <div className='basics-admissions-subheading'>
            {admissions.subheading}
        </div>
        <div className='row basics-admissions-row'>
            <Card>
                <Card.Body>
                    <div className='basics-admissions-top'>
                        <p>{admissions.cardheading}</p>
                        <p>
                            {admissions.prevcost}
                            <span>
                                {admissions.currentcost}
                            </span>
                        </p>
                    </div>
                    <div className='basics-admissions-bottom'>
                        <ul>
                        {admissions.objectives.map(objective => {
                            return (
                                <li>{objective.objective}</li>
                            )
                        })}
                        </ul>
                    </div>
                </Card.Body>
            </Card>
        </div>
    </div>
  )
}

export default BasicsAdmissionsSection