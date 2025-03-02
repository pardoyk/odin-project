const choices = ["rock", "paper", "scissors"];
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
let humanScore = document.getElementById("humanScore");
let computerScore = document.getElementById("computerScore");
let result = document.getElementById("result")
let humanScoreNum = 0;
let computerScoreNum = 0;

humanScore.innerText = `Your Score: ${humanScoreNum}`;
computerScore.innerText = `Computer Score: ${computerScoreNum}`;


rockButton.addEventListener("click", () => playGame("rock"));
paperButton.addEventListener("click", () => playGame("paper"));
scissorsButton.addEventListener("click", () => playGame("scissors"));

function getComputerChoice(){
    return choices[Math.floor(Math.random() * 3)];
}

function playGame(userChoice){
    let computerChoice = getComputerChoice();
    
    if(userChoice === computerChoice){
        result.innerText = `It's a tie! Both of has chossen: ${userChoice}`;
    }
    else if (userChoice === "rock" && computerChoice === "scissors" || 
             userChoice === "scissors" && computerChoice === "paper" ||
             userChoice === "paper" && computerChoice === "rock") {
                result.innerText = `You have won this round! You have choosen ${userChoice} and the computer ${computerChoice}`;
                humanScoreNum++;
                humanScore.innerText = `Your Score: ${humanScoreNum}`;
             } else {
                result.innerText = `You lose this round! You have choosen ${userChoice} and the computer ${computerChoice}`;
                computerScoreNum++;
                computerScore.innerText = `Computer Score: ${computerScoreNum}`;
             }
}

function checkWinner(){
    if (humanScoreNum === 3){
        result.innerText = "CONGRATULAIONS! Your are the over all winner!";
    }
}