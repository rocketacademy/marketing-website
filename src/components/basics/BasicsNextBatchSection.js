import React from 'react'
import GetStartedButton from '../GetStartedButton'

const BasicsNextBatchSection = ({ upcomingCourseDates }) => {

    if (upcomingCourseDates) {
        const basicsDates = upcomingCourseDates.filter(course => course.node.summary.includes('Basics'));
        const nextBasicsStartDate = basicsDates[0].node.start.dateTime;

        const getFormattedDate = (d) => {
        const dateObj = new Date(d);
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(dateObj);
        const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(dateObj);
        const da = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(dateObj);
        return `${da} ${mo} ${ye}`;
    }

        return (
            <div className='container basics-next-batch-container'>
                <div className='basics-next-batch-content'>
                    <p className='basics-next-batch-heading'>🚀 Next Launch</p>
                    <p className='basics-next-batch-text'>Now enrolling for {getFormattedDate(nextBasicsStartDate)}</p>
                </div>
                <div className='basics-next-batch-button-container'>
                    <GetStartedButton />
                </div>
            </div>
        )
    } else {
        return (
            <div>dynamic data from gcal</div>
        )
    }
    
}

export default BasicsNextBatchSection