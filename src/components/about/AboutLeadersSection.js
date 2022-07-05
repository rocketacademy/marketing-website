import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import ConvertMarkdown from '../ConvertMarkdown';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';


const AboutLeadersSection = ({ leadership }) => {

  return (
    <div className='container about-leaders-container'>
        <h2 className='about-leaders-heading'>{leadership.heading}</h2>
        <div className='row about-profiles-row my-5'>
            {leadership.profiles.map((profile) => {
                return (
                    <>
                    <div className='col-12 col-md-6 about-leaders-col'>
                    <div className='row about-leaders-profiles-row'>

                        <div className='col-4 about-leaders-profiles-image'>
                            <PreviewCompatibleImage imageInfo={profile} />
                        </div>
                        <div className='col-8 about-leaders-profile-container'>
                        <div className='about-leaders-profile-name'>
                            {profile.name.toUpperCase()}
                        </div>
                        <div className='about-leaders-profile-position'>
                            {profile.position}
                        </div>
                        <div className='about-leaders-profile-position'>
                            {profile.description}
                        </div>
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={<Popover id="popover-basic">
                                <Popover.Header as="h3">{profile.name.split(' ')[0]}'s work experience</Popover.Header>
                                <Popover.Body>
                                    <ConvertMarkdown content={profile.experience} className={'popover-content'} />
                                </Popover.Body>
                            </Popover>}
                        >
                            <Button className='about-leaders-experience-button'>
                                <div className='experience-button-display'>
                                    <div className='experience-button-text'>
                                        Read more
                                    </div>
                                    <div className='experience-button-arrow'>
                                        <StaticImage src="../../../static/img/homepage/right-arrow.png" alt="right-arrow" />
                                    </div>
                                </div>
                                
                            </Button>
                        </OverlayTrigger>
                        </div>
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
                <div className='btn btn-outline-primary about-leaders-jobs-button'>
                    <a href="https://boards.greenhouse.io/rocketacademy" target="_blank"  rel="noopener noreferrer">
                        Open Positions
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutLeadersSection