// product --> Object.property --> null
const product = new Object({
    name : 'The War of Art'
})
Object.prototype.someNewMethod = () => 'This is the new function'

// hasOwnProperty is a method that return true or false depend if it find the property with the object that we call return true if the property doesn't exist return false 
console.log(product.someNewMethod())
console.log(product)