const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]
// DOM - Document Object Model

// Query and remove
// const p = document.querySelector(`p´) // we creat the const and we call the value that we need
// p.remove() // p is the value that we call and .remove is for delete 

// Query all and remove
const ps = document.querySelectorAll('p')

ps.forEach(function (p){
    p.textContent = '¤¤¤¤¤¤' // we change for the value that we write
    // console.log(p.textContent) // we write in the console
    // p.remove() // we delete all the values that we call "p"
})

//Add new element
const newParagraph = document.createElement('p') // we create the new value
newParagraph.textContent = 'This is a new element from JS'// we write the value that we want 
document.querySelector('body').appendChild(newParagraph) // we add in the body, 1. we call the place that we want to add - 2. we call the value