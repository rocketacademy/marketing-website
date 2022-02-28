import React from 'react'
import FaqContentIndividualSection from './FaqContentIndividualSection';
import FaqSidebarSection from './FaqSidebarSection';


const FaqContentSection = ({ 
    general,
    codingbasics,
    softwareengineeringbootcamp
 }) => {

  return (
    <div className='container faq-content-container'>
        <div className='row faq-content-row'>
            <FaqSidebarSection
                general={general}
                codingbasics={codingbasics}
                softwareengineeringbootcamp={softwareengineeringbootcamp}
            />
            <div className='col-12 col-md-10 faq-content-col'>
                <FaqContentIndividualSection content={general} />
                <FaqContentIndividualSection content={codingbasics} />
                <FaqContentIndividualSection content={softwareengineeringbootcamp} />
            </div>
        </div>
    </div>
  )
}

export default FaqContentSection