//Create Title
const gameTitle = document.createElement('h1')
gameTitle.setAttribute('style','font-size: 30px; font-weight: bold; display: flex; justify-content: center; align-items: center; word-spacing: 50px')
gameTitle.textContent = 'Rock Paper Scissors ... Shoot!'

document.body.appendChild(gameTitle)



// Create Score Keeping
const spanScore = document.createElement("span")
spanScore.setAttribute('style','font-size: 40px; font-weight: bold; display: flex; justify-content: center; align-items: center; gap: 50px')

const hScore = document.createElement("p")
const cScore = document.createElement("p")

hScore.value = 0
cScore.value = 0

hScore.textContent = hScore.value
cScore.textContent = cScore.value

spanScore.appendChild(hScore)
spanScore.appendChild(cScore)

const spanPlayer = document.createElement('span')
spanPlayer.setAttribute('style','display: flex; justify-content: center; align-items: center; gap: 50px; text-decoration: underline')

const hName = document.createElement("p")
const cName = document.createElement("p")

hName.textContent = 'Human'
cName.textContent = 'Computer'

spanPlayer.appendChild(hName)
spanPlayer.appendChild(cName)


const playerChoice = document.createElement('span')
playerChoice.setAttribute('style','display: flex; justify-content: center; align-items: center; gap: 50px;')

const hChoice = document.createElement("p")
const cChoice = document.createElement("p")
const equiv = document.createElement("p")

playerChoice.appendChild(hChoice)
playerChoice.appendChild(equiv)
playerChoice.appendChild(cChoice)

document.body.appendChild(spanScore)
document.body.appendChild(spanPlayer)
document.body.appendChild(playerChoice)


// Computer Choice Function
function getComputerChoice(){
    let num = Math.random()
    if (num <= .33) {
        // console.log(num)
        return "Rock";
    } else if (num >.33 && num <= .66){
        // console.log(num)
        return "Paper"
    } else {
        // console.log(num)
        return "Scissors"
    }   
    
} 

// Human Choice Function
// function getHumanChoice(){
//     let input = 0
//     // console.log(input)
//     if (input == "rock" || input == "paper" || input == "scissors"){
//         return input
//     } else {
//         alert("Not a valid answer! Try again.")
//         getHumanChoice()
//     }
// }

// Round Logic Function
function playRound(humanChoice,cpuChoice){
    if (humanChoice == "paper" && cpuChoice == "rock"){
        equiv.textContent = ">"
        message.textContent = "You win! Paper beats Rock."
        hScore.value++
        hScore.textContent = hScore.value
    } 
    else if (humanChoice == "rock" && cpuChoice == "scissors"){
        equiv.textContent = ">"
        message.textContent = "You win! Rock beats Scissors."
        hScore.value++
        hScore.textContent = hScore.value
    } 
    else if (humanChoice == "scissors" && cpuChoice == "paper"){
        equiv.textContent = ">"
        message.textContent = "You win! Scissors beats Paper."
        hScore.value++
        hScore.textContent = hScore.value
    } 
    else if (humanChoice == "rock" && cpuChoice == "paper"){
        equiv.textContent = "<"
        message.textContent = "You lose! Paper beats Rock."
        cScore.value++
        cScore.textContent = cScore.value
    } 
    else if (humanChoice == "scissors" && cpuChoice == "rock"){
        equiv.textContent = "<"
        message.textContent = "You lose! Rock beats Scissors."
        cScore.value++
        cScore.textContent = cScore.value
    } 
    else if (humanChoice == "paper" && cpuChoice == "scissors"){
        equiv.textContent = "<"
        message.textContent = "You lose! Scissors beats Paper."
        cScore.value++
        cScore.textContent = cScore.value
    } else {
        equiv.textContent = "="
        message.textContent = "It's a draw. Keep going!"
    }
}

// Play Game Function
// function playGame(){
//     for (let index = 0; index < 5; index++) {
//     alert("Game " + index + " of 5!")
//     let cpuChoice = getComputerChoice();
//     let humanChoice = getHumanChoice();
//     playRound(humanChoice, cpuChoice);
//     if (index < 4){
//         return "Let's keep playing!"
//     }
//     }

//     if (humanScore > cpuScore){
//         return "You win!"
//     } else {
//         return "You lose!"
//     }

// }


// Create inline play buttons
const spanPlay = document.createElement("span")
spanPlay.setAttribute('style','display: flex; justify-content: center; align-items: center; gap: 50px; margin-top: 30px')

const startGame = document.createElement("button")
startGame.textContent = 'Play a Game!'

spanPlay.appendChild(startGame);
document.body.appendChild(spanPlay);

//Create Message Span
const message = document.createElement("span")
message.setAttribute('style', 'display: flex; justify-content: center; align-items: center; margin-top: 30px')
message.textContent = 'First to 5 points is the winner!'
document.body.appendChild(message)

//Play Game
startGame.addEventListener('click',function() {
    
    hScore.textContent = hScore.value
    cScore.textContent = cScore.value

    hChoice.textContent = ''
    cChoice.textContent = ''
    equiv.textContent = ''

    const rock = document.createElement("button")
    rock.textContent = "Rock"
    rock.className = "play"
    
    const paper = document.createElement("button")
    paper.textContent = "Paper"
    paper.className = "play"
    
    const scissors = document.createElement("button")
    scissors.textContent = "Scissors"
    scissors.className = "play"

    message.textContent = "Let's see it! Shoot!"
    
    spanPlay.appendChild(rock)
    spanPlay.appendChild(paper)
    spanPlay.appendChild(scissors)
    
    startGame.remove()

    var play = document.querySelectorAll(".play")

        for (var i = 0; i < play.length; i++){
        play[i].addEventListener('click', function(e){
            
            
            if (hScore.value <= 4 && cScore.value <= 4) {
                let humanChoice = e.target.textContent
                let cpuChoice = getComputerChoice()
                hChoice.textContent = humanChoice
                cChoice.textContent = cpuChoice
                playRound(humanChoice.toLowerCase(),cpuChoice.toLowerCase())
                if (hScore.value == 5) {
                    message.textContent = "Congrat's, you win!"
                    
                    rock.remove()
                    paper.remove()
                    scissors.remove()

                    hScore.value = 0
                    cScore.value = 0
                    
                    startGame.textContent = "Play Again!"
                    spanPlay.appendChild(startGame)
                }
                else if (cScore.value == 5) {
                    message.textContent = "Darn, you lost!"
                    
                    rock.remove()
                    paper.remove()
                    scissors.remove()

                    hScore.value = 0
                    cScore.value = 0

                    startGame.textContent = "Play Again!"
                    spanPlay.appendChild(startGame)
                }
            }

            
            
        })
    }
                
    
    

})




