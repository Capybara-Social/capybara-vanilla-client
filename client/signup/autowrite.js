texts = [
    "speechful",
    "happy",
    "secure",
    "private",
    "free",
    "you",
    "communicative"
];


word = texts[Math.floor(Math.random() * (texts.length-1))];
i = 0;
wait = 0;
completed = false;
lastWord = word;

function writer(){
    if(wait != 0){
        wait--;
        return;
    }
    while(lastWord == word) word = texts[Math.floor(Math.random() * (texts.length-1))];
    let changing = document.getElementById("changingText");
    if(completed == false){
        if(word == word.slice(0, i-1)){
            completed = true;
            i--;
            wait = 3;
        }else{
            changing.innerText = word.slice(0, i);
            i++;
        }
    }else{
        if(i < 0){
            completed = false;
            lastWord = word;
            word = texts[Math.floor(Math.random() * (texts.length-1))];
            i = 0;
        }else{
            changing.innerText = word.slice(0, i);
            i--;
        }
    }
}

setInterval(writer, 150)