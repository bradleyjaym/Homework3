let password;
let attempts = 0;
let maxAttempts = 3

while (attempts < maxAttempts) {
  password = prompt("Enter Your Password:");

  if (password == "secret") {
    console.log(`You entered the correct password after ${attempts} attempt(s)`);
    break;
  } else {
    attempts++;
    console.log(`Incorrect password. You have ${maxAttempts - attempts} left.`)
  }
}
  if (attempts == maxAttempts){
    console.log("Your account has been locked for maximum attempts.")
  }
