'use strict'

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

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    const text = e.target.elements.text.value.trim()
    e.preventDefault();

    if (text.length > 0){
        todos.push({
            id: uuidv4(),
            text,
            completed: false,
        });
        saveTodos(todos);
        renderTodos(todos, filters);
        e.target.elements.text.value = '';
    }    
})


document.querySelector('#check-todos').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters) 
})

