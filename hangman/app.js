/* Primitive value: string, number, boolean, null, undefined
// product --> Object.property --> null
const product = new Object({
    name : 'The War of Art'
})
Object.prototype.someNewMethod = () => 'This is the new function'

// hasOwnProperty is a method that return true or false depend if it find the property with the object that we call return true if the property doesn't exist return false 
console.log(product.someNewMethod())
console.log(product)

// Object : myObject --> Object.property --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null

const team = ['Valentin', 'Candelaria']
console.log(team.hasOwnProperty('filter'))
// Function: myFunc --> Function.prototype --> Object.prototype --> null

const getScore = () => 1
console.log(getScore)
// String: myString --> String.prototype --> Object.prototype --> null

const products = 'Computer'
console.log(products)

const otherProduct = new String('Phone')
console.log(otherProduct)
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null 

*/


const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guesses')
const game1 = new Hangman('Car parts', 2)
puzzleEl.textContent = game1.puzzle
guessEl.textContent = game1.statusMessage



window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessEl.textContent = game1.statusMessage
    
    
})



