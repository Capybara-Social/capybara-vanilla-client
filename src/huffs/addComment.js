"use strict";

const text = document.getElementById("yourCommentText");
const counter = document.getElementById("defaults");
text.style.height = `${text.value.split("\n").length + 3.75}rem`;
function comment(){
	console.debug(text.value);
	if(text.value.split("\n").length > 10) text.value = text.value.split("\n").slice(0, 10).join("\n");
	if(text.value.startsWith("\n")) text.value = "";
	text.style.height = `${text.value.split("\n").length + 3.75}rem`;
	text.value = text.value.slice(0, 256);
	if(text.value.length > 0) document.getElementById("postComment").classList.add("ready");
	else document.getElementById("postComment").classList.remove("ready");
	counter.innerText = `Lines: ${text.value.split("\n").length}/10 | Characters: ${text.value.split("").length}/256 | Mentions: ${Math.min(text.value.split(" ").filter(x => new RegExp(/@[0-9a-z]([0-9a-z]|_|\.){3,25}/g).test(x)).length, 2)}/2 | Categories: ${Math.min(text.value.split(" ").filter(x => new RegExp(/#[0-9a-zA-Z]([0-9a-zA-z]|_|\.){2,25}/g).test(x)).length, 5)}/5 `;
}

comment();

text.addEventListener("input", comment);