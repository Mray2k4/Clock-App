let newDate = new Date();

let date = newDate.getMonth() +1  + ' - ' + newDate.getDate() + ' - ' + newDate.getFullYear();
document.getElementById('todaydate').innerHTML = date;

let time = newDate.getHours() + ':' + newDate.getMinutes() + ':' + newDate.getSeconds();
document.getElementById('todaytime').innerHTML = time;
/*
let count = 0;
let clock = document.getElementById('todaytime');
function tick(clock) {
    console.log(count++)
    
}
setInterval(tick, 1000,); */
