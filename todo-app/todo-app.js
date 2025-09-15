// 1. Delete dummy data
// 2. read and parse the data when the app starts up
// 3. Stringify and write the data when new data is added 



const todos = getSavedTodos()

/*
const ps = document.querySelectorAll('p') //we select what value we want to find "p"

ps.forEach(function(p){
   if (p.textContent.includes('the')){ // this is the condition 
        p.remove() // if the condition is true we remove the p that include 'the'
   }
})*/
const filters = {
    searchText: '',
    hideCompleted: false
}


renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#todo-form').addEventListener('submit', (e) => {
    e.preventDefault() 
    todos.push({
        id: uuidv4(),
        text: e.target.elements.insertTodo.value,
        completed: false
    })
        saveTodos(todos)
        renderTodos(todos, filters)
        e.target.elements.insertTodo.value = ''  
})


document.querySelector('#check-todos').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters) 
})

