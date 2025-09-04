// 1. Delete dummy data
// 2. read and parse the data when the app starts up
// 3. Stringify and write the data when new data is added 


let todos = []

/*
const ps = document.querySelectorAll('p') //we select what value we want to finde "p"

ps.forEach(function(p){
   if (p.textContent.includes('the')){ // this is the condition 
        p.remove() // if the condition is true we remove the p that include 'the'
   }
})*/
const filters = {
    searchText: '',
    hideCompleted: false
}
const todoJSON = localStorage.getItem('todos')

if (todoJSON !== null){
    todos = JSON.parse(todoJSON)
}


const renderTodos = function (todos, filters) { 
    let filteredTodos= todos.filter(function (todo) {
        // theerd solution 
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompleted = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompleted 
    })
//seconde solution 
    //filteredTodos = filteredTodos.filter(function (todo) {
      // return !filters.hideCompleted || !todo.completed
/* first solution 
        if(filters.hideCompleted){
            return !todo.completed
        }else {
            return true
        }*/
    //})

    const incompleteTodos = filteredTodos.filter (function (todos){ // we creat the .filter to see the thing that we need in the array-object
        return !todos.completed 
    })

    document.querySelector('#todos').innerHTML = ''

    const sumary = document.createElement('h2') // we create the new value
    sumary.textContent = `You have ${incompleteTodos.length} todos left.`
    document.querySelector('#todos').appendChild(sumary)
    
    filteredTodos.forEach (function (todo){ // first we call the function with .forEach to see all the array-object
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
        localStorage.setItem('todos', JSON.stringify(todos)) // we use that to change the object in a string
        renderTodos(todos, filters)
        e.target.elements.insertTodo.value = ''
    
})
// 1. Create a checkbox and set up event listener -> "Hide completed"
// 2- Create new hideCompleted filter (default false)
// 3. Update hideCompleted an rerender list on checkbox change
// 4. Set up renderTodos to remove completed items
document.querySelector('#check-todos').addEventListener('change', function (e){
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters) 
})

