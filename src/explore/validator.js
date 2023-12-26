"use strict";

const coming = "";
function textParser(unsafe){
	let cats = 0;
	let ments = 0;
	let safeText;
	unsafe = unsafe.trim();
	safeText = unsafe.split("").map(x => {
		if(x == "<") return "&lt;";
		if(x == ">")return "&gt;";
		return x;
	}).join("");

	if(safeText.length > 512){
		safeText = safeText.slice(0, 512).split(" ");
		safeText.pop();
		safeText = safeText.join(" ");
	}

	safeText = safeText.split(" ").map(y => {
		if(y.startsWith("@") && y.length > 3 && ments < 5){ 
			let matched =`${y} `.match(/@[0-9a-z]([0-9a-z]|_|\.){3,25} /g);
			if(matched && matched[0] == `${y} `){
				ments++;
				return `<a href="${coming}/users/${y}">${y}</a>`;
			}
		}
		if(y.startsWith("#") && y.length > 3 && cats < 5){
			let matched =`${y} `.match(/#[0-9a-zA-Z]([0-9a-zA-z]|_|\.){3,25} /g);
			if(matched && matched[0] == `${y} `){ 
				cats++;
				return `<a href="${coming}/search/${y.slice(1)}">${y}</a>`;
			}
		}
		return y;
	}).join(" ");
	return safeText;
}

export {textParser};