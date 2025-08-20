let name = ' Andrew Mead '

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = 'abc123asdf098'
console.log(password.includes('password'))

// Trim
console.log(name.trim())

// Challenge area

// isValidPassword
let isValidPassword = function (password) {
    return password.length > 8 && !password.includes(`password`)
//long way
/*
    if (password.length > 8 && !password.includes(`password`)){
        return true
        } else {
            return false
        } 
*/

}

// length is more than 8 - and it doesn't contain the word password

console.log(isValidPassword(`asdfp`))
console.log(isValidPassword(`asdfp123%&`))
console.log(isValidPassword(`asdfppassword`))

