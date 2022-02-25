import React from 'react'
import Layout  from '../components/Layout';
import { graphql } from 'gatsby';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import '../styles/main.scss';


// eslint-disable-next-line
export const AboutPageTemplate = ({
    title,
    header,
    image,
    why,
    rocket,
    companies
}) => {

  return (
      <div className='container-fluid about-outer-container'>
        <div className='container about-inner-container'>
          <div className='about-header-heading'>{header.heading}</div>
          <div className='about-header-subheading'>{header.subheading}</div>
          <div className='about-header-image'>
            <PreviewCompatibleImage imageInfo={image} />
          </div>
        </div>
      </div>
  )
}

const AboutPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;
    console.log('frontmatter', frontmatter);

    return (
        <Layout>
            <AboutPageTemplate
                title={frontmatter.title}
                header={frontmatter.header}
                image={frontmatter.image}
                why={frontmatter.why}
                rocket={frontmatter.rocket}
                companies={frontmatter.companies}
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
    id
    frontmatter {
      companies {
        heading
        icons {
          image {
            childrenImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
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
          icon {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
      rocket {
        text
        heading
        quote {
          name
          position
          text
        }
        image {
          alt
          image {
            childrenImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
}
`