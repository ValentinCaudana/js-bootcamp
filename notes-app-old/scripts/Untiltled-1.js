// Unix Epoch - January 1st 1970 00:00:00

/*// when we create a new note and save that 
const now = new Date()
const timestamp = now.getTime()

// we use that after we 
const myDate = new Date(timestamp)
console.log(myDate.getFullYear())
*/
/* Date string
const now = new Date()// with out arguments bring me the day actual, but I can set to bring some thing from another day just if I put an argument
console.log(now.toString())

console.log(`Year: ${now.getFullYear()}`)
console.log(`Month: ${now.getMonth()}`)
console.log(`Day of month: ${now.getDate()}`)
console.log(`Hour: ${now.getHours()}`)
console.log(`Minutes: ${now.getMinutes()}`)
console.log(`Seconds: ${now.getSeconds()}`)*/

const dateOne = new Date( 'April 30 1999 7:30:00')
const dateTwo = new Date( 'January 8 1998 7:00:00')
const dateOneTimestamp = dateOne.getTime()
const dateTwoTimestamp = dateTwo.getTime()

console.log(dateOneTimestamp)
console.log(dateTwoTimestamp)

if (dateOneTimestamp < dateTwoTimestamp){
    console.log(dateOne.toString())
} else {
    console.log(dateTwo.toString())
}
