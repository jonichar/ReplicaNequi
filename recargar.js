let optionSelect = document.querySelector("#typeBank")
let valueMoney = document.querySelector("#value")
let cellphoneNumber = document.querySelector("#cellphone")
let banks = [" ", "BANCO BOGOTA", "BANCO FALLABELA","BANCO RAPPIPAY", "BANCO DAVIVIENDA"]
let continueButton = document.querySelector(".continueButton")
let mainContainer = document.querySelector("#mainContainer")
let messageContainer = document.querySelector("#messageContainer")
let total = 0;

let rechargeData = {
    "amount" : 0,
    "cellphone": 0
}

continueButton.addEventListener('click', rechargeMoney)
listOptionsBanks();


function listOptionsBanks() {
    banks.forEach(item => {
        let optionBankList = document.createElement("option")
        let text = document.createTextNode(item)
        optionBankList.appendChild(text)
        optionSelect.appendChild(optionBankList)
    });
}

function rechargeMoney() {
    if (valueMoney.value != "" && cellphoneNumber != "") {
        
        rechargeData = {
            "amount" : valueMoney.value,
            "cellphone": cellphoneNumber.value
        }

        saveLocalStorage();

        valueMoney.value = ""
        cellphoneNumber.value = ""

        mainContainer.classList.remove("visible")
        mainContainer.classList.add("hide")

        messageContainer.classList.remove("hide")
        messageContainer.classList.add("visible")
    }
    
}

function saveLocalStorage() {

    if (localStorage.getItem(cellphoneNumber.value)) {
        total = parseInt(localStorage.getItem(cellphoneNumber.value)) + parseInt(valueMoney.value)
    }else{
        total = valueMoney.value
    }

    localStorage.setItem(cellphoneNumber.value, total)
}
