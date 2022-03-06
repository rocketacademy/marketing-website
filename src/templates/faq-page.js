import React from 'react'
import FaqHeaderSection from '../components/faq/FaqHeaderSection';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import FaqContentSection from '../components/faq/FaqContentSection';


// eslint-disable-next-line
export const FaqPageTemplate = ({
  header,
  general,
  codingbasics,
  pagename,
  softwareengineeringbootcamp
}) => {
    return (
        <>
            <FaqHeaderSection header={header} />
            <FaqContentSection 
                pagename={pagename}
                general={general}
                codingbasics={codingbasics}
                softwareengineeringbootcamp={softwareengineeringbootcamp} 
            />
        </>
    )
}


const FaqPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

        console.log('frontmatte', frontmatter.general);
        
    return (
        <Layout>
            <FaqPageTemplate
                pagename={frontmatter.pagename}
                header={frontmatter.header}
                general={frontmatter.general}
                codingbasics={frontmatter.codingbasics}
                softwareengineeringbootcamp={frontmatter.softwareengineeringbootcamp}
            />
        </Layout>
    )
}

export default FaqPage;

export const faqPageQuery = graphql`
    query faqPageTemplateQuery {
        file {
            id
        }
        markdownRemark(frontmatter: {templateKey: {eq: "faq-page"}}) {
            id
            frontmatter {
                pagename
                header {
                    smalltext
                    heading
                }
                general {
                    heading
                    sidebarlabel
                    questions {
                        answers 
                        question
                    }
                }
                codingbasics {
                    heading
                    sidebarlabel
                    questions {
                        answers 
                        question
                    }
                }
                softwareengineeringbootcamp {
                    heading
                    sidebarlabel
                    questions {
                        answers 
                        question
                    }
                }
            }
        }
    }
`