import React from 'react'
import FaqContentIndividualSection from './FaqContentIndividualSection';
import SidebarSection from '../SidebarSection';


const FaqContentSection = ({ 
    general,
    codingbasics,
    softwareengineeringbootcamp,
    pagename
 }) => {

    const sectionArray = [general, codingbasics, softwareengineeringbootcamp];

    return (
        <div className='container faq-content-container'>
            <div className='row faq-content-row'>
                <SidebarSection
                    sectionArray={sectionArray} pagename={pagename}
                />
                <div className='col-12 col-md-9 faq-content-col'>
                    <FaqContentIndividualSection content={general} />
                    <FaqContentIndividualSection content={codingbasics} />
                    <FaqContentIndividualSection content={softwareengineeringbootcamp} />
                </div>
            </div>
        </div>
    )
}

export default FaqContentSection