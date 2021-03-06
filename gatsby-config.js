module.exports = {
  siteMetadata: {
    title: `Mercampo`,
    description: `Apoya tu economía local descubriendo cientos de productos frescos y asequibles.`,
    author: `@santiagocardo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://vast-reef-01130.herokuapp.com`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`products`],
      },
    },
    'gatsby-plugin-use-query-params'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
