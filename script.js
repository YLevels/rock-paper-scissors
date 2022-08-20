//takes in player's name and changes "Player" display on webpage
const playerName = document.querySelector('.playerInput');
const para = document.querySelector('.player');

playerName.addEventListener('change', () => {
    const name = "\n" + document.querySelector(".playerInput").value + "\n";
    para.textContent = `${name}`;
});

function getPlayerName() {
    document.getElementById("inputPlayerName").reset();
}

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

//declares playerSelection with buttons (eventually this should be inherited in single round to update results)
// function changePlayerSelection (choice) {
//     const playerChoice = document.querySelector(".choice");
//     playerChoice.textContent = choice;
// }

//identifies playerMove
const playerType = document.querySelector('.playerType');
const playerChoice = document.querySelector(".choice");

playerType.addEventListener('change', () => {
    const playerMove = document.querySelector(".playerType").value.toLowerCase();
    playerChoice.textContent = `${playerMove}`;
});

function getPlayerMove () {
    const playerMove = document.querySelector(".playerType").value;
    document.getElementById("inputPlayerMove").reset();
    return playerMove;
}

//plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {

//player selects button and their move
//playerMove = changePlayerSelection(playerChoice);

//computer selects move
//compare player and computer moves

// switch (result) {

// }
result = "Rock beats scissors. You win!";
result = "Paper beats rock. You win!";
result = "Scissors beat paper. You win";
//returns a string that declares the winner of the round
return result;
}

getPlayerMove();
