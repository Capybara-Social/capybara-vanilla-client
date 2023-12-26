const coming = "";
//JS
import {loadHuff} from "./addPost";

import '../_generals/theme.js';
import '../_generals/showcase.js';
import '../_generals/userLoad.js';
import '../_generals/menu.js';
import {Post, User} from '../_generals/classes.js';

import { loadPeople, loadTrends } from "./trending.js";

//CSS
import '../_generals/colors.scss';
import '../_generals/huff.scss';
import './main.scss';
import '../_generals/options.scss';
import '../_generals/scrollbar.scss';
import '../_generals/showcase.scss';
import '../_generals/videoPlayer.scss';
import '../_generals/menu.scss';
import '../_generals/fonts.scss';


loadPeople();
loadTrends();

//options
document.getElementById("home").removeAttribute("href");
document.getElementById("home").style.fontWeight = "500";
document.getElementById("home").style.backgroundColor = "var(--hover)";
document.getElementById("home").style.fill = "var(--home)";
document.getElementById("home").style.color = "var(--home)";
document.getElementById("home").onclick = () => {document.body.scrollTop = 0};

//In-Dev
let myUser = new User('Lifestyle Latino','#ee11ee', 'https://pbs.twimg.com/profile_images/1617941693717745670/Cu0RsEa7_400x400.jpg', 'LifestyleLatino');
let otherUser = new User('Otro usuario','#f00', 'https://cdn-icons-png.flaticon.com/512/149/149071.png', 'AnotherUser');
let myPost2 = new Post(myUser, 
	'Llegó la hora de desbloquear tu energía espiritual y descubrir si cuentas con una fuerte voluntad como el aura roja, energía sin límites como el aura naranja, o un color completamente diferente. ¡Contesta estas preguntas para revelar tu color!', 
	[
		{uri: 'https://pbs.twimg.com/media/F2pAmkDXMAExDGX?format=jpg&name=small', type:"img"},
	],
	Date.now(), true);

let myPost =  new Post(otherUser, 
	'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 
	[
		{uri: `${coming}/_src/sensual.mp4`, type:"video"},
	],
	Date.now(), false);

let myPost3 =  new Post(otherUser, 
	'Lorem #dolor sit @amet , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 
	[
		{uri: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg', type:"img"},
		{uri: `${coming}/_src/sensual.mp4`, type:"video"},
		{uri: `${coming}/_src/sensual.mp4`, type:"video"},
		{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png', type:"img"},
	],
	Date.now(), false);
for(let i = 0; i <= 20; i++){
	let posts = [myPost, myPost2, myPost3];
	loadHuff(posts[Math.floor(Math.random()*posts.length)]); 
}


