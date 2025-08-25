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

//notes[2] = `This is now the new note 3` //we replace de item that we call

/*.forEach our callback function gets called one time for each in the array.
The callback function gets called with the individual array item and the index for that item

notes.forEach(function (item, index){
    console.log(index)// bring the number in the index (this case=0)
    console.log(item)// bring the item exaqli the same that in the array
})*/
/*
console.log(notes.length)
console.log(notes)
*/
// Counting ... 1
// for (1.initializer; 2.the condition; 3.final expression) 
//1. lest you setup the starting poing  
//2. is what determines if the for statement shoul loop again(if is true the loop run) - 
//3. runs after an iteration of the loop.(increment our counter so we can move on the next item)
/*
for (let count = 0; count <= 2; count++) {
    console.log(count)
}

for (let count = notes.length - 1; count >= 0; count--) {
 console.log(notes[count])
}*/

/*//console.log(notes.indexOf({}))// bring the position of the item that we call (1)
const index = notes.findIndex(function (note, index){// allow us to provide our own definition of what makes two things equal 
    return note.title === `Habbits to work on`// vulue title return true from the callback function when you've found the match
})
console.log(index)*/
// The fin provide a callback function that returns true for a match and false otherwise. the diference with findIndex is that return the index while find returns the item itself
const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    }) }

/*const findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return notes(index) 
}*/

const findNotes= function (notes, query){
    return notes.filter(function (note, index){
        const isTitleMach = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMach || isBodyMatch
    })
}

console.log(findNotes(notes, `office`))

const note = findNote(notes, `as office modification`)
console.log(note)