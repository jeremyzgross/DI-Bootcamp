#the syntax

class Dog:
    def __init__(self, name, color, age = 0): # defualt age: # constructors of the class. So a 'dog' of the dog class. #self is the object of the class. Everything after is the attributes of the object
        self.name = name #name attribute
        self.color = color 
        self.age = age 
        


# creating objects (instances)
    
shelter_dog = Dog('rex', 'brown' )

print(shelter_dog)
#this will print the memory location you have to do below

print(shelter_dog.name)
# prints rex


