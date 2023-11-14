//JS
const addNot = require('./notAdd.js')
require('../_generals/theme.js')
require('../_generals/userLoad.js')
require('../_generals/menu.js')

//CSS
require('../_generals/colors.scss')
require('../_generals/huff.scss')
require('./notifi.scss')
require('../_generals/options.scss')
require('../_generals/scrollbar.scss')
require('../_generals/menu.scss')
require('../_generals/fonts.scss')

//vars
const coming = "/client"

//In-Dev
let genList = document.getElementById("genCont");
let folList = document.getElementById("follCont");
for(i=0; i < 12; i++){
    let ran = ["like", "comment", "follow", "nashe"];
    ran = ran[Math.floor(Math.random() * ran.length)];
    genList.prepend(addNot("TEST", "This is a test!", ran));
    folList.prepend(addNot("TEST", "This is a test!", ran, coming + "/_src/sensual.mp4"));
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

