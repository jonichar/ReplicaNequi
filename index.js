let moneyButton = document.querySelector("#moneyButton")
let closeButton = document.querySelector("#closeOverlayButton")
let overlayMenu = document.querySelector("#overlayMenu")
let hideButton = document.querySelector("#hideButton")
let visibleButton = document.querySelector("#visibleButton")
let optionList = document.querySelectorAll(".transition")
let continueButton = document.querySelector("#continueButton")
let logInContainer = document.querySelector("#logInContainer")
let loggedInContainer = document.querySelector("#loggedInContainer")
let inputNumberValue = document.querySelector(".phoneNumber")
let amountAvailable = document.querySelectorAll(".amount")
let withdrawButton = document.querySelector("#withdrawButton")
let withdrawContainer = document.querySelector("#withdrawContainer")
let textCode = document.querySelector("#code")


moneyButton.addEventListener('click', visibleOverlay)
hideButton.addEventListener('click',hideMoney)
visibleButton.addEventListener('click',hideMoney)
closeButton.addEventListener('click', hideOverlay)
continueButton.addEventListener('click', logIn)
withdrawButton.addEventListener('click', withdrawMenu)

function visibleOverlay() {
    overlayMenu.classList.remove('overlayMenuHide')
    overlayMenu.classList.add('overlayMenuVisible')

    optionList.forEach(item => {
        item.classList.remove("upAnimation")
    });
}

function hideOverlay() {
    overlayMenu.classList.remove('overlayMenuVisible')
    overlayMenu.classList.add('overlayMenuHide')

    optionList.forEach(item => {
        item.classList.add("upAnimation")
    });
}

function hideMoney() {
    moneyVisible = document.querySelectorAll(".visible")
    moneyHide = document.querySelectorAll(".hide")

   moneyVisible.forEach(item => {
    item.classList.add("hide")
    item.classList.remove("visible")
   });

   moneyHide.forEach(item => {
       item.classList.add("visible")
       item.classList.remove("hide")
   })
}

function logIn() {

    if (inputNumberValue.value != "") {
        if (localStorage.getItem(inputNumberValue.value)) {
            amountAvailable.forEach(item => {
                item.innerHTML = "$ " + localStorage.getItem(inputNumberValue.value)
            });
        }else{
            amountAvailable.forEach(item => {
                item.innerHTML = "$ 0"
            });
        }

        logInContainer.classList.remove("visibleContainer")
        logInContainer.classList.add("hideContainer")
    
        loggedInContainer.classList.remove("hideContainer")
        loggedInContainer.classList.add("visibleContainer")
    }
}

function withdrawMenu() {
    loggedInContainer.classList.remove("visibleContainer")
    loggedInContainer.classList.add("hideContainer")

    withdrawContainer.classList.remove("hideContainer")
    withdrawContainer.classList.add("visibleContainer")

    let code =  Math.floor(100000 + Math.random() * 900000)
    textCode.innerHTML = code
    let cellPhoneNumber = inputNumberValue.value
    localStorage.setItem(code, cellPhoneNumber)
}