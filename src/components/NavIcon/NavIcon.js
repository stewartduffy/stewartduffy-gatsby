import React from 'react'
import styled from 'styled-components'
import { Icon } from '../Icon'
import * as theme from '../../config/theme'

const StyledNavIconLink = styled.a`
  display: flex;
  align-items: center;
  height: 53px;
  padding: 5px;

  svg {
    width: 24px;
    height: auto;

    path {
      fill: ${theme.themeWhite};
    }

    &:hover {
      path {
        fill: ${theme.themeGreen};
      }
    }
  }
`

//@TODO: Find a better way to share styles cross element
const StyledNavIconButton = styled.button`
  display: flex;
  align-items: center;
  height: 53px;
  padding: 5px;

  display: inline-block;
  margin-bottom: 0;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857;
  user-select: none;
  color: #337ab7;
  font-weight: 400;
  border-radius: 0;
  box-shadow: none;
  background-color: transparent;
  border-color: transparent;

  svg {
    width: 24px;
    height: auto;

    path {
      fill: ${theme.themeWhite};
    }

    &:hover {
      path {
        fill: ${theme.themeGreen};
      }
    }
  }
`

const NavIcon = ({ iconClass, href, onClick }) => {
  if (href) {
    return (
      <StyledNavIconLink href={href}>
        <Icon name={iconClass} />
      </StyledNavIconLink>
    )
  } else {
    return (
      <StyledNavIconButton className={`btn btn-link`} type="button" onClick={onClick}>
        <Icon name={iconClass} />
      </StyledNavIconButton>
    )
  }
}

export default NavIcon
