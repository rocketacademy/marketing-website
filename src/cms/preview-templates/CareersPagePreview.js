import React from 'react'
import { CareersPageTemplate } from '../../templates/careers-page';


const CareersPagePreview = ({ entry, getAsset }) => {
  return (
    <CareersPageTemplate 
        header={{
            heading: entry.getIn(['data', 'header', 'heading']),
            subheading: entry.getIn(['data', 'header', 'subheading']),
            headerimage: {
                image: getAsset(entry.getIn(['data', 'header', 'headerimage', 'image'])),
                alt: entry.getIn(['data', 'header', 'headerimage', 'alt']),
            }
        }}
    />
  )
}

export default CareersPagePreview