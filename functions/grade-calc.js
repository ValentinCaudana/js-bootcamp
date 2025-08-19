// students score, total posible score
// 15/20 -> you got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let gradeCalc = function (score, totalScore){
    let percent = (score / totalScore) * 100 
    let letterGrade = ``

//    if (percent >= 90) {
//       return `You got a A (${percent}%)`
//    } else if (percent <= 89 && percent >= 80) {
//        return `You got a B (${percent}%)`
//    } else if (percent <= 79 && percent >= 70) {
//        return `You got a C (${percent}%)`
//    } else if (percent <= 69 && percent >= 60) {
//        return `You got a D (${percent}%)`
//    } else if (percent <=59) {
//        return `You got a F (${percent}%)`
//    }

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

let scoreText = gradeCalc(10, 20)

console.log(scoreText)