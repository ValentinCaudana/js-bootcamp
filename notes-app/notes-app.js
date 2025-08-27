// DOM - Document Object Model

// Query and remove
// const p = document.querySelector(`p´) // we creat the const and we call the value that we need
// p.remove() // p is the value that we call and .remove is for delete 

// Query all and remove
const ps = document.querySelectorAll('p')

ps.forEach(function (p){
    p.textContent = '¤¤¤¤¤¤' // we change for the value that we write
    // console.log(p.textContent) // we write in the console
    // p.remove() // we delete all the values that we call "p"
})