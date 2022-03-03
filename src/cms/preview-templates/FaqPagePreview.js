import React from 'react'
import { FaqPageTemplate } from '../../templates/faq-page';


const FaqPagePreview = ({ entry, getAsset }) => {

    const entryGeneralQuestions = entry.getIn(['data', 'general', 'questions'])
    const generalQuestions = entryGeneralQuestions ? entryGeneralQuestions.toJS() : [];

    const entryCodingbasicsQuestions = entry.getIn(['data', 'codingbasics', 'questions'])
    const codingbasicsQuestions = entryCodingbasicsQuestions ? entryCodingbasicsQuestions.toJS() : []

    const entrySoftwareengineeringbootcampQuestions = entry.getIn(['data', 'softwareengineeringbootcamp', 'questions'])
    const softwareengineeringbootcampQuestions = entrySoftwareengineeringbootcampQuestions ? entrySoftwareengineeringbootcampQuestions.toJS() : [];

    
    return (
        <FaqPageTemplate 
            header={{
                heading: entry.getIn(['data', 'header', 'heading']),
                smalltext: entry.getIn(['data', 'header', 'smalltext']),
            }}
            general={{
                heading: entry.getIn(['data', 'general', 'heading']),
                generalQuestions,
            }}
            codingbasics={{
                heading: entry.getIn(['data', 'codingbasics', 'heading']),
                codingbasicsQuestions,
            }}
            softwareengineeringbootcamp={{
                heading: entry.getIn(['data', 'softwareengineeringbootcamp', 'heading']),
                softwareengineeringbootcampQuestions,
            }}
        />
    )
}

export default FaqPagePreview