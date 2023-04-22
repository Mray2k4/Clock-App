let newDate = new Date();

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let months = ['January', 'Feburay', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let date = days[newDate.getDay()] + ',' + ' '  + months[newDate.getMonth()]  + ' ' + newDate.getDate() + ' ' + newDate.getFullYear();
document.getElementById('todaydate').innerHTML = date;


function clock() {
  let newDate = new Date();
  let time = newDate.getHours() + ':' + newDate.getMinutes() + ':' + newDate.getSeconds();
document.getElementById('todaytime').innerHTML = time;
}
setInterval(clock, 1000);
