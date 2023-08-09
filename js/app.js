//variables
let mainPage = document.getElementById("mainPage")
let rabbitRunGame = document.getElementById("rabbitRunGame")
let fredsCommute = document.getElementById("fredsCommute")
let bossCommute = document.getElementById("bossCommute")
let freddy = document.getElementById("freddy")
let boss = document.getElementById("boss")
let startButton = document.getElementById("startButton")
let diceButton = document.getElementById("diceButton")
let endPage = document.getElementById("endPage")
let restartBtn = document.getElementById("restart")

class Player {
    constructor(name, character) {
        this.name = name,
            this.character = character, //the respective div elements
            this.distance = 0,
            this.steps = null,
            this.bankAccount = 0
    }
    move(x) {
        this.distance += x
        console.log(`moving! new distance is ${this.distance}`)
        this.character.style.left = this.distance + "%"
    }
}

const fredRabbit = new Player("Fred", freddy)
const bossRabbit = new Player("Monsieur Bossman", boss)

//Start with fred
let currentPlayer = fredRabbit
//game is not won yet
let winRound = false
//variable for random number for dice
let diceRoll = 0

startGame = () => {
    console.log("starting game")
    mainPage.hidden = "true"

    diceButton.style.display = "block"
    diceButton.addEventListener("click", () => {
        diceRoll = rollDie()
        fredRabbit.move(diceRoll)
        checkWin()
        changePlayer() //fred to boss
        compRoll = compPlay()
        bossRabbit.move(compRoll)
        checkWin()
        changePlayer() //end with fred again
    })
}

compPlay = () => {
    //roll die animation
    //display diceRoll as text popup
    console.log("computer is playing")
    return Math.floor(Math.random() * 9 + 1)
}

changePlayer = () => {
    if (winRound === false && currentPlayer === fredRabbit) {
        currentPlayer = bossRabbit
        console.log(currentPlayer) //"computer turn"
        //add bossRabbit animation
    } else if (winRound === false && currentPlayer === bossRabbit) {
        currentPlayer = fredRabbit
        diceButton.style.display = "block"
        console.log(currentPlayer)
        //add fredRabbit animation
    }
}

checkWin = () => {
    if (currentPlayer.distance >= 90) {
        console.log("game ends")
        endPage.style.display = "block"
        //add image and restart button
        winRound = true
        console.log("game is dun")
        restart()
    } else {
        winRound = false
        console.log("game is still goin")
    }
}

rollDie = () => {
    diceButton.style.display = "none"
    console.log("rolling dice")
    return Math.floor(Math.random() * 9 + 1)
}

/*
resetGame = () => {
    mainPage.hidden = "false"

}

restart = () => {
    //eventlistener on reset button click 
    restartBtn.addEventListener("click", resetGame)

}
*/

startButton.addEventListener("click", startGame)

/*   
game logic
starting page with animation and instructions
player presses start
start page disappears
game page appears.
roll the die animation "press roll die" (player name on top?)
rolling die animation
display number on animation
player moves x steps
game checks if anyone won
game continues w comp turn
computer turn
display that it's comp turn
    computer presses roll die
    number generated
    boss moves x steps
    checkwin
    noone wins msg
    change player
computer roll's die animation (comp name on top)
display number on animation
computer moves x steps
game checks if anyone won
game continues w player turn

for game win check, if player/comp .style.left = 80%
announce winner/loser
end game
----complete except animations ----
restart button

*/