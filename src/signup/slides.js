
//God I'm sorry for the code I've written, in my mind it was better :(


const {KeyPair, encryptWithPassword} = require("@capybara-social/daniel");
let keys = new KeyPair();

let icons = require("../_generals/icons");
let coming = "/client";
let finalUser ={
	username: "",
	birthday: "",
	email: "",
	secret: "",
	pbk: keys.publicKey,
	hAuth: "",
	name: ""
}

let slides = [];
let position = 0;


let capLoaded = false;

function loadCaptcha(){
	if(capLoaded == false){;
	capLoaded = true;
	hcaptcha.render("hCap", {
		sitekey: "2e096ba9-4acf-493e-9c5e-5a470c341c0c",
		theme: theme,
		callback: (r) => {		
			finalUser.hAuth = r;
			document.getElementById("next").classList.add("done");
		}
	})
}
}


function nextSlide(){
	if(!document.getElementById("next").classList.contains("done")) return;
	if(position + 1 > 7) position = 6;
	else position = position +1;
	document.getElementById("card").children[1].replaceWith(slides[position]);
	if(position == 5) loadCaptcha();
}



function beforeSlide(){
	if(position - 1 < 0) position = 0;
	else position = position - 1;
	document.getElementById("card").children[1].replaceWith(slides[position]);
}

let userVerif = false;
let showUserVerif = false;


async function finishUser(){

	finalUser["birthday"] = await keys.encrypt(finalUser["birthday"]);
	finalUser["secret"] = await keys.encryptKey(finalUser["secret"]);

	let xhttp = new XMLHttpRequest();
	return new Promise((resolve,reject) => {
		xhttp.onreadystatechange = () => {
			if(xhttp.status == 201 && xhttp.readyState == 4){
				return resolve(xhttp.response);
			}
		}
		xhttp.open("POST", coming.slice(0, -7) + `/api/user`);
		xhttp.setRequestHeader("Content-Type", "application/json");

		xhttp.onload = () => {
			if(xhttp.response.created == "true") resolve(xhttp.response)
			else reject("Error")
		}

		xhttp.ontimeout = (e) => {
			reject(e)
		}
		let body = {
			content: finalUser,
			encoded: false,
			sharedKey: "",
		}	
		xhttp.send(JSON.stringify(body));
	
	})
}



slides[0] = document.createElement("div");
slides[0].classList.add("onDisplay")
slides[0].append(document.createElement("span"));
slides[0].children[0].innerText = "Ready to join to Capybara?";
slides[0].append(document.createElement("div"));
slides[0].children[1].append(document.createElement("button"));
slides[0].children[1].children[0].innerText = "Ready!";
slides[0].children[1].children[0].id = "next";
slides[0].children[1].children[0].classList.add("done");
slides[0].children[1].children[0].onclick = nextSlide;


slides[1] = document.createElement("div");
slides[1].classList.add("onDisplay")
slides[1].append(document.createElement("span"));
slides[1].children[0].innerText = "Enter your username";
slides[1].append(document.createElement("div"));
slides[1].children[1].append(document.createElement("input"));
slides[1].children[1].children[0].setAttribute("placeholder", "the_best_username");
slides[1].children[1].children[0].setAttribute("type", "text");
slides[1].children[1].children[0].setAttribute("autocomplete", "username");
slides[1].children[1].children[0].setAttribute("name", "username");
slides[1].children[1].children[0].oninput = ({data, target}) => {

	if(showUserVerif){
		showUserVerif = false;
		userVerif = false;
		slides[1].children[1].children[1].classList.remove("done")
		slides[1].children[1].children[1].innerHTML = '';
		slides[1].children[1].children[1].innerText = 'Verify Username';
		slides[1].children[1].children[2].classList.remove("done");
	}
	if(!target.value) return;
	let regex = new RegExp(/[a-z0-9]([a-z0-9]|\.|_|)+/g);
	if(!target.value.match(regex)) target.value = "";
	else target.value = target.value.match(regex)[0];
	if(target.value.length > 20) target.value = target.value.slice(0, 20);
	if(target.value.length >= 3){
		slides[1].children[1].children[1].classList.add("done")
	}
	else{
		slides[1].children[1].children[1].classList.remove("done")
		slides[1].children[1].children[1].innerHTML = '';
		slides[1].children[1].children[1].innerText = 'Verify Username';
	}
}

