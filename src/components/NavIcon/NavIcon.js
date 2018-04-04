import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link, { navigateTo } from 'gatsby-link'

import { Icon } from '../Icon'

import styles from './NavIcon.module.scss'

const NavIcon = ({ iconClass, href }) => (
  <a className={styles['nav-icon']} href={href}>
    <Icon name={iconClass} />
  </a>
)

export default NavIcon
