
const Person = function (firstName, lastName, age) {
    this.firstName = firstName // this to assign values to the object's properties based on the values passed to the function
    this.lastName = lastName
    this.age = age
}

const me = new Person('Valentin', 'Caudana', 26) // This statement creates me and assigns it the specified values for its properties
console.log(me)
