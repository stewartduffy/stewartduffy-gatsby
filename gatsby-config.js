module.exports = {
  siteMetadata: {
    title: 'Stewart Duffy ~ Front End Dev',
    description: 'Made with Gatsby!',
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'yp5gwejfy67m',
        accessToken:
          'af31950799415738e1f52d5f4a9c1a68d1109fafd0743923d4db48a04d3c8154',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/static/assets`,
      },
    },

    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
  ],
}
