const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");


const src = path.join(__dirname, "src", "static", "client");


let names = ["explore", "huffs","login", "main", "me",path.join("me", "saveds"), path.join("me", "write"), "notifications", "signup","whispers", path.join("generals", "icons")]
let entry = {};

for(i = 0; i < names.length; i++){
    entry[path.join(names[i], "bundle")] = path.join(src, names[i])
}


module.exports = {
    entry,
    output: {
        path: path.resolve(__dirname, "build", "static", "client"),
        filename: "[name].js",
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
            { from: path.resolve("src","static","client","src"), to: path.resolve("build", "static","client","src") },
            { from: path.resolve("src","views"), to: path.resolve("build", "views") }
          ],
        }),
      ],
    mode: "development"
};



