function getComputerChoice(){
    let num = Math.random()
    if (num <= .33) {
        // console.log(num)
        return "rock";
    } else if (num >.33 && num <= .66){
        // console.log(num)
        return "paper"
    } else {
        // console.log(num)
        return "scissors"
    }   
    
} 

function getHumanChoice(){
    let input = prompt("Rock, Paper, or Scissors?").toLowerCase()
    // console.log(input)
    if (input == "rock" || input == "paper" || input == "scissors"){
        return input
    } else {
        alert("Not a valid answer! Try again.")
        getHumanChoice()
    }
}

let humanScore = 0;
let cpuScore = 0;

function playRound(humanChoice,cpuChoice){
    if (humanChoice == "paper" && cpuChoice == "rock"){
        console.log("You win! Paper beats Rock.")
        humanScore++
        console.log("Your Score: " + humanScore)
        console.log("Computer Score: " + cpuScore)
    } else if (humanChoice == "rock" && cpuChoice == "scissors"){
        console.log("You win! Rock beats Scissors.")
        humanScore++
        console.log("Your Score: " + humanScore)
        console.log("Computer Score: " + cpuScore)
    } else if (humanChoice == "scissors" && cpuChoice == "paper"){
        console.log("You win! Scissors beats Paper.")
        humanScore++
        console.log("Your Score: " + humanScore)
        console.log("Computer Score: " + cpuScore)
    } else if (humanChoice == "rock" && cpuChoice == "paper"){
        console.log("You lose! Paper beats Rock.")
        cpuScore++
        console.log("Your Score: " + humanScore)
        console.log("Computer Score: " + cpuScore)
    } else if (humanChoice == "scissors" && cpuChoice == "rock"){
        console.log("You lose! Rock beats Scissors.")
        cpuScore++
        console.log("Your Score: " + humanScore)
        console.log("Computer Score: " + cpuScore)
    } else {
        console.log("You lose! Scissors beats Paper.")
        cpuScore++
        console.log("Your Score: " + humanScore)
        console.log("Computer Score: " + cpuScore)
    }
}


// playRound(humanChoice,cpuChoice);

function playGame(){
    for (let index = 0; index < 5; index++) {
    alert("Game " + index + " of 5!")
    let cpuChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    playRound(humanChoice, cpuChoice);
    if (index < 4){
        alert("Let's play again!")
    }
    }

    if (humanScore > cpuScore){
        alert("You win!")
    } else {
        alert ("You lose!")
    }

}