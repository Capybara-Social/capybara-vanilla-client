//JS
import '../_generals/theme.js';
import '../_generals/showcase.js';
import '../_generals/userLoad.js';
import '../_generals/menu.js';
import '../_generals/classes.js';

//CSS
import '../_generals/colors.scss';
import '../_generals/huff.scss';
import './whispers.scss';
import '../_generals/options.scss';
import '../_generals/scrollbar.scss';
import '../_generals/showcase.scss';
import '../_generals/videoPlayer.scss';
import '../_generals/menu.scss';
import '../_generals/fonts.scss';


//options
document.getElementById("dm").removeAttribute("href");
document.getElementById("dm").style.fontWeight = "500";
document.getElementById("dm").style.backgroundColor = "var(--hover)";
document.getElementById("dm").style.fill = "var(--whispers)";
document.getElementById("dm").style.color = "var(--whispers)";
document.getElementById("dm").onclick = () => {
	document.getElementById("conContent").scrollTop = 0;
	document.getElementById("curCont").scrollTop = 0;
};

