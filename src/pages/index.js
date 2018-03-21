import React from 'react'
import Link from 'gatsby-link'

import { ContentBlock } from '../components/ContentBlock'

const IndexPage = ({ data }) => {
  if (!data) return null

  return (
    <div>
      <div className="container main-container">
        <div className="main">
          {data.contentfulPostPage.contentBlock.map(
            ({ id, childContentfulContentBlockBodyTextNode, icon }) => (
              <ContentBlock
                key={id}
                icon={icon}
                data={childContentfulContentBlockBodyTextNode}
              />
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        description
      }
    }
    contentfulPostPage(slug: { eq: "home" }) {
      id
      title
      contentBlock {
        id
        icon
        childContentfulContentBlockBodyTextNode {
          id
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
