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


// Making an HTTP request
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        console.log(data) // Will print a new random puzzle
    }else if (e.target.readyState === 4) {
        console.log('An error has taken place')
    }
})

request.open('GET', 'https://puzzle.mead.io/puzzle?wordCount=3') // first we call the method and second we call the URL
request.send()

