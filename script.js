let newDate = new Date();

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let months = ['January', 'Feburay', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let date = days[newDate.getDay()] + ',' + ' '  + months[newDate.getMonth()]  + ' ' + newDate.getDate() + ' ' + newDate.getFullYear();
document.getElementById('todaydate').innerHTML = date;


function clock() {
  let newDate = new Date();
  let hours = newDate.getHours();
  let min = newDate.getMinutes();
  let sec = newDate.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";
  min = min < 10 ? '0' + min : min;
  sec = sec < 10 ? '0' + sec : sec;
  hours = ((hours % 12 || 12) < 10 ? '0' : '') + (hours % 12 || 12);
  let time = hours + ':' + min + ':' + sec + ' ' + ampm;
document.getElementById('todaytime').innerHTML = time;
}
setInterval(clock, 1000);
