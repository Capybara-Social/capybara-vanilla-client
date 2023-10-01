const setScrollbar = require('../generals/scrollbar.js')
require('../generals/theme.js')
require('../generals/showcase.js')
let {user} =require('../generals/userLoad.js')
require('../generals/menu.js')



//CSS
require('../generals/colors.scss')
require('../generals/huff.scss')
require('./me.scss')
require('../generals/options.scss')
require('../generals/scrollbar.scss')
require('../generals/showcase.scss')
require('../generals/videoPlayer.scss')
require('../generals/menu.scss')
require('../generals/fonts.scss')


//CODE
document.head.getElementsByTagName("title")[0].innerText = user.username + " | Capybara";

setScrollbar(document.getElementById("mainContent"))