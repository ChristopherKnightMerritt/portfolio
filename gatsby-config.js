/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    item: [
      {
        title: 'Curve',
        description: 'Employee proficency rating scale. My role was as a project manager for the UI/UX team.',
        skills: 'Project Managment, Gatsby.js, GraphQL, SCSS, Javascript',
        image: '4',
        link: 'https://github.com/CodeFellows-Curve/curve-front-end/blob/deployment/README.md'
      },
      {
        title: 'Slack Lackey',
        description: 'A slack bot that recognizes when you send a code snippet and allows you to save it as a Gist on Github.',
        skills: 'JavaScript, MongoDB, AWS, Express',
        image: '3',
        link: 'https://github.com/slack-lackey'
      },
      {
        title: 'The Daily Plan-It',
        description: 'A daily planning web app with up to date weather, traffic, and news for a given location.',
        skills: 'HTML, CSS, SQL, Consuming APIs',
        image: '2',
        link: 'https://github.com/paulwilliamsen/301-Final-Project'
      },
      {
        title: 'Station Location',
        description: 'A map of all the california radio stations',
        skills: 'React.js, Heroku, HTML, CSS, Consuming APIs',
        image: '1',
        link: 'https://station-location.herokuapp.com/'
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
        name: 'images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/ChrisM-01.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ]
}
