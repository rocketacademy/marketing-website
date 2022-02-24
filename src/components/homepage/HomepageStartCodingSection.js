import React from 'react'
import GetStartedButton from '../GetStartedButton';

const HomepageStartCodingSection = ({ upcomingCourseDates }) => {

    let nextStartDate;

    if (upcomingCourseDates) {
        const basicsDates = upcomingCourseDates.filter(course => course.node.summary.includes('Basics'));
        nextStartDate = basicsDates[0].node.start.dateTime;

        const getFormattedDate = (d) => {
            const dateObj = new Date(d);
            const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(dateObj);
            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(dateObj);
            const da = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(dateObj);
            return `${da} ${mo} ${ye}`;
        }

        nextStartDate = getFormattedDate(nextStartDate);
    } else {
        nextStartDate = 'dynamic date from gcal';
    }
    

    return (
    <div className='container-fluid homepage-startcoding-outer-container'>
        <div className='container homepage-startcoding-inner-container'>
            <h2 className='homepage-startcoding-heading'>
                Start Coding Today
            </h2>
            <p className='homepage-startcoding-text'>
                🚀 Get on the next Basics Launch before {nextStartDate}
            </p>
            <GetStartedButton />
        </div>
    </div>
    )
}

export default HomepageStartCodingSection