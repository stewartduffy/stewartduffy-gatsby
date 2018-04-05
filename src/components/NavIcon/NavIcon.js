import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link, { navigateTo } from 'gatsby-link'

import { Icon } from '../Icon'

import styles from './NavIcon.module.scss'

const NavIcon = ({ iconClass, href, onClick }) => {
  if (href) {
    return (
      <a className={styles['nav-icon']} href={href}>
        <Icon name={iconClass} />
      </a>
    )
  } else {
    return (
      <button
        className={`btn btn-link ${styles['nav-icon']}`}
        onClick={onClick}
      >
        <Icon name={iconClass} />
      </button>
    )
  }
}

export default NavIcon
