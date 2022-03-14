import React from 'react';
import { AboutPageTemplate } from '../../templates/about-page';

const AboutPagePreview = ({ entry, getAsset }) => {

    const entryReasons = entry.getIn(['data', 'why', 'reasons'])
    const reasons = entryReasons ? entryReasons.toJS() : []

    const entryProfiles = entry.getIn(['data', 'leadership', 'profiles'])
    const profiles = entryProfiles ? entryProfiles.toJS() : []

     const entryIcons = entry.getIn(['data', 'companies', 'icons'])
    const icons = entryIcons ? entryIcons.toJS() : []

  return (
    <AboutPageTemplate 
        header={{
            heading: entry.getIn(['data', 'header', 'heading']),
            subheading: entry.getIn(['data', 'header', 'subheading']),
        }}
        image={{
            image: getAsset(entry.getIn(['data','image', 'image'])),
            alt: entry.getIn(['data', 'image', 'alt']),
        }}
        why={{
            heading: entry.getIn(['data', 'why', 'heading']),
            reasons,
        }}
        companies={{
            heading: entry.getIn(['data', 'companies', 'heading']),
            icons,
        }}
        rocket={{
            heading: entry.getIn(['data', 'rocket', 'heading']),
            text: entry.getIn(['data', 'rocket', 'text']),
            image: {
                image: getAsset(entry.getIn(['data', 'rocket', 'image', 'image'])),
                alt: entry.getIn(['data', 'rocket', 'image', 'alt']),
            },
            quote: entry.getIn(['data', 'rocket', 'quote']),
            name: entry.getIn(['data', 'rocket', 'name']),
            position: entry.getIn(['data', 'rocket', 'position']),
        }}
        leadership={{
            heading: entry.getIn(['data', 'leadership', 'heading']),
            profiles,
        }}
    />
  )
}

export default AboutPagePreview