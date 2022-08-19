//takes in player's name
const player = document.querySelector('.playerInput');
const para = document.querySelector('p');

player.addEventListener('change', () => {
    const name = document.querySelector(".playerInput").value;
    para.textContent = `${name}`;
});

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

//declares playerSelection
function changePlayerSelection (choice) {
    const playerChoice = document.querySelector(".choice");
    playerChoice.textContent = choice
}

//plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {

  console.log(playerSelection);
  
}

console.log(getComputerChoice());