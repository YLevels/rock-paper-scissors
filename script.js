console.log("Hello World");

//randomly returns either 'rock', 'paper', or 'scissors'
function getComputerChoice () {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerChoice = "";

  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

//plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase();
}

console.log("Hello World");
console.log(getComputerChoice());