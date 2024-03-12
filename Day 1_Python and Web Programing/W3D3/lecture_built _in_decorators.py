#built in decorators 

# @staticmethod 

class MyClass:

    @staticmethod #this code belongs to a class but doesnt use the object
    def add(a,b):
        return a+b

print(MyClass.add(3, 6))
#returns 9. cant call the function on an object


# @classmethod

class MyClass:
    counter = 0
    @classmethod #change the class itself not the method
    def add(cls, a):
        cls.counter += a
        return cls.counter
    
MyClass().add(5)
print(MyClass.counter)

#example
# class Circle:
#     def __init__(self, radius, diameter) -> None:
#         self.radius = radius
#         self.diameter = diameter
    
#     @classmethod #allows the function to work with the class not the object
#     def from_radius(cls, radius):
#         return cls(radius = radius, diameter = radius *2) #cls means you do not mean to but self.
#                     #Circle(5,5*2)

# circle_obj = Circle.form_radius(5)
# circle_obj.diameter


# @property decorator

class Atmacount:
    available_number = 500 #if you want to incrament a variable in a class add before init
    def __init__(self, holder) -> None:
        self._balance = 0.0 
        self.__holder = holder 
        self.__account_number = Atmacount.available_number #
        Atmacount.available_number +=1 #incramenting the acount number
    
    @property #helps to access private attributes from the class
    def balance(self):
        return self._balance
     @property #without this it would grab the memory and not the self encapsulation
    def get_holder(self):
        return self.__holder

    def deposit(self, amount):
        self._balance += amount 
    
if __name__ == '__main__': #runs only main class and underneath
    account1 = Atmacount('John Doe')
    account1.deposit(200)
    print(account1.balance)
    print(account1.get_holder)

