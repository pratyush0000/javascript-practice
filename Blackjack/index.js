let cards = []
let sum = 0
let messagetoplayervar= document.getElementById("messageontop")
let sumstore = document.querySelector("#sumheading")
let cardstore = document.getElementById("cardsheading")

let hasBlackJack = false
let isAlive = false
let resultMessage =""


function startGame(){

    isAlive = true

    let firstCard = randomCardGen()
    let secondCard =  randomCardGen()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}



function renderGame(){
    if(sum <=20){
        // let hasBlackJack = false
        // isAlive = true
        resultMessage = "do you want to draw a new card? "
    } 
    else if(sum === 21){
        let hasBlackJack =true
        isAlive = false
        resultMessage = "you are Black, Jack "
    } 
    else{
        // hasBlackJack = false
        isAlive = false
        resultMessage = "LOSER "
    }
    messagetoplayervar.textContent=resultMessage
    sumstore.textContent = "Sum: " + sum
    // cardstore.textContent = "Cards: " + cards

    cardstore.textContent = "Cards: "

    for(let i=0;i<cards.length;i++){
        cardstore.textContent += cards[i] + " "
    }
    console.log(cards)
    // cardstore.textContent = "Cards: " + firstCard + " + " + secondCard
}



function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let newCard = randomCardGen()

        sum += newCard
        cards.push(newCard)

        renderGame()
    }
}

function randomCardGen(){
    let randomNumber = Math.floor(Math.random()*13)+1
    if (randomNumber === 1){
        return 11
    }
    // else if (randomNumber === 11 || 12 || 13){
    else if (randomNumber > 10){
        return 10
    }
    else{
        return randomNumber
    }
}


let playerName = "Pratyush"
let playerChips = 145

let player = document.getElementById("player")
player.textContent= playerName + ": $" + playerChips