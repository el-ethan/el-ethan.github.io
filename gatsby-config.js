module.exports = {
    siteMetadata: {
        title: `Ethan Skinner`,
        description: `divs, spans and arrows by Ethan Skinner`,
        author: `el-ethan`,
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
            resolve: "gatsby-plugin-page-transitions",
            options: {
                transitionTime: 500,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `Ethan Skinner`,
              short_name: `Ethan`,
              start_url: `/`,
              background_color: `#292d3e`,
              theme_color: `#292d3e`,
              display: `standalone`,
              icon: `src/images/favicon-16x16.png`, // This path is relative to the root of the site.
            },
          },

        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,
    ],
}