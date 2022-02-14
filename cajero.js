let continueButton = document.querySelector("#continueButton")
let bottomContainer = document.querySelector(".bottomContainer")
let dataValidate = document.querySelector(".dataValidate")
let userPhoneNumber = document.querySelector(".dataPhoneNumber")
let userCode = document.querySelector(".dataCode")
let ticketContainer = document.querySelector(".ticketContainer")
let printTicketsContaier = document.querySelector(".printTicketsContainer")
let projectContainer = document.querySelector("#projectContainer")

let tewnty = document.querySelector(".value20k")
let fifty = document.querySelector(".value50k")
let oneHundred = document.querySelector(".value100k")
let twoHundred = document.querySelector(".value200k")
let threeHundred = document.querySelector(".value300k")
let fourHundred = document.querySelector(".value400k")
let sixHundred = document.querySelector(".value600k")

let ticketsArray = [];
let tickets = []

continueButton.addEventListener("click", validate)

function validate() {
    let phoneNumber = userPhoneNumber.value
    let code = userCode.value

    if (localStorage.getItem(code)) {
       if (localStorage.getItem(code) === phoneNumber) {

        dataValidate.classList.remove("visibleContainer")
        dataValidate.classList.add("hideContainer")
    
        bottomContainer.classList.remove("hideContainer")
        bottomContainer.classList.add("visibleContainer")
       }
    }
}   

function convertToTickets(amount) {
    let amountLeft = amount;

    const rand1 = Math.random() < 0.25;
    const rand2 = Math.random() < 0.75;
    const rand3 = Math.random() < 0.75;

    if (amountLeft >= 50000 && rand2) {
    ticketsArray.push(50);
    amountLeft = amountLeft - 50000;
    } else if (amountLeft >= 20000 && rand3) {
    ticketsArray.push(20);
    amountLeft = amountLeft - 20000;
    } else {
    ticketsArray.push(10);
    amountLeft = amountLeft - 10000;
    }

    if (amountLeft > 0) {
    convertToTickets(amountLeft);
    }

    return ticketsArray;
}

function retirar(cantidad) {
    if (localStorage.getItem(userPhoneNumber.value) >= cantidad){
        totalAmount = localStorage.getItem(userPhoneNumber.value) - cantidad
        localStorage.setItem(userPhoneNumber.value, totalAmount)
        tickets = convertToTickets(cantidad)
        imprimirBilletes(tickets)

        ticketContainer.classList.remove("visibleContainer")
        ticketContainer.classList.add("hideContainer")
    
        printTicketsContaier.classList.remove("hideContainer")
        printTicketsContaier.classList.add("visibleContainer")

        projectContainer.classList.add("upAlaing")
    }else{
        console.log("fondos insuficientes")
    }
}

function imprimirBilletes(tickets) {
    tickets.forEach(ticket => {
        var img = document.createElement('img')
        
        if (ticket === 10) {
            img.src = "ticket10.jpg"
        }else if (ticket === 20) {
            img.src = "ticket20.jpg"
        }else if (ticket === 50) {
            img.src = "ticket100.jpg"
        }

        printTicketsContaier.appendChild(img)

    });
}


tewnty.addEventListener("click", () => {retirar(20000)})
fifty.addEventListener("click", () => {retirar(50000)})
oneHundred.addEventListener("click", () => {retirar(100000)})
twoHundred.addEventListener("click", () => {retirar(200000)})
threeHundred.addEventListener("click", () => {retirar(300000)})
fourHundred.addEventListener("click", () => {retirar(400000)})
sixHundred.addEventListener("click", () => {retirar(600000)})



