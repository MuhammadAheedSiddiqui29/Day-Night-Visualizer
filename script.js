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

    //Mid Night 
    if(3 <= hour && hour <= 6){
        document.body.style.backgroundColor = "#28282B";
        image.src = "/images/cloudy-night.png"; 
    }

    //Morning
    else if(6 < hour && hour <= 9){
        document.body.style.backgroundColor = "#FFFAA0";
        container.style.backgroundColor = "black";
        container.style.color = "white";
        image.src = "/images/rising-sun.png";
    } 

    //Day
    else if(9 < hour && hour <= 18){
        document.body.style.backgroundColor = "yellow";
        container.style.backgroundColor = "black";
        container.style.color = "white";
        image.src = "/images/sun copy.png";
    } 

    //Evening
    else if(18 < hour && hour <= 19){
        document.body.style.backgroundColor = "#41416b";
        container.style.backgroundColor = "black";
        container.style.color = "white";
        image.src = "/images/day-and-night.png";
    } 
    
    //Night
    else{
        document.body.style.backgroundColor = "black";
        image.src = "/images/cloudy-night.png";
    }
    
    imageDiv.appendChild(image);
}
backgroundColor();