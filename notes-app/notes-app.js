'use strict'


let notes = getSavedNotes()


const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters) // we call the function to see the the thing before the user interact with the page 

document.querySelector('#create-note').addEventListener('click', (e) => { // we add a button and we asg a function // (1.how we call"a click", 2. what we want to answer)
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


document.querySelector('#search-text').addEventListener('input', (e) =>{ //"change" we call when we touch in another places in the window // "input we call every single change"
        filters.searchText = e.target.value
        renderNotes(notes, filters)

})


document.querySelector('#filter-by').addEventListener('change', (e) =>{
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})


