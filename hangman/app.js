// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done
const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guesses')
const game1 = new Hangman('Car parts', 2)
puzzleEl.textContent = game1.puzzle
guessEl.textContent = game1.statusMessage

window.addEventListener('keypress',  (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessEl.textContent = game1.statusMessage
    
})


getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}, (err) => {
    console.log(`Error:${err}`)
})



getCountry('MX').then((country) => {
    console.log(country.name.common)
}, (err) => {
    console.log(`Error:${err}`)
})

