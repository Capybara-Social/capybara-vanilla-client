let plantilla = document.getElementById("huff").cloneNode(true);
const coming = "/client";
const videoLoad = require("../_generals/videoPlayer.js")
const mainC = document.getElementById("mainContent")

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
        };
        if(y.startsWith("#") && y.length > 3 && cats < 5){
            let matched =`${y} `.match(/#[0-9a-zA-Z]([0-9a-zA-z]|_|\.){3,25} /g)
            if(matched && matched[0] == `${y} `){ 
                cats++
                return `<a href="${coming}/search/${y.slice(1)}">${y}</a>`;
            }
        };
        return y;
    }).join(" ");
    return safeText;
}


function loadHuff(huff){
    let instance = plantilla.cloneNode(true);
    let user = huff.user;
    instance.removeAttribute("id");
    //publisher
    instance.children[0].children[0].setAttribute("src", user.image);
    instance.children[0].children[0].classList.add("loading");
    instance.children[0].children[0].onload = () => {instance.children[0].children[0].classList.remove("loading")}
    instance.children[0].children[1].children[0].innerText = user.name;
    instance.children[0].children[1].children[1].innerText = "@" + user.username;
    //content
    instance.children[1].children[0].innerHTML = textParser(huff.text);
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
        temporalInstance.setAttribute("loading", "lazy");
        let loadIcon = document.createElement("span");
        loadIcon.classList.add("loader");
        loadIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/></svg>`;
        tempDiv.append(loadIcon);
        if(vom.type == "video"){
            temporalInstance.onloadstart = () => {
                loadIcon.remove();
                if(vom.type == "video"){
                    tempDiv.classList.add("vid");
                    tempspan = document.createElement("span");
                    tempspan.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>`;
                    tempDiv.append(tempspan);
                 }
            }
        }else{
            temporalInstance.onload = () => {
                loadIcon.remove();
                if(vom.type == "video"){
                    tempDiv.classList.add("vid");
                    tempspan = document.createElement("span");
                    tempspan.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>`;
                    tempDiv.append(tempspan);
                 }
            }
        }
            
        tempDiv.onclick = () => {
                let showcaseTemp = temporalInstance.cloneNode();
                
                if(vom.type == "video"){
                    showcaseTemp = videoLoad(showcaseTemp);
                }
                document.getElementById("showcase").classList.add("show");
                if(document.getElementById("showcase").children[1].children.length > 0) document.getElementById("showcase").children[1].children[0].remove();                
                document.getElementById("showcase").children[1].append(showcaseTemp);
        }
        tempDiv.append(temporalInstance);
        instance.children[1].children[1].prepend(tempDiv);
    });
    instance.children[3].children[1].onclick = () => {
        document.getElementById("comments").scrollIntoView()
    };
    if(!huff.sponsor) instance.children[2].remove();
    instance.removeAttribute("style");
    document.getElementById("huff").replaceWith(instance);
}

module.exports = {loadHuff}