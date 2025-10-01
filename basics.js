// console.log("Hello world")

//  Taking user inputs
const prompt = require("prompt-sync")()
const name = prompt("What is yur name? ")

console.log("Hello", name, " How are you?!!")

const play = prompt("Do you want to play? ")
const condition = play.toLowerCase() === "yes"   // it checks whether the input is yes or not ....

console.log(condition)   // if "yes" then it will return true otherwise false

if(condition) {
    console.log("Okay... we will play")
}
else
    console.log("Better next time")