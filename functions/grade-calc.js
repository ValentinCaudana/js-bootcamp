// students score, total posible score
// 15/20 -> you got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const gradeCalc = function (score, totalScore){ //se mantiene a lo largo del script
    if (typeof score !== 'number' || typeof totalScore !== 'number') { // "typeof" is used to check the type of a value *
            throw Error('Please provide an number only')
    }
        const percent = (score / totalScore) * 100  //siempre se aplica de la misma forma a lo largo del script
        let letterGrade = ``// aqui no podemos poner const porque en cada if le asignamos que cambie

        if (percent >= 90){
            letterGrade = `A`
        } else if (percent >= 80){
            letterGrade = `B`
        } else if (percent >= 70){
            letterGrade = `C`
        } else if (percent >= 60){
            letterGrade = `D`
        } else {
            letterGrade = `F`
        } 
    
        return `You got ${letterGrade} (${percent}%)`
    

}

try {
    const  scoreText = gradeCalc(10, true) // * in this case the typeof detect an error because the total Score is not a number
    console.log(scoreText)
}catch (e) {
    console.log(e.message) // whit this we call the message inside the Error('')
}