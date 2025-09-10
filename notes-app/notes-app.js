
let notes = getSavedNotes()
/* DOM - Document Object Model

// Query and remove
// const p = document.querySelector(`p´) // we create the const and we call the value that we need
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
*/

const filters = {
    searchText: ''
}
/* localStorage
//localStorage.setItem('location', 'copenhagen')//setItem is a method to save data, with 2 arguments (1. key - 2. value) FOR CREATE
//console.log(localStorage.getItem('location'))//getItem method to save data out of local storage  ,just 1 argument(key) FOR READE
//localStorage.removeItem('location')//removeItem method to delete data of local storage, take 1 argument 
//localStorage.clear() // clear method delete all the data stored in local storage, no take arguments 
*/
/* to show a object
const user = {
    name: 'Valentin',
    age: 26
}

const userJSON = JSON.stringify(user) //static method converts a JavaScript value to a JSON string
console.log(userJSON)
localStorage.setItem('user', userJSON)

// to show a string
const userJSON = localStorage.getItem('user')
const user = JSON.parse(userJSON) //constructing the JavaScript value or object described by the string
console.log(`${user.name} is ${user.age}`)*/

renderNotes(notes, filters) // we call the function to see the the thing before the user interact with the page 


document.querySelector('#create-note').addEventListener('click', function (e){ // we add a button and we asg a function // (1.how we call"a click", 2. what we want to answer)
    const id = uuidv4()
    const timestamp = moment().valueOf()
    notes.push ({
        id: id,
        title: '',
        body: '',
        createdAt : timestamp,
        updatedAt: timestamp
    })    
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)//assignation a location to go
})

/* -- Single --
// p
// #replace
// .item

// -- Multiple -- (always we call the thing(p-h1-button-etc) before the id or class)
// p#order
// button.inventory
// h1#title.application
// h1.application#title*/

document.querySelector('#search-text').addEventListener('input', function(e){ //"change" we call when we touch in another places in the window // "input we call every single change"
   // console.log(e.target.value) // we call the element, and after that we go inside and see the target and we call the value that we write in the target
        filters.searchText = e.target.value
        renderNotes(notes, filters)
        // we call again when the user interact with the page and change the filter 
})

/* checkbox
document.querySelector('#for-fun').addEventListener('change', function (e){
    console.log(e.target.checked)
})*/

document.querySelector('#filter-by').addEventListener('change', function(e){
    console.log(e.target.value)
})

window.addEventListener('storage', function(e){
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})


