//JS
const {loadHuff} = require('./addPost.js')
const setScrollbar = require('../generals/scrollbar.js')
require('../generals/theme.js')
require('../generals/showcase.js')
require('../generals/userLoad.js')
require('../generals/menu.js')

//CSS
require('./explore.scss')

//Vars
const mainC = document.getElementById("mainContent");
const coming = document.documentElement.getAttribute("urlUsed")

//Options
document.getElementById("explore").removeAttribute("href");
document.getElementById("explore").style.fontWeight = "500";
document.getElementById("explore").style.backgroundColor = "var(--hover)";
document.getElementById("explore").style.fill = "var(--explore)";
document.getElementById("explore").style.color = "var(--explore)";
document.getElementById("explore").onclick = () => { mainC.children[1].scrollTop = 0;};


//Scrollbar.js
setScrollbar(mainC.children[1]);


//delete in-dev
    let myUser = new User('Test Bruh','#ee11ee', 'https://cdn-icons-png.flaticon.com/512/149/149071.png', 'test')
    let myPost2 = new Post(myUser, 
    'Te imaginas una Schneider bien fria y que aun podas manejar? No @messi penses más! Tomate la nueva Schneider 00, 0 alcohol, 0 multas.\n #HoyManejo', 
    [
    {uri: 'https://labarraccu.com.ar/cdn/shop/products/3_5ec39618-877e-48de-a270-b07de0f9c180.png?v=1680012039', type:"img"},
    ],
     Date.now(), true)

    let myPost =  new Post(myUser, 
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 
    [
    {uri: 'https://www.shutterstock.com/shutterstock/videos/1016939161/preview/stock-footage-television-screen-color-test-pattern-seamless-loop.webm', type:"video"},
    ],
     Date.now(), false) 

     let myPost3 =  new Post(myUser, 
    'Lorem dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 
    [
    {uri: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg', type:"img"},
    {uri: coming + '/src/sensual.mp4', type:"video"},
    {uri: coming + '/src/sensual.mp4', type:"video"},
    {uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png', type:"img"},
    ],
     Date.now(), false)
    for(let i = 0; i <= 20; i++){
        let posts = [myPost, myPost2, myPost3];
        loadHuff(posts[Math.floor(Math.random()*posts.length)]) 
    }