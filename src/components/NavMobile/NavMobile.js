import React from 'react'
import ReactDOM from 'react-dom'
import { NavLink } from '../NavLink'
import { NavIcon } from '../NavIcon'
import styled from 'styled-components'
import { theme } from '../../config'

const StyledNavMobile = styled.nav`
  background: #323232;
  position: fixed;
  top: 20px;
  right: 20px;
  max-width: calc(100% - 40px);
  max-height: calc(100% - 40px);
  z-index: ${theme.zIndex_5};
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 4px;
`

const NavMobileClose = styled.div`
  text-align: right;
  position: absolute;
  top: 0;
  left: auto;
  right: 0;
`

const NavMobileList = styled.ul`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  padding: 0;

  li {
    font-size: 20px;
    text-align: center;
    font-weight: 600;
  }

  a {
    padding: 10px;
    display: block;
  }
`

const NavMobileOverlay = styled.div`
  pointer-events: auto;
  opacity: 0.5;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: $z-index-4;
  background-color: ${theme.themeBlack};
  pointer-events: none;
`

const NavMobile = class extends React.Component {
  escFunction = event => {
    if (event.keyCode === 27) {
      this.props.handleMenuClick()
    }
  }

  onNavLinkClick = event => {
    this.props.handleMenuClick()
  }

  componentDidMount() {
    document.addEventListener('keydown', this.escFunction, false)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false)
  }

  render() {
    const { handleMenuClick, sortedLinks } = this.props

    return ReactDOM.createPortal(
      <React.Fragment>
        <StyledNavMobile role="navigation">
          <NavMobileClose>
            <NavIcon iconClass="times" onClick={handleMenuClick} />
          </NavMobileClose>
          <NavMobileList>
            {sortedLinks.map(({ text, href }, id) => (
              <li key={`MobileNavLink-${id}`}>
                <NavLink text={text} href={href} onClick={this.onNavLinkClick} />
              </li>
            ))}
          </NavMobileList>
        </StyledNavMobile>
        <NavMobileOverlay />
      </React.Fragment>,
      document.getElementById('___gatsby')
    )
  }
}

export default NavMobile
