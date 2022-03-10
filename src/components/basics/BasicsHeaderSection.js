import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import NextBatchSection from '../NextBatchSection';


const BasicsHeaderSection = ({ header, upcomingCourseDates, pagename }) => {
  return (
    <div className='container-fluid basics-header-outer-container'>
        <div className='container basics-header-inner-container'>
            <div className='row basics-header-row'>
                <div className='col-12 col-md-6 order-2 order-md-1 basics-header-text-col'>
                    <div className='basics-header-text-container'>
                         <h2 className='basics-header-heading'>
                            {header.heading}
                        </h2>
                        <p className='basics-header-subheading'>
                            {header.subheading}
                        </p>
                        <ul className='basics-header-list'>
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
                <div className='col-12 col-md-6 order-1 order-md-2 basics-header-image'>
                    <div className='basics-headerimage-container-desktop'>
                        <PreviewCompatibleImage imageInfo={header.image1} />
                    </div>
                    <div className='basics-headerimage-container-mobile'>
                        <PreviewCompatibleImage imageInfo={header.image2} />
                    </div>
                </div>
            </div>
        </div>
        {upcomingCourseDates && (
            <NextBatchSection upcomingCourseDates={upcomingCourseDates} pagename={pagename} />
        )}
    </div> 
  )
}

export default BasicsHeaderSection