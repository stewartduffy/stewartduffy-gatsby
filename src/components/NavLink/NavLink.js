import React from 'react'
import styled from 'styled-components'
import { breakpoints, theme } from '../../config'

//@TODO: Fix .active state
const StyledNavLink = styled.a`
  color: ${theme.themeWhite};
  font-size: 20px;
  font-family: ${theme.themeSansSerif};
  transition: font-size 0.3s ease-out;

  &:hover,
  &.active {
    text-decoration: none;
    color: ${theme.themeGreen};
  }

  ${breakpoints.up('l')`
    font-size: 22px;
  `}
`

const NavLink = ({ text, href, onClick }) => (
  <StyledNavLink href={href} onClick={onClick}>
    {text}
  </StyledNavLink>
)

export default NavLink
