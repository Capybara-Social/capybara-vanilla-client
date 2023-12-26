//JS
import { addNot } from './addNot.js';
import '../_generals/theme.js';
import '../_generals/userLoad.js';
import '../_generals/menu.js';

//CSS
import '../_generals/colors.scss';
import '../_generals/huff.scss';
import './notifi.scss';
import '../_generals/options.scss';
import '../_generals/scrollbar.scss';
import '../_generals/menu.scss';
import '../_generals/fonts.scss';

//vars
const coming = "/";

//In-Dev
let genList = document.getElementById("genCont");
let folList = document.getElementById("follCont");
for(let i=0; i < 12; i++){
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

