let myBook = {
 title: '1984',
 author: 'George Orwell',
 pageCount: 326
}

let otherBook = {
 title: 'A Peoples History',
 author: 'Howard Zinn',
 pageCount: 723
}

let getSummary = function (book) {
 return {
    summary: `${book.title} by ${book.author}`,
    pageCountSumary: `${book.title} is ${book.pageCount} pages long`
 }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSumary)

//Challenge Area
//Create Function - take fahrenheit in - return object with all three

// my result
let temp1 = {
    fahrenheit: 50 
}
let temp2 = {
    fahrenheit:28
}

let tempCalculate = function (temps) {
    let celsius = (temps.fahrenheit - 32) * 5/9
    let Kelvin = (temps.fahrenheit + 459.67) * 5/9
    return {
        celciusCalculate: `${temps.fahrenheit}F is ${celsius}C `,
        KelvinCalculate: `${temps.fahrenheit}F is ${Kelvin}K` 
    }
}

let tempResult1 = tempCalculate(temp1)
let tempResult2 = tempCalculate(temp2)

console.log(tempResult1.celciusCalculate)
console.log(tempResult2.KelvinCalculate)

// teacher result
let convertFahrenheiit = function (fahrenheit) {
    return{
        fahrenheit: fahrenheit,
        Kelvin: (fahrenheit - 459.67) * (5/9),
        celsius: (fahrenheit - 32) * (5/9)
    }
}

let temps = convertFahrenheiit(74)
console.log(temps)