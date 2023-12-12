module.exports = function (eleventyConfig) {
  // add eleventy navigation plugin

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      data: "../data",
      output: "dist",
    },
  };
};