import React from 'react'
import { PrivacyPolicyPageTemplate } from '../../templates/privacy-policy-page';


const PrivacyPolicyPagePreview = ({ entry }) => {

    
    
    return (
        <PrivacyPolicyPageTemplate 
            heading={entry.getIn(['data', 'heading'])}
            content={entry.getIn(['data', 'content'])}
        />
    )
}

export default PrivacyPolicyPagePreview