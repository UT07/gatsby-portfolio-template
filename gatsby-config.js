module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter - Paradigm Shift',
    author: 'Hunter Chang',
    description: 'A Gatsby.js Starter based on Paradigm Shift by',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#7b1fa2',
        theme_color: '#7b1fa2',
        display: 'minimal-ui',
        icon: 'src/assets/img/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
