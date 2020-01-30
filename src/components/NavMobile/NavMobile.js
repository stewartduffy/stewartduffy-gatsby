import React from 'react'
import ReactDOM from 'react-dom'
import { NavLink } from '../NavLink'
import { NavIcon } from '../NavIcon'
import styles from './NavMobile.module.scss'

const NavMobile = class extends React.Component {
  constructor(props) {
    super(props)

    this.escFunction = this.escFunction.bind(this)
    this.onNavLinkClick = this.onNavLinkClick.bind(this)
  }

  escFunction(event) {
    if (event.keyCode === 27) {
      this.props.handleMenuClick()
    }
  }

  onNavLinkClick(event) {
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
        <nav className={`${styles['nav-mobile']}`} role="navigation">
          <div className={`${styles['nav-mobile-close']}`}>
            <NavIcon iconClass="times" onClick={handleMenuClick} />
          </div>
          <ul className={`${styles['nav-mobile-list']}`}>
            {sortedLinks.map(({ text, link }, id) => (
              <li key={`MobileNavLink-${id}`}>
                <NavLink
                  text={text}
                  href={link}
                  onClick={this.onNavLinkClick}
                />
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
