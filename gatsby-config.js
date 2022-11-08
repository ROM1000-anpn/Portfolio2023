module.exports = {
  siteMetadata: {
    siteUrl: `https://rom1000-gatsby-tutorial.netlify.app/`,
    title: "My First Gatsby Site"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "blog",
        "path": "./blog"
      },
      __key: "blogs"
    }
  ]
};