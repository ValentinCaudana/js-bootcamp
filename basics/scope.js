// Lexical Scope (Static Scope)
// Global Scope - Defined outside of all code blocks
// Local Scope - Define insede a code block

// In a scope you can acces variables defined in thar scope, or in a ny parent/ancestor scope

// Global Scope (varOne)
  // Local Scope (varTwo)
    //Local Sope (varFour)
  //Local Scope (varThree)

let varOne = 'varOne'

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)

    if (true) {
        let varFoour = 'varFour'
    }
}

if (true) {
    let varThree = 'varThree'
}

console.log(varTwo)