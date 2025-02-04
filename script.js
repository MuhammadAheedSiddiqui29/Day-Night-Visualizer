const container = document.querySelector(".container");
const image = document.createElement("img");

setInterval(function timeClock(){
    const date = new Date();
    container.innerHTML = date.toLocaleTimeString();
}, 1000);

function backgroundColor() {
    const hour = new Date().getHours();
    
    if(0 <= hour && hour <= 6){
        document.body.style.backgroundColor = "black";
        
    } 
    else if(6 < hour && hour <= 18){
        document.body.style.backgroundColor = "green";
    } 
    else{
        document.body.style.backgroundColor = "black";
    }
    
}
backgroundColor();









