const {user} = require('../../generals/userLoad.js');
const {validator} = require('./writer.js');

const coming = document.documentElement.getAttribute("urlUsed")
huff.removeAttribute("style");
let publisher = huff.children[0]

function textParser(unsafe){
    let ments = 0;
    let cats = 0;

    let final;
    
    final = unsafe.split("\n").map(part => {
        safeText = part.trim().split("").map(x => {
            if(x == "<") return "&lt;";
            if(x == ">") return "&gt;";
            return x;
        }).join("").trim();

        safeText = safeText.split(" ").map(y => {
            if(y.startsWith("@") && y.length > 3 && ments < 5){ 
                let matched =`${y} `.match(/@[0-9a-zA-Z]([0-9a-zA-Z]|_|\.){3,25} /g);
                if(matched && matched[0] == `${y} `){
                    ments++;
                    return `<a href="${coming}/users/${y}">${y}</a>`;
                }
            };
            if(y.startsWith("#") && y.length > 3 && cats < 5){
                let matched =`${y} `.match(/#[0-9a-zA-Z]([0-9a-zA-z]|_|\.){3,25} /g)
                if(matched && matched[0] == `${y} `){ 
                    cats++;
                    return `<a href="${coming}/search/${y.slice(1)}">${y}</a>`;
                }
            };
            return y;
        }).join(" ");

        return safeText
    }).join("<br>");

    document.getElementById("defaults").innerText = `Characters: ${unsafe.length}/512 | Categories: ${cats}/5 | Mentions: ${ments}/5`;
    
    return final;
}


publisher.children[1].children[0].innerText = user.username;
publisher.children[1].children[1].innerText = "@" + user.username;
publisher.children[0].src = user.image || coming + "/src/brown.png";

let content = huff.children[1];
let text = document.getElementById("text");

content.children[0].innerHTML = textParser(text.value); 

if (text.value.length > 512) text.value = text.value.slice(0, 512);
if (text.value.startsWith(" ") || text.value.startsWith("\n")) text.value = "";
if (text.value.split("\n").length > 15) text.value = text.value.split("\n").slice(0, 15).join("\n");
content.children[0].innerHTML = textParser(text.value);
validator();

text.oninput = () => {
    if(text.value.length > 512) text.value = text.value.slice(0, 512);
    if(text.value.startsWith(" ") || text.value.startsWith("\n")) text.value = "";
    if(text.value.split("\n").length > 15) text.value = text.value.split("\n").slice(0, 15).join("\n");
    content.children[0].innerHTML = textParser(text.value);
    validator();
}
content.children[1].setAttribute("class", "multimedia none");