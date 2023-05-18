// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = (env, argv) => {
  return {
    entry: {
      "webpulse": "./src/index.ts"
    },
    output: {
      path: path.resolve(__dirname, "dist", "umd"),
      filename: `[name]${argv.mode === "production" ? ".min" : ""}.js`,
      libraryTarget: "umd",
      library: "Webpulse",
      umdNamedDefine: true
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },
    devtool: "source-map",
    module: {
      rules: [{
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /(node_modules|gpr)/
      }]
    }
  };
};