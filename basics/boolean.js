// === - equalitu operator
// !== - no equal operator
// < - less than operator
// > - greater than operator
// <= - less than or equal to operator
// >= - greater than or equal to operator


//create age set to your age
let age = 6
// calculate is child - if they are 7 or under 
let isChild = age <= 7
// calculate is senior - if they are 65 or older
let isSenior = age >= 65
// print is child value
console.log(isChild)
//print is senior value
console.log(isSenior)

//COMPARASION
//If 7 or under print message about child pricing 
if (age <= 7) {
  console.log('You have 10% of discount!')
}
// if 65 or older print message about senior discount
if (age >= 65) {
  console.log('You have 30% of discount!')
}
