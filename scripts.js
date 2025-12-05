const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let = humanScoreNumber = 0
let = machineScoreNumber = 0

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const playHuman = (humanChoice) => {

    playGame(humanChoice, playComputer())

}

const playComputer = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)


    return choices[randomNumber]

}

const playGame = (human, computer) => {

    console.log('User: ' + human + "Machine: " + computer)

    if (human === computer) {
        result.innerHTML = "Draw!"
    } else if (
        (human === GAME_OPTIONS.PAPER && computer === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.ROCK && computer === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.SCISSORS && computer === GAME_OPTIONS.PAPER)
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "You win!"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "You lose!"
    }

}

