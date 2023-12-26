import {loadHuff} from './loadPost.js';
import {user} from '../_generals/userLoad.js';
import {User, Post} from '../_generals/classes.js';
import '../_generals/theme.js';
import '../_generals/showcase.js';
import '../_generals/menu.js';
import './addComment.js';




//CSS
import '../_generals/colors.scss';
import '../_generals/huff.scss';
import './huffs.scss';
import '../_generals/options.scss';
import '../_generals/scrollbar.scss';
import '../_generals/showcase.scss';
import '../_generals/videoPlayer.scss';
import '../_generals/menu.scss';
import '../_generals/fonts.scss';


//CODE
document.head.getElementsByTagName("title")[0].innerText = user.username + "'s " + "Huff" + " | Capybara";

//get

const coming = "";

let url = new URL(window.location.toString());
let params = new URLSearchParams(url.search);
if(params.get("from") == "explore") document.getElementById("goBack").href = coming + "/explore";
else document.getElementById("goBack").href = coming + "/main";


//Indev

let myUser = new User('Lifestyle Latino','#ee11ee', 'https://pbs.twimg.com/profile_images/1617941693717745670/Cu0RsEa7_400x400.jpg', 'LifestyleLatino');
let myPost2 = new Post(myUser, 
	'Llegó la hora de desbloquear tu energía espiritual y descubrir si cuentas con una fuerte voluntad como el aura roja, energía sin límites como el aura naranja, o un color completamente diferente. ¡Contesta estas preguntas para revelar tu color!', 
	[
		{uri: 'https://pbs.twimg.com/media/F2pAmkDXMAExDGX?format=jpg&name=small', type:"img"},
	],
	Date.now(), true);

loadHuff(myPost2);
