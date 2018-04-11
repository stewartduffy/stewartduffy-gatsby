import React from 'react'
import Link from 'gatsby-link'
import { Icon } from '../Icon'
import styles from './ContentBlock.module.scss'

const ContentBlock = ({ data, icon, slug, title }) => (
  <div className={`row ${styles['content-block']}`}>
    <div className="col-md-1 hidden-sm hidden-xs">
      <Icon name={icon} />
    </div>
    <div className="col-md-11">
      <h2 className={styles['content-block-heading']} id={slug}>
        {title}
      </h2>
      <div
        className={`${styles['content-block-html']}`}
        dangerouslySetInnerHTML={{
          __html: data.childMarkdownRemark.html,
        }}
      />
    </div>
  </div>
)

export default ContentBlock
