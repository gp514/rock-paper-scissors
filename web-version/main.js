let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0; 
let round = 0;       

//main function to start game
function game(){
    playerScore = 0;
    computerScore = 0;
    for(let i = 0; i < 5; i++){
        playerSelection = playerInput();
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log(chooseWinner(playerScore, computerScore));
}

const playerMove = document.querySelector("#move");
playerMove.addEventListener("click", function(e){
    const moveName = e.target.id;
    console.log(playRound(moveName, computerPlay()));
})

const roundDisplay = document.querySelector("#round");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const resultDisplay = document.querySelector("#result");
const computerChoiceDisplay = document.querySelector("#computer-choice");

// randomly generate computer move
function computerPlay(){
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
        playerScore++
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
    computerChoiceDisplay.textContent = computerSelection;  
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    roundDisplay.textContent = round;
}


// Display string with end of game winner and score
function chooseWinner(playerScore, computerScore){
    if(playerScore === computerScore){
        return "Tie game! " + playerScore + "-" + computerScore;
    } else if(playerScore > computerScore){
        return "You win! " + playerScore + "-" + computerScore;
    } else {
        return "You lose! " + computerScore + "-" + playerScore;
    }
}

