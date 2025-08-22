const todos = [`walk the dog`, `ride a bike`, `run with friends`, `buy food`, `help my mother` ]

//Delete the 3rd item 
//Add a new item onto the end
//Remove the first item from the list

todos.splice(2 , 1)
todos.push(`New thing todo`)
todos.shift()

console.log(`You have ${todos.length} todos.`)
console.log(todos)