import React from 'react'


const NextBatchDates = ({ details, upcomingCourseDates }) => {
console.log('details', details);
  console.log(details.type);
    console.log('upcoming coue dates', upcomingCourseDates);
    
    if (upcomingCourseDates) {
        
        const relevantDates = upcomingCourseDates.filter(course =>
            course.node.summary.includes(details.heading));

        let nextStartDate = '';
        let nextEndDate = '';

        if (details.heading === 'Basics') {
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
        console.log('date obj', dateObj);
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(dateObj);
        console.log('year', ye);
        const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(dateObj);
        const da = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(dateObj);
        return `${da} ${mo} ${ye}`;
        }

        const displayDate = `${getFormattedDate(startDate)} - ${getFormattedDate(endDate)}`;

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