import React from 'react'
import GetStartedButton from './GetStartedButton';

const StartCodingSection = ({ upcomingCourseDates }) => {

    let nextBasicsStartDate;
    let nextFulltimeStartDate;
    let nextParttimeStartDate;

    if (upcomingCourseDates) {
        const basicsDates = upcomingCourseDates.filter(course => course.node.summary.includes('Basics'));
        nextBasicsStartDate = basicsDates[0].node.start.dateTime;

        const fulltimeDates = upcomingCourseDates.filter(course => course.node.description.includes('Full Time'));
        nextFulltimeStartDate = fulltimeDates[0].node.start.dateTime;

        const parttimeDates = upcomingCourseDates.filter(course => course.node.description.includes('Part Time'));
        nextParttimeStartDate = parttimeDates[0].node.start.dateTime;


        const getFormattedDate = (d) => {
            const dateObj = new Date(d);
            const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(dateObj);
            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(dateObj);
            const da = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(dateObj);
            return `${da} ${mo} ${ye}`;
        }

        nextBasicsStartDate = getFormattedDate(nextBasicsStartDate);
        nextFulltimeStartDate = getFormattedDate(nextFulltimeStartDate);
        nextParttimeStartDate = getFormattedDate(nextParttimeStartDate);

    } else {
        nextBasicsStartDate = '<< dynamic date from gcal >>';
        nextFulltimeStartDate = '<< dynamic date from gcal >>';
        nextParttimeStartDate = '<< dynamic date from gcal >>';

    }
    

    return (
    <div className='container-fluid startcoding-outer-container'>
        <div className='container startcoding-inner-container'>
            <h2 className='startcoding-heading'>
                🚀 Start Coding Today  
            </h2>
            <div className='row startcoding-text-row'>
                <div className='startcoding-info-container'>
                    <div className='startcoding-info'>
                    <div className='startcoding-basics-text'>
                        Coding Basics
                    </div>
                    <div className='startcoding-basics-date'>
                        22 Aug 2022
                    </div>
                    </div>
                    <div className='startcoding-info'>
                        <div className='startcoding-bootcampft-text'>
                            Bootcamp (Full Time)
                        </div>
                        <div className='startcoding-bootcampft-date'>
                            {nextFulltimeStartDate}
                        </div>
                    </div>
                    <div className='startcoding-info'>
                        <div className='startcoding-bootcampft-text'>
                            Bootcamp (Part Time)
                        </div>
                        <div className='startcoding-bootcampft-date'>
                            {nextParttimeStartDate}
                        </div>
                    </div>
                    </div>
            </div>
            <GetStartedButton />
        </div>
    </div>
    )
}

export default StartCodingSection