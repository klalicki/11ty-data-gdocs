module.exports = function (eleventyConfig) {
  // add eleventy navigation plugin
  eleventyConfig.addFilter("stringify", function (value) {
    return JSON.stringify(value);
  });
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      data: "../data",
      includes: "../includes",
      output: "dist",
    },
  };
};
