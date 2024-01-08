let cards = []
let sum = 0
let messagetoplayervar= document.getElementById("messageontop")
let sumstore = document.querySelector("#sumheading")
let cardstore = document.getElementById("cardsheading")
let dealersCardsStore = document.getElementById("dealerscardsheading")
let dealersSumStore = document.getElementById("dealerssumheading")
let winner = document.getElementById("resultheading")


let hasBlackJack = false
let isAlive = false
let resultMessage =""
resetButton.disabled = true;
newCardButton.disabled=true;
foldButton.disabled=true;


// dealer
let dealercards = []
let dealersum = 0


// function disable(x){
//     x.disabled = true
//     startGame()
// }

function startGame(){

    isAlive = true

    startButton.disabled = true;
    resetButton.disabled = false;
    newCardButton.disabled=false;
    foldButton.disabled=false;


    let firstCard = randomCardGen()
    let secondCard =  randomCardGen()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    let dealerFirstCard = randomCardGen()
    let dealerSecondCard =  randomCardGen()
    dealercards = [dealerFirstCard, dealerSecondCard]
    dealersum = dealerFirstCard + dealerSecondCard

    dealerNewCard()
    
    renderGame()
}

function resetGame(){

    cards = []
    sum = 0

    hasBlackJack = false
    isAlive = false
    resultMessage =""

    resetButton.disabled = true;
    startButton.disabled = false;
    newCardButton.disabled=true;
    foldButton.disabled=true;

    cardstore.textContent = "Cards: "
    messagetoplayervar.textContent = "Want to play a round?"
    sumstore.textContent = "Sum: "

    // for dealer
    dealersCardsStore.textContent = "Dealer's Cards: "
    dealersSumStore.textContent = "Dealer's Sum: "
    winner.textContent = "Winner: "
}

function fold(){
    resetButton.disabled = false;
    startButton.disabled = true;
    newCardButton.disabled=true;
    foldButton.disabled=true;

    showResult()
}



function renderGame(){
    if(sum <=20){
        showdeal2();
        // let hasBlackJack = false
        // isAlive = true
        resultMessage = "do you want to draw a new card? "
    } 
    else if(sum === 21){
        showdeal();
        hasBlackJack =true;
        isAlive = false;
        resultMessage = "you are Black, Jack ";
        newCardButton.disabled=true;
        foldButton.disabled=true;

        showResult()
    } 
    else{
        // hasBlackJack = false
        showdeal();
        isAlive = false
        resultMessage = "LOSER "
        newCardButton.disabled=true;
        foldButton.disabled=true;


        showResult()
    }
    messagetoplayervar.textContent=resultMessage
    sumstore.textContent = "Sum: " + sum
    // cardstore.textContent = "Cards: " + cards

    cardstore.textContent = "Cards: "

    for(let i=0;i<cards.length;i++){
        cardstore.textContent += cards[i] + " "
    }


    // for dealer
    // dealersCardsStore.textContent = "Dealer's Cards: "
    // for(let i=0;i<dealercards.length;i++){
    //     dealersCardsStore.textContent += dealercards[i] + " "
    // }
    // dealersSumStore.textContent = "Dealer's Sum: " + dealersum

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
        return 10
    }
    // else if (randomNumber === 11 || 12 || 13){
    else if (randomNumber > 10){
        return 10
    }
    else{
        return randomNumber
    }
}





// let playerobj = {
//     nameofplayer: "Pratyush",
//     chipsonhand: 145
// }

// // let playerName = "Pratyush"
// // let playerChips = 145

// let player = document.getElementById("player")
// player.textContent = playerobj.nameofplayer + ": $" + playerobj.chipsonhand
// // player.textContent= playerName + ": $" + playerChips


function dealerNewCard(){
    while(dealersum<=16){
        let dealerNewCard = randomCardGen()

        dealersum += dealerNewCard
        dealercards.push(dealerNewCard)
    }
}

function showdeal()
{
    let realcard=dealercards;
    let realsum=dealersum;
    dealersCardsStore.textContent = "Dealer's Cards: "
    for(let i=0;i<realcard.length;i++){
        dealersCardsStore.textContent += realcard[i] + " "
    }
    dealersSumStore.textContent = "Dealer's Sum: " + realsum

}

function showdeal2()
{
    let realcard=dealercards;
    let realsum=dealersum;
    dealersCardsStore.textContent = "Dealer's Cards: "
    dealersCardsStore.textContent += realcard[0] + " "
    for(let i=0;i<realcard.length-1;i++){
        dealersCardsStore.textContent += "*" + " "
    }
    dealersSumStore.textContent = "Dealer's Sum: TBD" 

}

function showResult(){

    // for dealer
   
    showdeal()

    if((dealersum>sum&&dealersum<=21)||(sum>21&&dealersum<=21)){
        winner.textContent = "Winner: Dealer"
    }
    else if((sum>dealersum&&sum<=21)||(dealersum>21&&sum<=21)){
        winner.textContent = "Winner: You"
    }
    else if((sum>21&&dealersum>21)||dealersum===sum){
        winner.textContent = "Draw"
    }
    else{
        winner.textContent = "new condition"
    }

}