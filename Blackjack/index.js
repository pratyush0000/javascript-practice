let cards = []
let sum = 0
let sumstore = document.querySelector("#sumheading")
let cardstore = document.getElementById("cardsheading")
console.log(cards)

let hasBlackJack = false
let isAlive = false
let resultMessage =""
let messagetoplayervar= document.getElementById("messageontop")


function startGame(){

    isAlive = true

    let firstCard = randomCardGen()
    let secondCard =  randomCardGen()
    let cards = [firstCard, secondCard]
    let sum = firstCard + secondCard

    renderGame()
}



function renderGame(){
    if(sum <=20){
        let hasBlackJack = false
        isAlive = true
        resultMessage = "do you want to draw a new card? "
    } 
    else if(sum === 21){
        let hasBlackJack =true
        isAlive = true
        resultMessage = "you are Black, Jack "
    } 
    else{
        let hasBlackJack = false
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

    // cardstore.textContent = "Cards: " + firstCard + " + " + secondCard
}



function newCard(){
    let newCard = randomCardGen()

    sum += newCard
    cards.push(newCard)

    renderGame()
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
