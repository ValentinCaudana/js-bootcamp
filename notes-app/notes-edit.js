const titleElement =  document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const dateElement = document.querySelector('#last-edited')
const noteId = location.hash.substring(1)// we use to look the value of id (1.(1) "where we start in the value", 2.() "where we finish") this bring all the value because we don't put the finish
let notes = getSavedNotes()
let note = notes.find((note) => note.id === noteId )

if (note === undefined) {
    location.assign('/index.html')
}

titleElement.value = note.title
bodyElement.value = note.body
dateElement.textContent = generateLastEdited(note.updatedAt)

titleElement.addEventListener('input', (e) => {
    note.title = e.target.value 
    note.updatedAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})



bodyElement.addEventListener('input', (e) => {
    note.body = e.target.value 
    note.updatedAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

removeElement.addEventListener('click', () => {
    removeNote(note.id) // remember that if i connect two page i can call the function and is not necessary make again 
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', (e) => { // we set a receptor of global events to execute when we click in the page
    if (e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        note = notes.find((note) => note.id === noteId )

    if (note === undefined) {
        location.assign('/index.html')
    }

    titleElement.value = note.title
    bodyElement.value = note.body
    dateElement.textContent = generateLastEdited(note.updatedAt)

    }  
})