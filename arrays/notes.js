const notes = [`Note 1`, `Note 2`, `Note 3`]

//console.log(notes) // bring all the note
//console.log(notes.length) // number of how many items we have
//console.log(notes[0]) // bring an especific item (0,1,2)
//console.log(notes[notes.length - 2]) // bring the las items

//console.log(notes.pop())//we delete the last item, and also we call that item with console.log
//notes.push(`My new note`) // we add an item in the end

//console.log(notes.shift())// we delete the first item, and also we call that item with console.log 
//notes.unshift(`My first note`)// we add an item in the front

//notes.splice(1, 1, `This is the new second item`)
//("first we say where we start", "we say what item we want to delete", "we add an item") we can delete an item and also add an item or one off thems

notes[2] = `This is now the new note 3` //we replace de item that we call

console.log(notes.length)
console.log(notes)