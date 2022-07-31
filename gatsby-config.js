module.exports = {
  siteMetadata: {
    title: "Rocket Academy: Leading Coding Bootcamp",
    description:
      "Get ahead with a new career. Learn from the best with an easy-to-follow curriculum taught by industry experts. Top alumni, strong industry networks.",
    keywords:
      "coding, bootcamp, fullstack, developer, education, career, transition, software, engineering, programming, learning",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-160206985-1", // Google Analytics / GA
          "AW-10817488949", // Google Ads / Adwords / AW
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: "OPT_CONTAINER_ID",
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          // origin: "YOUR_SELF_HOSTED_ORIGIN",
        },
      },
    },
    {
      resolve: "gatsby-plugin-hubspot",
      options: {
        trackingCode: "20708296",
        respectDNT: false,
        productionOnly: false,
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: false, // optional parameter to include script in development
        id: 2891409,
        sv: 6,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "268435330294389",
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      // options: {
      //   sassOptions: {
      //     indentedSyntax: true,
      //   },
      // },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    `gatsby-plugin-image`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images-v2`,
          },
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: `gatsby-source-google-calendar`,
      options: {
        calendarIds: ["c_lsjc4qn7b09nb293b6u80blimc@group.calendar.google.com"],
        // options to retrieve the next 10 upcoming events
        timeMin: new Date().toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: "startTime",
      },
    },
    {
      resolve: "gatsby-plugin-no-sourcemaps",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocket Academy`,
        short_name: `Rocket Academy`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/img/rocketfavicon.png`,
      },
    },
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};
