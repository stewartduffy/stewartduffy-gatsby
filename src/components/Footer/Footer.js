import React from 'react'
import styles from './Footer.module.scss'

const Footer = ({ data }) => (
  <div className={styles['footer']}>
    <h4>Last updated: {data.site.buildTimeZone}</h4>
  </div>
)

export default Footer
