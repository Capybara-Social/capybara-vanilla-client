//JS
require('../../generals/theme.js')
require('../../generals/showcase.js')
require('../../generals/menu.js')
var { user } = require('../../generals/userLoad.js')
require('./writer.js')
require('./validator.js')


//CSS
require('../../generals/colors.scss')
require('../../generals/huff.scss')
require('./write.scss')
require('../../generals/options.scss')
require('../../generals/scrollbar.scss')
require('../../generals/showcase.scss')
require('../../generals/videoPlayer.scss')
require('../../generals/menu.scss')
require('../../generals/fonts.scss')

//user verification
if(user)document.getElementById("noAcc").remove();

//page
document.getElementById("createPost").removeAttribute("href");
document.getElementById("createPost").onclick = () => {
    text.value = "";
    content.children[0].innerHTML = textParser(text.value);
}