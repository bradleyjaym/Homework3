// Validate Input
let response = prompt("Enter a number between 1-100:");

if (response.trim() == ""){
  console.log(`Sorry, that is not a valid entry`)
} else if (response >= 0 && response <=100) {
  console.log(`Thank you! ${response} was a valid entry`)
} else {
  console.log(`Sorry, that is not a valid entry`)
}

