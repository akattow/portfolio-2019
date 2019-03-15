module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-preset-env": {
      browsers: "last 2 versions",
      stage: 2,
      features: {
        'nesting-rules': true
      }
    },
    autoprefixer: {}
  }
};
