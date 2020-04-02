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

const rock = document.querySelector("#rock");
rock.addEventListener("click", function(){
    console.log(playRound("Rock", computerPlay()));
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", function(){
    console.log(playRound("Paper", computerPlay()));
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", function(){
    console.log(playRound("Scissors", computerPlay()));
});

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
            return "Rock";
        case 2:
            return "Paper";
        default:
            return "Scissors";
    }
}

// compare player and computer selections to determine winner
function playRound(playerSelection, computerSelection){
    round++;
    if(playerSelection === computerSelection){
        resultDisplay.textContent = "Draw";
    } else if(playerSelection === "Rock" && computerSelection === "Scissors") {
        playerScore++;
        resultDisplay.textContent = "Win";
    } else if(playerSelection === "Rock" && computerSelection === "Paper") {
        computerScore++;
        resultDisplay.textContent = "Lose";
    } else if(playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore++
        resultDisplay.textContent = "Win";
    } else if(playerSelection === "Paper" && computerSelection === "Scissors") {
        computerScore++;
        resultDisplay.textContent = "Lose";
    } else if(playerSelection === "Scissors" && computerSelection === "Paper") {
        playerScore++;
        resultDisplay.textContent = "Win";
    } else if(playerSelection === "Scissors" && computerSelection === "Rock") {
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

