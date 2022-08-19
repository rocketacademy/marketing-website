import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import BasicsHeaderSection from "../components/basics/BasicsHeaderSection";
import BasicsContentSection from "../components/basics/BasicsContentSection";
import StartCodingSection from "../components/StartCodingSection";

// eslint-disable-next-line
export const BasicsPageTemplate = ({
  header,
  pagename,
  overview,
  curriculum,
  instructors,
  admissions,
  lessons,
  upcomingCourseDates,
}) => {
  return (
    <>
      <BasicsHeaderSection
        header={header}
        upcomingCourseDates={upcomingCourseDates}
        pagename={pagename}
      />
      <BasicsContentSection
        pagename={pagename}
        overview={overview}
        curriculum={curriculum}
        instructors={instructors}
        admissions={admissions}
        lessons={lessons}
      />
      <StartCodingSection upcomingCourseDates={upcomingCourseDates} />
    </>
  );
};

const BasicsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  // from rocket's gcal events
  const { edges } = data.allCalendarEvent;

  const today = new Date().toISOString();

  const upcomingCourseDates = edges.filter(
    (event) => event.node.start.dateTime > today
  );

  return (
    <Layout>
      <BasicsPageTemplate
        pagename={frontmatter.pagename}
        header={frontmatter.header}
        overview={frontmatter.overview}
        curriculum={frontmatter.curriculum}
        instructors={frontmatter.instructors}
        admissions={frontmatter.admissions}
        lessons={frontmatter.lessons}
        upcomingCourseDates={upcomingCourseDates}
      />
    </Layout>
  );
};

export default BasicsPage;

export const basicsPageQuery = graphql`
  query basicsPageQuery {
    file {
      id
    }
    markdownRemark(frontmatter: { templateKey: { eq: "basics-page" } }) {
      id
      frontmatter {
        pagename
        admissions {
          currentcost
          heading
          prevcost
          sidebarlabel
          subheading1
          subheading2
          objectives {
            objective
          }
          image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
        header {
          heading
          subheading
          image1 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
              }
            }
          }
          reasons {
            reason
          }
        }
        overview {
          heading
          sidebarlabel
          learningstyle {
            heading
            card {
              heading
              image {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                }
              }
              text
            }
          }
          studentexperience {
            heading
            text
            image {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
              }
            }
          }
          testimonial {
            name
            position
            quote
            image {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  width: 150
                )
              }
            }
          }
        }
        programdates {
          heading
          sidebarlabel
          subheading
        }
        curriculum {
          heading
          sidebarlabel
          topics {
            topic
          }
        }
        instructors {
          heading
          sidebarlabel
          profile {
            name
            position
            image {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  width: 200
                  height: 200
                )
              }
            }
          }
        }
        lessons {
          heading
          sidebarlabel
          subheading
          lesson {
            week
            inclass
            number
            preclass
            title
            project
          }
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
