let randomNumb = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#guessSubmit')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHigh')
const startOver = document.querySelector('.resultPass')

const p = document.createElement('p')

let prevGuess = []
let numOfGuess = 1

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function(event){
        event.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if(isNaN(guess)){
        alert("Please enter a Valid Number!")
    } else if (guess < 1) {
        alert("Please enter a number greater than 1")
    } else if (guess > 100) {
        alert("Please enter a number less than 100")
    } else {
        prevGuess.push(guess);
        if (numOfGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over! Random Number was ${randomNumb}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}


function checkGuess(guess) {
    if (guess === randomNumb) {
        displayMessage(`Congratulation's! You Won the Game!`)
        endGame()
    } else if (guess < randomNumb) {
        displayMessage(`You'r Number is TOOO Low!`)
    } else if (guess > randomNumb) {
        displayMessage(`You'r Number is TOOO High!`)
    }
}


function displayGuess(guess) {
    userInput.value = ""
    guessSlot.innerHTML += `${guess}, ` 
    numOfGuess++;
    remaining.innerHTML = `${11 - numOfGuess}`
}



function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}


function endGame() {
    userInput.value = "";
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game </h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}


function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(event) {
        randomNumb = parseInt(Math.random() * 100 + 1) 
        prevGuess = []
        numOfGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numOfGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}