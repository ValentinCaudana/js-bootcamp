import { initializeEditPage, generateLastEdited } from './views'
import { updateNote, removeNote } from './notes'

const titleElement =  document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const dateElement = document.querySelector('#last-edited')
const noteId = location.hash.substring(1)// we use to look the value of id (1.(1) "where we start in the value", 2.() "where we finish") this bring all the value because we don't put the finish

initializeEditPage(noteId)


titleElement.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        title: e.target.value
    })
    dateElement.textContent = generateLastEdited(note.updatedAt)
})



bodyElement.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        body: e.target.value
    })
    dateElement.textContent = generateLastEdited(note.updatedAt)
    
})

removeElement.addEventListener('click', () => {
    removeNote(noteId) // remember that if i connect two page i can call the function and is not necessary make again 
    location.assign('/index.html')
})

window.addEventListener('storage', (e) => { // we set a receptor of global events to execute when we click in the page
    if (e.key === 'notes'){
        initializeEditPage(noteId);
    }  
})