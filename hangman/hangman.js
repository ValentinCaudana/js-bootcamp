class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('') // array lowerCase letter 
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    calculateStatus() {
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
    getStatusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}"`
        } else {
            return `Great work! You guessed the word`
        }
    }
    getPuzzle() {
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
    makeGuess(guess) {
        guess = guess.toLowerCase()

        const isUnique = !this.guessedLetters.includes(guess) // Check if we guess that letter
            if (this.status !== 'playing'){
                return
            }
            if (isUnique) {
                this.guessedLetters.push(guess) // add the guessedLetters if is unique 
            if (!this.word.includes(guess)) { // check if it's in the word --> one attempt left
                this.remainingGuesses--
            }

        }

        this.calculateStatus()
    }

}

