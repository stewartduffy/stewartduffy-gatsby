import React from 'react'
import logo from '../../img/logo-compressed.svg'
import styled from 'styled-components'
import { breakpoints, theme } from '../../config'

const StyledHeader = styled.div`
  background: ${theme.themeGreen};
  position: relative;
  height: 118px;
  padding-top: 40px;
  transition: height 0.3s ease-out;
  z-index: ${theme.zIndex_3};
  transform: translate3d(0, 0, 0);

  ${breakpoints.up('l')`
    height: 142px;
  `}
`

const HeaderLogo = styled.img`
  width: 210px;
  height: auto;
  margin: 0 auto;
  display: block;
  transition: width 0.3s ease-out, top 0.3s ease-out;

  ${breakpoints.up('l')`
    width: 258px;
  `}
`

const Header = () => (
  <StyledHeader>
    <HeaderLogo src={logo} alt="Stewart Duffy / Front-End Developer" />
  </StyledHeader>
)

export default Header
