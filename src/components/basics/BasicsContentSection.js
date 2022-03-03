import React from 'react'
import SidebarSection from '../SidebarSection'
import BasicsCurriculumSection from './BasicsCurriculumSection';
import BasicsOverviewSection from './BasicsOverviewSection';
import BasicsInstructorsSection from './BasicsInstructorsSection';
import BasicsAdmissionsSection from './BasicsAdmissionsSection';
import BasicsProgramDatesSection from './BasicsProgramDatesSection';
import BasicsCourseSection from './BasicsCourseSection';


const BasicsContentSection = ({ 
    overview,
    curriculum,
    instructors,
    admissions,
    programdates,
    lessons,
    upcomingCourseDates
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
                    <div className='col-12 col-md-9 basics-content-col'>
                        <BasicsOverviewSection overview={overview} />
                        <BasicsCurriculumSection curriculum={curriculum} />
                        <BasicsInstructorsSection instructors={instructors} />
                        <BasicsAdmissionsSection admissions={admissions} />
                        <BasicsProgramDatesSection 
                            programdates={programdates}
                            upcomingCourseDates={upcomingCourseDates} 
                        />
                        <BasicsCourseSection lessons={lessons} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BasicsContentSection