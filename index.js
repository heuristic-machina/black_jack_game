// initialize
let cards = []
let sum = 0
let hasBlackJack = false
// isAlive should be false as default since player is not playing game yet
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name:"Kylie",
    chips: 1500,
    sayHello: function() {
        console.log('Hi ' + player.name + '!')
    }
}

player.sayHello()

let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ': $' + player.chips

console.log(cards)

// change cards from hard coded to dynamic
// Make this function return a random number between 1 and 13
function getRandomCard() {
// add ace and face cards logic 
// if 1     -> return 11
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
        // if 11-13 -> return 10
    } else if (randomNumber === 1 ) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    // Generate two random numbers
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    // Re-assign the cards and sum variables so that the game can start
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    // Create a for loop that renders out all the cards instead of just two
    for (let i=0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        // Push the card to the cards array
        cards.push(card)
        console.log(cards)
        renderGame()
    }
}

