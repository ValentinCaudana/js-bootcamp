let myBook = {
 title: '1984',
 author: 'George Orwell',
 pageCount: 326
}
// Reading a property value with dot notation
console.log(`${myBook.title} by ${myBook.author}`)
// Chaing an object property value using dot notation
myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

//Challenge area
// name, age, location
// result= Valentin is 27 and live in Copenhaguen
// Increse age by 1 and print the message again 

let person = {
    name: `Valentin`,
    age: 26,
    location: `Copenhaguen`

}

console.log(`${person.name} is ${person.age} and live in ${person.location}.`)

person.age = person.age + 1

console.log(`${person.name} is ${person.age} and live in ${person.location}.`)