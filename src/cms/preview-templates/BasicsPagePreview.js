import React from 'react'
import { BasicsPageTemplate } from '../../templates/basics-page';

const BasicsPagePreview = ({  entry, getAsset }) => {

    const entryReasons = entry.getIn(['data', 'header', 'reasons'])
    const reasons = entryReasons ? entryReasons.toJS() : []

    const entryStudentexperience = entry.getIn(['data', 'overview', 'studentexperience'])
    const studentexperience = entryStudentexperience ? entryStudentexperience.toJS() : []

    const entryCards = entry.getIn(['data', 'overview', 'learningstyle', 'card'])
    const cards = entryCards ? entryCards.toJS() : []

    const entryTopics = entry.getIn(['data', 'curriculum', 'topics'])
    const topics = entryTopics ? entryTopics.toJS() : []

    const entryProfiles = entry.getIn(['data', 'instructors', 'profile'])
    const profiles = entryProfiles ? entryProfiles.toJS() : []

    const entryObjectives = entry.getIn(['data', 'admissions', 'objectives'])
    const objectives = entryObjectives ? entryObjectives.toJS() : []

    const entryLessons = entry.getIn(['data', 'lessons', 'lesson'])
    const lessons = entryLessons ? entryLessons.toJS() : []

    return (
        <BasicsPageTemplate 
            header={{
                heading: entry.getIn(['data', 'header', 'heading']),
                subheading: entry.getIn(['data', 'header', 'subheading']),
                image1: {
                    image: getAsset(entry.getIn(['data', 'header', 'image1', 'image'])),
                    alt: entry.getIn(['data', 'header', 'image1', 'alt']),
                },
                image2: {
                    image: getAsset(entry.getIn(['data', 'header', 'image2', 'image'])),
                    alt: entry.getIn(['data', 'header', 'image2', 'alt']),
                },
                reasons,
            }}
            overview={{
                heading: entry.getIn(['data', 'overview', 'heading']),
                sidebarlabel: entry.getIn(['data', 'overview', 'sidebarlabel']),
                studentexperience,
                testimonial: {
                    quote: entry.getIn(['data', 'overview', 'testimonial', 'quote']),
                    image: getAsset(entry.getIn(['data', 'overview', 'testimonial', 'image'])),
                    name: entry.getIn(['data', 'overview', 'testimonial', 'name']),
                    position: entry.getIn(['data', 'overview', 'testimonial', 'position']),
                },
                learningstyle: {
                    heading: entry.getIn(['data', 'overview', 'learningstyle', 'heading']),
                    card: cards,
                }
            }}
            curriculum={{
                heading: entry.getIn(['data', 'curriculum', 'heading']),
                sidebarlabel: entry.getIn(['data', 'curriculum', 'sidebarlabel']),
                topics,
            }}
            instructors={{
                heading: entry.getIn(['data', 'instructors', 'heading']),
                sidebarlabel: entry.getIn(['data', 'instructors', 'sidebarlabel']),
                profile: profiles,
            }}
            admissions={{
                heading: entry.getIn(['data', 'admissions', 'heading']),
                subheading: entry.getIn(['data', 'admissions', 'subheading']),
                sidebarlabel: entry.getIn(['data', 'admissions', 'sidebarlabel']),
                cardheading: entry.getIn(['data', 'admissions', 'cardheading']),
                prevcost: entry.getIn(['data', 'admissions', 'prevcost']),
                currentcost: entry.getIn(['data', 'admissions', 'currentcost']),
                objectives,
            }}
            programdates={{
                heading: entry.getIn(['data', 'programdates', 'heading']),
                subheading: entry.getIn(['data', 'programdates', 'subheading']),
                sidebarlabel: entry.getIn(['data', 'programdates', 'sidebarlabel']),
            }}
            lessons={{
                heading: entry.getIn(['data', 'lessons', 'heading']),
                subheading: entry.getIn(['data', 'lessons', 'subheading']),
                sidebarlabel: entry.getIn(['data', 'lessons', 'sidebarlabel']),
                lesson: lessons
            }}
        />
    )
}

export default BasicsPagePreview