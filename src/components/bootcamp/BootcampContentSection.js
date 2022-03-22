import React from 'react'
import SidebarSection from '../SidebarSection'
import  BootcampOverviewSection from '../bootcamp/BootcampOverviewSection';
import BootcampCurriculumSection from './BootcampCurriculumSection';
import BasicsInstructorsSection from '../basics/BasicsInstructorsSection';
import BootcampAdmissionsSection from './BootcampAdmissionsSection';
import BootcampTuitionSection from './BootcampTuitionSection';
import BootcampProgramDatesSection from './BootcampProgramDatesSection';
import BootcampCourseSection from './BootcampCourseSection';


const BootcampContentSection = ({ 
    overview,
    pagename,
    curriculum,
    instructors,
    admissions,
    programdates,
    tuition,
    course,
    upcomingCourseDates,
 }) => {

    const sectionArray = [
        overview,
        curriculum,
        instructors,
        admissions,
        tuition,
        programdates,
        course,
      ];

    return (
        <>
            <div className='container bootcamp-content-container'>
                <div className='row bootcamp content-row'>
                    <SidebarSection sectionArray={sectionArray} pagename={pagename} />
                    <div className='col-12 col-md-9 bootcamp-content-col'>
                        <BootcampOverviewSection overview={overview} />
                        <BootcampCurriculumSection curriculum={curriculum} />
                        <BasicsInstructorsSection instructors={instructors} />
                        <BootcampAdmissionsSection admissions={admissions} />
                        <BootcampTuitionSection tuition={tuition} />
                        <BootcampProgramDatesSection 
                            programdates={programdates}
                            upcomingCourseDates={upcomingCourseDates} 
                        />
                        <BootcampCourseSection course={course} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BootcampContentSection