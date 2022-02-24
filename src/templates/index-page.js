import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import GetStartedButton from "../components/GetStartedButton";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Layout from "../components/Layout";
import '../styles/main.scss';
import HomepageSuccessSection from "../components/homepage/HomepageSuccessSection";
import HomepageCoursesSection from "../components/homepage/HomepageCoursesSection";
import HomepageCurriculumSection from "../components/homepage/HomepageCurriculumSection";
import HomepageFormerStudentsSection from "../components/homepage/HomepageFormerStudentsSection";
import HomepageStartCodingSection from "../components/homepage/HomepageStartCodingSection";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  title,
  header,
  success, 
  courses,
  upcomingCourseDates,
  curriculum,
  formerstudents
}) => {

  return (
    <>
    <div className="container homepage-header-container">
      <div className="row homepage-header-row">
          <div className="col-12 col-md-6 order-2 order-md-1 homepage-header-col-left">
              <h2 className="homepage-header-heading">
              {header.heading}
              </h2>
              <p className="homepage-header-subheading">
              {header.subheading}
              </p>
              <div className="hompage-header-button-container">
              <GetStartedButton />
              </div>
              <h6 className="homepage-header-companies-heading">COMPANIES THAT HAVE HIRED OUR GRADUATES</h6>
              <div className="homepage-header-companies-container">
              <div className="homepage-header-individual-company">
                  <StaticImage src="../../static/img/homepage/govtech-logo.png" alt="govtech logo" />
              </div>
              <div className="homepage-header-individual-company">
                  <StaticImage src='../../static/img/homepage/xfers-logo.png' alt="xfers logo" />
              </div>
              <div className="homepage-header-individual-company">
                  <StaticImage src='../../static/img/homepage/ninetynineco-logo.png' alt="ninetynineco logo" />
              </div>
              <div className="homepage-header-individual-company">
                  <StaticImage src='../../static/img/homepage/ninjavan-logo.png' alt="ninjavan logo" />
              </div>
              <div className="homepage-header-individual-company">
                  <StaticImage src='../../static/img/homepage/glints-logo.png' alt="glints logo" />
              </div>
              </div>
          </div> 
          <div className="col-12 col-md-6 order-1 order-md-2 homepage-header-col-right">
              <div className="homepage-header-col-right-img">
                  <PreviewCompatibleImage imageInfo={header.headerimage} />
              </div>
          </div>
      </div>
      <div className="container homepage-message-bubble-container">
          <div className="row d-none d-md-block homepage-message-bubble-row">
              <div className="homepage-message-bubble-container">
              <StaticImage src='../../static/img/homepage/chat-icon.png' alt="chat bubble" width={70} />
              </div>
          </div>
      </div>
    </div>
    <HomepageSuccessSection 
      success={success} 
    />
    <HomepageCoursesSection 
      courses={courses} 
      upcomingCourseDates={upcomingCourseDates}
    />
    <HomepageCurriculumSection curriculum={curriculum} />
    <HomepageFormerStudentsSection formerstudents={formerstudents} />
    <HomepageStartCodingSection upcomingCourseDates={upcomingCourseDates} />
    </>

  );
};

IndexPageTemplate.propTypes = { 
  title: PropTypes.string,
  header: PropTypes.shape({
    heading: PropTypes.string,
    subheading: PropTypes.string,
    headerimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  success: PropTypes.shape({
    heading: PropTypes.string,
    blurbs: PropTypes.array,
  }),
  courses: PropTypes.shape({
    heading: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    details: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => { 
  const { frontmatter } = data.markdownRemark;
 
   // from rocket's gcal events
  const { edges } = data.allCalendarEvent;

  const today = new Date().toISOString();

  const upcomingCourseDates = edges
      .filter(event => event.node.start.dateTime > today);


  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        header={frontmatter.header}
        success={frontmatter.success}
        courses={frontmatter.courses}
        upcomingCourseDates={upcomingCourseDates}
        curriculum={frontmatter.curriculum}
        formerstudents={frontmatter.formerstudents}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    allCalendarEvent: PropTypes.shape({
      node: PropTypes.array,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplateQuery {
    file {
      id
    }
    markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        header {
          heading
          subheading
          headerimage {
            alt
            image {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
        }
        success {
          heading
          blurbs {
            text
            heading
            image {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
        }
        courses {
          image {
            alt
            image {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
          details {
            conditions
            currentprice
            duration
            heading
            prevprice
            subheading
            type
            icon {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
          heading
        }
        curriculum {
          heading
          image {
            alt
            image {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
          instructors {
            experience
            image {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
            position
            name
          }
          smalltext
          subheading
        }
        formerstudents {
          company {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
          position
          studentname
          testimonial
        }
      }
    }
    allCalendarEvent {
      edges {
        node {
          description
          summary
          end {
              dateTime
              date
          }
          start {
              dateTime
              date
          }
        }
      }
    }
  }
`;
