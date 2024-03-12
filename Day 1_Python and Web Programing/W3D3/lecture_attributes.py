class Atmacount:
    available_number = 500 #if you want to incrament a variable in a class add before init
    def __init__(self, holder) -> None:
        self._balance = 0.0 
        self.__holder = holder 
        self.__account_number = Atmacount.available_number #
        Atmacount.available_number +=1 #incramenting the acount number
    
if __name__ == '__main__': #runs only main class and underneath
    account1 = Atmacount('John Doe')
    account2 = Atmacount('Sara Smith')
    print(account1._Atmacount__account_number)
    print(account2._Atmacount__account_number)


#Exercise
    
class Circle:
    color = "red"

    def __init__(self, diameter):
        self.diameter = diameter

    def grow(self, factor=2):
        self.diameter = self.diameter * factor

    def get_color(self):
       return Circle.color

circle1 = Circle(2)
print(circle1.color)
print(Circle.color)
print(circle1.get_color())
circle1.grow(3)
print(circle1.diameter)