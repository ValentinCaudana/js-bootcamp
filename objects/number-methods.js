let num = 103.941
// Specify decimal points
console.log(num.toFixed(2))
// Round numbers
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))
// Generate a random number
/*
let min = 0
let max = 1
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
*/


//Challenge area
//1 -5 - true if correct - false if not correct

// my answer
/*
let min= 1
let max= 5
let makeGuess = function (randomNum){
    let getnumber = Math.floor(Math.random(randomNum) * (max - min + 1)) + min
    if (getnumber !== randomNum){
        return false
    } else if (getnumber === randomNum){
        return true
    }
}
*/
// the teacher answer

let makeGuess = function (randomNum){
    let min= 1
    let max= 5
    let getnumber = Math.floor(Math.random(randomNum) * (max - min + 1)) + min
    return getnumber === randomNum
}

console.log(makeGuess(1))