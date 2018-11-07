import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import './foundation.min.css'
import './index.css'


const Layout = ({ children, data }) => (
  <div>
        <Helmet
            defaultTitle="uxpages.com"
            titleTemplate="uxpages.com - %s"
    >
    <html lang="en" amp />
    <title itemProp="name" lang="en">uxpages</title>
    <meta property="og:type" content="website" />
    <meta property="og:description" content="uxpages ux design front end development"/>
    <link rel="canonical" href="https://robespra.github.io/uxpages" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
    <link rel="shortcut icon" href="https://robespra.github.io/uxpages/favicon.ico" />
    <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32"/>
    <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16"/>
    <meta name="mobile-web-app-capable" content="yes"/> 
    <meta name="apple-mobile-web-app-capable" content="yes"/> 
    <meta name="apple-mobile-web-app-status-bar-style" content="translucent-black"/> 
    <meta name="apple-mobile-web-app-title" content="uxpages"/>
    <meta name="description" content="uxpages us design front end development"/>
    <meta name="apple-touch-fullscreen" content="yes"/>
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:title" content="uxpages ux design front end development"/>
    <meta name="twitter:description" content="uxpages ux design front end development"/>
    <meta name="twitter:image" content="https://robespra.github.io/uxpages/images/logo-social.png"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js" type="text/javascript"/>




    </Helmet>
    <Header siteTitle={data.site.siteMetadata.title} />
    <div>
      {children()}
    </div>
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
