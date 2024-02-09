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
var interval;

function startTimer(){
    interval = setInterval(function () {
        miliseconds++;
        if (miliseconds == 10){
miliseconds = 0;
seconds++;
if (seconds == 60){
    seconds = 0;
    mins++;
    if(mins == 60){
        mins = 0;
        hours++;
    }
}
        }
        renderTimer();
    }, 100);
}

function stopTimer(){
    clearIntreval(interval);
}


function resetTimer(){
    stopTimer();
    hours =0;
    mins = 0;
    seconds = 0;
    miliseconds =0;
    renderTimer();
}