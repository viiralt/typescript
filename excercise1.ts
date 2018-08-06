let bankAccount: BankAccount = {
  money: 2000,
  deposit(value: number) {
    this.money += value;
  }
};

type BankAccount = {
  money: number;
  deposit: (value: number) => void; // doesn't return!
};

let myself: Myself = {
  name: 'Max',
  bankAccount: bankAccount,
  hobbies: ['Sports', 'Cooking']
};

type Myself = {
  name: string;
  bankAccount: BankAccount;
  hobbies: string[];
};

myself.bankAccount.deposit(3000);

myself; //?
