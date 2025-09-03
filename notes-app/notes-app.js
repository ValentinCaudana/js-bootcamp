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
/* DOM - Document Object Model

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
*/

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) { // take all the notes and filters and calcule wich one matches with the filters
    const filteredNotes= notes.filter(function (note) { // if the filter is "Nex" it was one of the titles above
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML ='' //innerHTML in this remove the others because is not the same that the filter (note)
//    document.querySelector('#notes').innerHTML ='<p>TEST</p>' // in this case we add a new value (p) with a text

    filteredNotes.forEach(function (note){ // we add the notes already filters, result in this case = My next trip
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters) // we call the function to see the the thing before the user iterac with the page 


document.querySelector('#create-note').addEventListener('click', function (e){ // we add a button and we asig a function // (1.how we call"a click", 2. what we want to answer)
    //console.log('Did this work?')// answer
    //console.log(e)// we call the event (this is all the thing happen)
    e.target.textContent = 'The button was clicked' // we asig that when we click change the nambe of the button 
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
        // we call again when the user intereac with the page and change the filter 
})

/* checkbox
document.querySelector('#for-fun').addEventListener('change', function (e){
    console.log(e.target.checked)
})*/

document.querySelector('#filter-by').addEventListener('change', function(e){
    console.log(e.target.value)
})