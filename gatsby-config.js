const myCustomQueries = {
    xs: '(max-width: 320px)',
    s: '(max-width: 450px)',
    sm: '(max-width: 720px)',
    md: '(max-width: 1024px)',
    l: '(max-width: 1536px)',
    portrait: '(orientation: portrait)',
};

module.exports = {
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: "gatsby-plugin-breakpoints",
            options: {
                queries: myCustomQueries,
            },
        },
    ]
}