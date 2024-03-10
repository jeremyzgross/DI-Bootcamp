#bark is the focus

class Dog:
    def __init__(self, name, color, age = 0): # defualt age: # constructors of the class. So a 'dog' of the dog class. #self is the object of the class. Everything after is the attributes of the object
        self.name = name #name attribute
        self.color = color 
        self.age = age 
    def bark(self):
        print(f' {self.name} goes GUHHHHH!')
    def walk(self, meters):
        print(f'{self.name} walked  {meters} meters')
    def rename(self, new_name):
        print(f'{self.name} has been renamed to {new_name}')
        self.name = new_name

#calling methods in the object
pitbull = Dog('Aaron', 'orange')
pitbull.bark()
# Aaron goes GUHHHHH!
#calling a different method        
pitbull.walk(300)
#aaron walked 300 meters 

pitbull.rename('Guy')



class BankAccount:

    def __init__(self, account_number, balance=0):
        self.account_number = account_number
        self.balance = balance
        self.transactions = []

    def view_balance(self):
        self.transactions.append("View Balance")
        print(f"Balance for account {self.account_number}: {self.balance}")

    def deposit(self, amount):
        if amount <= 0:
            print("Invalid amount")
        elif amount < 100:
            print("Minimum deposit is 100")
        else:
            self.balance += amount
            self.transactions.append(f"Deposit: {amount}")
            print("Deposit Succcessful")

    def withdraw(self, amount):
        if amount > self.balance:
            print("Insufficient Funds")
        else:
            self.balance -= amount
            self.transactions.append(f"Withdraw: {amount}")
            print("Withdraw Approved")
            return amount

    def view_transactions(self):
        print("Transactions:")
        print("-------------")
        for transaction in self.transactions:
            print(transaction)

my_account = BankAccount(123456)

my_account.deposit(500)

my_account.view_balance()