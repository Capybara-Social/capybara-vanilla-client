![Capybara-VClient](https://i.imgur.com/i7lX7qp.png)

# Capybara Vanilla Client &middot; ![GitHub](https://img.shields.io/github/license/Capybara-Social/capybara-vanilla-client?labelColor=%23ffc836)
The official Capybara client made in vanilla javascript


## Why?
We made this repository and client to prove that frameworks aren't strictly necessary to make a social app.
Since all webpages use a framework like Vue, Angular, Svelte or libraries like React, we decided to make a none-framework client.
We think that all this frameworks may cause different sites to be (sometimes) slower. But do not misunderstand us! We love JS Frameworks! But sometimes is better to program in the old rusty and lovely JS! And since we have made the vanilla (JS) client, we can port it to a framework very easily!

## Compilation

### Ignoreds
Firstly, the compiler ignores all files and folders that start with an underscore (the `_`) but makes an exception with `_src` where all files are copied to a `/src` folder.

### Entry points
Each folder must contain 2 specific files.
- a `index.ejs` file with all the HTML(and EJS) code
- a `index.js` file with all the imports and code from the JS and CSS (SCSS in this case)

Other files have to be imported directly or inderectly to the `index.js`. Otherwise they will be ignored.

### Output
The ouput folder is `/build/client`, here are folders with names and inside are 2 files:
- a `index.html` with all the compiled html code
- a `bundle.[hash].js` with all the compiled js code

## What does the `webpack.config.js` do?
The file makes two things to compile the files.

Firstly it takes all the `.ejs` files and saves their routes to an array. Then, it takes every file and compiles it with the `ejs` module.

Finally, it searches for the `index.js` in the same folder and once it's compiled it import it to the html file

## Dependencies

- [Webpack](https://www.npmjs.com/package/webpack)
- [Webpack-CLI](https://www.npmjs.com/package/webpack-cli)
- [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin)
- [EJS](https://www.npmjs.com/package/ejs)
- [@capybara-social/daniel](https://www.npmjs.com/package/@capybara-social/daniel)
- [Sass](https://www.npmjs.com/package/sass)
- [Sass-Loader](https://www.npmjs.com/package/sass-loader)
- [copy-webpack-plugin](https://www.npmjs.com/package/copy-webpack-plugin)
- [style-loader](https://www.npmjs.com/package/style-loader)
- [css-loader](https://www.npmjs.com/package/css-loader)
