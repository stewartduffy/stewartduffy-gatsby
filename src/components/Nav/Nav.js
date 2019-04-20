import React from 'react'
import { clearFix } from 'polished'
import styled from 'styled-components'
import MyContext from '../../context'
import { NavMobile } from '../NavMobile'
import { NavIcon } from '../NavIcon'
import { NavItem } from '../NavItem'
import cv from '../../../static/assets/stewart_duffy_cv.pdf'
import { themeWhite, themeBlack, zIndex_2 } from '../../config/theme'

const NavContainer = styled.div`
  background: ${themeBlack};
  height: 53px;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  position: sticky;
  top: 0;
  z-index: ${zIndex_2};
  ${clearFix()};

  nav {
    height: 53px;
    color: ${themeWhite};
  }
`

const NavSocial = styled.nav`
  display: flex;
  float: left;

  @media (max-width: 767px) {
    display: none !important;
  }
`

const NavLinks = styled.nav`
  float: right;

  @media (max-width: 767px) {
    display: none !important;
  }
`

const NavMobileLinks = styled.nav`
  float: right;
  display: none !important;

  @media (max-width: 767px) {
    display: block !important;
  }
`

const Nav = () => (
  <MyContext.Consumer>
    {context => (
      <NavContainer>
        <NavSocial>
          <NavIcon iconClass="linkedin" href="http://nz.linkedin.com/in/stewartduffy/en" />
          <NavIcon iconClass="twitter" href="https://twitter.com/sbf_duffy" />
          <NavIcon iconClass="githubAlt" href="http://github.com/stewartduffy" />
          <NavIcon iconClass="skype" href="skype:stewart.duffy" />
          <NavIcon iconClass="spotify" href="https://open.spotify.com/user/1143680138" />
        </NavSocial>
        <NavLinks>
          <NavItem text="What I Do" href="#what-i-do" />
          <NavItem text="Work" href="#work-history" />
          <NavItem text="Contact" href="#lets-talk" />
          <NavItem text="CV" href={cv} />
        </NavLinks>
        <NavMobileLinks>
          <NavIcon iconClass="bars" onClick={context.toggleMobileNavOpen} />
          {context.state.mobileNavOpen && <NavMobile handleMenuClick={context.toggleMobileNavOpen} />}
        </NavMobileLinks>
      </NavContainer>
    )}
  </MyContext.Consumer>
)

export default Nav
