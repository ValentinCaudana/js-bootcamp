// DOM - Document Object Model
const todos = [{
    text: `Walk the dog`,
    completed: true
}, { 
    text:`Ride a bike`,
    completed: false
}, { 
    text:`Run with friends`,
    completed: true
}, { 
    text:`Buy food`,
    completed: true 
}, { 
    text:`Help my mother`,
    completed: false
 }]

/*
const ps = document.querySelectorAll('p') //we select what value we want to finde "p"

ps.forEach(function(p){
   if (p.textContent.includes('the')){ // this is the condition 
        p.remove() // if the condition is true we remove the p that include 'the'
   }
})*/
// You have 2 todos left (p element)
// Add a p for each todo above (use text value)

const incompleteTodos = todos.filter (function (todos){
   return !todos.completed 
})

const sumary = document.createElement('h2') // we create the new value
sumary.textContent = `You have ${incompleteTodos.length} todos left.`
document.querySelector('body').appendChild(sumary)


todos.forEach (function (todo){
   const p = document.createElement('p')
   p.textContent = todo.text
   document.querySelector('body').appendChild(p)
})

