// Type Coercion - a string, a number, a boolean 

console.log('5' + 5)
console.log('5' - 5)
console.log('5' === 5) // "==="-> compare if the values are the same thing in this case is false because one is string and other a num
//console.log('5' == 5) //"==" -> compare if the values are the same but not compared if there are different things

//const value = true + 12 // in this case true is = to 1
const value = false + 12 // in this case false is = to 0
const type = typeof value
console.log(type)
console.log(value)
