class Atmaccount:
    def __init__(self, holder) -> None:
        self._balance = 0.0 #the underscore protects teh attribute (some would call private attribute)
        self.__holder = holder #the double underscore
    
account1 = Atmaccount('John Doe')
print(account1._balance) 
account2 = Atmaccount('Juliana S.')
print(account1._Atmaccount__holder)

if __name__ == '__main__': #runs only main class and underneath
    account1 = Atmaccount('John Doe')
    print(account1._balance) 
    account2 = Atmaccount('Juliana S.')
    print(account1._Atmaccount__holder)
