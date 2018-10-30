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
    },
  
  ],
  pathPrefix: "/uxpages",
}
