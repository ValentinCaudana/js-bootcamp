import moment from 'moment'
import { getFilters } from './filters'
import { sortNotes } from './notes'

// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
    const noteEl = document.createElement('a');
    const textEl = document.createElement('p');
    const statusEL = document.createElement('p')

    // Setup the note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title;
    } else {
        textEl.textContent = "Unnamed note";
    }
    textEl.classList.add('list-item__title')
    noteEl.appendChild(textEl);

    // Setup the link
    noteEl.setAttribute("href", `/edit.html#${note.id}`);
    noteEl.classList.add('list-item')

    // Setup the status message
    statusEL.textContent = generateLastEdited(note.updatedAt)
    statusEL.classList.add('list-item__subtitle')
    noteEl.appendChild(statusEL)
    
    return noteEl;
};

// Render application notes
const renderNotes = () => {
    const notesEl = document.querySelector("#notes"); 
    const filters = getFilters()
    const notes = sortNotes(filters.sortBy);
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()));

    notesEl.innerHTML = '';

    if(filteredNotes.length > 0) {
        filteredNotes.forEach((note) => {
          const noteEl = generateNoteDOM(note);
          notesEl.appendChild(noteEl)
        });
    }else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No note to show'
        emptyMessage.classList.add('empty-message')
        notesEl.appendChild(emptyMessage)
    }
};

// Generate the last edited message
const generateLastEdited = (timestamp) => {
    return `Last edited ${moment(timestamp).fromNow()}`;
};

export { generateNoteDOM, renderNotes, generateLastEdited }