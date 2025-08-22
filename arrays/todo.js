const todos = [`walk the dog`, `ride a bike`, `run with friends`, `buy food`, `help my mother` ]



todos.splice(2 , 1)
todos.push(`New thing todo`)
todos.shift()

console.log(`You have ${todos.length} todos.`)

todos.forEach(function (item, index) {
    const num = index + 1
    console.log(`${num}. ${item}`)
})
