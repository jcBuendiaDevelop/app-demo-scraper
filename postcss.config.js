module.exports = (env) => {
  return {
    parser: "postcss-safe-parser",
    plugins: {
      "postcss-preset-env": {},
    }
  }
}