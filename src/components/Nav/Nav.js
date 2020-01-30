import React from 'react'
import { clearFix } from 'polished'
import styled from 'styled-components'
import MyContext from '../../context'
import { NavMobile } from '../NavMobile'
import { NavIcon } from '../NavIcon'
import { NavItem } from '../NavItem'
import { themeWhite, themeBlack, zIndex_2 } from '../../config/theme'
import flow from 'lodash/fp/flow'
import map from 'lodash/fp/map'
import flatten from 'lodash/fp/flatten'
import sortBy from 'lodash/fp/sortBy'

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

const Nav = ({ navLinks }) => {
  const sortedLinks = flow(
    map(({ node }) => {
      return {
        order: node.order,
        text: node.text,
        link: node.link,
      }
    }),
    flatten,
    sortBy('order')
  )(navLinks)

  return (
    <MyContext.Consumer>
      {context => (
        <NavContainer>
          <NavSocial>
            <NavIcon iconClass="linkedin" href="http://nz.linkedin.com/in/stewartduffy/en" />
            <NavIcon iconClass="twitter" href="https://twitter.com/sbf_duffy" />
            <NavIcon iconClass="githubAlt" href="http://github.com/stewartduffy" />
            <NavIcon iconClass="spotify" href="https://open.spotify.com/user/1143680138" />
          </NavSocial>
          <NavLinks>
            {sortedLinks.map(({ text, link }, id) => (
              <NavItem text={text} href={link} key={`NavLink-${id}`} />
            ))}
          </NavLinks>
          <NavMobileLinks>
            <NavIcon iconClass="bars" onClick={context.toggleMobileNavOpen} />
            {context.state.mobileNavOpen && (
              <NavMobile sortedLinks={sortedLinks} handleMenuClick={context.toggleMobileNavOpen} />
            )}
          </NavMobileLinks>
        </NavContainer>
      )}
    </MyContext.Consumer>
  )
}

export default Nav
