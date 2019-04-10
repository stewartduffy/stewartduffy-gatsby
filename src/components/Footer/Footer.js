import React from 'react'
import styled from 'styled-components'
import * as theme from '../../config/theme'

const StyledFooter = styled.div`
  padding: 20px;
  background: ${theme.themeBlack};
  color: ${theme.themeWhite};
`

const Footer = ({ data }) => (
  <StyledFooter>
    <h4>Last updated: {data.site.buildTimeZone}</h4>
  </StyledFooter>
)

export default Footer
