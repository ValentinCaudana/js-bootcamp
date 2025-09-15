// 1.
const getSavedTodos = () => {
    const todoJSON = localStorage.getItem('todos')

    if (todoJSON !== null){
        return  JSON.parse(todoJSON)
    } else {
        return []
    } 
}

// 2.
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos)) // we use that to change the object in a string
}

// Remove a todo
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id )
    if (todoIndex > -1){
        todos.splice(todoIndex, 1)
    }
}

// CheckedTodo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id )  
    if (todo !== undefined){
        todo.completed = !todo.completed
    }
}
/* my form  
const checkedTodo = function (completed) {
    const todoCheck = todos.findIndex(function (todo){
        return todo.completed === completed
    })
    if (todoCheck > -1){
        todos[todoCheck].completed = !todos[todoCheck].completed
    }
}*/

// 3. 
const renderTodos = (todos, filters) => { 
    const filteredTodos= todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompleted = !filters.hideCompleted || !todo.completed
        
        return searchTextMatch && hideCompleted 
    })


    const incompleteTodos = filteredTodos.filter ((todos) => !todos.completed ) // we create the .filter to see the thing that we need in the array-object



    document.querySelector('#todos').innerHTML = ''

    document.querySelector('#todos').appendChild(generateSummaryDom(incompleteTodos))
    
    filteredTodos.forEach ((todo) => { // first we call the function with .forEach to see all the array-object
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}


// 4.
const generateTodoDOM = (todo) =>{
    const todoEl = document.createElement('div') 
    const checkbox = document.createElement('input')
    const textEl = document.createElement('span')
    const button = document.createElement('button')

    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    todoEl.appendChild(checkbox)
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id)
        //checkedTodo(todo.completed)// my form
        saveTodos(todos)
        renderTodos(todos, filters)
    })


    textEl.textContent = todo.text
    todoEl.appendChild(textEl)

    button.textContent = 'x'
    todoEl.appendChild(button)
    button.addEventListener('click', () =>{
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoEl
    
}

//5. 
const generateSummaryDom = (incompleteTodos) => {
    const summary = document.createElement('h2') // we create the new value
    summary.textContent = `You have ${incompleteTodos.length} todos left.`
    return summary 
}