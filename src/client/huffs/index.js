
require('../generals/theme.js')
require('../generals/showcase.js')
let {user} =require('../generals/userLoad.js')
require('../generals/menu.js')
let {loadHuff} = require('./loadPost.js')
require('./addComment.js')




//CSS
require('../generals/colors.scss')
require('../generals/huff.scss')
require('./huffs.scss')
require('../generals/options.scss')
require('../generals/scrollbar.scss')
require('../generals/showcase.scss')
require('../generals/videoPlayer.scss')
require('../generals/menu.scss')
require('../generals/fonts.scss')


//CODE
document.head.getElementsByTagName("title")[0].innerText = user.username + "'s " + "Huff" + " | Capybara";

//get

const coming = "/client";

let url = new URL(window.location.toString());
let params = new URLSearchParams(url.search)
if(params.get("from") == "explore") document.getElementById("goBack").href = coming + "/explore"
else document.getElementById("goBack").href = coming + "/main"


//Indev

let myUser = new User('Lifestyle Latino','#ee11ee', 'https://pbs.twimg.com/profile_images/1617941693717745670/Cu0RsEa7_400x400.jpg', 'LifestyleLatino');
let myPost2 = new Post(myUser, 
	'Llegó la hora de desbloquear tu energía espiritual y descubrir si cuentas con una fuerte voluntad como el aura roja, energía sin límites como el aura naranja, o un color completamente diferente. ¡Contesta estas preguntas para revelar tu color!', 
	[
	{uri: 'https://pbs.twimg.com/media/F2pAmkDXMAExDGX?format=jpg&name=small', type:"img"},
	],
	 Date.now(), true)

loadHuff(myPost2)
