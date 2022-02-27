import React from 'react'
import FaqHeaderSection from '../components/faq/FaqHeaderSection';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import FaqContentSection from '../components/faq/FaqContentSection';

// eslint-disable-next-line
export const FaqPageTemplate = ({
  header,
  general
}) => {
    return (
        <>
            <FaqHeaderSection header={header} />
            <FaqContentSection general={general} />
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
                        answer
                        question
                    }
                }
            }
        }
    }
`