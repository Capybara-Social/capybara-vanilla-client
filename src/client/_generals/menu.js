let menuTemplate = document.getElementById("menuOptions");
let optTemplate = document.createElement("div");

let {saveTheme, saveColors} = require("../_generals/theme")
optTemplate.append(document.createElement("span"));
optTemplate.append(document.createElement("span"));

const icons = require("./icons.json")




function loadMenu(menu){
    document.getElementById("deMenu").children[0].children[1].remove();
    document.getElementById("deMenu").children[0].append(menu);
}

function preloadBaseMenu(opts, menu){
    opts.forEach(x => {
        let container = document.createElement("li");
        let option = optTemplate.cloneNode(true);
        option.children[0].innerHTML = x.icon;
        option.children[1].innerText = x.text;
        container.classList.add("normal");
        container.onclick = x.fn;
        container.append(option);
        menu.append(container);
    });
}


let menuDefault = menuTemplate.cloneNode();
let def_options = [
    {icon: `${icons.hot}`, text: `Customize`, fn:function(){ return loadMenu(menuCustom)} },
    {icon: `${icons.private}`, text: `Privacy`, fn:function(){ return loadMenu(menuPrivacy)} },
    {icon: `${icons.likeafter}`, text: `Recommendations`, fn: ""},
    {icon: `${icons.settings}`, text: `Advanced Options`, fn: ""},
    {icon: `${icons.reportbug}`, text: `Report a Bug`, fn: ""},
    {icon: `${icons.cross}`, text: `Close`, fn: function(){ return document.getElementById('deMenu').classList.remove('front')} }
];
preloadBaseMenu(def_options, menuDefault);

let menuCustom = menuTemplate.cloneNode();
let cus_options = [
    {icon: `${icons.switch}`, text: `Switch Theme`, fn:function(){ return loadMenu(menuTheme)} },
    {icon: `${icons.palette}`, text: `Change Main Color`, fn: function(){ return loadMenu(menuColor)} },
    {icon: `${icons.marker}`, text: `Advanced Customization`, fn:function(){ return loadMenu(menuAdColor)} },
    {icon: `${icons.back}`, text: `Go Back`, fn:function(){ return loadMenu(menuDefault)} }
];
preloadBaseMenu(cus_options, menuCustom);

let menuTheme = menuTemplate.cloneNode();
let theme_options = [
    {icon: `${icons.moon}`, text: `Set Dark Theme`, fn:function(){ return saveTheme('dark')} },
    {icon: `${icons.sun}`, text: `Set Light Theme`, fn:function(){ return saveTheme('light')} },
    {icon: `${icons.back}`, text: `Go Back`, fn: function(){ return loadMenu(menuCustom) } },
]
preloadBaseMenu(theme_options, menuTheme);

let menuColor = menuTemplate.cloneNode();
let capi_options = [
    {icon: `${icons.capi}`, text: `Capybara (Default)`, fn:function(){ return document.documentElement.style.setProperty('--capi', '#a52a02')} },
    {icon: `${icons.capi}`, text: `Medusa`, fn:function(){ return document.documentElement.style.setProperty('--capi', '#fff')} },
    {icon: `${icons.capi}`, text: `Macaw`, fn:""},
    {icon: `${icons.capi}`, text: `Mamba`, fn:""},
    {icon: `${icons.capi}`, text: `Sponge`, fn:""},
    {icon: `${icons.capi}`, text: `Crab`, fn:""},
    {icon: `${icons.capi}`, text: `Sponge`, fn:""},
    {icon: `${icons.capi}`, text: `Octo`, fn:""},
    {icon: `${icons.capi}`, text: `Whale`, fn:""},
    {icon: `${icons.capi}`, text: `Back`, fn:function(){ return loadMenu(menuCustom)} },
]
preloadBaseMenu(capi_options, menuColor);


let menuAdColor = menuTemplate.cloneNode();
let adColor_options = []
for(i=0; i < 9; i++) adColor_options[i] = optTemplate.cloneNode(true);

let savedColors = JSON.parse(localStorage.getItem("colors")) || {};

let currentColors = {
    "--capi": savedColors["--capi"] || "#a52a02",
    "--background": savedColors["--background"] || "#010101",
    "--text": savedColors["--text"] || "#fff",
    "--subtext": savedColors["--subtext"] || "#121212",
    "--hover": savedColors["--hover"] || "#0f0f0f",
    "--input": savedColors["--input"] || "#1e1e1e"
};

Object.keys(currentColors).forEach( x => {document.documentElement.style.setProperty(x, currentColors[x])});

for(let i=0; i < 9; i++){
    let x = adColor_options[i];
    if(i > 5){
        let optis = [
            {icon: `${icons.reset}`, text: `Reset Defaults`, fn: function(){ 
                for(let k=0;k<6;k++) adColor_options[k].children[1].children[0].value = "";
                return saveColors() ;
            } },
            {icon: `${icons.floppy}`, text: `Save`, fn:function(){ return saveColors(currentColors)} },
            {icon: `${icons.back}`, text: `Go Back`, fn:function(){ return loadMenu(menuCustom)}},
        ];
        adColor_options[i].children[0].innerHTML =  optis[i-6].icon;
        adColor_options[i].children[1].innerText = optis[i-6].text;
        let container = document.createElement("li");
        container.classList.add("normal");
        container.onclick = optis[i-6].fn;
        container.append(adColor_options[i]);
        menuAdColor.append(container);
    }else{
        let container = document.createElement("li");
        container.classList.add("chooser");
        let css_vars = [
            "background",
            "text",
            "subtext",
            "input",
            "hover",
            "capi"
        ]
        x.children[0].innerText = `--${css_vars[i]}: `;
        x.children[1].innerText = "#";
        x.children[1].append(document.createElement("input"));
        x.children[1].children[0].setAttribute("placeholder", "010101");
        x.children[1].children[0].setAttribute("type", "text");
        x.children[1].children[0].oninput = (element) => {
            text = element.target;
            let valids = "1234567890ABCDEF".split("");
            text.value = text.value.toUpperCase();
            text.value = text.value.split("").filter(x => valids.includes(x)).join("");
            if(text.value.length > 6) text.value = text.value.slice(0, 6);
            if(text.value.length > 2){
                 currentColors[`--${css_vars[i]}`] = `#${text.value}`;
                 document.documentElement.style.setProperty(`--${css_vars[i]}`, currentColors[`--${css_vars[i]}`]);
            }
        }
        container.append(x);
        menuAdColor.append(container);
    }
}

let menuPrivacy = menuTemplate.cloneNode();
let privacy_options = [
    {icon: `${icons.file}`, text: `Send logs anonymously when an error happens(set: No)`, fn:""},
    {icon: `${icons.back}`, text: `Go Back`, fn:function(){ return loadMenu(menuDefault)} },
];

preloadBaseMenu(privacy_options, menuPrivacy);

loadMenu(menuDefault)

document.getElementById("deMenu").addEventListener("click", (event) => {
    if(event.target.id == "deMenu"){
        loadMenu(menuDefault);
        return document.getElementById('deMenu').classList.remove('front')
    }
})

module.exports = loadMenu;

