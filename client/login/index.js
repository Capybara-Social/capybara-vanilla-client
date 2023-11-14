const { decryptWithPassword, KeyPair } = require('@capybara-social/daniel');

//JS
let {loadTheme, loadColors} = require('../_generals/theme.js');

//CSS
require("../_generals/fonts.scss");
require('./login.scss');


//vars
const coming = "/client";
let serverKey;
let GetKey = new XMLHttpRequest();
GetKey.onload = () => {serverKey = GetKey.response};
GetKey.open("GET", `/api/key`);
GetKey.send();




//Req parser
console.log(serverKey)
document.getElementById("themeSwitch").onclick = () => { return loadTheme(document.documentElement.getAttribute('theme') == 'light' ? 'dark' : 'light')}


document.getElementById("loginButton").onclick = () => {
    const password = document.getElementById("password").value;
    let username = document.getElementById("username").value;
    let data1 = {
        encoded: false,
        content:{
            username,
            phase: 1
        },
        sharedKey: "",
    }

    let xhttp = new XMLHttpRequest();
    xhttp.onload = async () => {
        if(xhttp.status == 400) return;
            let decoded = await decryptWithPassword(JSON.parse(xhttp.response)["data"]["secret"], password);
            const keys = new KeyPair(decoded);
            const masterKey = await keys.computeKey(serverKey);
            const rawKey = await decryptWithPassword(JSON.parse(xhttp.response)["data"]["key"], masterKey);

           console.log(JSON.parse(xhttp.response))
            console.log(keys)
            console.log(masterKey)
            console.log(rawKey)
            let xhttp2 = new XMLHttpRequest();
            let data2 = {
                encoded: false,
                content:{

                    username,
                    key: rawKey,
                    phase: 2
                },
                sharedKey: "",
            }

            xhttp2.onload = () => {
                const response2 = JSON.parse(xhttp2.response);
                if(response2.error != false) return console.log("hubo un error :P");

                localStorage.setItem("user", JSON.stringify(response2.data));
                localStorage.setItem("key", JSON.stringify({key: rawKey, exp: JSON.parse(xhttp.response)["data"]["exp"]}));
                window.location.href = coming+ "/main/";
            }

            xhttp2.open("POST", `/api/login`);
            xhttp2.setRequestHeader("Content-Type", "application/json");
            xhttp2.send(JSON.stringify(data2));
    }
    xhttp.open("POST", `/api/login`);
    xhttp.setRequestHeader("Content-Type", "application/json")
    
    xhttp.send(JSON.stringify(data1));
}




