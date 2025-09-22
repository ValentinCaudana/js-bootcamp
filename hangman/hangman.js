// Create a method for making a guess
// 1. Should accept a character for guessing 
// 2. Should add unique guesses to list of guesses
// 3. Should decrement the guesses left if a unique guess isn't a match 

const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('') // array lowerCase letter 
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = ['c', 'e']
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

const game1 = new Hangman ('Cat', 2)
// Guess c, t, z
console.log(game1.getPuzzle()) // c*t
// print remaining guesses (should be 1)
const game2 = new Hangman('New York', 2)
// guess w
console.log(game2.getPuzzle()) // **w ****

