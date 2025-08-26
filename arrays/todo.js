const todos = [{
    text: `Walk the dog`,
    completed: true
}, { 
    text:`Ride a bike`,
    completed: false
}, { 
    text:`Run with friends`,
    completed: false
}, { 
    text:`Buy food`,
    completed: true 
}, { 
    text:`Help my mother`,
    completed: false
 }]

const sortTodos = function(todos){
/*this form is basic    
    todos.sort(function (a, b){
        if (a.completed < b.completed) {
            return -1
        } else if (b.completed < b.completed){
            return 1
        } else {
            return 0
        }
    })*/
/*this form is with ! and && (comparation terms)   
        todos.sort(function (a, b){
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed){
            return 1
        } else {
            return 0
        }
    })*/
//short form   
        todos.sort((a, b) => a.completed - b.completed)
    }
    
 deleteTodo = function (todos, todoTex) { 
   const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoTex.toLowerCase()
    })

    if (index > -1) {
        todos.splice(index, 1)
    }
}

const getThingsTodo= function(todos){
    return todos.filter(function (todos){
        return todos.completed === false
        //return !todos.completed (is the same that above)
    })
}

sortTodos(todos)
console.log(todos)

//console.log(getThingsTodo(todos))

//deleteTodo(todos, `buy foaod`)
//console.log(todos)