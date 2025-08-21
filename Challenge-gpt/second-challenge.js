let account = {
    name: `Valentin`,
    expenses: {
        description: ``,
        ammount: 0
    },
    income: {
        description: ``,
        ammount: 0
    },
    addExpense : function (amount) {
        account.expenses.ammount = this.expenses.ammount + amount
    },
    addIncome : function (amount){
        account.income.ammount = this.income.ammount + amount
    },
    getAccountSumary : function () {
        let balance = this.income.ammount - this.expenses.ammount
        return `Account for ${this.name} has a balance of $${balance}. $${this.income.ammount} in income. $${this.expenses.ammount} in expenses.`
    }
}


account.addIncome(100)
account.addExpense(10)
account.addExpense(30)
console.log(account.getAccountSumary(account))