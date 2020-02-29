import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { NavLink } from '../NavLink'
import { NavIcon } from '../NavIcon'
import styles from './NavMobile.module.scss'
import cv from '../../../static/assets/stewart_duffy_cv.pdf'

const links = [
  {
    text: 'What I Do',
    href: '#what-i-do',
  },
  {
    text: 'Conferences & Workshops',
    href: '#conferences-workshops',
  },
  {
    text: 'Work',
    href: '#work-history',
  },
  {
    text: 'Contact',
    href: '#lets-talk',
  },
  {
    text: 'CV',
    href: cv,
  },
]

const NavMobile = class extends React.Component {
  constructor(props) {
    super(props)

//@TODO: Give this a class
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
      <Fragment>
        <StyledNavMobile role="navigation">
          <NavMobileClose>
            <NavIcon iconClass="times" onClick={handleMenuClick} />
          </NavMobileClose>
          <NavMobileList>
            {links.map(({ text, href }, id) => (
          </div>
          <ul className={`${styles['nav-mobile-list']}`}>
            {sortedLinks.map(({ text, link }, id) => (
              <li key={`MobileNavLink-${id}`}>
                <NavLink text={text} href={href} onClick={this.onNavLinkClick} />
                <NavLink
                  text={text}
                  href={link}
                  onClick={this.onNavLinkClick}
                />
              </li>
            ))}
          </NavMobileList>
        </StyledNavMobile>
        <NavMobileOverlay />
      </Fragment>,
      document.getElementById('___gatsby')
    )
  }
}

export default NavMobile
