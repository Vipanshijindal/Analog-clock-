const secondhand = document.querySelector("#second-hand");
const minutehand = document.querySelector("#minute-hand");
const hourhand = document.querySelector("#hour-hand");
 
function clocktick(){
    const date = new Date();
    const seconds =date.getSeconds()/60;
    const minutes =(seconds+ date.getMinutes())/60;
    const hours =(minutes +date.getHours())/12;

    rotateclockhand(secondhand,seconds);
    rotateclockhand(minutehand,minutes);
    rotateclockhand(hourhand,hours);
}
function rotateclockhand(element , rotation){
    element.style.setProperty('--rotate',rotation*360);
}
setInterval(clocktick, 1000);