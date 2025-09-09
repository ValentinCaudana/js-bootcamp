// Read existing notes from localStorage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// Save the notes to localStorage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes)) // we use that to save the object in a string
}

// Remove a note from the List
const removeNote = function (id) {
    const noteIndex = notes.findIndex (function (note) {
        return note.id === id // return true if noteIndex is iqual than id in the function 
    })
    if (noteIndex > -1) { // if the noteIndex is false ...
        notes.splice(noteIndex, 1)// argunment noteIndex and we want to remove one item
    }
}

// Generate the DOM structure for a note 
const generateNotesDOM = function (note) {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')
        
    //Set up remove note button
    button.textContent = 'x'
    noteEl.appendChild(button)
    button.addEventListener('click', function () {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    // Set the note title text
    if(note.title.length > 0){
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed note'
    }

    textEl.setAttribute('href', `/edit.html#${note.id}`)
    noteEl.appendChild(textEl)
    

    return noteEl
}

// Render aplication notes 

const renderNotes = function (notes, filters) { // take all the notes and filters and calcule wich one matches with the filters
    const filteredNotes= notes.filter(function (note) { // if the filter is "Nex" it was one of the titles above
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML ='' //innerHTML in this remove the others because is not the same that the filter (note)

    filteredNotes.forEach(function (note){ // we add the notes already filters, result in this case = My next trip
        const noteEl = generateNotesDOM(note)       
        document.querySelector('#notes').appendChild(noteEl)
    })
}