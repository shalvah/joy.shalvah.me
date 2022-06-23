const rssPlugin = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPlugin(rssPlugin);

    return {
        dir: {
            input: "collections",
            includes: "../_layouts"
        }
    }
};
