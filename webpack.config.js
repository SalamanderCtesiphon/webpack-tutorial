// webpack.config.js
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
// This configuration sets up Webpack to bundle the JavaScript files from the src directory,
// outputting the bundled file as main.js in the dist directory. The clean option ensures that the dist directory is cleaned before each build.
// It uses the development mode for easier debugging and faster builds.
// To run this configuration, you would typically use a command like `npx webpack` or set up a script in your package.json file.