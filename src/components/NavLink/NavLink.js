import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link, { navigateTo } from 'gatsby-link'
import styles from './NavLink.module.scss'

const NavLink = ({ text, href }) => (
  <a className={styles['nav-item-link']} href={href}>
    {text}
  </a>
)

export default NavLink
