import React from 'react'
import Link from 'gatsby-link'

const ContentBlock = ({ data, icon }) => {
  return (
    <div className="row">
      <div className="col-md-1 hidden-sm hidden-xs">
        <i className={`main-icon fa ${icon}`} />
      </div>
      <div
        className="col-md-11"
        dangerouslySetInnerHTML={{
          __html: data.childMarkdownRemark.html,
        }}
      />
    </div>
  )
}

export default ContentBlock
