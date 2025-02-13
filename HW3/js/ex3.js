// Following Day

let userInput = prompt("Enter a day of the week in it's 3 letter abbreviation in lowercase:").toLowerCase();
switch (true) {
  case (userInput == "mon"):
    followingDay = "tue"
    break;
  case (userInput == "tue"):
    followingDay = "wed"
    break;
  case (userInput == "wed"):
    followingDay = "thu"
    break;
  case (userInput == "thu"):
    followingDay = "fri"
    break;
  case (userInput == "fri"):
    followingDay = "sat"
    break;
  case (userInput == "sat"):
    followingDay = "sun"
    break;
  case (userInput == "sat"):
    followingDay = "mon"
    break;
  default:
    console.log("Invalid Input. Please attempt again");
}
  console.log(`You entered: ${userInput}`);
  console.log(`The following day is: ${followingDay}`)