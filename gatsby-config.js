const path = require('path');

module.exports = {
    siteMetadata: {
        title: `ely.io`,
        name: `ely.io`,
        siteUrl: `https://stackio-101d6.netlify.app`,
        description: `This is my description that will be used in the meta tags and important for search results`,

        // important to set the main text that appears in the hero
        hero: {
            heading: `Perspectives on technology, design and business from the mind of ely kahn.`,
            maxWidth: 652,
        },
        social: [
            {
                name: `twitter`,
                url: `https://twitter.com/creativ_ely`,
            },
            {
                name: `github`,
                url: `https://github.com/elykahn`,
            },
        ],
    },
    plugins: [
        {
            resolve: "@narative/gatsby-theme-novela",
            options: {
                contentPosts: "content/posts",
                contentAuthors: "content/authors",
                rootPath: "/",
                basePath: "/",
                authorsPage: true,
                mailchimp: false,
                sources: {
                    local: true,
                    contentful: false,
                },
            },
        }
    ],
};
