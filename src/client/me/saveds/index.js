//JS
const loadHuff = require('./addPost')
require('../../_generals/theme.js')
require('../../_generals/showcase.js')
require('../../_generals/userLoad.js')
require('../../_generals/menu.js')

//CSS
require('../../_generals/colors.scss')
require('../../_generals/huff.scss')
require("./saveds.scss")
require('../../_generals/options.scss')
require('../../_generals/showcase.scss')
require('../../_generals/videoPlayer.scss')
require('../../_generals/menu.scss')
require('../../_generals/fonts.scss')
require('../../_generals/scrollbar.scss')

//Vars
const mainC = document.getElementById("mainContent");
const coming = "/client";

//Options
document.getElementById("saveds").removeAttribute("href");
document.getElementById("saveds").style.fontWeight = "500";
document.getElementById("saveds").style.backgroundColor = "var(--hover)";
document.getElementById("saveds").style.fill = "var(--saveds)";
document.getElementById("saveds").style.color = "var(--saveds)";
document.getElementById("saveds").onclick = () => {mainC.scrollTop = 0;};



//delete in-dev
    let myUser = new User('Test Bruh','#ee11ee', 'https://cdn-icons-png.flaticon.com/512/149/149071.png', 'test')
    let myPost2 = new Post(myUser, 
    'Lorem dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 
    [
    {uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png', type:"img"},
    {uri: 'https://www.shutterstock.com/shutterstock/videos/1016939161/preview/stock-footage-television-screen-color-test-pattern-seamless-loop.webm', type:"video"},
    ],
     Date.now(), "sexo")

    let myPost =  new Post(myUser, 
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 
    [
    {uri: coming +'/_src/sensual.mp4', type:"video"},
    ],
     Date.now(), "sexo") 

     let myPost3 =  new Post(myUser, 
    'Lorem dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 
    [
    {uri: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg', type:"img"},
    {uri: coming +'/_src/sensual.mp4', type:"video"},
    {uri: coming + '/_src/sensual.mp4', type:"video"},
    {uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png', type:"img"},
    ],
     Date.now(), "sexo")
    for(let i = 0; i <= 20; i++){
        let posts = [myPost, myPost2, myPost3];
        loadHuff(posts[Math.floor(Math.random()*posts.length)]) 
    }