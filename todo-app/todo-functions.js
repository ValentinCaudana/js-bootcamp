// 1.
const getSavedTodos = function () {
    const todoJSON = localStorage.getItem('todos')

    if (todoJSON !== null){
        return  JSON.parse(todoJSON)
    } else {
        return []
    } 
}

// 2.
const saveTodos = function (todos){
    localStorage.setItem('todos', JSON.stringify(todos)) // we use that to change the object in a string
}


// 3. 
const renderTodos = function (todos, filters) { 
    const filteredTodos= todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompleted = !filters.hideCompleted || !todo.completed
        
        return searchTextMatch && hideCompleted 
    })


    const incompleteTodos = filteredTodos.filter (function (todos){ // we creat the .filter to see the thing that we need in the array-object
        return !todos.completed 
    })


    document.querySelector('#todos').innerHTML = ''

    document.querySelector('#todos').appendChild(generateSumaryDom(incompleteTodos))
    
    filteredTodos.forEach (function (todo){ // first we call the function with .forEach to see all the array-object
    
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}


// 4.
const generateTodoDOM = function (todo){
    const todoEl = document.createElement('div') 
    const checkbox = document.createElement('input')
    const textEl = document.createElement('span')
    const button = document.createElement('button')

    checkbox.setAttribute('type', 'checkbox')
    todoEl.appendChild(checkbox)

    textEl.textContent = todo.text
    todoEl.appendChild(textEl)

    button.textContent = 'x'
    todoEl.appendChild(button)

    return todoEl
    
}

//5. 
const generateSumaryDom = function (incompleteTodos) {
    const sumary = document.createElement('h2') // we create the new value
    sumary.textContent = `You have ${incompleteTodos.length} todos left.`
    return sumary 
}