import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import MyContext from '../context'
import { Header } from '../components/Header'
import '../scss/base.scss'
import styles from './layout.module.scss'

import appleIcon57x57 from '../../static/favicons/apple-icon-57x57.png'
import appleIcon60x60 from '../../static/favicons/apple-icon-60x60.png'
import appleIcon72x72 from '../../static/favicons/apple-icon-72x72.png'
import appleIcon76x76 from '../../static/favicons/apple-icon-76x76.png'
import appleIcon114x114 from '../../static/favicons/apple-icon-114x114.png'
import appleIcon120x120 from '../../static/favicons/apple-icon-120x120.png'
import appleIcon144x144 from '../../static/favicons/apple-icon-144x144.png'
import appleIcon152x152 from '../../static/favicons/apple-icon-152x152.png'
import appleIcon180x180 from '../../static/favicons/apple-icon-180x180.png'
import androidIcon192x192 from '../../static/favicons/android-icon-192x192.png'
import favicon32x32 from '../../static/favicons/favicon-32x32.png'
import favicon96x96 from '../../static/favicons/favicon-96x96.png'
import favicon16x16 from '../../static/favicons/favicon-16x16.png'
import msIcon144x144 from '../../static/favicons/ms-icon-144x144.png'

const icons = [
  {
    rel: 'apple-touch-icon',
    sizes: '57x57',
    href: appleIcon57x57,
  },
  {
    rel: 'apple-touch-icon',
    sizes: '60x60',
    href: appleIcon60x60,
  },
  {
    rel: 'apple-touch-icon',
    sizes: '72x72',
    href: appleIcon72x72,
  },
  {
    rel: 'apple-touch-icon',
    sizes: '76x76',
    href: appleIcon76x76,
  },
  {
    rel: 'apple-touch-icon',
    sizes: '114x114',
    href: appleIcon114x114,
  },
  {
    rel: 'apple-touch-icon',
    sizes: '120x120',
    href: appleIcon120x120,
  },
  {
    rel: 'apple-touch-icon',
    sizes: '144x144',
    href: appleIcon144x144,
  },
  {
    rel: 'apple-touch-icon',
    sizes: '152x152',
    href: appleIcon152x152,
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: appleIcon180x180,
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: androidIcon192x192,
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: favicon32x32,
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '96x96',
    href: favicon96x96,
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: favicon16x16,
  },
]

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
      {context => (
        <div
          className={
            context.state.mobileNavOpen ? styles['mobile-nav-open'] : null
          }
        >
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content: data.site.siteMetadata.description,
              },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
            {icons.map((icon, id) => <link key={`icon-${id}`} {...icon} />)}

            {/* @TODO: Updates the following meta */}
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content={msIcon144x144} />
            <meta name="theme-color" content="#ffffff" />
            {/* @TODO: Check the above ^^ */}
          </Helmet>
          <Header data={data} location={location} />

          <div>{children()}</div>
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
