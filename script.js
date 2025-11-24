const rbtn = document.querySelector("#rock");
const pbtn = document.querySelector("#paper");
const sbtn = document.querySelector("#scissors"); 
const results = document.querySelector(".results");
const roundResult = document.querySelector("#roundResult");

const userPoint = document.createElement("p");
const decider = document.createElement("p");
const gameOver = document.createElement("p");

results.appendChild(userPoint);
results.appendChild(decider);
results.appendChild(gameOver);

rbtn.disabled = false;
pbtn.disabled = false;
sbtn.disabled = false;


let humanScore = 0;
let computerScore = 0;    

function getComputerChoice(){
    const options = ["Rock", "Paper", "Scissors"];
    compChoice = options[Math.floor(Math.random() * options.length)];
    return compChoice;
}

rbtn.addEventListener("click", (e) => {
    let choice = e.target.value;
    if(humanScore < 5 && computerScore < 5){
        playRound(choice, getComputerChoice())
    }
    else rbtn.disabled = !rbtn.disabled;
})

pbtn.addEventListener("click", (e) => {
    let choice = e.target.value;
    if(humanScore < 5 && computerScore < 5){
        playRound(choice, getComputerChoice())
    }
    else pbtn.disabled = !rbtn.disabled;
})

sbtn.addEventListener("click", (e) => {
    let choice = e.target.value;
    if(humanScore < 5 && computerScore < 5){
        playRound(choice, getComputerChoice())
    }
    else sbtn.disabled = !rbtn.disabled;
})

function playRound(humanChoice, computerChoice){
    
            if(humanChoice === computerChoice){
                roundResult.textContent = "It's a tie";
            }
            else if(humanChoice === "Rock" && computerChoice == "Paper"){
                roundResult.textContent = "You lose Paper beats Rock";
                computerScore += 1;
            }else if (humanChoice === "Paper" && computerChoice == "Scissors"){
                roundResult.textContent = "You lose Scissors beats Paper";
                computerScore += 1;
            }else if (humanChoice === "Scissors" && computerChoice == "Rock"){
                roundResult.textContent = "You lose Rock beats Scissors";
                computerScore += 1;
            }else if (humanChoice === "Paper" && computerChoice == "Rock"){
                roundResult.textContent = "You win Paper beats Rock";
                humanScore += 1;
            }else if (humanChoice === "Scissors" && computerChoice == "Paper"){
                roundResult.textContent = "You win Scissors beats Paper";
                humanScore += 1;
            }else if (humanChoice === "Rock" && computerChoice == "Scissors"){
                roundResult.textContent = "You win Rock beats Scissors";
                humanScore += 1;
            }

    function displayScores(){
        if(humanScore === 5 || computerScore === 5)
        {
            if(humanScore > computerScore){
            decider.textContent = "User wins";
            gameOver.textContent = "Game Over!"
            }else if(humanScore < computerScore){
            decider.textContent = "Computer wins!";
            gameOver.textContent = "Game Over!"
            }else{
            decider.textContent = "DRAW!!";
            }
        }
        userPoint.textContent = `User ${humanScore}`
        const text = document.createTextNode(` - ${computerScore} Computer`)
        userPoint.appendChild(text);
    }
    displayScores();
}

