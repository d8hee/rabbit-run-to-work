//variables
let rabbitRunGame = document.getElementById("rabbitRunGame")
let fredsCommute = document.getElementById("fredsCommute")
let bossCommute = document.getElementById("bossCommute")
let freddy = document.getElementById("freddy")
let boss = document.getElementById("boss")
let startButton = document.getElementById("startButton")
let diceButton = document.getElementById("diceButton")
//const winCondition = [
    //fred position at 80%
    //boss position at 80%
//]

let currentPlayer = freddy
//check if game is currently running
let running = false

class Player {
    constructor(name){
        this.name = name,
        this.distance = 0,
        this.steps = null,
        this.bankAccount = 0
        }
        //this.exObject = {}
        //this.exArray = []
        run(){
            freddy.style.transform = "translate(20%, 20%)"
        }

    }

const fredRabbit = new Player("Fred")
const bossRabbit = new Player("Monsieur Bossman")

let players = [fredRabbit, bossRabbit]

//console.dir(freddy)


let winRound = false
computerPlays=()=>{
    if(currentPlayer === boss){
        rollDie()
        moveSteps()
        checkWinner()
    }
}

/*
class GameLogic {                                       
        startGame(){
            //startButton.addEventListener("click", ){
                running = true
            }
            //diceButton.addEventListener("click", rollDie )
        //add something to delay move until after number display
        } 
        rollDie(){
            //add animation
            //die generates a random number
            let rollNum = Math.floor(Math.random()*3)

            //die displays number
            moveSteps()
            checkWinner()
            changePlayer()
        }
        moveSteps(){
            //player character moves that num of steps
            currentPlayer.style.left += ""+rollNum+"%"
        }
        checkWinner(){
            if(currentPlayer.style.left === "90%"){
                rabbitRunGame.innerText = "you win!"
                //make this a delayed animation w win msg
            }else{
                let winRound = false
                changePlayer()
            }
        }
        changePlayer(){
            if(winRound === false && currentPlayer === freddy){
                currentPlayer = boss
                computerPlays()
            }else if(winRound === false && currentPlayer === boss){
                currentPlayer = freddy
            }
        //bold span to show which player's turn?
        }
        //computerPlays(){
           
//        }
        reset(){
            //eventlistener on reset button click 
        }
    }

*/
/* game logic
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
restart button

*/