// Set up "status" property with initial value of "playing"
// Create method for recalculating status to "playing", "finished", or "failed"
// Call that method after a guess is processed 
// Use console.log to print the status

// start the game and see Playing
// Make two incorrect guesses to see "failed"
// refresh the browser and guess C, a, and t to see "finished"
const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('') // array lowerCase letter 
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
}

Hangman.prototype.calculateStatus = function () {
    const finished = this.word.every((letter) =>{
        return this.guessedLetters.includes(letter)
    })

    if (this.remainingGuesses === 0) {
        this.status = 'failed'
    } else if (finished) {
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    
    })
    return puzzle 
}

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()

    const isUnique = !this.guessedLetters.includes(guess) // Check if we guess that letter
    if (isUnique) {
        this.guessedLetters.push(guess) // add the guessedLetters if is unique 

        if (!this.word.includes(guess)) { // check if it's in the word --> one attempt left
            this.remainingGuesses--
        }

    }

    this.calculateStatus()
}
