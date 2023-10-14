

document.getElementById("showcase").children[0].onclick = () => {
    if(document.getElementById("showcaseContent").children.length > 0){
        document.getElementById("showcaseContent").children[0].remove();
    }
    document.getElementById("showcase").classList.remove("show");
} 