import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link, { navigateTo } from 'gatsby-link'
import logo from '../../img/logo.svg'

const Header = ({ data, location }) => (
  <div className="header">
    <img
      className="heading-logo"
      src={logo}
      alt="Stewart Duffy / Front-End Developer"
    />
    <div className="nav-container clearfix">
      <div className="container">
        <nav className="pull-left hidden-xs">
          <a
            className="nav-icon"
            href="http://nz.linkedin.com/in/stewartduffy/en"
          >
            <i className="fa fa-linkedin fa-fw" />
          </a>
          <a className="nav-icon" href="https://twitter.com/sbf_duffy">
            <i className="fa fa-twitter fa-fw" />
          </a>
          <a className="nav-icon" href="http://github.com/stewartduffy">
            <i className="fa fa-github-alt fa-fw" />
          </a>
          <a className="nav-icon" href="skype:stewart.duffy">
            <i className="fa fa-skype fa-fw" />
          </a>
          <a
            className="nav-icon"
            href="https://open.spotify.com/user/1143680138"
          >
            <i className="fa fa-spotify fa-fw" />
          </a>
        </nav>
        <nav className="pull-right hidden-xs">
          <a className="nav-item active" href="/">
            about
          </a>
          <span> / </span>
          <a className="nav-item" href="#contact">
            contact
          </a>
          <span> / </span>
          <a className="nav-item" href="/assets/stewart_duffy_cv.pdf">
            cv
          </a>
        </nav>
      </div>
    </div>
  </div>
)

export default Header
