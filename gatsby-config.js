module.exports = {
  siteMetadata: {
    title: 'uxpages',
  },
  plugins: [
    // Shortcut for adding plugins without options.
    'gatsby-plugin-react-helmet',
    {
      // Standard plugin with options example
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-38305116-1",
        head: true,
      },
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",

        // WebApp Manifest Configuration
        appName: null, // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    }, 
  ],
  // pathPrefix: "/uxpages",
}
