import React from 'react'
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
    const { handleMenuClick } = this.props
    return ReactDOM.createPortal(
      <React.Fragment>
        <nav className={`${styles['nav-mobile']}`} role="navigation">
          <div className={`${styles['nav-mobile-close']}`}>
            <NavIcon iconClass="times" onClick={handleMenuClick} />
          </div>
          <ul className={`${styles['nav-mobile-list']}`}>
            {links.map(({ text, href }, id) => (
              <li key={`MobileNavLink-${id}`}>
                <NavLink text={text} href={href} onClick={this.onNavLinkClick} />
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles['nav-mobile-overlay']} />
      </React.Fragment>,
      document.getElementById('___gatsby')
    )
  }
}

export default NavMobile
