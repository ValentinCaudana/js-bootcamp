//"Named export" if i want to share code with the other page "index.js", we have to use "export" in front of the value,function,etc
//"Default export"


const add = (a, b) => a + b

const name = 'Caudana'

const square = (x) => x * x
console.log('from my code')
export {add, name, square as default } 