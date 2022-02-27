import React from 'react'

const FaqHeaderSection = ({ header }) => {
  return (
    <div className='container-fluid faq-header-outer-container'>
        <div className='container faq-header-inner-container'>
            <div className='faq-header-smalltext'>
                {header.smalltext}
            </div>
            <div className='faq-header-heading'>
                {header.heading}
            </div>
        </div>
    </div>
  )
}

export default FaqHeaderSection