import React from 'react'
import { BootcampPageTemplate } from '../../templates/bootcamp-page'

const entryHeaderReasons = entry.getIn(['data', 'header', 'reasons'])
const headerReasons = entryHeaderReasons ? entryHeaderReasons.toJS() : []

const entryOverviewReasons = entry.getIn(['data', 'overview', 'reasons'])
const overviewReasons = entryOverviewReasons ? entryOverviewReasons.toJS() : []

const entrySections = entry.getIn(['data', 'curriculum', 'sections'])
const sections = entrySections ? entrySections.toJS() : []

const entryModules1 = entry.getIn(['data', 'curriculum', 'modules1'])
const modules1 = entryModules1 ? entryModules1.toJS() : []

const entryModules2 = entry.getIn(['data', 'curriculum', 'modules2'])
const modules2 = entryModules2 ? entryModules2.toJS() : []

const entryProfiles = entry.getIn(['data', 'instructors', 'profiles'])
const profiles = entryProfiles ? entryProfiles.toJS() : []

const entrySteps = entry.getIn(['data', 'admissions', 'steps'])
const steps = entrySteps ? entrySteps.toJS() : []

const entrySuitabilityobjectives = entry.getIn(['data', 'admissions', 'suitabilityobjectives'])
const suitabilityobjectives = entrySuitabilityobjectives ? entrySuitabilityobjectives.toJS() : []

const entryCard = entry.getIn(['data', 'tuition', 'card'])
const card = entryCard ? entryCard.toJS() : []

const entrySchedule = entry.getIn(['data', 'course', 'schedule'])
const schedule = entrySchedule ? entrySchedule.toJS() : []


const BootcampPagePreview = ({ entry, getAsset }) => {
  return (
    <BootcampPageTemplate 
        header={{
            heading: entry.getIn(['data', 'header', 'heading']),
            subheading: entry.getIn(['data', 'header', 'subheading']),
            image: {
                image: getAsset(entry.getIn(['data', 'header', 'image', 'image'])),
                alt: entry.getIn(['data', 'header', 'image', 'alt']),
            },
            reasons: headerReasons,
        }}
        overview={{
            heading: entry.getIn(['data', 'overview', 'heading']),
            subheading: entry.getIn(['data', 'overview', 'subheading']),
            sidebarlabel: entry.getIn(['data', 'overview', 'sidebarlabel']),
            reasons: overviewReasons,
            testimonial: {
                quote: entry.getIn(['data', 'overview', 'testimonial', 'quote']),
                image: getAsset(entry.getIn(['data', 'overview', 'testimonial', 'image'])),
                name: entry.getIn(['data', 'overview', 'testimonial', 'name']),
                position: entry.getIn(['data', 'overview', 'testimonial', 'position']),
            }
        }}
        curriculum={{
            heading: entry.getIn(['data', 'curriculum', 'heading']),
            sidebarlabel: entry.getIn(['data', 'curriculum', 'sidebarlabel']),
            subheading: entry.getIn(['data', 'curriculum', 'subheading']),
            sections,
            modulesheading: entry.getIn(['data', 'curriculum', 'modulesheading']),
            modules1,
            modules2,
        }}
        instructors={{
            heading: entry.getIn(['data', 'instructors', 'heading']),
            sidebarlabel: entry.getIn(['data', 'instructors', 'sidebarlabel']),
            profiles,
        }}
        admissions={{
            heading: entry.getIn(['data', 'admissions', 'heading']),
            sidebarlabel: entry.getIn(['data', 'admissions', 'sidebarlabel']),
            subheading: entry.getIn('data', 'admissions', 'subheading'),
            steps,
            suitabilityheading: entry.getIn(['data', 'admissions', 'suitabilityhesding']),
            suitabilitysubheading: entry.getIn(['data', 'admissions', 'suitabilitysubheading']),
            suitabilityobjectives,
        }}
        tuition={{
            heading: entry.getIn(['data', 'tuition', 'heading']),
            sidebarlabel: entry.getIn(['data', 'tuition', 'sidebarlabel']),
            subheading: entry.getIn(['data', 'tuition', 'subheading']),
            payment: entry.getIn(['data', 'tuition', 'payment']),
            card,
        }}
        programdates={{
            heading: entry.getIn(['data', 'programdates', 'heading']),
            sidebarlabel: entry.getIn(['data', 'programdates', 'sidebarlabel']),
            subheading: entry.getIn(['data', 'programdates', 'subheading']),
        }}
        course={{
            heading: entry.getIn(['data', 'course', 'heading']),
            sidebarlabel: entry.getIn(['data', 'course', 'sidebarlabel']),
            subheading: entry.getIn(['data', 'course', 'subheading']),
            schedule
        }}
    />
  )
}

export default BootcampPagePreview