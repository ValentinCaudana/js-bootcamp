// DOM - Document Object Model

const ps = document.querySelectorAll('p') //we select what value we want to finde "p"

ps.forEach(function(p){
   if (p.textContent.includes('the')){ // this is the condition 
        p.remove() // if the condition is true we remove the p that include 'the'
   }
})
