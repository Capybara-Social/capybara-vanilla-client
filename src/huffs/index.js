
require('../_generals/theme.js')
require('../_generals/showcase.js')
let {user} =require('../_generals/userLoad.js')
require('../_generals/menu.js')
let {loadHuff} = require('./loadPost.js')
require('./addComment.js')




//CSS
require('../_generals/colors.scss')
require('../_generals/huff.scss')
require('./huffs.scss')
require('../_generals/options.scss')
require('../_generals/scrollbar.scss')
require('../_generals/showcase.scss')
require('../_generals/videoPlayer.scss')
require('../_generals/menu.scss')
require('../_generals/fonts.scss')


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
