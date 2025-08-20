// Both logs print the same exact thing
let myAccount = {
 name: 'Andrew Mead',
 expenses: 0,
 income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}
// addIncome

let addIncome = function (account, income) {
    account.income = account.income + income 
}


// resetAccount
let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

// getAccountSumary
//Account for ... has $900. $1000 in income. $100 in expenses.

let getAccountSumary = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome(myAccount, 2000)
addExpense(myAccount, 300)
addExpense(myAccount, 2.5)
console.log(getAccountSumary(myAccount))
resetAccount(myAccount)
console.log(getAccountSumary(myAccount))


//addIncome
//add Expenses
//addExpenses
//getAccountSumary
//resetAccount
//getAccountSumary

