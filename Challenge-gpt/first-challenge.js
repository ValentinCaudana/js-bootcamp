 let students = {
    name: `Valentin`,
    age: `26`,
    grades: {
        math: 8,
        english: 2,
        programming: 10
    },
    calculateAverage: function () {
        let total = (this.grades.math + this.grades.english + this.grades.programming)
        return total / 3
    }
}
console.log(`Nombre: ${students.name}, Edad: ${students.age}.`)
console.log(`Notas: Math: ${students.grades.math}, English: ${students.grades.english}, Programming: ${students.grades.programming}`)

console.log("Promedio", students.calculateAverage())

let isApproved = function () {
    return  students.calculateAverage() >= 7  
    }

console.log(isApproved())