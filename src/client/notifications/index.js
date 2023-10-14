//JS
const addNot = require('./notAdd.js')
require('../generals/theme.js')
require('../generals/userLoad.js')
require('../generals/menu.js')

//CSS
require('../generals/colors.scss')
require('../generals/huff.scss')
require('./notifi.scss')
require('../generals/options.scss')
require('../generals/scrollbar.scss')
require('../generals/menu.scss')
require('../generals/fonts.scss')

//vars
const coming = "/client"

//In-Dev
let genList = document.getElementById("genCont");
let folList = document.getElementById("follCont");
for(i=0; i < 12; i++){
    let ran = ["like", "comment", "follow", "nashe"];
    ran = ran[Math.floor(Math.random() * ran.length)];
    genList.prepend(addNot("TEST", "This is a test!", ran));
    folList.prepend(addNot("TEST", "This is a test!", ran, coming + "/src/sensual.mp4"));
}

//options
document.getElementById("notifications").removeAttribute("href");
document.getElementById("notifications").style.fontWeight = "500";
document.getElementById("notifications").style.backgroundColor = "var(--hover)";
document.getElementById("notifications").style.fill = "var(--notifications)";
document.getElementById("notifications").style.color = "var(--notifications)";
document.getElementById("notifications").onclick = () => {
    document.getElementById("genCont").scrollTop = 0;
    document.getElementById("follCont").scrollTop = 0;
};

