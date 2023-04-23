let newDate = new Date();

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let months = ['January', 'Feburay', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Month, Date, Year
let date = days[newDate.getDay()] + ',' + ' '  + months[newDate.getMonth()]  + ' ' + newDate.getDate() + ' ' + newDate.getFullYear();
document.getElementById('todaydate').innerHTML = date;

// Clock 
function clock() {
  let newDate = new Date();
  let hours = newDate.getHours();
  let min = newDate.getMinutes();
  let sec = newDate.getSeconds();

// Hours with leading zero
  if (hours < 12) {
    hours = '0' + hours;
  } else {
    hours;
  }

  // Minutes with leading zero
  if (min < 10) {
    min = '0' + min;
  } else {
    min;
  };

  // Seconds with leading zero
  if (sec < 10) {
    sec = '0' + sec;
  } else {
    sec;
  }

  // AM/PM
  if (hours >= 12) {
    ampm = 'PM';
  } else {
    ampm = 'AM';
  };

  let time = hours + ':' + min + ':' + sec + ' ' + ampm;
document.getElementById('todaytime').innerHTML = time;
}
setInterval(clock, 1000);
