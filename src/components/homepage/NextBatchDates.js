import React from 'react'


const NextBatchDates = ({ details, upcomingCourseDates }) => {
    
    if (upcomingCourseDates) {
        let heading = '';

        if (details.heading === 'Coding Basics') {
            heading = 'Basics';
        } else if (details.heading === 'Coding Bootcamp') {
            heading = 'Bootcamp'
        }
    
        const relevantDates = upcomingCourseDates.filter(course =>
            course.node.summary.includes(heading));

        let nextStartDate = '';
        let nextEndDate = '';

        if (heading === 'Basics') {
            nextStartDate = relevantDates[0].node.start.dateTime;
            nextEndDate = relevantDates[0].node.end.dateTime;
        } else {
            if (details.type === 'Full Time' || details.type === 'Part Time') {
            let nextCourse = relevantDates.filter(course => course.node.description === details.type);
            
            nextStartDate = nextCourse[0].node.start.dateTime;

            nextEndDate = nextCourse[0].node.end.dateTime;
            }
        }

        let startDate = nextStartDate;
        let endDate = nextEndDate;

        const getFormattedDate = (d) => {
        const dateObj = new Date(d);
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(dateObj);
        const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(dateObj);
        const da = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(dateObj);
        return `${da} ${mo} ${ye}`;
        }

        const displayDate = `${getFormattedDate(startDate)} - ${getFormattedDate(endDate)}`;

        if (heading === 'Basics') {
            return (
                <li>✓ Next Batch: 22 Aug 2022 - 29 Sep 2022</li>
            )
        }
        return (
            <li>✓ Next Batch: {displayDate}</li>
        )
    } else {
        return (
            <li></li>
        )
    }
    

    
}

export default NextBatchDates