//  CONTACT MANAGEMENT SYSTEM

const prompt = require("prompt-sync")()

function printInfo() {
    console.log("_________________________")
    console.log("Contact Management System")
    console.log("_________________________")
    console.log("1. Add contact")
    console.log("2. Delete contact")
    console.log("3. Show contacts")
    console.log("4. Search contact")
    console.log("5. Exit")
}
printInfo()



function addContact(){
    const name = prompt("Enter the name: ")
    const email = prompt("Enter the email: ")
    const contact = {
        name: name,
        email: email
    }

    contacts.push(contact)
    console.log("Added!!!")
}



function deleteContact(){
    console.log("Contact IDs: ")
    console.log("________________________")
    for(let i=0; i < contacts.length; i++) {
        const contact = contacts[i]
        console.log((i+1).toString() + " : " + contact.name)
    }

    const number = parseInt(prompt("Enter the ID number you want to delete : "))
    if(isNaN(number) || number > contacts.length) {
        console.log("Invalid ID.....Please enter a valid ID")
        return
    }

    contacts.splice(number-1, 1)
    console.log("Removed.")
}



function listContacts(contacts){
    // console.log(contacts)
    
    for(let contact of contacts){
        console.log("______________________________________________________________")
        console.log("Name: ", contact.name)
        console.log("Email: ", contact.email)
    }
}



function searchContact(){
    const searchString = prompt("Search : ").toLowerCase()
    const result = [];

    for(let contact of contacts){
        if(contact.name.toLowerCase().includes(searchString))
            result.push(contact)
        else
            console.log("-------xxxxxx------NAME NOT EXIST-----xxxxxx--------")
    }

    listContacts(result)
}


// main 
let contacts = []
let keepGoing = true

while(keepGoing) {
    console.log()
    const number = prompt("Enter the operation (1 to 5) : ")
    console.log()
    switch(number) {
        case "1":
            addContact()
            break;
        
        case "2":
            deleteContact()
            break;
        
        case "3":
            listContacts(contacts)
            break;

        case "4":
            searchContact()
            break;

        case "5":
            keepGoing = false
            break;

        default:
            console.log("Default value")
            break;
    }
}





//  -------------------SOME ARRAY FUNDAMENTALS-----------------------------------------------------------------------------
// let arr = [11, 22, 33, 44, 55]

// arr[0] = 9   // [ 9, 2, 3, 4, 5 ]
// console.log(arr.length)  
// 5

// arr.push(6)    
// [ 11, 22, 33, 44, 55, 6 ]

// arr.pop(5)   
// [ 11, 22, 33, 44 ]

// arr.splice(3, 2)    
// 3 is the index number and 2 indicates the number of elements to be removed from the array 
// o/p : [ 11, 22, 33 ]

// console.log(arr)
// --------------------------------------------------------------------------------------------------------------------------