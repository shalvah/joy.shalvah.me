module.exports = {
    layout: "default.ejs",

    // Custom stuff
    siteTitle: 'joy.shalvah.me',
    siteSubtitle: 'Me, talking about some things that bring me joy.',
    getCollectionName(...tags) {
        let collectionNamesMap = {
            'language-learning': 'Language learning',
            'movies-and-tv': 'Movies and TV',
            'books': 'Books',
            'games': 'Games',
        };
        return collectionNamesMap[tags[0]];
    },
    formatDate(date) {
        return new Intl.DateTimeFormat('en-GB', {dateStyle: 'full'}).format(new Date(date));
    }
};