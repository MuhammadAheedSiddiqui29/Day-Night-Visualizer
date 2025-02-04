const container = document.querySelector(".container");
const imageDiv = document.querySelector(".image");
const timeDiv = document.querySelector(".time");

setInterval(function timeClock(){
    const date = new Date();
    container.querySelector(".time").textContent = date.toLocaleTimeString();
}, 1000);

function backgroundColor() {
    const hour = new Date().getHours();
    
    imageDiv.innerHTML = "";

    const image = document.createElement("img");

    if(0 <= hour && hour <= 6){
        document.body.style.backgroundColor = "black";
        image.src = "/images/moon.png"; 
    } 
    else if(6 < hour && hour <= 18){
        document.body.style.backgroundColor = "yellow";
        image.src = "/images/sun.png";
    } 
    else{
        document.body.style.backgroundColor = "black";
        image.src = "/images/moon.png";
    }
    
    imageDiv.appendChild(image);
}
backgroundColor();