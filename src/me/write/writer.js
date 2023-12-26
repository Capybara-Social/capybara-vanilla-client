let adjs = document.getElementById("adjs");
let huff = document.getElementById("huff");
let show = document.getElementById("addeds");
let imgDrag = document.getElementById("imgDrag");
let text = document.getElementById("text");

import videoLoad from "../../_generals/videoPlayer";

function addImage(file){
	let lector = new FileReader();
	lector.onload = (e) => {
		let f;
		let fAddeds = document.createElement("span");
		if(file.type.startsWith("video")){
			f = document.createElement("video");
			f.setAttribute("type", file.type);
		}
		else if(file.type.startsWith("image")){
			f = document.createElement("img");
		}else{
			return;
		}
		f.setAttribute("src", e.target.result);
		fAddeds.append(f);
		show.append(fAddeds);

		let fHuff = f.cloneNode(true);
		let fDiv = document.createElement("div");
		fDiv.onclick = () => {
			let showcaseTemp = f.cloneNode();
			
			if(file.type.startsWith("video")){
				showcaseTemp = videoLoad(showcaseTemp);
			}
			document.getElementById("showcase").classList.add("show");
			if(document.getElementById("showcase").children[1].children.length > 0) document.getElementById("showcase").children[1].children[0].remove();                
			document.getElementById("showcase").children[1].append(showcaseTemp);
		};
		fDiv.append(fHuff);
		if(file.type.startsWith("video")) {
			fDiv.classList.add("vid");
			let pBtn = document.createElement("span");
			pBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path></svg>`;
			fDiv.append(pBtn);
		}
		huff.children[1].children[1].append(fDiv);
		let quants = ["none", "single", "two", "triple", "four"];
		huff.children[1].children[1].setAttribute("class", `multimedia ${quants[huff.children[1].children[1].children.length]}`);
		if(show.children.length > 4){
			show.children[0].remove();
			huff.children[1].children[1].children[0].remove();
			huff.children[1].children[1].setAttribute("class", `multimedia ${quants[huff.children[1].children[1].children.length]}`);
		}

		f.onmouseover = () => f.parentNode.classList.add("del");
		f.onmouseleave = () => f.parentNode.classList.remove("del");
		fAddeds.onclick = function(){return removeImage(fAddeds)}; 
		validator();
	};

	lector.readAsDataURL(file);

}


imgDrag.ondragover = function(event) {
	event.preventDefault();
	validator();
};
imgDrag.ondrop = function(event) {
	event.preventDefault();
	addImage(event.dataTransfer.files[0]);
	validator();
};

function removeImage(element){
	let position = Array.from(show.children).indexOf(element);
	show.children[position].remove();
	huff.children[1].children[1].children[position].remove();
	let quants = ["none", "single", "two", "triple", "four"];
	huff.children[1].children[1].setAttribute("class", `multimedia ${quants[huff.children[1].children[1].children.length]}`);
	validator();
}

function validator(){
	let sender = document.getElementById("sender");
	if((text.value.length > 0 || show.children.length > 0)) {
		if(!(sender.getAttribute("class"))){sender.setAttribute("class", "valid")}
	}else{
		if(sender.getAttribute("class")){sender.removeAttribute("class")}
	}
}


adjs.oninput = () => {
	addImage(adjs.files[0]);
	validator();
};

export {validator};