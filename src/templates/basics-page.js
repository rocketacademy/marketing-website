import React from 'react'
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import BasicsHeaderSection from '../components/basics/BasicsHeaderSection';
import BasicsContentSection from '../components/basics/BasicsContentSection';
import StartCodingSection from '../components/StartCodingSection';
import BasicsNextBatchSection from '../components/basics/BasicsNextBatchSection';


// eslint-disable-next-line
export const BasicsPageTemplate = ({
    header,
    overview,
    curriculum,
    instructors,
    admissions,
    programdates,
    lessons,
    upcomingCourseDates
}) => {

  return (
      <>
          <BasicsHeaderSection header={header} />
          <BasicsContentSection 
            overview={overview}
            curriculum={curriculum}
            instructors={instructors}
            admissions={admissions}
            programdates={programdates}
            lessons={lessons}
            upcomingCourseDates={upcomingCourseDates}
          />
          <StartCodingSection upcomingCourseDates={upcomingCourseDates} />
          <BasicsNextBatchSection upcomingCourseDates={upcomingCourseDates} />
      </>
  )
}

const BasicsPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

     // from rocket's gcal events
    const { edges } = data.allCalendarEvent;

    const today = new Date().toISOString();

    const upcomingCourseDates = edges
        .filter(event => event.node.start.dateTime > today);


    return (
        <Layout>
            <BasicsPageTemplate 
                header={frontmatter.header}
                overview={frontmatter.overview}
                curriculum={frontmatter.curriculum}
                instructors={frontmatter.instructors}
                admissions={frontmatter.admissions}
                programdates={frontmatter.programdates}
                lessons={frontmatter.lessons}
                upcomingCourseDates={upcomingCourseDates}
            />
        </Layout>
    )
}

export default BasicsPage

export const basicsPageQuery = graphql`
query basicsPageQuery {
  file {
    id
  }
  markdownRemark(frontmatter: {templateKey: {eq: "basics-page"}}) {
    id
    frontmatter {
      admissions {
        cardheading
        currentcost
        heading
        prevcost
        sidebarlabel
        subheading
        objectives {
          objective
        }
      }
      header {
        heading
        subheading
        image1 {
            alt
            image {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH)
                }
            }
        }
        image2 {
            alt
            image {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH)
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
                gatsbyImageData(layout: CONSTRAINED)
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
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
        testimonial {
          name
          position
          quote
          image {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
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
              gatsbyImageData(layout: FULL_WIDTH)
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
`