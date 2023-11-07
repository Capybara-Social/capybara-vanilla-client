require('../_generals/theme.js')
require('../_generals/showcase.js')
let {user} =require('../_generals/userLoad.js')
require('../_generals/menu.js')



//CSS
require('../_generals/colors.scss')
require('../_generals/huff.scss')
require('./me.scss')
require('../_generals/options.scss')
require('../_generals/scrollbar.scss')
require('../_generals/showcase.scss')
require('../_generals/videoPlayer.scss')
require('../_generals/menu.scss')
require('../_generals/fonts.scss')


//CODE
document.head.getElementsByTagName("title")[0].innerText = user.username + " | Capybara";
