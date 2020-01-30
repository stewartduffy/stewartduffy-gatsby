import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import MyContext from '../context'
import { Header, Footer, Favicons } from '../components'
import Nav from '../components/Nav/Nav'
import styles from './layout.module.scss'
import '../scss/base.scss'

class MyProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileNavOpen: false,
    }

    this.toggleMobileNavOpen = this.toggleMobileNavOpen.bind(this)
  }

  toggleMobileNavOpen() {
    this.setState({
      mobileNavOpen: !this.state.mobileNavOpen,
    })
  }

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          toggleMobileNavOpen: this.toggleMobileNavOpen,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

const TemplateWrapper = ({ children, data, location }) => {
  const navLinks = get(data, 'allContentfulNavLink.edges')

  return (
    <MyProvider>
      <MyContext.Consumer>
        {({ state }) => (
          <div
            className={state.mobileNavOpen ? styles['mobile-nav-open'] : null}
          >
            <Helmet>
              <title>{data.site.siteMetadata.title}</title>
              <meta
                name="description"
                content={data.site.siteMetadata.description}
              />
              <meta name="keywords" content={'sample, something'} />
            </Helmet>
            <Favicons />

            <Header data={data} location={location} />
            <Nav navLinks={navLinks} />

            <div className={`container ${styles['main-container']}`}>
              {children()}
            </div>
            <Footer data={data} />
          </div>
        )}
      </MyContext.Consumer>
    </MyProvider>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query LayoutQuery {
    site {
      buildTimeZone
      siteMetadata {
        title
        description
      }
    }
    allContentfulNavLink {
      edges {
        node {
          text
          link
          order
        }
      }
    }
  }
`
