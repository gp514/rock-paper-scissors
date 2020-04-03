let playerSelection;
let computerSelection;
let playerScore;
let computerScore;
let round;


const roundDisplay = document.querySelector("#round");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const resultDisplay = document.querySelector("#result");
const computerChoiceDisplay = document.querySelector("#computer-choice");
const playerMove = document.querySelector("#move");
const playerHand = document.querySelector("#player-choice");
const resetButton = document.querySelector("#reset");

init();
//start game
function init(){
    resetButton.addEventListener("click", function(){
        reset();
    })
    reset();
}

function reset(){
    playerScore = 0;
    computerScore = 0;
    round = 0;

    updateScoreboard();
    resultDisplay.textContent = "";

    if(playerHand.firstChild) playerHand.removeChild(playerHand.firstChild);
    if(computerChoiceDisplay.firstChild) computerChoiceDisplay.removeChild(computerChoiceDisplay.firstChild);

    playerMove.addEventListener("click", moveClick);
}

// identifies move clicked by user and plays a round with selection
function moveClick(e){
    const moveName = e.target.id;
    if(e.target.id === "move") return; // break out and do nothing if not clicking hand signal
    if(playerHand.firstChild) playerHand.removeChild(playerHand.firstChild); //clear existing move from battleground
   
    //display new move in battleground
    const newPlayerHand = document.createElement("i");
    newPlayerHand.classList.add("far", "fa-hand-" + moveName);
    playerHand.appendChild(newPlayerHand);

    //play round with chosen player move
    playRound(moveName, computerPlay());
    if(playerScore === 5 || computerScore === 5){
        roundEnd();
    }
}

// removes move event listeners after round of 5 is complete
function roundEnd(){
    playerMove.removeEventListener("click", moveClick);
}

// randomly generate computer move, display in move box
function computerPlay(){
    if(computerChoiceDisplay.firstChild) computerChoiceDisplay.removeChild(computerChoiceDisplay.firstChild); //remove previous move from battleground
    
    let computerMove = randomMove();

    const computerIcon = document.createElement("i");
    computerIcon.classList.add("far", "fa-hand-" + computerMove);
    computerChoiceDisplay.appendChild(computerIcon);

    return computerMove;
}

// compare player and computer selections to determine winner
function playRound(playerSelection, computerSelection){
    round++;
    if(playerSelection === computerSelection){
        resultDisplay.textContent = "Draw";
    } else if(playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        resultDisplay.textContent = "Win";
    } else if(playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        resultDisplay.textContent = "Lose";
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        resultDisplay.textContent = "Win";
    } else if(playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        resultDisplay.textContent = "Lose";
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        resultDisplay.textContent = "Win";
    } else if(playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        resultDisplay.textContent = "Lose";
    } 
    updateScoreboard();
}

function updateScoreboard(){
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    roundDisplay.textContent = round;
}

// choose random move between rock paper and scissors
function randomMove(){
    let choice = Math.floor(Math.random()*3);
    switch(choice){
        case 1:
            return "rock";
        case 2:
            return "paper";
        default:
            return "scissors";
    }
}