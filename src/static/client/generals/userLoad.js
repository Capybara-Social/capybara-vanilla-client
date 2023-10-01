const coming = document.documentElement.getAttribute("urlUsed");


let user = localStorage.getItem("user") || false;
    let clientUser = document.getElementById("clientUser");
    if(!user){
        if(localStorage.getItem("hasAccount")){
            clientUser.children[1].remove();
            clientUser.classList.remove("user")
            clientUser.classList.add("noUser")
            clientUser.onclick = () => {window.location.href = `${coming}login/`;}
        }else{
            clientUser.children[0].innerText = "Sign Up Now!"
            clientUser.children[1].remove();
            clientUser.classList.remove("user")
            clientUser.classList.add("noUser")
            clientUser.onclick = () => { window.location.href = `${coming}/signup`;}
        }
    }else{
        user = JSON.parse(user);
        clientUser.children[0].innerText = user.username;
        clientUser.children[1].setAttribute("src", user.image || `${coming}/src/brown.png`);
        clientUser.href = `${coming}/me/`;
    }

module.exports = {user};