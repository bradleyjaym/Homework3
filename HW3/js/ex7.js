let hourInput = prompt("Please enter a value for hour:");
let minInput = prompt("Please enter a value for minute:");
let secInput = prompt("Please enter a value for seconds:");

let hour = Number(hourInput);
let minute = Number(minInput);
let second = Number(secInput);

console.log(`Time input:${hour}h${minute}m${second}`);
let addSec = second + 1;

if (addSec == 60) {
  addSec = 0;
  minute = minute + 1;
} if (minute == 60) {
  minute = 0;
  hour = hour + 1;
} if (hour == 24) {
  hour = 0;
  minute = 0;
  addSec = 0;
}

console.log(`One Second Later:${hour}h${minute}m${addSec}s`)