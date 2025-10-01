const prompt = require("prompt-sync") ()

const name = prompt("What is your name? ")
console.log("Hello", name, "...Hope you are doing well!")

const play = prompt("Dou want to play a game? ")

if(play.toLowerCase() == "yes") {
    console.log("Okay... Lets play!!")

    console.log("YOU HAVE ENTERED A ---FORTUNE-MAZE---")
    const leftOrRight = prompt("Do you want to go left or right? ")
    if(leftOrRight.toLowerCase() == "left") {
        console.log("You go left and see a BRIDGE..")

        const bridge = prompt("Do you want to cross the bridge? ")
        if(bridge.toLowerCase() == "yes") {
            console.log("OOPS...The bridge was broken and You fell off the bridge..")
            console.log("-----GAME OVER-----")
        }
        else
            console.log("Great choice")
            console.log("----YOU WIN----")
    }
    else
        console.log("HARD LUCK!!! You fell into a pit")
        console.log("------GAME OVER------")
}
else
    console.log("OKAY :( ")


