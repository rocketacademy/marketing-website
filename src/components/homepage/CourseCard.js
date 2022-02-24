import React from 'react'
import Card from 'react-bootstrap/Card';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import Button from 'react-bootstrap/Button';
import NextBatchDates from './NextBatchDates';


const CourseCard = ({ details, upcomingCourseDates }) => {

  return (
    <Card>
        <Card.Body>
          <div className='card-type'>
            <span><PreviewCompatibleImage imageInfo={details.icon} /></span>
            <span>&nbsp;&nbsp;{details.type}</span>
          </div>
            <Card.Title className={`${details.heading === 'Basics' ? "basics" : "bootcamp"}`}>{details.heading}</Card.Title>
            <Card.Subtitle>{details.subheading}</Card.Subtitle>
            <Card.Text>
                <span className='prev-price'>{details.prevprice}&nbsp;</span> 
                <span className='current-price'> {details.currentprice}</span>
                <ul>
                    <li>{details.duration}</li>
                    <li>{details.conditions}</li>
                    <NextBatchDates 
                      details={details}
                      upcomingCourseDates={upcomingCourseDates} 
                    />
                </ul>
                <Button variant="outline-success" className="btn btn-outline-success course-card-btn">Learn More</Button>
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default CourseCard