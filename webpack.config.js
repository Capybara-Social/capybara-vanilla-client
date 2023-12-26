const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ejs = require("ejs");
const icons = require("./client/_generals/icons.json");
const fs = require("fs");

try{fs.rmSync(path.join(".", "build"), { recursive: true, force: true })}
catch(e){console.log(e)}




const src = path.join(__dirname, "client");

let dirs = fs.readdirSync(src).filter(x => !x.startsWith("_"));

dirs.forEach(x => {
	fs
		.readdirSync(path.join(src, x))
		.filter(a => !(a.split(".").length > 1))
		.forEach(subdir => {
			let stat = fs.statSync(path.join(src, x, subdir));
			if(stat.isDirectory()) dirs.push(path.join(x, subdir));
		});
});



let entry = {};

for(let i = 0; i < dirs.length; i++){
	entry[path.join('client', dirs[i], "bundle")] = path.join(src, dirs[i]);
}

let ejsnames = dirs.slice(0, dirs.length);

let plugins = [];


ejsnames.forEach(name => {
	plugins.push(new HtmlWebpackPlugin({
		filename: path.join(name, 'index.html'),
		chunks : [path.join(name, "bundle")],
		templateContent: ejs.renderFile(path.join("client", name, "index.ejs"), {icons}),
		minify: true,
		cache: true
	}));
});

plugins.push(new CopyPlugin({
	patterns: [
		{ from: path.resolve("client","_src"), to: path.resolve("build","client","_src") },
	],
}));

let config = {
	entry,
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "[name].[contenthash].js",
	},
	module:{
		rules:[
			{
				test: /\.s[ac]ss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(?:js|mjs|cjs)$/,
				exclude: /node_modules/,
				use: {loader: 'babel-loader'}
			}
		]
	},
	plugins,
	mode: "development"
};



module.exports = config;