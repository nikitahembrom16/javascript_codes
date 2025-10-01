// TIC-TAC-TOE GAME

// Hope you all know the game rules :)

const prompt = require("prompt-sync")()

function makeMove(turn, board) {
    while(true) {
        const row = parseInt(prompt("Enter the row : "))
        const col = parseInt(prompt("Enter the column : "))

        if(isNaN(row) || row < 1 || row > 3)
            console.log("Invalid Row...")

        else if(isNaN(col) || col < 1 || col > 3)
            console.log("Invalid Column...")

        else if(board[row - 1][col - 1] !== " ")
            console.log("Invalid Position...")
        else {
            board[row - 1][col - 1] = turn
            break
        }
    }
}


function printBoard(board) {
    for(let i=0; i<board.length; i++) {
        const row = board[i]

        let rowString = "";

        for(let j=0; j<row.length; j++) {
            rowString += row[j]

            if(j !== row.length - 1)
                rowString += "  |  "
        }

        console.log(rowString)
        if(i !== board.length - 1)
            console.log("-------------")
    }
}


function checkWin(borad, turn) {
    const lines = [
        [[0, 0], [0, 1], [0, 2]],   //row 1
        [[1, 0], [1, 1], [1, 2]],   // row 2
        [[2, 0], [2, 1], [2,2]],    // row 3

        [[0, 0], [1, 0], [2, 0]],   // col 1
        [[0, 1], [1, 1], [2, 1]],   // col 2
        [[0, 2], [1, 2], [2, 2]],   // col 3

        [[0, 0], [1, 1], [2, 2]],   // diagonal 1
        [[0, 2], [1, 1], [2, 0]],   // diagonal 2
    ]

    for(let line of lines){
        let win = true;
        for(let pos of line) {
            const [row, col] = pos;
            if(board[row][col] !== turn)
                win = false
                break
        }
        if(win)
            return true
        else
            return false
    }
}


// create a board where we can place Xs and Os
const board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
]

let turn = "X";
let moveCount = 0;

// printing the empty board
printBoard(board)
console.log()

while(moveCount < 9) {
    makeMove(turn, board)
    printBoard(board)
    console.log()  // print the board every time the function is called
    const win = checkWin(board, turn)
    if(win) {
        console.log(turn, " has won !!!!")
        break
    }

    // toggle every time 
    if(turn === "X")
        turn = "O";
    else
        turn = "X";

    moveCount ++
}