/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Simple Recipe",
    description: "Nice and clean recipe site",
    author: "@adanabbi",
    person: { name: "adan", age: 25 },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { name: "susan", age: 51 },
      { name: "bob", age: 34 },
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
}
