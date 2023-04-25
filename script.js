let newDate = new Date();

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let months = ['January', 'Feburay', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Date Suffix
let sfx = newDate.getDate();
if (sfx == 1 || sfx == 21 || sfx== 31) {
  sfx = "st";
} else if (sfx == 2 || sfx == 22) {
  sfx = "nd";
} else if (sfx == 3 || sfx == 23) {
  sfx = "rd";
} else {
  sfx = "th";
}

// Month, Date, Year
let date = 
   days[newDate.getDay()] +
   ',' +
   ' '  + 
   months[newDate.getMonth()]  + 
   ' ' +
   newDate.getDate() +
   sfx + 
   ' ' + 
   newDate.getFullYear();

document.getElementById('todaydate').innerHTML = date;

// Clock 
function clock() {
  let newDate = new Date();
  let hours = newDate.getHours();
  let min = newDate.getMinutes();
  let sec = newDate.getSeconds();

// Hours with leading zero
  hours = ((hours % 12 || 12) < 10 ? '0': '') + (hours % 12 || 12);

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
  };

  // AM/PM
  if (hours <= 12) {
    ampm = 'PM';
  } else {
    ampm = 'AM';
  };

  let time = hours + ':' + min + ':' + sec + ' ' + ampm;
document.getElementById('todaytime').innerHTML = time;
}
setInterval(clock, 1000);
