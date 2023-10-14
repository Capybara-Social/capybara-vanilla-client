const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ejs = require("ejs")
const icons = require("./src/client/generals/icons.json");

const src = path.join(__dirname, "src", "client");


let names = ["explore", "huffs", "login", "main", "me",path.join("me", "saveds"), path.join("me", "write"), "notifications", "signup","whispers", path.join("generals", "icons")]
let entry = {};

for(i = 0; i < names.length; i++){
    entry[path.join(names[i], "bundle")] = path.join(src, names[i])
}


let config = {
    entry,
    output: {
        path: path.resolve(__dirname, "build", "client"),
        filename: "[name].[contenthash].js",
        publicPath: "/client/"
     },
    module:{
        rules:[
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new CopyPlugin({
          patterns: [
            { from: path.resolve("src","client","src"), to: path.resolve("build","client","src") },
          ],
        }),
      ],
    mode: "development"
};

ejsnames = names.slice(0, names.length-1);

ejsnames.forEach(name => {
  config.plugins.push(new HtmlWebpackPlugin({
      filename: `${name}/index.html`,
      chunks : [path.join(name, "bundle")],
      templateContent: ejs.renderFile(path.join("src", "client", name, "index.ejs"), {icons}),
      minify: true,
      cache: true
  }))
})

module.exports = config;