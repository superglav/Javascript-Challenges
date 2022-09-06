let player = {
    Name : "Nik",
    Chips: 150
}
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let betOn = false
let betc ={ 
    bet10 : 10,
    bet20 : 20,
    bet50 : 50

}
let message = ""
let messageEl = document.getElementById("message-el")
let totalBet = document.getElementById("chipCount").textContent
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let chipbeted = document.getElementById("chipCount")

let playerEl = document.getElementById("playerEl")
playerEl.textContent = player.Name +":" +" " + player.Chips + "$"


console.log(cards)
function getRandomCard () {
    
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

    


let randomCard = getRandomCard()


function startGame (){
    if (betOn === true){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    $('.class').css('visibility', 'hidden');
    }
    else if (betOn === false){
        document.getElementById("messagewl").textContent =
         "First, select how many chips you want to BET"
        sum= ""
        
    }
    renderGame()

}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for ( let i=0; i<cards.length ; i++){
        cardsEl.textContent += cards[i]  + " "
    }

    sumEl.textContent = "Sum: " + sum
if ( sum <= 20) {
    message = "Do you want to draw a new card? "  
}
else if ( sum === 21){
    message = "You've got Blackjack!"
    hasBlackjack = true 
    player.textContent = player.Chips + chipbeted
}
else {
    
    message = "You're out of the game!"
    document.getElementById("messagewl").textContent = "You LOSE this round"
    player.Chips =player.Chips - chipbeted.textContent
    isAlive = false
    player.Chips = Number(player.Chips) - Number(chipbeted.textContent)
    playerEl.textContent = player.Name +":" +" " + player.Chips + "$"

    console.log(player.Chips)
}

messageEl.textContent = message
sumEl.textContent = "Sum: " + sum 

}

function cardNew(){

    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
    
}  

function bet10 () {
    chipbeted.textContent = Number(chipbeted.textContent)+ betc.bet10
    betOn = true
    $('.class').css('visibility', 'hidden');
    
}

function bet20 () {
    chipbeted.textContent = Number(chipbeted.textContent)+ betc.bet20
    betOn = true
    $('.class').css('visibility', 'hidden');


 
}
function bet50 (){
    chipbeted.textContent = Number(chipbeted.textContent)+ betc.bet50 
    betOn = true
    $('.class').css('visibility', 'hidden');
    


}


