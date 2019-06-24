import React from 'react'
import styled from 'styled-components'
import { NavLink } from '../NavLink'

const StyledNavItem = styled.span`
  line-height: 53px;
  & + &::before {
    padding: 5px;
    content: ' • ';
  }
`

const NavItem = ({ text, href }) => (
  <StyledNavItem>
    <NavLink text={text} href={href} />
  </StyledNavItem>
)

export default NavItem
