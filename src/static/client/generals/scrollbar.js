

function setScrollbar(element, scrID="", thb=""){

    let scrollbar = document.getElementById("scrollbar"+scrID);
    let thumb = document.getElementById("scrollbarSec"+thb);
    function refreshScrollbar(){
        let pointer = (element.clientHeight / element.scrollHeight * element.clientHeight) * 5;
        let max = element.scrollHeight - element.offsetHeight + pointer; 
        let diff = scrollbar.clientHeight / max; 
        let top = element.scrollTop * diff;


        if(top <= 0) top = 0;
        if(top >= max * diff) top = max * diff;
        if(scrollbar.clientHeight == pointer * diff) scrollbar.setAttribute("style", `display:none;`);
        else thumb.setAttribute("style", `height: ${pointer * diff}px;margin-top: ${top}px;`);
    }


    window.onresize = refreshScrollbar
    document.addEventListener("DOMContentLoaded", () => {
        element.scrollTop = 0;
        refreshScrollbar();
        element.classList.add("smooth");
    })
    element.addEventListener("scroll", () => {refreshScrollbar()})
    let holding = 0;
    document.addEventListener("mousemove", evt => {
        if(holding != 1) return;
        if(evt.buttons != 1) return;
        let y = evt.clientY;
        if(y <= 0) y = 0;
        let pointer = (element.clientHeight / element.scrollHeight * element.clientHeight) * 5
        let max = element.scrollHeight - element.offsetHeight + pointer;
        let wDiff = max / window.innerHeight;
        element.scrollTop = y * wDiff - pointer/2;
        refreshScrollbar()        
    })

    thumb.addEventListener("mousedown", evt => {
        holding = 1;
        element.classList.add("noselect")
        element.classList.remove("smooth")
    })
    thumb.addEventListener("mouseup", evt => {
        holding = 0;
        element.classList.remove("noselect")
        element.classList.add("smooth")
    })
    scrollbar.addEventListener("wheel", (evt) => {
        element.scrollTop += evt.deltaY * 5;
        refreshScrollbar()
    }, true)
}
    
module.exports = setScrollbar;