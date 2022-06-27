import React from 'react'
import GetStartedButton from './GetStartedButton'

const NextBatchSection = ({ upcomingCourseDates, pagename }) => {

    if (upcomingCourseDates) {

        const getFormattedDate = (d) => {
            const dateObj = new Date(d);
            const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(dateObj);
            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(dateObj);
            const da = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(dateObj);

            return `${da} ${mo} ${ye}`;
        }

        let nextStartDate;

        if (pagename === 'basics') {
            const basicsStartDates = upcomingCourseDates.filter(course => course.node.summary.includes('Basics'));
            nextStartDate = new Date("2022-08-22");
        } else {
            const bootcampStartDates = upcomingCourseDates.filter(course => course.node.description.includes('Full Time') || course.node.description.includes('Part Time'));
            nextStartDate = bootcampStartDates[0].node.start.dateTime;
        }
        

        return (
            <div className='container basics-next-batch-container'>
                <div className='basics-next-batch-content'>
                    <p className='basics-next-batch-heading'>🚀 Next Launch</p>
                    <p className='basics-next-batch-text'>Now enrolling for {getFormattedDate(nextStartDate)}</p>
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

export default NextBatchSection