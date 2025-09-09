const titleElement =  document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const noteId = location.hash.substring(1)// we use to look the value of id (1.(1) "where we start in the value", 2.() "where we finish") this bring all the value because we dont put the finish
const notes = getSavedNotes()
const note = notes.find(function (note) {
    return note.id === noteId
})

if (note === undefined) {
    location.assign('/index.html')
}

titleElement.value = note.title
bodyElement.value = note.body

titleElement.addEventListener('input', function (e){
    note.title = e.target.value 
    saveNotes(notes)
})

bodyElement.addEventListener('input', function (e){
    note.body = e.target.value 
    saveNotes(notes)
})

removeElement.addEventListener('click', function (){
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})