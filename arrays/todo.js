const todos = [{
    text: `Walk the dog`,
    completed: true
}, { 
    text:`Ride a bike`,
    completed: false
}, { 
    text:`Run with friends`,
    cmpleted: false
}, { 
    text:`Buy food`,
    completed: true 
}, { 
    text:`Help my mother`,
    completed: false
 }]

// 1. Convert array to array of objects -> tex, completed
// 2. Create function to remove a todo by text value

/*const deleteTodo = function (todos, todoTex) { 
   const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoTex.toLowerCase()
    })

    if (index > -1) {
        todos.splice(index, 1)
    }
}*/

const getThingsTodo= function(todos){
    return todos.filter(function (todos){
        return todos.completed === false
        //return !todos.completed (is the same that above)
    })
}


console.log(getThingsTodo(todos))

//deleteTodo(todos, `buy foaod`)
//console.log(todos)