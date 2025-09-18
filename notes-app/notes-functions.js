// Read existing notes from localStorage 
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')

    try {
        return notesJSON? JSON.parse(notesJSON) : []
    }catch (e) {
        return []
    }

    
}

// Save the notes to localStorage
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes)) // we use that to save the object in a string
}

// Remove a note from the List
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id)
    if (noteIndex > -1) { // if the noteIndex is false ...
        notes.splice(noteIndex, 1)// argument noteIndex and we want to remove one item
    }
}

// Generate the DOM structure for a note 
const generateNotesDOM = (note) => {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')
        
    //Set up remove note button
    button.textContent = 'x'
    noteEl.appendChild(button)
    button.addEventListener('click', () => {
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
// Sort Notes by one of three ways
const sortNotes = (notes, sortBy) => {
    if ( sortBy === 'byEdited'){
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt){
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0 
            }
        })
    } else if (sortBy === 'byCreation') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt){
                return -1
            } else if (a.createdAt < b.createdAt){
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'alphabetically'){
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()){
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()){
                return 1
            } else {
                return 0
            }
        })
    }
    else {
        return notes
    }
}

// Render application notes 

const renderNotes = (notes, filters) => { // take all the notes and filters and calculate which one matches with the filters
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes= notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))// if the filter is "Nex" it was one of the titles above


    document.querySelector('#notes').innerHTML ='' //innerHTML in this remove the others because is not the same that the filter (note)

    filteredNotes.forEach((note) => { // we add the notes already filters, result in this case = My next trip
        const noteEl = generateNotesDOM(note)       
        document.querySelector('#notes').appendChild(noteEl)
    })
    
}

// Generate the last edited message
const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`
