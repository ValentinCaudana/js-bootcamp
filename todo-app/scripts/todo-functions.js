'use strict'

// 1.
const getSavedTodos = () => {
    const todoJSON = localStorage.getItem('todos')

    try {
        return todoJSON ? JSON.parse(todoJSON) : []
    } catch (e) {
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
    if (todo){
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
    const todoEl = document.querySelector("#todos");
    const filteredTodos= todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompleted = !filters.hideCompleted || !todo.completed
        
        return searchTextMatch && hideCompleted 
    })

    const incompleteTodos = filteredTodos.filter ((todos) => !todos.completed ) // we create the .filter to see the thing that we need in the array-object

    todoEl.innerHTML = "";
    todoEl.appendChild(generateSummaryDom(incompleteTodos));
    
    if (filteredTodos.length > 0) {
        filteredTodos.forEach((todo) => {
          todoEl.appendChild(generateTodoDOM(todo));
        });
    }else {
        const messageEl = document.createElement('p')
        messageEl.classList.add('empty-message')
        messageEl.textContent = 'No to-dos to show'
        todoEl.appendChild(messageEl);
    }
    
    
}


// 4.
const generateTodoDOM = (todo) =>{
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    containerEl.appendChild(checkbox)
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id)
        //checkedTodo(todo.completed)// my form
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    // Setup the todo text
    todoText.textContent = todo.text
    containerEl.appendChild(todoText)

     // Setup container
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    // Setup the remove button
    removeButton.textContent = 'remove'
    removeButton.classList.add('button', 'button--text')
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () =>{
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

   

    return todoEl
    
}

//5. 
const generateSummaryDom = (incompleteTodos) => {
    const summary = document.createElement('h2') // we create the new value
    summary.classList.add('list-title')
    const plural = incompleteTodos.length === 1 ? '' : 's' // his result
    // if (incompleteTodos.length > 1) {
    //     summary.textContent = `You have ${incompleteTodos.length} todos left.`;
    // }else {
    //     summary.textContent = `You have ${incompleteTodos.length} todo left.`;
    // }
   summary.textContent = `You have ${incompleteTodos.length} todo${plural} left.`;
    return summary 
}