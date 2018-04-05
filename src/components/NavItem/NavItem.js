import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link, { navigateTo } from 'gatsby-link'
import styles from './NavItem.module.scss'

const NavItem = ({ text, href }) => (
  <span className={styles['nav-item']}>
    <a className={styles['nav-item-link']} href={href}>
      {text}
    </a>
  </span>
)

export default NavItem
