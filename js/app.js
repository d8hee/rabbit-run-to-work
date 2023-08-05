//variables
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

//let currentPlayer = freddy
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

//diceButton.addEventListener("click", rollDie )
//add something to delay move until after number display

/*
class GameLogic {                                       
        startGame(){
            //document.addEventListener("click", startButton){
                //mainpage disappears, gamepage appears
                //countdown animation
                //bold span to show which player's turn?
            //}
            running = true
        } 
        rollDie(){
            //2.die generates a random number
            let rollNum = Math.floor(Math.random()*3)

            //3.die displays number

            //4.player character moves that num of steps
            freddy.style.left += ""+rollNum+"%"
            //(CSSStyleDeclaration object)

            checkWinner()
            changePlayer()
        }
        checkWinner(){
            //5.if character is 100% of width, they win
            //6.if not, other player's turn
            let winRound = false

        }
        changePlayer(){
            if(currentPlayer = freddy){
                currentPlayer = boss
            }else if(currentPlayer = boss){
                currentPlayer = freddy
            }
                //bold span to show which player's turn?

        }
        reset(){
            //eventlistener on reset button click 
        }

    }
*/