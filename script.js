function getComputerChoice(){
    const options = ["Rock", "Paper", "Scissors"];
    compChoice = options[Math.floor(Math.random() * options.length)];
    console.log("Computer chose " + compChoice);
    return compChoice;
}
// console.log(getComputerChoice());

function getHumanChoice(){
    let choice = prompt("Rock, Paper, Scissors");
    console.log("You chose " + choice);
    return choice;
}
// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if(humanChoice === computerChoice){
        console.log("It's a tie!!");
    }
    else if(humanChoice === "Rock" && computerChoice == "Paper"){
        console.log("You lose Paper beats Rock");
        computerScore += 1;
    }else if (humanChoice === "Paper" && computerChoice == "Scissors"){
        console.log("You lose Scissors beats Paper");
        computerScore += 1;
    }else if (humanChoice === "Scissors" && computerChoice == "Rock"){
        console.log("You lose Rock beats Scissors")
        computerScore += 1;
    }else if (humanChoice === "Paper" && computerChoice == "Rock"){
        console.log("You win Paper beats Rock");
        humanScore += 1;
    }else if (humanChoice === "Scissors" && computerChoice == "Paper"){
        console.log("You win Scissors beats Paper");
        humanScore += 1;
    }else if (humanChoice === "Rock" && computerChoice == "Scissors"){
        console.log("You win Rock beats Scissors");
        humanScore += 1;
    }
}
playRound();

function playGame(){
    
}