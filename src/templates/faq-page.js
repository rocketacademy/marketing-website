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
  softwareengineeringbootcamp
}) => {
    return (
        <>
            <FaqHeaderSection header={header} />
            <FaqContentSection 
                general={general}
                codingbasics={codingbasics}
                softwareengineeringbootcamp={softwareengineeringbootcamp} 
            />
        </>
    )
}
const FaqPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
        <FaqPageTemplate
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
                header {
                    smalltext
                    heading
                }
                general {
                    heading
                    questions {
                        answers 
                        question
                    }
                }
                codingbasics {
                    heading
                    questions {
                        answers 
                        question
                    }
                }
                softwareengineeringbootcamp {
                    heading
                    questions {
                        answers 
                        question
                    }
                }
            }
        }
    }
`