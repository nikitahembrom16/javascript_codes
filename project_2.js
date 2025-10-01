// A BASIC CALCULATOR

const prompt = require("prompt-sync")()

let number1;
let number2;
let operator;


// while(true) {
//     number1 = parseFloat(prompt("Enter number 1 : "))
//     if(isNaN(number1)) {
//         console.log("Invalid input !!!")
//     }
//     else
//         break;
// }

// while(true) {
//     number2 = parseFloat(prompt("Enter number 2 : "))
//     if(isNaN(number2)) {
//         console.log("Invalid input !!!")
//     }
//     else
//         break;
// }


// USING FUNCTION
function getNum(numberString) {
    while(true) {
        number = parseFloat(prompt("Enter number " + numberString + " : "))
        if(isNaN(number)) {
        console.log("Invalid input !!!")
        }
        else
            break;
    }
    return number;
}

number1 = getNum("One")
console.log("Number 1 : ", number1)

number2 = getNum("Two")
console.log("Number 2 : ", number2)


operator = prompt("Enter the operation sign : ")

let result;
let valid = true;

switch(operator) {
    case "+" :
        result = number1 + number2
        break;

    case "-" :
        result = number1 - number2
        break;

    case "*" :
        result = number1 * number2
        break;

    case "/" :
        result = number1 / number2
        break;

    default:
        console.log("INVALID INPUT")
        valid = false;
}

if(valid)
    console.log(number1, operator, number2, " = ", result)