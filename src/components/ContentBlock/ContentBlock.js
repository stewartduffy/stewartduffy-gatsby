import React from 'react'
import Link from 'gatsby-link'
import { Icon } from '../Icon'
import styles from './ContentBlock.module.scss'

const ContentBlock = ({ data, icon, slug }) => (
  <div className={`row ${styles['content-block']}`} id={slug}>
    <div className="col-md-1 hidden-sm hidden-xs">
      <Icon name={icon} />
    </div>
    <div
      className={`col-md-11 ${styles['content-block-html']}`}
      dangerouslySetInnerHTML={{
        __html: data.childMarkdownRemark.html,
      }}
    />
  </div>
)

export default ContentBlock
