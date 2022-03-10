import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import NextBatchSection from '../NextBatchSection';
import PreviewCompatibleImage from '../PreviewCompatibleImage';


const BootcampHeaderSection = ({ header, upcomingCourseDates, pagename }) => {
    console.log('header.image', header.image);

  return (
    <div className='container-fluid bootcamp-header-outer-container'>
        <div className='container bootcamp-header-inner-container'>
            <div className='row bootcamp-header-row'>
                <div className='col-12 col-md-6 order-2 order-md-1 bootcamp-header-text-col'>
                    <div className='bootcamp-header-text-container'>
                         <h2 className='bootcamp-header-heading'>
                            {header.heading}
                        </h2>
                        <p className='bootcamp-header-subheading'>
                            {header.subheading}
                        </p>
                        <ul className='bootcamp-header-list'>
                            {header.reasons.map(reason => {
                                return (
                                    <li>
                                        <StaticImage src="../../img/check-icon.png" alt="check icon" />
                                        
                                        &nbsp;&nbsp;&nbsp;
                                        <span className='reason-text'>{reason.reason}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                   
                </div>
                <div className='col-12 col-md-6 order-1 order-md-2 bootcamp-header-image'>
                    <div className='bootcamp-headerimage-container'>
                        <PreviewCompatibleImage imageInfo={header.image} />
                    </div>
                </div>
            </div>      
        </div>
        <NextBatchSection upcomingCourseDates={upcomingCourseDates} pagename={pagename} />
    </div> 
  )
}

export default BootcampHeaderSection