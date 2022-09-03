//displays
const displayCurrentMoney = document.querySelector('#displayCurrentMoney')
const displayEarningLevel = document.querySelector('#displayEarningLevel')
const displayEarning = document.querySelector('#displayEarning')

//buttons
const closeInfoPopup = document.querySelector('#closeInfoPopup')
const openInfoPopup = document.querySelector('#openInfoPopup')
const infoPopup = document.querySelector('.info-wrapper')

const closeShopPopup = document.querySelector('#closeShopPopup')
const openShop = document.querySelector('#openShop')
const shopPopup = document.querySelector('.shop-wrapper')

const upgradeBtn = document.querySelectorAll('.upgrade-btn')
const upgradeBtnSpan = document.querySelectorAll('.upgrade-btn-span')

const addMoney = document.querySelector('#addMoney')


//variables
let gameLevel = 1
let currentMoney = 0
let earning = 1

const upgradeLevelArr = [1,1,1,1]
const costsArr = [20]
const UPGRADE_COST_RISE = 1.2


//intervals
setInterval(renderGame ,10)
setInterval(moneyEarning ,1000)

function renderGame(){
    displayEarning.textContent = earning
    displayEarningLevel.textContent = gameLevel
    displayCurrentMoney.textContent = currentMoney
}
function moneyEarning(){
    currentMoney = currentMoney + earning
}



//click functions
openInfoPopup.addEventListener('click', ()=>{
    infoPopup.style.display = "flex"
    setTimeout(()=>{
        infoPopup.style.scale = "1"
    }, 100)
})
closeInfoPopup.addEventListener('click', ()=>{
    setTimeout(()=>{
        infoPopup.style.display = "none"
    }, 100)
    infoPopup.style.scale = "0"
})

openShop.addEventListener('click', ()=>{
    shopPopup.style.display = "flex"
    setTimeout(()=>{
        shopPopup.style.scale = "1"
    }, 100)
})
closeShopPopup.addEventListener('click', ()=>{
    setTimeout(()=>{
        shopPopup.style.display = "none"
    }, 100)
    shopPopup.style.scale = "0"
})

addMoney.addEventListener('click', ()=>{
    currentMoney = currentMoney + earning
})

for(let i = 0; i < upgradeBtn.length; i++){
    upgradeBtn[i].addEventListener('click', ()=>{
        if(upgradeLevelArr[i] == 20){
            upgradeBtn[i].disabled = true
            upgradeBtnSpan[i].textContent = "Max"
        }
        else if(currentMoney >= costsArr[i]){
            earning = earning + 1
            currentMoney = currentMoney - costsArr[i]
            costsArr[i] = Math.floor(costsArr[i] * UPGRADE_COST_RISE)
            upgradeBtnSpan[i].textContent = costsArr[i] + "$"
            upgradeLevelArr[i]++
        }
    })
}