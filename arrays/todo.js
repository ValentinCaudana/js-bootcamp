const todos = [`walk the dog`, `ride a bike`, `run with friends`, `buy food`, `help my mother` ]



todos.splice(2 , 1)
todos.push(`New thing todo`)
todos.shift()

console.log(`You have ${todos.length} todos.`)

todos.forEach(function (todo, index) {
    const num = index + 1
    console.log(`${num}. ${todo}`)
})

//1. Order cat food
//2. Clean kitchen
//...

for (let count = 0; count < todos.length; count++ ) {
    const num = count + 1
    const todo = todos[count]
    console.log(`${num}. ${todo}`)
}