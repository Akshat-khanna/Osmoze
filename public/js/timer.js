var target_date = new Date(2021, 4, 15);
var curr_date = new Date();
var curr = curr_date.getTime();
var target = target_date.getTime();
var x = target-curr;


function dhm(ms){
    days = String(Math.floor(ms / (24*60*60*1000))).padStart(2, '0');
    daysms=ms % (24*60*60*1000);
    hours = String(Math.floor((daysms)/(60*60*1000))).padStart(2, '0');
    hoursms=ms % (60*60*1000);
    minutes = String(Math.floor((hoursms)/(60*1000))).padStart(2, '0');
    minutesms=ms % (60*1000);
    sec = String(Math.floor((minutesms)/(1000))).padStart(2, '0');
    document.getElementById("days-t").innerHTML = days;
    //console.log(sec, ms);
    document.getElementById("hours-t").innerHTML = hours;
    document.getElementById("minutes-t").innerHTML = minutes;
    document.getElementById("seconds-t").innerHTML = sec;
}

setInterval(function (){
    x = x - 1000;
    
    dhm(x);
}, 1000)