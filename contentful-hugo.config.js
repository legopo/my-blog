// go to https://github.com/ModiiMedia/contentful-hugo#configuration for configuration instructions

/**
 * @type {import('contentful-hugo').ContentfulHugoConfig}
 */
module.exports = {
    repeatableTypes: [{
            id: 'blog',
            directory: 'content/posts',
            mainContent: 'body',
            resolveEntries: [{
                    field: 'categories',
                    resolveTo: 'fields.name',
                },
                {
                    field: 'tags',
                    resolveTo: 'fields.name',
                },
            ],
            overrides: [],
        },
        {
            id: 'category',
            directory: 'content/categories',
            isTaxonomy: true,
        },
        {
            id: 'tag',
            directory: 'content/tags',
            isTaxonomy: true,
        }
    ],
    staticContent: [{
        inputDir: 'static',
        outputDir: 'content',
    }, ],
};
