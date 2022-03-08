import React from 'react'
import PreviewCompatibleImage from '../PreviewCompatibleImage';


const CareersHeaderSection = ({ header }) => {
  return (
    <div className='container careers-header-container'>
        <div className='row careers-header-row'>
            <div className='col-12 col-md-6 careers-header-col-left'>
                <h2 className='careers-header-heading'>
                    {header.heading}
                </h2>
                <p className='careers-header-subheading'>
                    {header.subheading}
                </p>
                <button className='btn btn-primary careers-header-btn'>See open roles</button>
            </div>
            <div className='col-12 col-md-6 careers-header-col-right'>
                <PreviewCompatibleImage imageInfo={header.headerimage} />
                <button className='btn btn-primary careers-header-btn-right'>See open roles</button>
            </div>
        </div>
    </div>
  )
}

export default CareersHeaderSection