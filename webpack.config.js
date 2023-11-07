const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ejs = require("ejs");
const icons = require("./src/client/_generals/icons.json");
const fs = require("fs");

try{fs.rmSync(path.join(".", "build"), { recursive: true, force: true })}
catch(e){console.log(e)}




const src = path.join(__dirname, "src", "client");

let dirs = fs.readdirSync(src).filter(x => !x.startsWith("_"));

dirs.forEach(x => {
  fs
  .readdirSync(path.join(src, x))
  .filter(a => !(a.split(".").length > 1))
  .forEach(subdir => {
    let stat = fs.statSync(path.join(src, x, subdir));
    if(stat.isDirectory()) dirs.push(path.join(x, subdir))
    else {}
  })
})



let entry = {};

for(i = 0; i < dirs.length; i++){
    entry[path.join(dirs[i], "bundle")] = path.join(src, dirs[i])
}

ejsnames = dirs.slice(0, dirs.length);

let plugins = []


ejsnames.forEach(name => {
  plugins.push(new HtmlWebpackPlugin({
      filename: `${name}/index.html`,
      chunks : [path.join(name, "bundle")],
      templateContent: ejs.renderFile(path.join("src", "client", name, "index.ejs"), {icons}),
      minify: true,
      cache: true
  }))
})

plugins.push(new CopyPlugin({
  patterns: [
    { from: path.resolve("src","client","_src"), to: path.resolve("build","client","_src") },
  ],
}),)

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
    plugins,
    mode: "development"
};



module.exports = config;