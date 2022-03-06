import React from 'react'
import Layout  from '../components/Layout';
import { graphql } from 'gatsby';
import '../styles/main.scss';
import AboutHeaderSection from '../components/about/AboutHeaderSection';
import AboutReasonsSection from '../components/about/AboutReasonsSection';
import AboutRocketSection from '../components/about/AboutRocketSection';
import AboutLeadersSection from '../components/about/AboutLeadersSection';
import StartCodingSection from '../components/StartCodingSection';


// eslint-disable-next-line
export const AboutPageTemplate = ({
    header,
    image,
    why,
    rocket,
    leadership,
    upcomingCourseDates
}) => {

  return (
    <>
      <AboutHeaderSection 
        header={header}
        image={image}
      />
      <AboutReasonsSection
        why={why}
      />
      <AboutRocketSection
        rocket={rocket}
      />
      <AboutLeadersSection
        leadership={leadership}
      />
      <StartCodingSection upcomingCourseDates={upcomingCourseDates} />
    </>
  )
}

const AboutPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

     // from rocket's gcal events
    const { edges } = data.allCalendarEvent;

    const today = new Date().toISOString();

    const upcomingCourseDates = edges
        .filter(event => event.node.start.dateTime > today);


    return (
        <Layout>
            <AboutPageTemplate
                title={frontmatter.title}
                header={frontmatter.header}
                image={frontmatter.image}
                why={frontmatter.why}
                rocket={frontmatter.rocket}
                leadership={frontmatter.leadership}
                upcomingCourseDates={upcomingCourseDates}
            />
        </Layout>
    )
}

export default AboutPage;

export const aboutPageQuery = graphql`
query aboutPageQuery {
  file {
    id
  }
  markdownRemark(frontmatter: {templateKey: {eq: "about-page"}}) {
    frontmatter {
      header {
        heading
        subheading
      }
      image {
        alt
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
      why {
        heading
        reasons {
          heading
          text
          image {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
      rocket {
        text
        heading
        name
        position
        quote
        image {
          alt
          image {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
      leadership {
        heading
        profiles {
          image {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
          name
          position
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