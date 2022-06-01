import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import CareersHeaderSection from "../components/careers/CareersHeaderSection";

// eslint-disable-next-line
export const CareersPageTemplate = ({ header }) => {
  return <CareersHeaderSection header={header} />;
};

const CareersPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <CareersPageTemplate
        title={frontmatter.title}
        header={frontmatter.header}
      />
    </Layout>
  );
};

export default CareersPage;

export const careersPageQuery = graphql`
  query careersPageQuery {
    file {
      id
    }
    markdownRemark(
      frontmatter: { templateKey: { eq: "careers-page" }, title: {} }
    ) {
      frontmatter {
        header {
          headerimage {
            alt
            image {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
              }
            }
          }
          heading
          subheading
        }
        pagename
        title
      }
    }
  }
`;
