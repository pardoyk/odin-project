const choices = ["rock", "paper", "scissors"];
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resetButton = document.getElementById("reset-btn");
let humanScore = document.getElementById("humanScore");
let computerScore = document.getElementById("computerScore");
let result = document.getElementById("result")
let humanScoreNum = 0;
let computerScoreNum = 0;

humanScore.innerHTML = `<span class="bold">Your Score: ${humanScoreNum}</span>`;
computerScore.innerHTML = `<span class="bold">Computer Score: ${computerScoreNum}</span>`;


rockButton.addEventListener("click", () => playGame("rock"));
paperButton.addEventListener("click", () => playGame("paper"));
scissorsButton.addEventListener("click", () => playGame("scissors"));
resetButton.addEventListener("click", () => reset());

function getComputerChoice(){
    return choices[Math.floor(Math.random() * 3)];
}

function playGame(userChoice){
    let computerChoice = getComputerChoice();
    
    if(userChoice === computerChoice){
        result.innerText = `It's a tie! Both of has chossen: ${userChoice}.`;
    }
    else if (userChoice === "rock" && computerChoice === "scissors" || 
             userChoice === "scissors" && computerChoice === "paper" ||
             userChoice === "paper" && computerChoice === "rock") {
                result.innerText = `You have won this round! You have choosen ${userChoice} and the computer ${computerChoice}.`;
                humanScoreNum++;
                humanScore.innerHTML = `<span class="bold">Your Score: ${humanScoreNum}</span>`;
             } else {
                result.innerText = `You lose this round! You have choosen ${userChoice} and the computer ${computerChoice}.`;
                computerScoreNum++;
                computerScore.innerHTML = `<span class="bold">Computer Score: ${computerScoreNum}</span>`;
             }
    checkWinner();
}

function checkWinner(){
    if (humanScoreNum === 3){
        result.innerText = "CONGRATULATIONS!! Your are the overall WINNER!";
    } else if (computerScoreNum === 3){
        result.innerText = "You have LOST, maybe next time!";
    }
}

function reset(){
    humanScoreNum = 0;
    computerScoreNum = 0;
    result.innerText = "";
    humanScore.innerHTML = `<span class="bold">Your Score: ${humanScoreNum}</span>`;
    computerScore.innerHTML = `<span class="bold">Computer Score: ${computerScoreNum}</span>`;
}