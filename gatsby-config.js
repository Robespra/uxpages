module.exports = {
  // pathPrefix: "/uxpages",
  siteMetadata: {
    title: 'uxpages',
    description: 'uxpages ux design front end development',
    siteUrl: 'https://uxpages.com/',
  },
  plugins: [
    // Shortcut for adding plugins without options.
    `gatsby-plugin-postcss`,
    'gatsby-plugin-react-helmet',
    {
    // Standard plugin with options example
    resolve: 'gatsby-plugin-babel',
    options: {
      plugins: ['transform-react-jsx'],
      ignore: ['foo.js', 'bar/**/*.js'],
    },
    resolve: 'gatsby-plugin-favicon',
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
}
