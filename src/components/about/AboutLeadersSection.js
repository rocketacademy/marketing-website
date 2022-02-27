import React from 'react'
import PreviewCompatibleImage from '../PreviewCompatibleImage'

const AboutLeadersSection = ({ leadership }) => {
  return (
    <div className='container about-leaders-container'>
        <h2 className='about-leaders-heading'>{leadership.heading}</h2>
        <div className='row about-profiles-row'>
            {leadership.profiles.map((profile) => {
                return (
                    <>
                    <div className='about-leaders-profiles'>
                        <div className='about-leaders-profiles-image'>
                            <PreviewCompatibleImage imageInfo={profile} />
                        </div>
                        <div className='about-leaders-profile-name'>
                            {profile.name}
                        </div>
                        <div className='about-leaders-profile-position'>
                            {profile.position}
                        </div>
                    </div>
                    </>
                )
            })}
        </div>
        <div className='about-leaders-jobs-row'>
            <div className='about-leaders-jobs-content'>
                <h2 className='about-leaders-jobs-heading'>
                    Our team is growing!
                </h2>
                <div className='about-leaders-jobs-subheading'>
                    Empower millions to unlock their future potential. Ready to join us?
                </div>
            </div>
            <div className='about-leaders-jobs-button-container'>
                <div className='btn btn-outline-primary about-leaders-jobs-button'>See Job Openings</div>
            </div>
        </div>
    </div>
  )
}

export default AboutLeadersSection