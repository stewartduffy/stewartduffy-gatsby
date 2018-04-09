import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import MyContext from '../context'
import { Header } from '../components/Header'
import { Nav } from '../components/Nav'
import { Favicons } from '../components/Favicons'
import '../scss/base.scss'
import styles from './layout.module.scss'

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

const TemplateWrapper = ({ children, data, location }) => (
  <MyProvider>
    <MyContext.Consumer>
      {({ state }) => (
        <div className={state.mobileNavOpen ? styles['mobile-nav-open'] : null}>
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
          <Nav />

          <div className={`container ${styles['main-container']}`}>
            {children()}
          </div>
        </div>
      )}
    </MyContext.Consumer>
  </MyProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
