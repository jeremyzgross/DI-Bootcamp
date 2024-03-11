#basics

class Parent:
    def speak(self):
        print('Parent speaking')


class Child(Parent): #parent class is being bassed as an argument and therefore inheriting
    def speak(self):
        print('Child is peaking loud')

class Grandchild(Child):
    pass


object = Parent()
object.speak() # Parent speaking
object2 = Child()
object2.speak() # 'Child is peaking loud' if you were do not have child class, it would refer back to parent class
object3 = Grandchild()
object3.speak() #with no method in the grandchild class, it will refer to the child class then the parent class

#practical examples


class Animal:
    def __init__(self, name, family, legs) -> None:
        self.name  = name
        self.family = family
        self.legs = legs
    
    def make_sound(self):
        print(f'{self.name} is making a sound')

class Dog(Animal): #passing the constructor of the parent class unless you __init__
    def __init__(self, name, family, legs, trained): #init is inherited but we are adding "trained"
        super().__init__(name, family, legs) #super tells what constructors to inherit
        # Animal.__init__(name, family, legs) # this is the same as super()
        self.trained = trained
    pass

class Poodle(Dog):
    def __init__(self, name, family, legs, trained, cutness):
        super().__init__(name, family, legs, trained)
        self.cuteness = cutness 

# animal1 = Animal('Toto', 'Canidae', 4)
# animal1.make_sound()

# dog1 = Dog('Rex', 'canidae', 4)
# dog1.make_sound()
        
cute_dog = Poodle('fluffy', 'Canidae') #if you dont add the inherited consturcter it will throw an error missing 3 arguments legs, trained, cutness 

