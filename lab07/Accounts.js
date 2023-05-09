class Accounts {
    constructor() {
        this.accountInfoList = [];
    }

    createAccount(accountName, balance) {
        this.accountInfoList.push({accountName, balance});
    }

    getAllAccounts() {
        return this.accountInfoList;
    }

    deposit(accountName, amount) {
        let account = this.accountInfoList.find((account) => account.accountName === accountName);
        account.balance += amount;
    }

    debit(accountName, amount) {
        let account = this.accountInfoList.find((account) => account.accountName === accountName);
        account.balance -= amount;
    }
}