slides[1].children[1].append(document.createElement("button"));
slides[1].children[1].children[1].innerText = 'Verify Username';
slides[1].children[1].children[1].onclick = function() {

	if(!slides[1].children[1].children[1].classList.contains("done")) return;
	if(showUserVerif) return;

	slides[1].children[1].children[3].setAttribute("style", `opacity:0;`);


	if(slides[1].children[1].children[0].value.length < 3 || slides[1].children[1].children[0].value.length > 20){
		slides[1].children[1].children[1].innerHTML = icons.cross;
		slides[1].children[1].children[1].classList.remove("waiting")
		showUserVerif = true;
		return;
	}

	let req = new XMLHttpRequest();
	req.onreadystatechange = function(){
		
	}

	req.onload = () => {
			let res = JSON.parse(req.responseText);
			if(res.exists == true || res.error == true) {
				slides[1].children[1].children[1].innerHTML = icons.cross;
				slides[1].children[1].children[1].classList.remove("waiting")
				showUserVerif = true;
			}
			else if(res.exists == false && res.error == false){
				slides[1].children[1].children[1].innerHTML = icons.check;
				slides[1].children[1].children[1].classList.remove("waiting")
				showUserVerif = true;
				userVerif = true;
				slides[1].children[1].children[2].classList.add("done");
			}
			else{
				slides[1].children[1].children[1].innerHTML = icons.cross;
				slides[1].children[1].children[1].classList.remove("waiting")
				showUserVerif = true;
			}
	}

	req.open("GET", coming.slice(0, -7) + "/api/users/@" + slides[1].children[1].children[0].value);
	req.send();
	
	slides[1].children[1].children[1].innerText = "";
	slides[1].children[1].children[1].innerHTML = icons.load;
	slides[1].children[1].children[1].classList.add("waiting")
}
slides[1].children[1].append(document.createElement("button"));
slides[1].children[1].append(document.createElement("span"));
slides[1].children[1].children[3].innerText = "You need to verify your username first!"
slides[1].children[1].children[3].setAttribute("style", `opacity:0;`);
slides[1].children[1].children[2].innerText = "Next";
slides[1].children[1].children[2].id = "next";
slides[1].children[1].children[2].onclick = () => {
	if(!slides[1].children[1].children[2].classList.contains("done")){
		if(!userVerif) slides[1].children[1].children[3].removeAttribute("style");
	}
	if(slides[1].children[1].children[2].classList.contains("done")){
		finalUser.username = slides[1].children[1].children[0].value;
		 nextSlide();
	}
}

slides[2] = document.createElement("div");
slides[2].classList.add("onDisplay")
slides[2].append(document.createElement("span"));
slides[2].children[0].innerText = "Enter your password";
slides[2].append(document.createElement("div"));
slides[2].children[1].append(document.createElement("input"));
slides[2].children[1].children[0].setAttribute("placeholder", "Shh! Don't tell anyone! (at least 8 characters)");
slides[2].children[1].children[0].setAttribute("type", "password");
slides[2].children[1].children[0].oninput = ({data, target}) => {
	slides[2].children[1].children[1].setAttribute("placeholder", "Repeat your password");
	if(slides[2].children[1].children[1].value === target.value) slides[2].children[1].children[2].classList.add("done");
	else slides[2].children[1].children[2].classList.remove("done");
}

slides[2].children[1].append(document.createElement("input"));
slides[2].children[1].children[1].setAttribute("placeholder", "Repeat your password");
slides[2].children[1].children[1].setAttribute("type", "password");
slides[2].children[1].children[1].oninput = ({data, target}) => {

	if(slides[2].children[1].children[0].value.length < 8){
		slides[2].children[1].children[1].setAttribute("placeholder", "The original password must contain at least 8 characters!");
		slides[2].children[1].children[1].value =  "";
		return;
	}else{
		slides[2].children[1].children[1].setAttribute("placeholder", "Repeat your password");
	}

	if(slides[2].children[1].children[0].value == target.value && slides[2].children[1].children[0].value.length > 7) slides[2].children[1].children[2].classList.add("done");
	else slides[2].children[1].children[2].classList.remove("done");
	
}
slides[2].children[1].append(document.createElement("button"));
slides[2].children[1].children[2].innerText = "Next";
slides[2].children[1].children[2].id = "next";
slides[2].children[1].children[2].onclick = () => {
	if(slides[2].children[1].children[2].classList.contains("done")) {
		finalUser.secret = slides[2].children[1].children[1].value;
		nextSlide();
	}
}

