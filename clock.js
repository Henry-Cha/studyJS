const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector(".js-title");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();   
const sec = date.getSeconds();
    clockTitle.innerHTML = `${ hours < 9 ? `0${hours}` : hours}:${ minutes < 9 ? `0${minutes}` : minutes}:${ sec < 9 ? `0${sec}` : sec}`;
}

function init(){
    getTime();
    setInterval(getTime,1000);
}
init();