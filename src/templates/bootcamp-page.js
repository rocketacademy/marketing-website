import React from 'react'
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import '../styles/main.scss';
import getUpcomingCourseDates from '../helper/getUpcomingCourseDates';
import BootcampHeaderSection from '../components/bootcamp/BootcampHeaderSection';
import BootcampContentSection from '../components/bootcamp/BootcampContentSection';

// eslint-disable-next-line
export const BootcampPageTemplate = ({
  header,
  pagename,
  overview,
  curriculum,
  instructors,
  admissions,
  tuition,
  programdates,
  course,
  upcomingCourseDates
}) => {
  return (
    <>
      <BootcampHeaderSection header={header} />
      <BootcampContentSection 
              pagename={pagename}
              overview={overview}
              curriculum={curriculum}
              instructors={instructors}
              admissions={admissions}
              programdates={programdates}
              tuition={tuition}
              course={course}
              upcomingCourseDates={upcomingCourseDates}
            />
    </>
  )
}

const BootcampPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  const upcomingCourseDates = getUpcomingCourseDates(data);

    return (
        <Layout>
            <BootcampPageTemplate 
              title={frontmatter.title}
              pagename={frontmatter.pagename}
              header={frontmatter.header}
              overview={frontmatter.overview}
              curriculum={frontmatter.curriculum}
              instructors={ frontmatter.instructors}
              admissions={frontmatter.admissions}
              tuition={frontmatter.tuition}
              programdates={frontmatter.programdates}
              course={frontmatter.course}
              upcomingCourseDates={upcomingCourseDates}
            />
        </Layout>
    )
}
export default BootcampPage;

export const bootcampPageQuery = graphql`
query bootcampPageQuery {
  file {
    id
  }
  markdownRemark(frontmatter: {templateKey: {eq: "bootcamp-page"}}) {
    frontmatter {
      pagename
      header {
        heading
        image {
          alt
          image {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
        subheading
        reasons {
          reason
        }
      }
      overview {
        heading
        subheading
        sidebarlabel
        reasons {
          image {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
          text
        }
        testimonial {
          quote
          position
          name
          image {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
      curriculum {
        heading
        sidebarlabel
        subheading
        sections {
          heading
          section1
          section2
          section3
        }
        modulesheading
        modules1 {
          heading
          topics {
            topic
          }
        }
        modules2 {
          heading
          topics {
            topic
          }
        }
      }
      instructors {
        heading
        sidebarlabel
        profile {
          position
          name
          image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
      admissions {
        heading
        sidebarlabel
        subheading
        suitabilityheading
        suitabilitysubheading
        suitabilityobjectives {
          objective
        }
        steps {
          heading
          text
          image {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
      tuition {
        heading
        payment
        sidebarlabel
        subheading
        card {
          currentcost
          frequency
          prevcost
          text
        }
      }
      programdates {
        heading
        sidebarlabel
        subheading
      }
      course {
        heading
        sidebarlabel
        subheading
        schedule {
          heading
          project
          topics {
            topic
          }
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