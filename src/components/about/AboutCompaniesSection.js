import React from 'react'
import PreviewCompatibleImage from '../PreviewCompatibleImage'


const AboutCompaniesSection = ({ companies }) => {
    console.log('companies', companies);

  return (
    <div className='container-fluid about-companies-outer-container'>
        <div className='container about-companies-inner-container'>
            <div className='about-companies-text'>
                {companies.heading}
            </div>
            <div className='about-companies-logos'>
            {companies.icons.map((company) => {
                return (
                    <div className='about-companies-individual-logo'>
                    <PreviewCompatibleImage imageInfo={company.image} />
                    </div>
                )
            })}
            </div>
        </div>
    </div>
  )
}

export default AboutCompaniesSection