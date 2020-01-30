import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import MyContext from '../context'
import { Header, Footer, Nav, Favicons } from '../components'
import styled from 'styled-components'
import * as theme from '../config/theme'
import BaseStyles from './BaseStyles'

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: 768px) {
    width: 750px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 1200px) {
    width: 1170px;
  }
`

const MainContainer = styled(Container)`
  margin-top: 138px;
  border-top: ${theme.themeBlack} solid 2px;
  transition: width 0.3s ease-out;
`

const MobileNav = styled(Container)`
  display: ${({ isOpen }) => (isOpen ? 'none' : 'unset')};
`

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
          <MobileNav isOpen={state.mobileNavOpen}>
            <Helmet>
              <title>{data.site.siteMetadata.title}</title>
              <meta name="description" content={data.site.siteMetadata.description} />
              <meta name="keywords" content={'sample, something'} />
            </Helmet>
            <Favicons />
            <BaseStyles />
            <Header data={data} location={location} />
            <Nav navLinks={navLinks} />
            <MainContainer>{children()}</MainContainer>
            <Footer data={data} />
          </MobileNav>
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