slides[3] = document.createElement("div");
slides[3].classList.add("onDisplay")
slides[3].append(document.createElement("span"));
slides[3].children[0].innerText = "Enter your birthday";
slides[3].append(document.createElement("div"));
slides[3].children[1].append(document.createElement("input"));
slides[3].children[1].children[0].setAttribute("type", "date");
slides[3].children[1].children[0].oninput = ({target}) => {
	let birth = new Date(target.value);
	birth.setFullYear(birth.getFullYear() + 15);

	if(birth.getTime() < Date.now()) slides[3].children[1].children[2].classList.add("done");
	else slides[3].children[1].children[2].classList.remove("done");
}

slides[3].children[1].append(document.createElement("span"));
slides[3].children[1].children[1].innerText = "You have to be over 15 years old to have an account in Capybara."

slides[3].children[1].append(document.createElement("button"));
slides[3].children[1].children[2].innerText = "Next";
slides[3].children[1].children[2].id = "next";
slides[3].children[1].children[2].onclick = () => {
	if(slides[3].children[1].children[2].classList.contains("done")) {
		finalUser.birthday = String(new Date(slides[3].children[1].children[0].value).getTime());
		nextSlide();
	};
}

slides[4] = document.createElement("div");
slides[4].classList.add("onDisplay")
slides[4].append(document.createElement("span"));
slides[4].children[0].innerText = "Enter your email";
slides[4].append(document.createElement("div"));
slides[4].children[1].append(document.createElement("input"));
slides[4].children[1].children[0].setAttribute("placeholder", "Proton is our personal choice!");
slides[4].children[1].children[0].setAttribute("type", "email");
slides[4].children[1].children[0].oninput = ({target}) => {
	let EREGEX = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
	if(EREGEX.test(target.value)) slides[4].children[1].children[1].classList.add("done");
	else slides[4].children[1].children[1].classList.remove("done");
}
slides[4].children[1].append(document.createElement("button"));
slides[4].children[1].children[1].innerText = "Next";
slides[4].children[1].children[1].id = "next";
slides[4].children[1].children[1].onclick = () => {
	 if(slides[4].children[1].children[1].classList.contains("done")) {
		finalUser.email = slides[4].children[1].children[0].value;
		nextSlide();
	 }
};




slides[5] = document.createElement("div");
slides[5].classList.add("onDisplay")
slides[5].append(document.createElement("span"));
slides[5].children[0].innerText = "Verify you are not a robot";
slides[5].append(document.createElement("div"));
slides[5].children[1].append(document.createElement("div"));
slides[5].children[1].children[0].id = "hCap";
slides[5].children[1].children[0].classList.add("h-captcha");
slides[5].children[1].append(document.createElement("button"));
slides[5].children[1].children[1].innerText = "Next";
slides[5].children[1].children[1].id = "next";
slides[5].children[1].children[1].onclick = nextSlide;


slides[6] = document.createElement("div");
slides[6].classList.add("onDisplay")
slides[6].append(document.createElement("span"));
slides[6].children[0].innerText = "Accept the terms and conditions";
slides[6].append(document.createElement("div"));
slides[6].children[1].append(document.createElement("div"));
slides[6].children[1].children[0].classList.add("checker")
	slides[6].children[1].children[0].append(document.createElement("input"));
	slides[6].children[1].children[0].children[0].setAttribute("type", "checkbox");
	slides[6].children[1].children[0].children[0].onclick = () => {
		if(slides[6].children[1].children[1].children[0].checked && slides[6].children[1].children[0].children[0].checked) document.getElementById("next").classList.add("done");
		else document.getElementById("next").classList.remove("done");
	}
	slides[6].children[1].children[0].append(document.createElement("span"));
	slides[6].children[1].children[0].children[1].innerHTML = `By checking this box you accept the <a href="${coming.substring(0,coming.length - 7)}/localstorage/">usage of Local Storage</a>`;

slides[6].children[1].append(document.createElement("div"));
slides[6].children[1].children[1].classList.add("checker")
	slides[6].children[1].children[1].append(document.createElement("input"));
	slides[6].children[1].children[1].children[0].setAttribute("type", "checkbox");
	slides[6].children[1].children[1].children[0].onclick = () => {
		if(slides[6].children[1].children[1].children[0].checked && slides[6].children[1].children[0].children[0].checked) document.getElementById("next").classList.add("done");
		else document.getElementById("next").classList.remove("done");
	}
	slides[6].children[1].children[1].append(document.createElement("span"));
	slides[6].children[1].children[1].children[1].innerHTML = `By checking this box you accept the <a href="${coming.substring(0,coming.length - 7)}/tou/">Terms of Use</a> and <a href="${coming.substring(0,coming.length - 7)}/tos/">Terms of Service</a>`;

