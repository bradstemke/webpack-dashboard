const { resolve } = require("path");
const { StatsWriterPlugin } = require("webpack-stats-plugin");
const { DuplicatesPlugin } = require("inspectpack/plugin");
const Dashboard = require("../../plugin");

// Specify the directory of the example we're working with
const cwd = `${process.cwd()}/examples/${process.env.EXAMPLE}`;
if (!process.env.EXAMPLE) {
  throw new Error("EXAMPLE is required");
}

module.exports = {
  mode: "development",
  devtool: false,
  context: resolve(cwd),
  entry: {
    bundle: "./src/index.js"
  },
  output: {
    path: resolve(cwd, "dist-development-4"),
    pathinfo: true,
    filename: "[name].js"
  },
  plugins: [
    new StatsWriterPlugin({
      fields: ["assets", "modules"]
    }),
    new DuplicatesPlugin({
      verbose: true,
      emitErrors: false
    }),
    new Dashboard()
  ]
};
