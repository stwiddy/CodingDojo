class BankAccount:
    number_of_accounts = 0
    # don't forget to add some default values for these parameters!
    def __init__(self, int_rate=0.01, balance=100):
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.add_bank_account()

    @classmethod
    def print_all_instances(cls):
        return cls.number_of_accounts

    @classmethod
    def add_bank_account(cls):
        cls.number_of_accounts += 1


    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        self.balance -= amount
        if self.balance < 0:
            print("Insufficient Funds charging 5$")
            self.balance = self.balance - 5
        return self


    def display_account_info(self):
        print(self.balance)
        return self


    def yield_interest(self):
        if self.balance < 0:
            print("Error, $0 balance")
            return self
        self.balance += self.balance * self.int_rate
        return self


####### CREATING FIRST USER #####################################################
user_1 = BankAccount(0.01, 16000)
user_1.deposit(820).deposit(100).deposit(20).withdraw(160).yield_interest().display_account_info()

####### CREATING SECOND USER #####################################################
user_2 = BankAccount(0.01, 40)
user_2.deposit(120).deposit(140).withdraw(50).withdraw(50).withdraw(2).withdraw(20).yield_interest().display_account_info()


print(BankAccount.print_all_instances())