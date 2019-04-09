const autoprefixer = require('autoprefixer')
const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Stewart Duffy ~ Front End Dev',
    description: 'Made with Gatsby!',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        ssr: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`andada`, 'Oswald', 'Merriweather'],
      },
    },
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [autoprefixer()],
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'yp5gwejfy67m',
        accessToken: 'af31950799415738e1f52d5f4a9c1a68d1109fafd0743923d4db48a04d3c8154',
      },
    },
    'gatsby-plugin-react-helmet',
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
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        include: [path.resolve(__dirname, 'src/svg-icons/')],
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-react-next',
    {
      resolve: 'gatsby-plugin-buildtime-timezone',
      options: {
        tz: 'Pacific/Auckland',
        format: 'ddd, DD MMM YYYY hh:mm A',
      },
    },
  ],
}
