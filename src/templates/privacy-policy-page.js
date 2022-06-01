import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import MarkdownContent from "../components/ConvertMarkdown";
import "../styles/main.scss";

// eslint-disable-next-line
export const PrivacyPolicyPageTemplate = ({ heading, content }) => {
  return (
    <>
      <div className="container-fluid privacy-policy-outer-container">
        <div className="container privacy-policy-header-container">
          <div className="privacy-policy-header">{heading}</div>
        </div>
      </div>
      <div className="container privacy-policy-content-container">
        <MarkdownContent
          content={content}
          className="'privacy-policy-content"
        />
      </div>
    </>
  );
};

const PrivacyPolicyPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <PrivacyPolicyPageTemplate
        heading={frontmatter.heading}
        content={frontmatter.content}
      />
    </Layout>
  );
};

export default PrivacyPolicyPage;

export const faqPageQuery = graphql`
  query privacyPolicyPageTemplateQuery {
    file {
      id
    }
    markdownRemark(
      frontmatter: { templateKey: { eq: "privacy-policy-page" } }
    ) {
      id
      frontmatter {
        pagename
        heading
        content
      }
    }
  }
`;
