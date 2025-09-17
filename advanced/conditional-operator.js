//const myAge = 2
//const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote.'

/* Long way
if (myAge >= 18){
    message = 'You can vote!'
} else {
    message = 'You cannot vote.'
}*/

//console.log(message)

const myAge = 27
const showPage = () =>{
    return 'Showing the page'
}
const showErrorPage = () => {
    return 'Showing the error page'
}

const message = myAge >= 21 ? showPage() : showErrorPage()
console.log(message)

const team = ['Tyler', 'Porter', 'Andrew', 'Peter', 'Jon']
const teamSize = team.length <= 4 ? `Team size: ${team.length}.` : 'Too many people on your team'
console.log(teamSize)
// team.length <= 4 ? console.log( `Team size: ${team.length}.`) : console.log('Too many people on your team')
// console.log(team.length <= 4 ? `Team size: ${team.length}.` : 'Too many people on your team')
