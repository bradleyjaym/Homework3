let firstInput = prompt("Enter First Integer Number:").trim();
let secondInput = prompt("Enter Second Integer Number:").trim();

let firstNum = Number(firstInput)
let secondNum = Number(secondInput)

if (firstInput == "" || secondInput == "") {
  console.log("You missed an input. Both are required!")
} else if (isNaN(firstNum) || isNaN(secondNum)) {
  console.log("Please enter an integer. One of the inputs was not a number!")
}
else {
  let add = firstNum + secondNum
  let sub = firstNum - secondNum
  let multi = firstNum * secondNum
  let div = firstNum / secondNum
  let modu = firstNum % secondNum

  console.log("The following mathematical operations for the numbers entered:")
  console.log(`Addition: ${add}`)
  console.log(`Subtraction: ${sub}`)
  console.log(`Multiplication: ${multi}`)
  console.log(`Division: ${div}`)
  console.log(`Modulo: ${modu}`)
}
