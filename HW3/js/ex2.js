// Class Standing
let userName = prompt("Enter Your Name:");
let response2 = prompt("Enter number of completed units:");
let units = Number(response2)

if (response2.trim() == "" || isNaN(units) || units < 0 || !Number.isInteger(units)) {
  console.log(`Hello ${userName}, You entered an incorrect value, try again`);
} else {
switch (true) {
  case (response2 >= 0 && response2 <= 30):
    gradeStanding = "Freshmen"
    break;
  case (response2 >= 31 && response2 <= 60):
    gradeStanding = "Sophomore"
    break;
  case (response2 >= 61 && response2 <= 90):
    gradeStanding = "Junior"
    break;
  default:
    gradeStanding = "Senior"
}
  console.log(`Hello, ${userName}`);
  console.log(`Your grade standing is ${gradeStanding}`)
}