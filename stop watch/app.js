var hours = 0;
var  mins = 0;
var seconds = 0;
var miliseconds = 0;


var hoursDisplay = document.getElementById("hoursDisplay");
var minsDisplay = document.getElementById("minsDisplay");
var secondDisplay = document.getElementById("secondDisplay");
var milisecondDisplay = document.getElementById("miliseondDisplay");


function renderTimer(){
    hoursDisplay.innerHTML = hours;
    minsDisplay.innerHTML = mins;
    secondDisplay.innerHTML = seconds;
    milisecondDisplay.innerHTML = miliseconds;
    
}