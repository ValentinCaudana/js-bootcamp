// Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

//Default arguments
let getScoreText = function (name = 'Anonymous', score =0) {
    return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

//Challenge area
//total, tipPercent .2

let getTip = function (total, tipPercent = .2) {
    return 'TotalBill: ' + total + ' - TotalTip: ' +  total * tipPercent
}

let pepitosBill = getTip(100)
let totinBill = getTip(9000)
console.log(pepitosBill)
console.log(totinBill)