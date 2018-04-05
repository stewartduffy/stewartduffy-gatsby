import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link, { navigateTo } from 'gatsby-link'
import { NavLink } from '../NavLink'
import styles from './NavItem.module.scss'

const NavItem = ({ text, href }) => (
  <span className={styles['nav-item']}>
    <NavLink text={text} href={href} />
  </span>
)

export default NavItem
