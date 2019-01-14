module.exports = {
  siteMetadata: {
    title: `Vevina Trinh`,
    icon: `src/images/icon.png`,
  },
  plugins: [
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
