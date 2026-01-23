// to take code from the other page we have to use import in front of the value,console.log, function, etc 
//import './utilities'
import otherSquare, {add, name} from './utilities' // look for the add function in the other page and we bring it 
import otherScream from './scream'

console.log('index.js')
console.log(add(32, 4))
console.log(otherScream(name))
console.log(otherSquare(10))
