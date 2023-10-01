//JS
const setScrollbar = require('../generals/scrollbar.js')
require('../generals/theme.js')
require('../generals/showcase.js')
require('../generals/userLoad.js')
require('../generals/menu.js')

//CSS
require('../generals/colors.scss')
require('../generals/huff.scss')
require('./whispers.scss')
require('../generals/options.scss')
require('../generals/scrollbar.scss')
require('../generals/showcase.scss')
require('../generals/videoPlayer.scss')
require('../generals/menu.scss')
require('../generals/fonts.scss')


//options
document.getElementById("dm").removeAttribute("href");
document.getElementById("dm").style.fontWeight = "500";
document.getElementById("dm").style.backgroundColor = "var(--hover)";
document.getElementById("dm").style.fill = "var(--whispers)";
document.getElementById("dm").style.color = "var(--whispers)";
document.getElementById("dm").onclick = () => {
	document.getElementById("conContent").scrollTop = 0;
	document.getElementById("curCont").scrollTop = 0;
}


//scrollbar.js
setScrollbar(document.getElementById("curCont"))