const container = document.querySelector(".container");
const image = document.createElement("img");

setInterval(function timeClock(){
    const date = new Date();
    container.innerHTML = date.toLocaleTimeString();
}, 1000);









