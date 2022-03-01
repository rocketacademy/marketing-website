import React from 'react'
import SidebarSection from '../SidebarSection'
import BasicsOverviewSection
 from './BasicsOverviewSection';

const BasicsContentSection = ({ 
    overview,
    curriculum,
    instructors,
    admissions,
    programdates,
    lessons,
 }) => {

    const sectionArray = [
        overview,
        curriculum,
        instructors,
        admissions,
        programdates,
        lessons,
    ];

    return (
        <>
            <div className='container basics-content-container'>
                <div className='row basics content-row'>
                    <SidebarSection sectionArray={sectionArray} />
                    <div className='col-12 col-md-10 basics-content-col'>
                        <BasicsOverviewSection overview={overview} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BasicsContentSection