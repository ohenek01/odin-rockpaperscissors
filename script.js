function getComputerChoice(){
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length)];
}
console.log(getComputerChoice());

function getHumanChoice(){
    let choice = prompt("Rock, Paper, Scissors");
    return "You chose " + choice;
}
console.log(getHumanChoice());