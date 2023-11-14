//JS
require('../_generals/theme.js')
require('../_generals/showcase.js')
require('../_generals/userLoad.js')
require('../_generals/menu.js')

//CSS
require('../_generals/colors.scss')
require('../_generals/huff.scss')
require('./whispers.scss')
require('../_generals/options.scss')
require('../_generals/scrollbar.scss')
require('../_generals/showcase.scss')
require('../_generals/videoPlayer.scss')
require('../_generals/menu.scss')
require('../_generals/fonts.scss')


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

