module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("css");

    return {
        dir: {
            input: "collections",
            includes: "../_layouts"
        }
    }
};
