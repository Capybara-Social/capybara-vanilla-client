const mainC = document.getElementById("mainContent");

let plantilla = document.getElementById("huff");
let columns = mainC.children;
let colCounter = 0;

import videoLoad from "../../_generals/videoPlayer";

function loadHuff(huff){
	if(colCounter > 2) colCounter = 0;
	let instance = plantilla.cloneNode(true);
	let user = huff.user;
	instance.removeAttribute("id");
	//data
	instance.setAttribute("id", huff.id);
	//publisher
	instance.children[0].children[0].setAttribute("src", user.image);
	instance.children[0].children[0].classList.add("loading");
	instance.children[0].children[0].onload = () => {instance.children[0].children[0].classList.remove("loading")};
	instance.children[0].children[1].children[0].innerText = user.name;
	instance.children[0].children[1].children[1].innerText = "@" + user.username;
	//content
	instance.children[1].children[0].innerText = huff.text;
	switch(huff.multimedia.length){
	case 0: instance.children[1].children[1].classList.add("none"); break;
	case 1: instance.children[1].children[1].classList.add("single"); break;
	case 2: instance.children[1].children[1].classList.add("two"); break;
	case 3: instance.children[1].children[1].classList.add("triple"); break;
	case 4: instance.children[1].children[1].classList.add("four"); break;
	default: instance.children[1].children[1].classList.add("none"); break; 
	}

	huff.multimedia.forEach(vom => {
		let tempDiv = document.createElement("div");
		
		let temporalInstance = document.createElement(vom.type);
		temporalInstance.setAttribute("src", vom.uri);
		let loadIcon = document.createElement("span");
		loadIcon.classList.add("loader");
		loadIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/></svg>`;
		tempDiv.append(loadIcon);
		if(vom.type == "video"){
			temporalInstance.onloadstart = () => {
				loadIcon.remove();
				if(vom.type == "video"){
					tempDiv.classList.add("vid");
					let tempspan = document.createElement("span");
					tempspan.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>`;
					tempDiv.append(tempspan);
				}
			};
		}else{
			temporalInstance.onload = () => {
				loadIcon.remove();
				if(vom.type == "video"){
					tempDiv.classList.add("vid");
					let tempspan = document.createElement("span");
					tempspan.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>`;
					tempDiv.append(tempspan);
				}
			};
		}
			
		tempDiv.onclick = () => {
			let showcaseTemp = temporalInstance.cloneNode();
				
			if(vom.type == "video"){
				showcaseTemp = videoLoad(showcaseTemp);
			}
			document.getElementById("showcase").classList.add("show");
			if(document.getElementById("showcase").children[1].children.length > 0) document.getElementById("showcase").children[1].children[0].remove();                
			document.getElementById("showcase").children[1].append(showcaseTemp);
		};
		tempDiv.append(temporalInstance);
		instance.children[1].children[1].prepend(tempDiv);
	});
	instance.removeAttribute("style");
	columns[colCounter].prepend(instance);
	colCounter++;
}

export default loadHuff;
