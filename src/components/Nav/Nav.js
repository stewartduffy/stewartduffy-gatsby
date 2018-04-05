import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link, { navigateTo } from 'gatsby-link'
import { Icon } from '../Icon'
import { NavIcon } from '../NavIcon'
import { NavItem } from '../NavItem'
import styles from './Nav.module.scss'
import cv from '../../../static/assets/stewart_duffy_cv.pdf'

import { NavMobile } from '../NavMobile'

const Nav = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileNavOpen: false,
    }
    this.handleMenuClick = this.handleMenuClick.bind(this)
  }

  handleMenuClick() {
    this.setState({
      mobileNavOpen: !this.state.mobileNavOpen,
    })
  }

  render() {
    return (
      <div className={`${styles['nav-container']} clearfix`}>
        <nav className={`${styles['nav-social']} pull-left hidden-xs`}>
          <NavIcon
            iconClass="linkedin"
            href="http://nz.linkedin.com/in/stewartduffy/en"
          />
          <NavIcon iconClass="twitter" href="https://twitter.com/sbf_duffy" />
          <NavIcon
            iconClass="githubAlt"
            href="http://github.com/stewartduffy"
          />
          <NavIcon iconClass="skype" href="skype:stewart.duffy" />
          <NavIcon
            iconClass="spotify"
            href="https://open.spotify.com/user/1143680138"
          />
        </nav>
        <nav className="pull-right hidden-xs">
          <NavItem text="What I Do" href="#what-i-do" />
          <NavItem text="Work" href="#work-history" />
          <NavItem text="Contact" href="#lets-talk" />
          <NavItem text="CV" href={cv} />
        </nav>

        <nav className="pull-right visible-xs">
          <NavIcon iconClass="bars" onClick={this.handleMenuClick} />
          {this.state.mobileNavOpen && (
            <NavMobile handleMenuClick={this.handleMenuClick} />
          )}
        </nav>
      </div>
    )
  }
}

export default Nav