slides[6].children[1].append(document.createElement("span"));
slides[6].children[1].children[2].innerText = "Don't worry! We will NOT collect any information!"
slides[6].children[1].append(document.createElement("button"));
slides[6].children[1].children[3].innerText = "Next";
slides[6].children[1].children[3].id = "next";
slides[6].children[1].children[3].onclick = () => {
	if(slides[6].children[1].children[1].children[0].checked && slides[6].children[1].children[0].children[0].checked) nextSlide();
};



slides[7] = document.createElement("div");
slides[7].classList.add("onDisplay")
slides[7].append(document.createElement("span"));
slides[7].children[0].innerText = "Choose a name (Optional)";
slides[7].append(document.createElement("div"));
slides[7].children[1].append(document.createElement("input"));
slides[7].children[1].children[0].setAttribute("placeholder", "The best capybara in the jungle");
slides[7].children[1].children[0].setAttribute("type", "text");
slides[7].children[1].children[0].oninput = ({target}) => {
	target.value = target.value.substring(0, 30);
}
slides[7].children[1].append(document.createElement("span"));
slides[7].children[1].children[1].innerText = "Most of this information can't be changed in the future so be sure that it is all correct!!";
slides[7].children[1].children[1].setAttribute("style", "opacity:0");
slides[7].children[1].append(document.createElement("button"));
slides[7].children[1].children[2].innerText = "Create account!";
slides[7].children[1].children[2].classList.add("done");
slides[7].children[1].children[2].onclick = () => {
	if(slides[7].children[1].children[1].getAttribute("style")){
		slides[7].children[1].children[1].removeAttribute("style");
		return;
	}

	finalUser["name"] = slides[7].children[1].children[0].value;
	document.getElementById("after").classList.add("desapearhorz");
	document.getElementById("before").classList.add("desapearhorz");
	document.getElementById("card").children[1].replaceWith(slides[8]);


	finishUser()
	.then(x => {
		document.getElementById("card").children[1].replaceWith(slides[9]);
	})
	.catch(() => {
		document.getElementById("card").children[1].replaceWith(slides[10]);
	})
}

slides[8] = document.createElement("div");
slides[8].classList.add("onDisplay");
slides[8].append(document.createElement("div"));
slides[8].children[0].style.height = "100%";
slides[8].children[0].style.width = "100%";
slides[8].children[0].append(document.createElement("span"));
slides[8].children[0].children[0].innerText = "We are creating your account...";
slides[8].children[0].append(document.createElement("span"));
slides[8].children[0].children[1].innerText = "This may take some minutes! Go get a coffee or put your favourite playlist!";
slides[8].children[0].append(document.createElement("svg"));
slides[8].children[0].children[2].outerHTML = icons.load;
slides[8].children[0].children[2].classList.add("waiting");

slides[9] = document.createElement("div");
slides[9].classList.add("onDisplay");
slides[9].append(document.createElement("div"));
slides[9].children[0].style.height = "100%";
slides[9].children[0].style.width = "100%";
slides[9].children[0].append(document.createElement("span"));
slides[9].children[0].children[0].innerText = "Account created!";
slides[9].children[0].append(document.createElement("span"));
slides[9].children[0].children[1].innerText = "Account created successfully!";
slides[9].children[0].append(document.createElement("svg"));
slides[9].children[0].children[2].outerHTML = icons.check;
slides[9].children[0].append(document.createElement("a"));
slides[9].children[0].children[3].innerText = "Login now!"
slides[9].children[0].children[3].setAttribute("href", coming + "/login/");
slides[9].children[0].children[3].classList.add("done");

slides[10] = document.createElement("div");
slides[10].classList.add("onDisplay");
slides[10].append(document.createElement("div"));
slides[10].children[0].style.height = "100%";
slides[10].children[0].style.width = "100%";
slides[10].children[0].append(document.createElement("span"));
slides[10].children[0].children[0].innerText = "Whoops!";
slides[10].children[0].append(document.createElement("span"));
slides[10].children[0].children[1].innerText = "There's been an error!";
slides[10].children[0].append(document.createElement("svg"));
slides[10].children[0].children[2].outerHTML = icons.check;
slides[10].children[0].append(document.createElement("a"));
slides[10].children[0].children[3].innerText = "Retry now!"
slides[10].children[0].children[3].setAttribute("href", coming + "/signup/");
slides[10].children[0].children[3].classList.add("done");


document.getElementById("before").onclick = beforeSlide;
document.getElementById("after").onclick = nextSlide;

document.getElementById("card").children[1].replaceWith(slides[0]);



