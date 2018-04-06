import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link, { navigateTo } from 'gatsby-link'
import { NavLink } from '../NavLink'
import { NavIcon } from '../NavIcon'
import styles from './NavMobile.module.scss'

const NavMobile = class extends React.Component {
  constructor(props) {
    super(props)

    this.escFunction = this.escFunction.bind(this)
  }

  escFunction(event) {
    if (event.keyCode === 27) {
      this.props.handleMenuClick()
    }
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
        <nav className={`${styles['c-navigation']}`} role="navigation">
          <div>
            <NavIcon iconClass="times" onClick={handleMenuClick} />
          </div>
          <ul className={`${styles['c-navigation__list']}`}>
            <li>
              <NavLink text="What I Do" href="#what-i-do" />
            </li>
            <li>
              <NavLink text="Work" href="#work-history" />
            </li>
            <li>
              <NavLink text="Contact" href="#lets-talk" />
            </li>
            <li>
              <NavLink text="CV" href={'#cv'} />
            </li>
          </ul>
        </nav>
        <div className={styles['c-overlay']} />
      </React.Fragment>,
      document.getElementById('___gatsby')
    )
  }
}

export default NavMobile
