let isAccountLocked = false
let userRole = 'user'

if (isAccountLocked) {
 console.log('I account locked')
} else if (userRole === 'admin') {
 console.log('Welcome Admin')
} else {
 console.log('Welcome!')
}

// Challenge area 

let temp = 70

//It is freezing outside
//It is hot outside 
//Gor for it. It is pretty nice
if (temp <= 45) {
 console.log('Is freezing outside')
} else if (temp >= 100) {
    console.log('Is hot outside ')
} else {
    console.log('Is pretty nice outside')
}