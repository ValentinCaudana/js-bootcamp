const getTip = (amount) => {
    if (typeof amount === 'number') { // "typeof" is used to check the type of a value
        return amount * .25
    } else {
        throw Error('Argument must be a number') // we get this if the value in getTip() is not a number "getTip(string)" 
    }
}

try {
 const result = getTip(10)
 console.log(result) // This will print if the code is correct "getTip(number)"
} catch (e) {
 console.log('Error!') // This will print if there are an error in the code "getTip(string)"
}
