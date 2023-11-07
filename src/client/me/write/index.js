//JS
require('../../_generals/theme.js')
require('../../_generals/showcase.js')
require('../../_generals/menu.js')
var { user } = require('../../_generals/userLoad.js')
require('./writer.js')
require('./validator.js')


//CSS
require('../../_generals/colors.scss')
require('../../_generals/huff.scss')
require('./write.scss')
require('../../_generals/options.scss')
require('../../_generals/scrollbar.scss')
require('../../_generals/showcase.scss')
require('../../_generals/videoPlayer.scss')
require('../../_generals/menu.scss')
require('../../_generals/fonts.scss')

//user verification
if(user)document.getElementById("noAcc").remove();

//page
document.getElementById("createPost").removeAttribute("href");
document.getElementById("createPost").onclick = () => {
    text.value = "";
    content.children[0].innerHTML = textParser(text.value);
}