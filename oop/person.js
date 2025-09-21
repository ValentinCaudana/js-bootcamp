
const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName // this to assign values to the object's properties based on the values passed to the function
    this.lastName = lastName
    this.age = age
    this.likes = likes
}
Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}.`
    
    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
    })
    
    return bio
}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}


const me = new Person('Valentin', 'Caudana', 26, ['Learning', 'Cooking']) // This statement creates me and assigns it the specified values for its properties

me.getBio = function () {
    return 'It is fake!'
}


const person2 = new Person('Clancey', 'Turner', 51)
console.log(person2.getBio()) 
