import React from 'react'
import Link from 'gatsby-link'
import { ContentBlock } from '../components/ContentBlock'

const IndexPage = ({ data }) => {
  if (!data) return null
  return (
    <div>
      {data.contentfulPostPage.contentBlock.map(
        ({ id, childContentfulContentBlockBodyTextNode, icon, slug }) => (
          <ContentBlock
            key={id}
            slug={slug}
            icon={icon}
            data={childContentfulContentBlockBodyTextNode}
          />
        )
      )}
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
        slug
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
