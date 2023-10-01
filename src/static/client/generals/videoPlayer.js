function videoLoad(el){
    let ranId = `${Math.random() * 500}`.split(".").join("");
    let video = el;
    video.id = "onShowcase";
    let loaded = 0;
    let vidSource = document.createElement("source");
    vidSource.src = video.src;
    if(video.getAttribute("type")){
        vidSource.setAttribute("type", video.getAttribute("type"));
         video.removeAttribute("type");
    }else{
        if(video.canPlayType('video/ogg')) {
            vidSource.type = 'video/ogg';
        } else if(video.canPlayType('video/webm')) {
            vidSource.type = 'video/webm';
        } else if(video.canPlayType('video/mp4')) {
            vidSource.type = 'video/mp4';
        }else{
            video = document.createElement("span");
            video.innerText = "Sorry, This video is not playable in your browser or the type is not valid";
            return video;
        }
    }
    
    video.append(vidSource);
    video.removeAttribute("src");
 
    let bigPlay = document.createElement("span");
    bigPlay.classList.add("bigPlay");
    bigPlay.classList.add("loading");
    bigPlay.setAttribute("playerId", ranId)
    bigPlay.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/></svg>`;
    

    let playB = document.createElement("span");
    playB.classList.add("playB");
    playB.setAttribute("playerId", ranId);
    playB.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>`
    if(video.paused){
        playB.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>`
    }else{
        playB.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>`
    }

    playB.onclick = () => {
        if(loaded == 0) return;
       if(Array.from(document.getElementsByClassName("bigPlay")).filter(x => x.getAttribute("playerId") == ranId).length > 0){
            Array.from(document.getElementsByClassName("bigPlay")).filter(x => x.getAttribute("playerId") == ranId)[0].remove();
        }
        if(!video.paused){
            document.getElementById("onShowcase").pause();
            playB.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>`
        }else{
            document.getElementById("onShowcase").play();
            playB.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>`
        }
    }

    bigPlay.onclick = () => {
        if(bigPlay.classList.contains("loading")) return;
        video.play();
        playB.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>`
        bigPlay.remove()
    }

    
    let more = document.createElement("span");
    more.classList.add("more");
    more.setAttribute("playerId", ranId);
    more.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z"/></svg>`
    more.onclick = () => {
        if(loaded = 0) return;
        video.currentTime = Math.min(video.duration, video.currentTime + 5);
    }

    let less = document.createElement("span");
    less.classList.add("less");
    less.setAttribute("playerId", ranId);
    less.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z"/></svg>`
    less.onclick = () => {
        if(loaded = 0) return;
        video.currentTime = Math.max(0, video.currentTime - 5);
    }

    let container = document.createElement("div");
        container.setAttribute("playerId", ranId);
        container.classList.add("videoPlayer");

    let controls = document.createElement("div");
        controls.setAttribute("playerId", ranId);
        controls.classList.add("controls");

    let progressEdit = document.createElement("div");
        progressEdit.setAttribute("playerId", ranId);
        progressEdit.classList.add("progressEdit");

        progressEdit.append(less);
        progressEdit.append(playB);
        progressEdit.append(more);

    let multimediaEdit = document.createElement("div");
        multimediaEdit.setAttribute("playerId", ranId);
        multimediaEdit.classList.add("multimediaEdit");

    let fullscreen = document.createElement("span");
        fullscreen.classList.add("fullscreen");
        fullscreen.setAttribute("playerId", ranId);
        fullscreen.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M344 0H488c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512H24c-13.3 0-24-10.7-24-24V344c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z"/></svg>`;
    fullscreen.onclick = () => {
        if(loaded = 0) return;
        if(document.fullscreenElement){
            document.exitFullscreen()
            fullscreen.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M344 0H488c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512H24c-13.3 0-24-10.7-24-24V344c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z"/></svg>`;
        }else{
            container.requestFullscreen();
            fullscreen.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M439 7c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H296c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39L439 7zM72 272H216c13.3 0 24 10.7 24 24V440c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39L73 505c-9.4 9.4-24.6 9.4-33.9 0L7 473c-9.4-9.4-9.4-24.6 0-33.9l87-87L55 313c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8z"/></svg>`;
        }
    }

    let volume = document.createElement("span");
    volume.classList.add("volume");
        let volIcon = document.createElement("span");
        volIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M533.6 32.5C598.5 85.3 640 165.8 640 256s-41.5 170.8-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"/></svg>`;

        let volBar = document.createElement("input");
        volBar.setAttribute("type", "range");
        volBar.setAttribute("min", "1");
        volBar.setAttribute("max", "100");
        volBar.value = 100;
        video.volume = 1;
        volBar.oninput = () => {
            volBar.classList.add("on-use");
            video.volume = 1/100 * (20*Math.log10(volBar.value)) 
        }
        volBar.onchange = () => {
            volBar.classList.remove("on-use");
            video.volume = 1/100 * (20*Math.log10(volBar.value)) ;
        }
        video.onvolumechange = () => {
            if (!volBar.classList.contains("on-use")) {
                volBar.value = video.volume * 100;
              }
        }
    volume.append(volIcon);
    volume.append(volBar);




    multimediaEdit.append(volume)
    multimediaEdit.append(fullscreen)


    controls.append(progressEdit);
    controls.append(multimediaEdit);

    container.append(video);
    container.append(bigPlay);
    container.append(controls);


    video.onclick = () => {
        bigPlay.remove();
        if(!video.paused){
            video.pause();
            playB.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>`;
        }else{
            video.play();
            playB.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>`;
        }
    }

    video.onended = () => {
        playB.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>`;
        container.append(bigPlay);
        video.currentTime = 0;
    }

    video.addEventListener("timeupdate", () => {
        //console.log(video.duration - video.currentTime)
    })

    video.onloadstart  = () => {
        bigPlay.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>`;
        bigPlay.classList.remove("loading");
        loaded = 1;
    }

    return container;
}

module.exports = videoLoad;
