function saveTheme(theme) {
	theme = theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");
	if(localStorage.getItem("user")) localStorage.setItem("theme", theme);
	document.documentElement.setAttribute("theme", theme);
	if(theme == "dark"){
		saveColors({
			"--capi": "#a52a02",
			"--background": "#010101",
			"--text": "#fff",
			"--subtext": "#121212",
			"--hover": "#0f0f0f",
			"--input": "#1e1e1e"
		});
	}else{
		saveColors({
			"--capi": "#a52a02",
			"--background": "#fff",
			"--text": "#101010",
			"--subtext": "#a0a0a0",
			"--hover": "#b4b4b4",
			"--input": "#e1e1e1"
		});
	}
}

let theme = localStorage.getItem("theme") || (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");

switch(theme) {
case `light`: case `dark`: break;
default: loadTheme(); theme = "dark"; break;
}
  
document.documentElement.setAttribute(`theme`, theme);

function saveColors(colors){
	if(!colors){
		if(theme == "dark"){
			colors = {
				"--capi": "#a52a02",
				"--background": "#010101",
				"--text": "#fff",
				"--subtext": "#121212",
				"--hover": "#0f0f0f",
				"--input": "#1e1e1e"
			};
		}else{
			colors = {
				"--capi": "#a52a02",
				"--background": "#fff",
				"--text": "#101010",
				"--subtext": "#a0a0a0",
				"--hover": "#b4b4b4",
				"--input": "#e1e1e1"
			};
		}
	}
	if(localStorage.getItem("user")) localStorage.setItem("colors", JSON.stringify(colors));
	Object.keys(colors).forEach(x => document.documentElement.style.setProperty(x, colors[x]));
	return colors;
}

function loadTheme(theme){
	theme = theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");
	document.documentElement.setAttribute("theme", theme);
	if(theme == "dark"){
		loadColors({
			"--capi": "#a52a02",
			"--background": "#010101",
			"--text": "#fff",
			"--subtext": "#121212",
			"--hover": "#0f0f0f",
			"--input": "#1e1e1e"
		});
	}else{
		loadColors({
			"--capi": "#a52a02",
			"--background": "#fff",
			"--text": "#101010",
			"--subtext": "#a0a0a0",
			"--hover": "#b4b4b4",
			"--input": "#e1e1e1"
		});
	}
}

function loadColors(colors){
	if(!colors){
		if(theme == "dark"){
			colors = {
				"--capi": "#a52a02",
				"--background": "#010101",
				"--text": "#fff",
				"--subtext": "#121212",
				"--hover": "#0f0f0f",
				"--input": "#1e1e1e"
			};
		}else{
			colors = {
				"--capi": "#a52a02",
				"--background": "#fff",
				"--text": "#101010",
				"--subtext": "#a0a0a0",
				"--hover": "#b4b4b4",
				"--input": "#e1e1e1"
			};
		}
	}
	Object.keys(colors).forEach(x => document.documentElement.style.setProperty(x, colors[x]));
}

if(localStorage.getItem("colors")) loadColors(JSON.parse(localStorage.getItem("colors")));



export {saveTheme, saveColors, loadColors, loadTheme, theme};
