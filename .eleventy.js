module.exports = function(eleventyConfig) {
  // Copy `scripts/` to `_site/scripts`
  eleventyConfig.addPassthroughCopy("scripts");
};
