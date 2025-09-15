const square = (num) => num * num // arrows syntax

const squareLong = (num) => { // no more
    return num * num
}

console.log(square(5))

const people = [{
    name: 'Valentin',
    age: 26
}, {
    name: 'Jame',
    age: 31
}, {
    name: 'Jess',
    age: 22
}]

/* Long way
const under30 = people.filter(function (person){
    return person.age < 30
})*/
const under30 = people.filter((person) => person.age < 30) 
console.log(under30)

const age22 = people.find((person) => person.age === 22)
console.log(age22.name)