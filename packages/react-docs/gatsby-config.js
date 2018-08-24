const { resolve } = require('path');

module.exports = {
  siteMetadata: {
    title: 'PatternFly React'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `components`,
        path: resolve(__dirname, '../react-core/src')
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `syntax-highlighter`,
        path: resolve(__dirname, '../react-syntax-highlighter/src')
      }
    },
    'gatsby-transformer-react-docgen'
  ]
};
