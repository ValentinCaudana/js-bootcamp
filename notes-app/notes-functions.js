// Read existing notes from localStorage
const getSavedNotes = function () {
    const noteJSON = localStorage.getItem('notes')

    if (noteJSON !== null){
        return JSON.parse(noteJSON)
    } else {
        return []
    }
}

// Save the notes to localStorage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes)) // we use that to save the object in a string
}

// Generate the DOM structure for a note 
const generateNotesDOM = function (note) {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('span')
    const button = document.createElement('button')
        
    //Set up remove note button
    button.textContent = 'x'
    noteEl.appendChild(button)

    // Set the note title text
    if(note.title.lenght > 0){
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed note'
    }
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