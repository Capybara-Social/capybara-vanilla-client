const { decryptWithPassword, KeyPair } = require('@capybara-social/daniel');

//JS
let {loadTheme, loadColors} = require('../generals/theme.js');

//CSS
require("../generals/fonts.scss");
require('./login.scss');


//vars
const coming = document.documentElement.getAttribute("urlUsed");
const serverKey = document.documentElement.getAttribute("serverKey");


//Req parser

document.getElementById("themeSwitch").onclick = () => { return loadTheme(document.documentElement.getAttribute('theme') == 'light' ? 'dark' : 'light')}





document.getElementById("loginButton").onclick = () => {
    const password = document.getElementById("password").value;
    let username = document.getElementById("username").value;
    let data1 = {
        encoded: false,
        content:{
            username
        },
        sharedKey: "",
        phase: 1
    }

    let xhttp = new XMLHttpRequest();
    xhttp.onload = async () => {
            let decoded = await decryptWithPassword(JSON.parse(xhttp.response)["secret"], password);
            const keys = new KeyPair(decoded);
            const masterKey = await keys.computeKey(serverKey);
            const rawKey = await decryptWithPassword(JSON.parse(xhttp.response)["key"], masterKey);
    
            let xhttp2 = new XMLHttpRequest();
            let data2 = {
                encoded: false,
                content:{
                    username,
                    key: rawKey
                },
                sharedKey: "",
                phase: 2
            }
            xhttp2.onload = () => {
                const response2 = JSON.parse(xhttp2.response);
                if(response2.error != false) return console.log("hubo un error :P");

                localStorage.setItem("user", JSON.stringify(response2.data));
                localStorage.setItem("key", JSON.stringify({key: rawKey, exp: JSON.parse(xhttp.response)["exp"]}));
                window.location.href = coming+ "/main/";
            }
            xhttp2.open("POST", coming.slice(0, -7) + `/api/login`);
            xhttp2.setRequestHeader("Content-Type", "application/json");
            xhttp2.send(JSON.stringify(data2));
    }
    xhttp.open("POST", coming.slice(0, -7) + `/api/login`);
    xhttp.setRequestHeader("Content-Type", "application/json")
    
    xhttp.send(JSON.stringify(data1));
}




