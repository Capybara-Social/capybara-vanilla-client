//JS
import { user } from '../../_generals/userLoad.js';
import '../../_generals/theme.js';
import '../../_generals/showcase.js';
import '../../_generals/menu.js';
import './writer.js';
import {textParser} from './validator.js';


//CSS
import '../../_generals/colors.scss';
import '../../_generals/huff.scss';
import './write.scss';
import '../../_generals/options.scss';
import '../../_generals/scrollbar.scss';
import '../../_generals/showcase.scss';
import '../../_generals/videoPlayer.scss';
import '../../_generals/menu.scss';
import '../../_generals/fonts.scss';

//Vars
let huff = document.getElementById("huff");
let content = huff.children[1];
let text = document.getElementById("text");


//user verification
if(user)document.getElementById("noAcc").remove();


//remove sponsored
document.getElementById("huff").children[2].remove();


//page
document.getElementById("createPost").removeAttribute("href");
document.getElementById("createPost").onclick = () => {
	text.value = "";
	content.children[0].innerHTML = textParser(text.value);
};