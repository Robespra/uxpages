import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import Footer from '../components/footer'
import './foundation.min.css'
import './index.css'


const Layout = ({ children, data }) => (
  <div>
        <Helmet
            defaultTitle="uxpages.com - UX Design, Front-end Dev and Conversion Oriented Design"
            titleTemplate="uxpages.com - %s"
    >
    <html lang="en" amp />
<meta name="title" content="uxpages.com - UX Design, Front-end Dev and Conversion Oriented Design"/>
<meta name="description" content="Specialized in strategic UX Design, Front-end Dev and Conversion Oriented Design"/>

  <meta property="og:type" content="website"/>
  <meta property="og:url" content="https://robespra.github.io/uxpages/"/>
  <meta property="og:title" content="uxpages.com - UX Design, Front-end Dev and Conversion Oriented Design"/>
  <meta property="og:description" content="Specialized in strategic UX Design, Front-end Dev and Conversion Oriented Design"/>
  <meta property="og:image" content="https://robespra.github.io/uxpages/images/logo-social.png"/>
  <meta name="mobile-web-app-capable" content="yes"/> 
  <meta name="apple-mobile-web-app-capable" content="yes"/> 
  <meta name="apple-mobile-web-app-status-bar-style" content="translucent-black"/> 
  <meta name="apple-mobile-web-app-title" content="uxpages"/>
  <meta property="twitter:card" content="summary_large_image"/>
  <meta property="twitter:url" content="https://robespra.github.io/uxpages/"/>
  <meta property="twitter:title" content="uxpages.com - UX Design, Front-end Dev and Conversion Oriented Design"/>
  <meta property="twitter:description" content="Specialized in strategic UX Design, Front-end Dev and Conversion Oriented Design"/>
  <meta property="twitter:image" content="https://robespra.github.io/uxpages/images/logo-social.png"/>

  




    </Helmet>
    <Header siteTitle={data.site.siteMetadata.title} />
    <div>
      {children()}
    </div>
    <Footer/>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
