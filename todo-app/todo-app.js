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
const filters = {
    searchText: ''
}

const renderTodos = function (todos, filters) { 
    const filteredTodos= todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    const incompleteTodos = filteredTodos.filter (function (todos){ // we creat the .filter to see the thing that we need in the arrat-object
        return !todos.completed 
    })

    document.querySelector('#todos').innerHTML = ''

    const sumary = document.createElement('h2') // we create the new value
    sumary.textContent = `You have ${incompleteTodos.length} todos left.`
    document.querySelector('#todos').appendChild(sumary)
    
    filteredTodos.forEach (function (todo){ // first we call the function with .forEach for to see all the array-object
        const p = document.createElement('p') 
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#todo-form').addEventListener('submit', function (e){
    e.preventDefault() 
    todos.push({
        text: e.target.elements.insertTodo.value,
        completed: false
    })
/* my form
    const newTodoText = e.target.elements.insertTodo.value.trim()
    if (newTodoText.length > 0) {
        todos.push({
            text: newTodoText,
            completed: false
        })*/
        renderTodos(todos, filters)
        e.target.elements.insertTodo.value = ''
    
})