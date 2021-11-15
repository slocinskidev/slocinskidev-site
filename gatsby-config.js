// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'SLOCINSKI.DEV',
    author: {
      name: 'Eryk Słociński',
      summary: 'Frontend developer from Żory.',
    },
    description: 'Frontend developer website! Created for sharing knowledge!',
    siteUrl: 'http://slocinski.dev/',
    social: {
      twitter: 'slocinskidev',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        additionalData: "@use 'globals' as *;",
        sassOptions: {
          includePaths: [`${__dirname}/src/styles`],
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        layout: path.join(__dirname, 'src/layout'),
        styles: path.join(__dirname, 'src/styles'),
        assets: path.join(__dirname, 'src/assets'),
        common: path.join(__dirname, 'src/common'),
        components: path.join(__dirname, 'src/components'),
        containers: path.join(__dirname, 'src/containers'),
        pages: path.join(__dirname, 'src/pages'),
        templates: path.join(__dirname, 'src/templates'),
        types: path.join(__dirname, 'src/types'),
        utils: path.join(__dirname, 'src/utils'),
        src: path.join(__dirname, 'src'),
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'slocinski-dev-website',
        short_name: 'slocinski-dev',
        start_url: '/',
        background_color: '#fff',
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: 'minimal-ui',
        icon: 'src/assets/images/logo/logo.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
