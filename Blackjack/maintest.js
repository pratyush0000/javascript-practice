let cards = [];
let sum = 0;
let messagetoplayervar = document.getElementById("messageontop");
let sumstore = document.querySelector("#sumheading");
let cardstore = document.getElementById("cardsheading");
let dealersCardsStore = document.getElementById("dealerscardsheading");
let dealersSumStore = document.getElementById("dealerssumheading");
let winner = document.getElementById("resultheading");

let hasBlackJack = false;
let isAlive = false;
let resultMessage = "";
let resetButton = document.getElementById("resetButton");
let newCardButton = document.getElementById("newCardButton");
let foldButton = document.getElementById("foldButton");

// dealer
let dealercards = [];
let dealersum = 0;

function startGame() {
    isAlive = true;
    document.getElementById("startButton").disabled = true;
    resetButton.disabled = false;
    newCardButton.disabled = false;
    foldButton.disabled = false;

    let firstCard = randomCardGen();
    let secondCard = randomCardGen();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    let dealerFirstCard = randomCardGen();
    let dealerSecondCard = randomCardGen();
    dealercards = [dealerFirstCard, dealerSecondCard];
    dealersum = dealerFirstCard + dealerSecondCard;

    renderGame();
}

function resetGame() {
    cards = [];
    sum = 0;

    hasBlackJack = false;
    isAlive = false;
    resultMessage = "";

    resetButton.disabled = true;
    document.getElementById("startButton").disabled = false;
    newCardButton.disabled = true;
    foldButton.disabled = true;

    cardstore.textContent = "Cards: ";
    messagetoplayervar.textContent = "Want to play a round?";
    sumstore.textContent = "Sum: ";

    // for dealer
    dealersCardsStore.textContent = "Dealer's Cards: ";
    dealersSumStore.textContent = "Dealer's Sum: ";
    winner.textContent = "Winner: ";
}

function fold() {
    resetButton.disabled = false;
    document.getElementById("startButton").disabled = true;
    newCardButton.disabled = true;
    foldButton.disabled = true;

    showResult();
}

function renderGame() {
    if (sum <= 20) {
        isAlive = true;
        resultMessage = "Do you want to draw a new card? ";
    } else if (sum === 21) {
        hasBlackJack = true;
        isAlive = false;
        resultMessage = "You have Blackjack!";
        newCardButton.disabled = true;
        foldButton.disabled = true;
        showResult();
    } else {
        isAlive = false;
        resultMessage = "You lost!";
        newCardButton.disabled = true;
        foldButton.disabled = true;
        showResult();
    }
    messagetoplayervar.textContent = resultMessage;
    sumstore.textContent = "Sum: " + sum;
    cardstore.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
        cardstore.textContent += cards[i] + " ";
    }

    dealersCardsStore.textContent = "Dealer's Cards: " + dealercards[0] + " ";
    for (let i = 0; i < dealercards.length - 1; i++) {
        dealersCardsStore.textContent += "*" + " ";
    }
    dealersSumStore.textContent = "Dealer's Sum: TBD";
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let newCard = randomCardGen();
        sum += newCard;
        cards.push(newCard);

        renderGame();
    }
}

function randomCardGen() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1) {
        return 11;
    } else if (randomNumber > 10) {
        return 10;
    } else {
        return randomNumber;
    }
}

function dealerNewCard() {
    while (dealersum <= 16) {
        let dealerNewCard = randomCardGen();
        dealersum += dealerNewCard;
        dealercards.push(dealerNewCard);
    }

    renderGame();
}

function showResult() {
    dealersCardsStore.textContent = "Dealer's Cards: ";
    if (!isAlive) {
        for (let i = 1; i < dealercards.length; i++) {
            dealersCardsStore.textContent += dealercards[i] + " ";
        }
        dealersSumStore.textContent = "Dealer's Sum: " + dealersum;
    } else {
        for (let i = 1; i < dealercards.length; i++) {
            dealersCardsStore.textContent += "*" + " ";
        }
        dealersSumStore.textContent = "Dealer's Sum: TBD";
    }

    if ((dealersum > sum && dealersum <= 21) || (sum > 21 && dealersum <= 21)) {
        winner.textContent = "Winner: Dealer";
    } else if ((sum > dealersum && sum <= 21) || (dealersum > 21 && sum <= 21)) {
        winner.textContent = "Winner: You";
    } else if ((sum > 21 && dealersum > 21) || dealersum === sum) {
        winner.textContent = "Draw";
    } else {
        winner.textContent = "New condition";
    }
}