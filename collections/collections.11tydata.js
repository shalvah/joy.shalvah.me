module.exports = {
    layout: "default.ejs",

    // Custom stuff
    getCollectionName(...tags) {
        let collectionNamesMap = {
            'language-learning': 'Language learning',
            movies: 'Movies'
        };
        return collectionNamesMap[tags[0]];
    },
    formatDate(date) {
        return new Intl.DateTimeFormat('en-GB', {dateStyle: 'full'}).format(new Date(date));
    }
};