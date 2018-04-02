import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link, { navigateTo } from 'gatsby-link'

import { Icon } from '../Icon'

import styles from './Nav.module.scss'

const NavIcon = ({ iconClass, href }) => (
  <a className={styles['nav-icon']} href={href}>
    <Icon name={iconClass} />
  </a>
)

const NavItem = ({ text, href }) => (
  <span className={styles['nav-item']}>
    <a className={styles['nav-item-link']} href={href}>
      {text}
    </a>
  </span>
)

const Nav = () => (
  <div className={`${styles['nav-container']} clearfix`}>
    <div className="container">
      <nav className="pull-left hidden-xs">
        <NavIcon
          iconClass="linkedin"
          href="http://nz.linkedin.com/in/stewartduffy/en"
        />
        <NavIcon iconClass="twitter" href="https://twitter.com/sbf_duffy" />
        <NavIcon iconClass="githubAlt" href="http://github.com/stewartduffy" />
        <NavIcon iconClass="skype" href="skype:stewart.duffy" />
        <NavIcon
          iconClass="spotify"
          href="https://open.spotify.com/user/1143680138"
        />
      </nav>
      <nav className="pull-right hidden-xs">
        {/* <NavItem text="about" href="/" /> */}
        <NavItem text="contact" href="#lets-talk" />
        <NavItem text="cv" href="/assets/stewart_duffy_cv.pdf" />
      </nav>
    </div>
  </div>
)

export default Nav
