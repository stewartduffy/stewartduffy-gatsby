import React from 'react'
import MyContext from '../../context'
import { NavMobile } from '../NavMobile'
import { NavIcon } from '../NavIcon'
import { NavItem } from '../NavItem'
import styles from './Nav.module.scss'
import flow from 'lodash/fp/flow'
import map from 'lodash/fp/map'
import flatten from 'lodash/fp/flatten'
import sortBy from 'lodash/fp/sortBy'

const Nav = ({ navLinks }) => {
  const sortedLinks = flow(
    map(({ node }) => {
      return {
        order: node.order,
        text: node.text,
        link: node.link,
      }
    }),
    flatten,
    sortBy('order')
  )(navLinks)

  return (
    <MyContext.Consumer>
      {context => (
        <div className={`${styles['nav-container']} clearfix`}>
          <nav className={`${styles['nav-social']} pull-left hidden-xs`}>
            <NavIcon
              iconClass="linkedin"
              href="http://nz.linkedin.com/in/stewartduffy/en"
            />
            <NavIcon iconClass="twitter" href="https://twitter.com/sbf_duffy" />
            <NavIcon
              iconClass="githubAlt"
              href="http://github.com/stewartduffy"
            />
            <NavIcon iconClass="skype" href="skype:stewart.duffy" />
            <NavIcon
              iconClass="spotify"
              href="https://open.spotify.com/user/1143680138"
            />
          </nav>
          <nav className="pull-right hidden-xs">
            {sortedLinks.map(({ text, link }, id) => (
              <NavItem text={text} href={link} key={`NavLink-${id}`} />
            ))}
          </nav>
          <nav className="pull-right visible-xs">
            <NavIcon iconClass="bars" onClick={context.toggleMobileNavOpen} />
            {context.state.mobileNavOpen && (
              <NavMobile
                sortedLinks={sortedLinks}
                handleMenuClick={context.toggleMobileNavOpen}
              />
            )}
          </nav>
        </div>
      )}
    </MyContext.Consumer>
  )
}

export default Nav
