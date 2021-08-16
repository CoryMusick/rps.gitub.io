// Declaring Variables
const choices = ["Rock", "Paper", "Scissors"]
let buttonId = "";
let computerChoice = "";
let playerChoice = "";
let playerWin = 0;
let computerWin = 0;

// Gettting Dom Elements
const buttons = document.querySelectorAll("button");
const results = document.querySelector("#results-container");
const computerWinContainer = document.querySelector("#computer-win");
const playerWinContainer = document.querySelector("#player-win");
const computerSelectionContainer = document.querySelector("#computer-selection");
const playerSelectionContainer =  document.querySelector("#player-selection");
const changeButton = document.querySelector(".change-text");

// Adding Event Listners to Buttons
buttons.forEach((button) => {
    button.addEventListener("click", () =>{
        if(playerWin < 5 && computerWin < 5 && button.id != "reset"){
            game(playerSelection(button.id), computerSelection())  
        }
        if(button.id == "reset"){
          reset();
        }
    } )
});


// Player and Computer Selections
function playerSelection(int) {
    let playerChoice = choices[int]
    return playerChoice.toLowerCase()
}

function computerSelection() {
    let computerChoice = choices[Math.floor(Math.random() * 3)]
    return computerChoice.toLowerCase()
}

//Reset Button Functionality
function reset() {
    console.log("rest runs")
    computerWinContainer.textContent = "0"
    playerWinContainer.textContent = "0"
    playerSelectionContainer.textContent = ""
    computerSelectionContainer.textContent = ""
    results.textContent = ""
    playerWin = 0;
    computerWin = 0;
}
// Game Function
function game(playerSelection, computerSelection) {
  playerSelectionContainer.textContent = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
  computerSelectionContainer.textContent = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
    // tie
    if( playerSelection == computerSelection){
        
    }
    // rock beats scissors
    if(playerSelection == "rock" && computerSelection == "scissors"){
        
        playerWin++
    } else if(computerSelection == "rock" && playerSelection == "scissors"){
        computerWin++
    }

    // Paper beats rock
    if(playerSelection == "paper" && computerSelection == "rock"){
        playerWin++
    } else if(computerSelection == "paper" && playerSelection == "rock"){
        computerWin++
    }

    //scissors beats paper
    if(playerSelection == "scissors" && computerSelection == "paper"){
        playerWin++
    } else if(computerSelection == "scissors" && playerSelection == "paper"){
        computerWin++
    }
  
    //Update Player Win Totals
    playerWinContainer.textContent = playerWin.toString();
    computerWinContainer.textContent = computerWin.toString();

    //Check Win Max
    if(playerWin >= 5){
    results.textContent = "Win!"
    
    }else if (computerWin >= 5){
    results.textContent = "lost"
    
    }
}

